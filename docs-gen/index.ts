import { Extractor, ExtractorConfig, ExtractorMessage, ExtractorMessageCategory } from "@microsoft/api-extractor";
import { ApiDocumentedItem, ApiEntryPoint, ApiFunction, ApiInterface, ApiItem, ApiModel, ApiPackage, ApiPropertySignature, Excerpt, ExcerptToken } from "@microsoft/api-extractor-model";
import { DocBlock, DocCodeSpan, DocComment, DocFencedCode, DocLinkTag, DocNode, DocParagraph, DocPlainText, DocSection, DocSoftBreak } from "@microsoft/tsdoc";
import { RecursiveMap } from "map-and-set-extensions";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';
import { generateReadme } from "./readme-gen.js";

let oldts = Array.prototype.toString;
let oldca = console.assert;
Array.prototype.toString = function (this) { debugger; return this.join(",")  }
/*console.assert = function(this, condition, ...rest) {
    if (!condition) {
        debugger;
        console.error(...rest);
    }
//    return oldca.bind(this)(...rest);
 }*/

const KnownTypes = {
    DocSection: new Set(["Paragraph", "FencedCode"]),
    DocBlock: new Set(["Paragraph"]),
    DocParagraph: new Set(["PlainText", "SoftBreak", "CodeSpan", "LinkTag"])
}
const KnownInterfaceOmits = new Set(["OmitStrong", "Omit", "Pick"]);



const __dirname = dirname(fileURLToPath(import.meta.url));


const RelativePathToApiExtractorJson = "../api-extractor.json";


const extractorConfigPath = join(__dirname, RelativePathToApiExtractorJson);
const extractorConfig: ExtractorConfig = ExtractorConfig.loadFileAndPrepare(extractorConfigPath);

type KnownExtractorErrors = 'ae-cyclic-inherit-doc' | 'ae-different-release-tags' | 'ae-extra-release-tag' | 'ae-forgotten-export' | 'ae-incompatible-release-tags' | 'ae-internal-missing-underscore' | 'ae-internal-mixed-release-tag' | 'ae-misplaced-package-tag' | 'ae-missing-getter' | 'ae-missing-release-tag' | 'ae-preapproved-bad-release-tag' | 'ae-preapproved-unsupported-type' | 'ae-setter-with-docs' | 'ae-unresolved-inheritdoc-base' | 'ae-unresolved-inheritdoc-reference' | 'ae-unresolved-link' | 'ae-wrong-input-file-type';

let messagesByCategory: Map<ExtractorMessageCategory, Map<KnownExtractorErrors, Set<ExtractorMessage>>> = new Map();
Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true,
    showDiagnostics: true,
    messageCallback: (message) => {
        if (message.category !== ExtractorMessageCategory.Console) {
            message.handled = true;
            RecursiveMap.modify(messagesByCategory, message.category, message.messageId as KnownExtractorErrors, (prev) => (prev ?? new Set()).add(message));
            return;
        }
        else {
            if (message.messageId == 'console-diagnostics') {
                message.handled = true;
            }
        }
    }
});

messagesByCategory.forEach((messageByErrorCode, category) => {
    console.groupCollapsed(category);

    messageByErrorCode.forEach((messages, errorCode) => {

        console.groupCollapsed(errorCode);
        let printedFirst = false;
        messages.forEach(message => {
            if (!printedFirst) {
                console.log(message.text);
                printedFirst = true;
            }
            console.log(`${join(message.sourceFilePath || "")}:${message.sourceFileLine}:${message.sourceFileColumn}`);
        });
        console.groupEnd();
    })

    console.groupEnd();
});


const apiModel: ApiModel = new ApiModel();
const apiPackage: ApiPackage = apiModel.loadPackage(extractorConfig.apiJsonFilePath);


// Generate README.md
// Start by finding @packageDocumentation, which links to everything else
const entryPoint = apiPackage.members[0] as ApiEntryPoint;
console.assert(entryPoint.kind === "EntryPoint");

if (!apiPackage.tsdocComment?.modifierTagSet.isPackageDocumentation()) {
    console.error(`Missing @packageDocumentation tag`)
}

let packageDocumentation = apiPackage.tsdocComment!;
let ret = generateReadme(packageDocumentation, { api: apiPackage, model: apiModel });
debugger;
let baseMarkdown = `${toMarkdown(packageDocumentation, MDContextDefault())}`;
debugger;

interface MDContext {
    apiItem: ApiItem;
    includeLookingForLink: boolean;
    listIndentLevel: number;

    recursionBailoutStack: Set<ApiItem>;
}

interface MiniParam { displayName: string, summary: string, hook: string }

/**
 * When an interface is used as the single parameter to a function
 */
function decomposeSingleParam(i: ApiInterface, context: MDContext): MiniParam[] {
    if (context.recursionBailoutStack.has(i))
        return [];

    context.recursionBailoutStack.add(i);

    console.assert(i.kind == "Interface");
    // These are the members of the interface, which themselves are mostly interfaces/types.
    // But some are, e.g. `props`, `propsStable`, etc.
    const members = i.members;

    let ret: MiniParam[] = [];

    function addCanonicalReferences(excerpt: Excerpt | undefined | null) {
        if (!excerpt)
            return;

        const refs = extractReferences(excerpt);
        for (let ref of refs) {
            const canonicalReference = ref?.canonicalReference;

            if (canonicalReference) {
                const memberType = apiModel.resolveDeclarationReference(canonicalReference, context.apiItem);
                if (memberType.resolvedApiItem) {
                    console.log(memberType.resolvedApiItem);
                    ret.push(...decomposeSingleParam(memberType.resolvedApiItem as ApiInterface, context))
                    //ret.push({ displayName: member.displayName, hook: m })
                }
                else {
                    debugger;
                    console.error(memberType.errorMessage);
                }
            }
            else {
                debugger;
                console.error(`Unresolved reference`);
            }
        }
    }

    i.extendsTypes.map(extendsType => {
        addCanonicalReferences(extendsType.excerpt);
    });

    for (let member of members) {
        if (member.displayName.endsWith("Parameters") || member.displayName.endsWith("Return")) {
            switch (member.kind) {
                case "PropertySignature": {
                    addCanonicalReferences((member as ApiPropertySignature).propertyTypeExcerpt);
                    break;
                }

                default:
                    debugger; break;
            }
            //ret.push(...member.members.map((submember): MiniParam => ({ displayName: submember.displayName, summary: toMarkdown((submember as ApiInterface).tsdocComment?.summarySection, context), hook: member.displayName })))
        }
        else {
            ret.push({ displayName: member.displayName, hook: i.displayName, summary: toMarkdown((member as ApiDocumentedItem).tsdocComment?.summarySection, context) })
        }
    }

    context.recursionBailoutStack.delete(i);
    return ret;

}

function MDContextDefault(base?: Partial<MDContext>, override?: Partial<MDContext>): MDContext {
    return { apiItem: apiPackage, includeLookingForLink: false, listIndentLevel: 0, ...(base || {}), ...(override || {}), recursionBailoutStack: new Set() }
}

function toMarkdown(obj: ApiItem | DocSection | DocNode | null | undefined, context: MDContext): string {
    if (!obj)
        return "";

    switch (obj.kind) {
        case "Function": return toMarkdown_Function(obj as ApiFunction, MDContextDefault(context, { apiItem: obj as ApiItem }));
        case "Interface": return toMarkdown_Interface(obj as ApiInterface, MDContextDefault(context, { apiItem: obj as ApiItem }));
        case "PropertySignature": return toMarkdown_PropertySignature(obj as ApiPropertySignature, MDContextDefault(context, { apiItem: obj as ApiItem }));

        case "Comment": return toMarkdown_DocComment(obj as DocComment, context);
        case "Block": return toMarkdown_DocBlock(obj as DocBlock, context);
        case "Paragraph": return toMarkdown_DocParagraph(obj as DocParagraph, context);
        case "CodeSpan": return toMarkdown_CodeSpan(obj as DocCodeSpan, context);
        case "Section": return toMarkdown_DocSection(obj as DocSection, context);
        case "PlainText": return toMarkdown_DocPlainText(obj as DocPlainText, context);
        case "SoftBreak": return toMarkdown_DocSoftBreak(obj as DocSoftBreak, context);
        case "LinkTag": return toMarkdown_LinkTag(obj as DocLinkTag, context);
        case "FencedCode": return toMarkdown_FencedCode(obj as DocFencedCode, context);
        default:
            debugger;
            return "";
    }
}

function joinLineTrim(strings: string[]) {
    let ret = "";
    for (let i = 0; i < strings.length; ++i) {
        let startIndex = 0;
        let endIndex = strings[i].length - 1;
        let nlAtStart = false;
        let nlAtEnd = false;
        while (startIndex < endIndex && (strings[i][startIndex] == "\n" || strings[i][startIndex] == "\r")) {
            ++startIndex;
            nlAtStart = true;
        }
        while (endIndex > startIndex && (strings[i][endIndex] == "\n" || strings[i][endIndex] == "\r")) {
            --endIndex;
            nlAtEnd = true;
        }

        ret += `${nlAtStart ? "\n" : ""}${strings[i].substring(startIndex, endIndex + 1)}${nlAtEnd ? "\n" : ""}`;
    }
    return ret;
}

function toMarkdown_FencedCode(obj: DocFencedCode, context: MDContext) {
    switch (obj.language.toLowerCase()) {
        case "md": return `
${obj.code}
`;
        default:
            return `

\`\`\`${obj.language}
${obj.code}
\`\`\`

`;
    }
}

function toMarkdown_LinkTag(obj: DocLinkTag, context: MDContext) {
    if (obj.codeDestination) {
        let resolved = apiModel.resolveDeclarationReference(obj.codeDestination!, context.apiItem);
        if (!resolved || !resolved.resolvedApiItem) {
            console.error(resolved.errorMessage);
            return obj.linkText || "";
        }
        if (context.includeLookingForLink) {
            context.includeLookingForLink = false;
            return toMarkdown(resolved.resolvedApiItem, MDContextDefault(context, { apiItem: resolved.resolvedApiItem }));
        }
        else {
            return `[${obj.linkText || resolved.resolvedApiItem.displayName}](#${resolved.resolvedApiItem.displayName})`;
        }
    }
    return "";
}

function toMarkdown_CodeSpan(obj: DocCodeSpan, context: MDContext) {
    return `\`${obj.code}\``;
}

function toMarkdown_DocBlock(obj: DocBlock, context: MDContext) {
    switch (obj.blockTag.tagName) {
        case "@remarks": break;
        case "@include":
            context.includeLookingForLink = true;
            break;
        default: debugger; console.error(`Unknown block tag ${obj.blockTag.tagName}`);
    }
    return `

${joinLineTrim(obj.content.nodes.map(node => {
        console.assert(KnownTypes.DocBlock.has(node.kind), `Unknown kind ${node.kind} for ${obj.kind}`);
        return toMarkdown(node, context);
    }))}

`
}

function toMarkdown_DocComment(obj: DocComment, context: MDContext) {

    switch (context.apiItem.kind) {
        case "Package":
            // This should be a @packageDescription
            return `
${joinLineTrim([toMarkdown(obj.summarySection, context), toMarkdown(obj.remarksBlock, context), ...obj.customBlocks.map(customBlock => {
                return toMarkdown_DocBlock(customBlock, context)
            })])}
`;
        case "Function":
            debugger;
            return toMarkdown_Function(context.apiItem as ApiFunction, context);
        default:
            debugger;
            return "";
    }
}

function toMarkdown_PropertySignature(obj: ApiPropertySignature, context: MDContext) {
    console.assert(obj.members.length == 0);
    const types = extractReferences(obj.propertyTypeExcerpt);

    return joinLineTrim(types.map(type => {
        if (type?.canonicalReference) {
            let resolved = apiModel.resolveDeclarationReference(type.canonicalReference, context.apiItem);
            if (resolved.errorMessage)
                console.error(resolved.errorMessage);
            return `${" ".repeat(context.listIndentLevel * 2)}* ${obj.displayName}: ${resolved.resolvedApiItem?.displayName}
${toMarkdown(resolved.resolvedApiItem, MDContextDefault(context, { listIndentLevel: context.listIndentLevel + 1 }))}`;
        }

        return `${" ".repeat(context.listIndentLevel * 2)}* ${obj.displayName}: ${toMarkdown(obj.tsdocComment?.summarySection, MDContextDefault(context, { listIndentLevel: context.listIndentLevel + 1 }))}`;
    }));

}

function markdownAppend(originalString: string, appendString: string) {
    if (originalString.endsWith("`") && appendString.startsWith("`"))
        return `${originalString.substring(0, originalString.length - 1)}${appendString.substring(1)}`;
    else
        return `${originalString}${appendString}`
}

function toMarkdown_Interface(obj: ApiInterface, context: MDContext) {
    let ret = "";
    let hasReferences = false;
    const membersAsListItems = obj.members.map(member => {
        let ret = `${" ".repeat(context.listIndentLevel * 2)}* `;

        for (let token of (member as ApiPropertySignature).excerptTokens) {
            let resolved = false;
            if (token.canonicalReference) {
                const ref = apiModel.resolveDeclarationReference(token.canonicalReference, context.apiItem);
                if (ref.resolvedApiItem && !KnownInterfaceOmits.has(ref.resolvedApiItem.displayName)) {
                    ret = markdownAppend(ret, `[\`${token.text || ref.resolvedApiItem.displayName}\`](#${ref.resolvedApiItem.displayName})`);
                    resolved = true;
                    hasReferences = true;
                }

                if (ref.errorMessage) {
                    console.error(ref.errorMessage);
                    ret = markdownAppend(ret, `\`${token.text || ""}\``);
                    resolved = true;
                }


            }
            if (!resolved)
                ret = markdownAppend(ret, `\`${token.text || ""}\``);

        }

        return ret + "\n";
    });

    for (let member of membersAsListItems) {
        ret = markdownAppend(ret, member);
    }


    return `

### \`interface ${obj.displayName}\` 
${obj.displayName.endsWith("Parameters") && hasReferences? "\n\n" : ""}
${ret}

`;
}

function toMarkdown_Function(obj: ApiFunction, context: MDContext) {
    return `
${joinLineTrim([toMarkdown(obj.tsdocComment?.summarySection, context), toMarkdown(obj.tsdocComment?.remarksBlock, context), ...toMarkdown_Parameters(obj, context)])}
`
}

function extractReferences(e: Excerpt): ExcerptToken[] {
    return e.spannedTokens.filter(token => token.kind === "Reference" && (token.text.endsWith("Parameters") || token.text.endsWith("ReturnType")));
}

function toMarkdown_Parameters(func: ApiFunction, context: MDContext) {
    if (func.parameters.length === 1) {
        const p = func.parameters[0];
        if (p.name[0] != "{" && p.name.trimStart()[0] === "}") {
            debugger;
        }
        if (p.name[0] == "{") {
            // We should be able to extract the type...
            let references = extractReferences(p.parameterTypeExcerpt);
            return "PARAMETERS: " + joinLineTrim(references.map(reference => {
                const type = apiModel.resolveDeclarationReference(reference?.canonicalReference!, context.apiItem);
                if (type && type.resolvedApiItem) {
                    return toMarkdown(type.resolvedApiItem, context);
                    //return `[argument](#${type.resolvedApiItem.displayName})`; /*toMarkdown((type.resolvedApiItem as ApiDocumentedItem), MDContextDefault(context, { apiItem: type.resolvedApiItem }))*/
                }
                else {
                    console.error(type.errorMessage);
                    return "";
                }
            }))

        }
    }

    return [];
}

function toMarkdown_DocPlainText(obj: DocPlainText, context: MDContext) {
    return obj.text;
}

function toMarkdown_DocSoftBreak(obj: DocSoftBreak, context: MDContext) {
    return "\n\n";
}

function toMarkdown_DocParagraph(obj: DocParagraph, context: MDContext) {
    let trimmed = obj.nodes.slice();
    /*while (trimmed.at(-1)?.kind == "SoftBreak")
        trimmed.pop();
    while (trimmed.at(0)?.kind == "SoftBreak")
        trimmed.splice(0, 1);*/
    return `
${joinLineTrim(trimmed.map(node => {
        console.assert(KnownTypes.DocParagraph.has(node.kind), `Unknown kind ${node.kind} for ${obj.kind}`);
        return toMarkdown(node, context)
    }))}

`;
}

function toMarkdown_DocSection(obj: DocSection, context: MDContext) {
    return joinLineTrim(obj.nodes.map((node) => {
        console.assert(KnownTypes.DocSection.has(node.kind), `Unknown kind ${node.kind} for ${obj.kind}`);
        return toMarkdown(node, context);
    }));
}


/*
const finalPath = join(__dirname, "../preact-prop-helpers/docs/api.json");
const finalContentsJson = packageToJson(apiPackage);
console.log(finalContentsJson)
debugger;
const finalContents = JSON.stringify(finalContentsJson, null, 1);


writeFileSync(finalPath, finalContents, { encoding: "utf-8" });

function excerptToJson(excerpt: Excerpt | null | undefined) {
    if (!excerpt)
        return excerpt;

    const { isEmpty, text, spannedTokens, tokenRange: { endIndex, startIndex }, tokens } = excerpt;
    return ({
        isEmpty,
        text,
        spannedTokens: spannedTokens.map(excerptTokenToJson),
        tokenRange: { endIndex, startIndex },
        //tokens
    })
}

function excerptTokenToJson(token: ExcerptToken | null | undefined) {
    if (!token)
        return token;
    const { canonicalReference, kind, text } = token;
    return { canonicalReference: canonicalReferenceToJson(canonicalReference), kind, text };

}

function docBlockToJson(item: DocBlock | null | undefined) {

    if (item == null)
        return item;

    const { blockTag, configuration, content, getChildNodes, kind } = item;
    return { blockTag: docBlockTagToJson(blockTag), content: docSectionToJson(content), kind };
}

function docSectionToJson(item: DocSection | null | undefined): Record<string, any> | null | undefined {

    if (item == null)
        return item;

    const { configuration, kind, nodes } = item;
    return { kind, nodes: nodes.map(docNodeToJson) };
}

function docNodeToJson(item: DocNode | null | undefined) {
    if (item == null)
        return item;
    switch (item.kind) {
        case "Section": return docSectionToJson(item as DocSection);
        case "Paragraph": return docParagraphToJson(item as DocParagraph);
        case "SoftBreak": return docSoftBreakToJson(item as DocSoftBreak);
        case "PlainText": return docPlainTextToJson(item as DocPlainText);
        case "CodeSpan": return docCodeSpanToJson(item as DocCodeSpan);
        case "LinkTag": return docLinkTagToJson(item as DocLinkTag);
        case "Comment": return docCommentToJson(item as DocComment);
        case "ParamBlock": return docParamBlockToJson(item as DocParamBlock);
        case "ErrorText": return docErrorTextToJson(item as DocErrorText);
        case "FencedCode": return docFencedCodeToJson(item as DocFencedCode);
        default: debugger; return { kind: item.kind }
    }

}


function docFencedCodeToJson(fencedCode: DocFencedCode | null | undefined) {
    if (!fencedCode)
        return fencedCode;
    const { code, configuration, getChildNodes, kind, language } = fencedCode;
    return {
        code,
        kind,
        language
    }
}

function docErrorTextToJson(errorText: DocErrorText | null | undefined) {
    if (!errorText)
        return errorText;
    const { configuration, errorLocation, errorMessage, getChildNodes, kind, messageId, text, textExcerpt } = errorText;
    return {
        errorLocation: tokenSequenceToJson(errorLocation),
        errorMessage,
        kind,
        messageId,
        text,
        textExcerpt: tokenSequenceToJson(textExcerpt)
    }
}

function docParamBlockToJson(param: DocParamBlock | null | undefined) {
    if (!param)
        return param;
    const { blockTag, configuration, content, getChildNodes, kind, parameterName } = param;

    return {
        parameterName,
        kind,
        content: docSectionToJson(content),
        blockTag: docBlockTagToJson(blockTag)
    }
}

function docParagraphToJson(paragraph: DocParagraph | null | undefined): Record<string, any> | null | undefined {
    if (!paragraph)
        return null;
    const { kind, nodes } = paragraph;
    return { kind, nodes: nodes.map(docNodeToJson) }
}

function docSoftBreakToJson(softBreak: DocSoftBreak | null | undefined): Record<string, any> | null | undefined {
    if (!softBreak)
        return softBreak;
    const { kind } = softBreak;
    return { kind }
}

function docPlainTextToJson(plainText: DocPlainText | null | undefined): Record<string, any> | null | undefined {
    if (plainText == null)
        return plainText;
    const { kind, text, textExcerpt } = plainText;
    return { kind, text, textExcerpt: tokenSequenceToJson(textExcerpt) }
}

function docCodeSpanToJson(plainText: DocCodeSpan | null | undefined): Record<string, any> | null | undefined {
    if (plainText == null)
        return plainText;
    const { kind, code } = plainText;
    return { kind, code }
}

function docLinkTagToJson(plainText: DocLinkTag | null | undefined): Record<string, any> | null | undefined {
    if (plainText == null)
        return plainText;
    const { kind, codeDestination, linkText, tagName, urlDestination } = plainText;
    return { kind, codeDestination: docDeclarationReferenceToJson(codeDestination), linkText, tagName, urlDestination }
}

function docDeclarationReferenceToJson(ref: DocDeclarationReference | null | undefined) {
    if (!ref)
        return null;

    const { importPath, kind, packageName, memberReferences } = ref;
    return { importPath, kind, packageName, memberReferences: memberReferences.map(docMemberReferenceToJson) }
}

function docMemberReferenceToJson(ref: DocMemberReference | null | undefined): Record<string, any> | null | undefined {
    if (!ref)
        return ref;
    const { hasDot, kind, memberIdentifier, memberSymbol, selector } = ref;
    return {
        hasDot,
        kind,
        memberIdentifier: memberIdentifierToJson(memberIdentifier),
        memberSymbol: memberSymbolToJson(memberSymbol),
        selector: memberSelectorToJson(selector)
    }
}

function memberSelectorToJson(id: DocMemberSelector | undefined | null) {
    if (!id)
        return id;
    const { kind, errorMessage, selector, selectorKind } = id;
    return {
        kind,
        errorMessage,
        selector,
        selectorKind
    }
}

function memberSymbolToJson(id: DocMemberSymbol | undefined | null) {
    if (!id)
        return id;
    const { kind, symbolReference } = id;
    return {
        kind,
        symbolReference: docDeclarationReferenceToJson(symbolReference)
    }
}

function memberIdentifierToJson(id: DocMemberIdentifier | undefined | null) {
    if (!id)
        return id;
    const { kind, identifier, hasQuotes } = id;
    return {
        kind,
        identifier,
        hasQuotes
    }
}

function tokenSequenceToJson(tokenSequence: TokenSequence | null | undefined) {
    if (tokenSequence == null)
        return tokenSequence;
    const { startIndex, tokens, endIndex, parserContext } = tokenSequence;
    return { startIndex, endIndex }
}

function tokenToJson(token: Token | null | undefined) {
    if (token == null)
        return token;
    const { kind, line, range } = token;
    return { kind, line: textRangeToJson(line), range: textRangeToJson(range) }
}

function textRangeToJson(range: TextRange | null | undefined) {
    if (!range)
        return range;
    const { buffer, end, pos, length } = range;
    return { buffer, end, pos, length };
}

function docParamCollectionToJson(c: DocParamCollection | null | undefined) {
    if (!c)
        return c;

    const { blocks, count, kind } = c;

    return {
        blocks: blocks.map(docParamBlockToJson),
        count,
        kind
    }

}

function standardModifierTagSetToJson(a: ModifierTagSet | null | undefined) {
    if (!a)
        return a;
    const { nodes } = a;

    return { nodes: nodes.map(docBlockTagToJson) }
}

function docInheritDocTagToJson(item: DocInheritDocTag | null | undefined) {
    if (!item)
        return item;
    const { kind, tagName, declarationReference } = item;

    return {
        kind,
        tagName,
        declarationReference: docDeclarationReferenceToJson(declarationReference)
    }
}

function docCommentToJson(item: DocComment | null | undefined) {
    if (item == null)
        return item;

    const { configuration, customBlocks, kind, remarksBlock, summarySection, typeParams, seeBlocks, returnsBlock, params, privateRemarks, modifierTagSet, inheritDocTag, deprecatedBlock } = item;

    return {
        kind,
        remarksBlock: docBlockToJson(remarksBlock),
        summarySection: docSectionToJson(summarySection),
        typeParams: docParamCollectionToJson(typeParams),
        seeBlocks: seeBlocks.map(docBlockToJson),
        returnsBlock: docBlockToJson(returnsBlock),
        params: docParamCollectionToJson(params),
        privateRemarks: docBlockToJson(privateRemarks),
        modifierTagSet: standardModifierTagSetToJson(modifierTagSet),
        inheritDocTag: docInheritDocTagToJson(inheritDocTag),
        deprecatedBlock: docBlockToJson(deprecatedBlock),
        customBlocks: customBlocks.map(docBlockToJson)
        /*summarySection: docSectionToJson(summarySection),
        params: params.blocks.map(block => docTypeParameterToJson(block)),
        typeParams: typeParams.blocks.map(block => docTypeParameterToJson(block)),
        seeBlocks: seeBlocks.map(block => docBlockToJson(block)),
        returnsBlock: docBlockToJson(returnsBlock),
        privateRemarks: docBlockToJson(privateRemarks),
        modifierTagSet: modifierTagSet.toString(),
        inheritDocTag: inheritDocTag == null? inheritDocTag : ({ tagName: inheritDocTag.tagName, tagNameWithUpperCase: inheritDocTag.tagNameWithUpperCase, kind: inheritDocTag.kind }),
        deprecatedBlock: modifierTagSet.toString(),
        customBlocks: customBlocks.map(custom => {
            return {
                blockTag: docBlockTagToJson(custom.blockTag),
                content: docSectionToJson(custom.content),
                kind: custom.kind,
            }
        }),*\/
    }
}

function docBlockTagToJson(blockTag: DocBlockTag | null | undefined): Record<string, any> | null | undefined {
    if (!blockTag)
        return blockTag;

    const { kind, tagName } = blockTag
    return {
        kind,
        tagName
    }
}

function docTypeParameterToJson(item: TypeParameter["tsdocTypeParamBlock"]) {
    if (item == null)
        return item;

    const { configuration, kind, blockTag, content, parameterName } = item;

    return {
        kind,
        blockTag,
        content: content.toString(),
        parameterName
    }
}

function entryPointToJson({ canonicalReference, containerKey, displayName, importPath, kind, members, name, }: ApiEntryPoint) {
    return ({
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        containerKey,
        displayName,
        importPath,
        kind,
        name,
        members: members.map(apiItemToJson)
    })
}

function apiItemToJson(item: ApiItem): Record<string, any> | null | undefined {

    switch (item.kind) {
        case ApiItemKind.Function: return functionToJson(item as ApiFunction);
        case ApiItemKind.TypeAlias: return typeAliasToJson(item as ApiTypeAlias);
        case ApiItemKind.Interface: return interfaceToJson(item as ApiInterface);
        case ApiItemKind.Class: return classToJson(item as ApiClass);
        case ApiItemKind.Variable: return variableToJson(item as ApiVariable);
        case ApiItemKind.Enum: return enumToJson(item as ApiEnum);
        case ApiItemKind.EnumMember: return enumMemberToJson(item as ApiEnumMember);
        case ApiItemKind.Constructor: return constructorToJson(item as ApiConstructor);
        case ApiItemKind.Property: return propertyToJson(item as ApiProperty);
        case ApiItemKind.Method: return methodToJson(item as ApiMethod);
        case ApiItemKind.MethodSignature: return methodSignatureToJson(item as ApiMethodSignature);
        case ApiItemKind.PropertySignature: return propertySignatureToJson(item as ApiPropertySignature);
        default: debugger; return { kind: item.kind }
    }
}


function enumMemberToJson(item: ApiEnumMember | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, containerKey, displayName, excerpt, excerptTokens, fileUrlPath, kind, members, name, releaseTag, initializerExcerpt, sourceLocation, tsdocComment } = item;



    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        displayName,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        containerKey,
        name,
        kind,
        members: members.map(apiItemToJson),
        releaseTag,
        initializerExcerpt: excerptToJson(initializerExcerpt),
        sourceLocation: sourceLocationToJson(sourceLocation),
        tsdocComment: docNodeToJson(tsdocComment)
    }

}

function methodToJson(item: ApiMethod | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, containerKey, displayName, excerpt, excerptTokens, fileUrlPath, isAbstract, isOptional, isProtected, isStatic, kind, members, name, overloadIndex, parameters, typeParameters, releaseTag, returnTypeExcerpt, sourceLocation, tsdocComment } = item;


    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        displayName,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        containerKey,
        isOptional,
        isAbstract,
        isProtected,
        isStatic,
        name,
        kind,
        members: members.map(apiItemToJson),
        releaseTag,
        overloadIndex,
        parameters: parameters.map(parameterToJson),
        typeParameters: typeParameters.map(typeParameterToJson),
        returnTypeExcerpt: excerptToJson(returnTypeExcerpt),
        sourceLocation: sourceLocationToJson(sourceLocation),
        tsdocComment: docNodeToJson(tsdocComment)
    }

}

function methodSignatureToJson(item: ApiMethodSignature | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, containerKey, displayName, excerpt, excerptTokens, fileUrlPath, isOptional, kind, name, members, overloadIndex, parameters, releaseTag, returnTypeExcerpt, sourceLocation, tsdocComment, typeParameters } = item;

    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        displayName,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        containerKey,
        isOptional,
        name,
        kind,
        members: members.map(apiItemToJson),
        releaseTag,
        overloadIndex,
        parameters: parameters.map(parameterToJson),
        typeParameters: typeParameters.map(typeParameterToJson),
        returnTypeExcerpt: excerptToJson(returnTypeExcerpt),
        sourceLocation: sourceLocationToJson(sourceLocation),
        tsdocComment: docNodeToJson(tsdocComment)
    }
}

function propertyToJson(item: ApiProperty | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, containerKey, displayName, excerpt, excerptTokens, fileUrlPath, isAbstract, isEventProperty, isOptional, isProtected, isReadonly, isStatic, kind, members, name, propertyTypeExcerpt, releaseTag, sourceLocation, tsdocComment, initializerExcerpt } = item;


    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        displayName,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        containerKey,
        isAbstract,
        isEventProperty,
        isOptional,
        isReadonly,
        isStatic,
        name,
        propertyTypeExcerpt: excerptToJson(propertyTypeExcerpt),
        initializerExcerpt: excerptToJson(initializerExcerpt),
        kind,
        members: members.map(apiItemToJson),
        releaseTag,
        isProtected,
        sourceLocation: sourceLocationToJson(sourceLocation),
        tsdocComment: docNodeToJson(tsdocComment)
    }

}

function constructorToJson(item: ApiConstructor | null | undefined) {
    if (!item)
        return item;
    const {
        containerKey,
        canonicalReference,
        displayName,
        excerpt,
        excerptTokens,
        fileUrlPath,
        isProtected,
        kind,
        members,
        overloadIndex,
        parameters,
        releaseTag,
        tsdocComment,
        sourceLocation
    } = item;

    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        displayName,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        containerKey,
        overloadIndex,
        parameters: parameters.map(parameterToJson),
        kind,
        members: members.map(apiItemToJson),
        releaseTag,
        isProtected,
        sourceLocation: sourceLocationToJson(sourceLocation),
        tsdocComment: docNodeToJson(tsdocComment)
    }
}

function propertySignatureToJson(item: ApiPropertySignature | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, displayName, excerpt, excerptTokens, fileUrlPath, containerKey, isEventProperty, isOptional, isReadonly, kind, members, name, releaseTag, propertyTypeExcerpt, sourceLocation, tsdocComment } = item;
    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        displayName,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        containerKey,
        isEventProperty,
        isOptional,
        isReadonly,
        kind,
        members: members.map(apiItemToJson),
        name,
        releaseTag,
        propertyTypeExcerpt: excerptToJson(propertyTypeExcerpt),
        sourceLocation: sourceLocationToJson(sourceLocation),
        tsdocComment: docNodeToJson(tsdocComment)
    }
}

function enumToJson(item: ApiEnum | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, containerKey, displayName, excerpt, excerptTokens, fileUrlPath, isExported, kind, members, name, preserveMemberOrder, tsdocComment, sourceLocation, releaseTag } = item;
    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        containerKey,
        displayName,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        isExported,
        kind,
        members: members.map(apiItemToJson),
        name,
        preserveMemberOrder,
        tsdocComment: docNodeToJson(tsdocComment),
        sourceLocation: sourceLocationToJson(sourceLocation),
        releaseTag
    }
}

function variableToJson(item: ApiVariable | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, containerKey, displayName, excerpt, excerptTokens, fileUrlPath, isExported, isReadonly, kind, members, name, releaseTag, sourceLocation, tsdocComment, variableTypeExcerpt, initializerExcerpt } = item;

    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        containerKey,
        displayName,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        isExported,
        isReadonly,
        kind,
        members: members.map(apiItemToJson),
        name,
        releaseTag,
        sourceLocation: sourceLocationToJson(sourceLocation),
        tsdocComment: docNodeToJson(tsdocComment),
        variableTypeExcerpt: excerptToJson(variableTypeExcerpt),
        initializerExcerpt: excerptToJson(initializerExcerpt)
    }
}

function classToJson(item: ApiClass | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, excerpt, displayName, containerKey, excerptTokens, fileUrlPath, extendsType, isAbstract, isExported, implementsTypes, kind, members, name, preserveMemberOrder, releaseTag, tsdocComment, typeParameters, sourceLocation } = item;
    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        excerpt: excerptToJson(excerpt),
        displayName,
        containerKey,
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        fileUrlPath,
        extendsType: heritageTypeToJson(extendsType),
        isAbstract,
        isExported,
        implementsTypes: implementsTypes.map(heritageTypeToJson),
        kind,
        members: members.map(apiItemToJson),
        name,
        preserveMemberOrder,
        releaseTag,
        tsdocComment: docNodeToJson(tsdocComment),
        typeParameters: typeParameters.map(typeParameterToJson),
        sourceLocation: sourceLocationToJson(sourceLocation)
    }
}

function interfaceToJson(item: ApiInterface | null | undefined) {
    if (!item)
        return item;
    const { canonicalReference, containerKey, excerpt, excerptTokens, extendsTypes, displayName, fileUrlPath, isExported, name, kind, members, preserveMemberOrder, sourceLocation, releaseTag, typeParameters, tsdocComment } = item;
    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        containerKey,
        excerpt: excerptToJson(excerpt),
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        extendsTypes: extendsTypes.map(heritageTypeToJson),
        displayName,
        fileUrlPath,
        isExported,
        name,
        kind,
        members: members.map(member => apiItemToJson(member)),
        preserveMemberOrder,
        sourceLocation: sourceLocationToJson(sourceLocation),
        releaseTag,
        typeParameters: typeParameters.map(typeParameterToJson),
        tsdocComment: docNodeToJson(tsdocComment)
    };

}

function heritageTypeToJson(type: HeritageType | null | undefined) {
    if (type == null)
        return type;

    const { excerpt } = type;
    return { excerpt: excerptToJson(excerpt) }
}

function sourceLocationToJson(location: SourceLocation | null | undefined) {
    if (!location)
        return location;
    const { fileUrl } = location;

    return { fileUrl };
}

function typeAliasToJson(item: ApiTypeAlias | undefined | null): Record<string, any> | null | undefined {
    if (!item)
        return item;
    const { canonicalReference, excerptTokens, containerKey, displayName, excerpt, fileUrlPath, kind, isExported, members, name, releaseTag, typeExcerpt, typeParameters, tsdocComment, sourceLocation } = item;
    return {
        excerptTokens: excerptTokens.map(excerptTokenToJson),
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        containerKey,
        displayName,
        excerpt: excerptToJson(excerpt),
        fileUrlPath,
        kind,
        isExported,
        members: members.map(member => apiItemToJson(member)),
        name,
        releaseTag,
        typeExcerpt: excerptToJson(typeExcerpt),
        tsdocComment: docNodeToJson(tsdocComment),
        typeParameters: typeParameters.map(tp => typeParameterToJson(tp)),
        sourceLocation: sourceLocationToJson(sourceLocation)
    }
}

function typeParameterToJson(typeParameter: TypeParameter | null | undefined) {
    if (!typeParameter)
        return typeParameter;
    const { constraintExcerpt, defaultTypeExcerpt, isOptional, name, tsdocTypeParamBlock } = typeParameter;

    return ({
        constraintExcerpt: excerptToJson(constraintExcerpt),
        defaultTypeExcerpt: excerptToJson(defaultTypeExcerpt),
        isOptional,
        name,
        tsdocTypeParamBlock: docNodeToJson(tsdocTypeParamBlock)
    })
}

function parameterToJson(p: Parameter | null | undefined) {
    if (!p)
        return p;
    const { isOptional, name, parameterTypeExcerpt, tsdocParamBlock } = p;
    return {
        isOptional,
        name,
        parameterTypeExcerpt: excerptToJson(parameterTypeExcerpt),
        tsdocParamBlock: docNodeToJson(tsdocParamBlock)
    }

}

function functionToJson({ canonicalReference, containerKey, displayName, excerpt, excerptTokens, isExported, kind, members, name, overloadIndex, parameters, releaseTag, returnTypeExcerpt, sourceLocation, typeParameters, tsdocComment }: ApiFunction) {
    return {
        canonicalReference: canonicalReferenceToJson(canonicalReference),
        kind,
        members: members.map(apiItemToJson),
        containerKey,
        displayName,
        excerpt: excerptToJson(excerpt),
        isExported,
        name,
        overloadIndex,
        parameters: parameters.map(parameterToJson),
        releaseTag,
        returnTypeExcerpt: excerptToJson(returnTypeExcerpt),
        sourceLocation: sourceLocationToJson(sourceLocation),
        typeParameters: typeParameters.map(typeParameterToJson),
        tsdocComment: docCommentToJson(tsdocComment),
        excerptTokens: excerptTokens.map(({ canonicalReference, kind, text }) => ({ canonicalReference: canonicalReferenceToJson(canonicalReference), kind, text }))

    }
}

function canonicalReferenceToJson(item: ApiItem["canonicalReference"] | undefined | null) {
    if (item == null)
        return item;
    const { isEmpty, navigation, source, symbol } = item;
    return ({
        isEmpty,
        navigation: navigation?.toString(),
        source: source?.toString(),
        symbol: symbol?.toString()
    })
}

function packageToJson({ members, displayName, containerKey, entryPoints, kind, tsdocComment, tsdocConfiguration, projectFolderUrl, name, preserveMemberOrder, canonicalReference }: ApiPackage) {
    return ({
        //members: members.map(({ containerKey, displayName, kind }) => ({ containerKey, displayName, kind })), 

        canonicalReference: canonicalReferenceToJson(canonicalReference),
        displayName,
        containerKey,
        entryPoints: entryPoints.map(entryPointToJson),
        kind,
        tsdocComment: docNodeToJson(tsdocComment),
        //tsdocConfiguration,
        projectFolderUrl,
        name,
        preserveMemberOrder
    });
}
*/
