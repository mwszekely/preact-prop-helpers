
import { ApiDocumentedItem, ApiFunction, ApiInterface, ApiItem, ApiModel, ApiTypeAlias, ExcerptToken } from "@microsoft/api-extractor-model";
import { DocBlock, DocCodeSpan, DocComment, DocDeclarationReference, DocErrorText, DocFencedCode, DocInlineTag, DocLinkTag, DocNode, DocParagraph, DocPlainText, DocSection, DocSoftBreak } from "@microsoft/tsdoc";
import { ParamsOrReturnContext, doInterfaceToTable } from "./readme-gen-function-params.js";
import { IsCompositeContext, handleReadmeIncludeFunction } from "./readme-gen-function.js";

export interface TrackingContext { referenced: Set<string>, documented: Set<string> }
export interface HeaderLevelContext { headerLevel: number }
export interface ApiContext {
    /** 
     * Used primarily to resolve links, but occasionally also
     * used to keep track of the current ApiItem currently being documented.
     * 
     * E.G. the current `interface` or `function` or whatever.
     */
    api: ApiItem;
}
export interface ModelContext { model: ApiModel }
export interface InTableContext { inTable?: boolean; }
export interface InListContext { inList?: boolean; }
export interface InTOCContext { inToc?: boolean; }
export interface InCodeSpanContext { inCodeSpan?: boolean; }
export interface IncludeContext { nextLinkIsInclude?: boolean; } // Caution: This one is mutable

export function doHeader<C extends HeaderLevelContext & TrackingContext>(value: string, context: C) {
    context.documented.add(value);
    return `\n${"#".repeat(context.headerLevel)} ${value}`;
}

export function doLink<C extends TrackingContext>(linkText: string | null | undefined, resolvedApiItem: ApiItem | undefined | null, context: C) {
    if (resolvedApiItem == null)
        return `${linkText || "<missing reference>"}`

    context.referenced.add(resolvedApiItem.displayName);

    return `[${linkText || resolvedApiItem.displayName}](#${resolvedApiItem.displayName})`;
}

export function doCodeSpan<C extends InCodeSpanContext>(codeText: string, context: C) {
    let maxConsecutive = 0;

    let currentConsecutive = 0;
    for (let i = 0; i < codeText.length; ++i) {
        if (codeText[i] == "`") {
            currentConsecutive += 1;
            maxConsecutive = Math.max(maxConsecutive, currentConsecutive);
        }
        else {
            currentConsecutive = 0;
        }
    }

    const delimiter = "`".repeat(maxConsecutive + 1);
    let spaceStart = codeText.startsWith("`") ? " " : "";
    let spaceEnd = codeText.endsWith("`") ? " " : "";

    return `${delimiter}${spaceStart}${codeText}${spaceEnd}${delimiter}`;
}

/**
 * "Prints" a string, escaping it depending on whatever the current `context` says is appropriate.
 * 
 * For example, in tables, the `|` pipe character will be escaped and newlines replaced with BR elements, 
 * but outside of a table it just prints normally.
 */
export function doString<C extends Partial<InTableContext>>(string: string, context: C) {
    if (context.inTable) {
        return string.replaceAll("|", "\\|").replaceAll("\n", "<br />");
    }
    else {
        return string;
    }
}

export function doDocBlock<C extends Partial<InTableContext> & ApiContext & ModelContext & Partial<IncludeContext> & HeaderLevelContext & TrackingContext & Partial<ParamsOrReturnContext> & IsCompositeContext>(section: DocBlock | null | undefined, context: C) {
    return section?.content.nodes.map(node => { return doDocNode(node, context); }).join(!context.inTable ? "\n\n" : "<br />") ?? "";
}

export function doDocNode<C extends InTableContext & ApiContext & ModelContext & Partial<IncludeContext> & HeaderLevelContext & TrackingContext & InTOCContext & InListContext & Partial<ParamsOrReturnContext> & Partial<IsCompositeContext>>(node: DocNode | null | undefined, context: C): string {
    if (!node)
        return "";


    switch (node?.kind) {
        case "Paragraph":
            const p = (node as DocParagraph);
            return doDocNodeParagraph(p, context);
        case "FencedCode":
            const fc = (node as DocFencedCode);
            if (fc.language == "md-literal") {
                return fc.code;
            }
            else {
                return `
\`\`\`${fc.language}
${fc.code}
\`\`\`
`;
            }
        default:
            debugger;
            return "";

    }
}

export function doDocNodeParagraph<C extends InTableContext & ApiContext & ModelContext & Partial<IncludeContext> & HeaderLevelContext & TrackingContext & InTOCContext & InListContext & Partial<ParamsOrReturnContext> & Partial<IsCompositeContext>>(node: DocParagraph, context: C): string {

    let tocTodos: ApiItem[] = [];

    let nodesWithoutTrailingBreaks = node.nodes.slice();
    if (context.inTable || context.inList) {
        let start = 0;
        let end = nodesWithoutTrailingBreaks.length;
        while (start < end && nodesWithoutTrailingBreaks[start].kind == 'SoftBreak') {
            ++start;
        }
        while (start < end && nodesWithoutTrailingBreaks[end - 1].kind == 'SoftBreak') {
            --end;
        }
        nodesWithoutTrailingBreaks = nodesWithoutTrailingBreaks.slice(start, end);
    }

    return nodesWithoutTrailingBreaks.map(paragraph => {
        switch (paragraph.kind) {
            case "PlainText":
                const plainText = paragraph as DocPlainText;
                return doString(plainText.text, context);
            case "SoftBreak":
                const softBreak = paragraph as DocSoftBreak;
                if (context.inList || context.inTable)
                    return "<br />";
                else
                    return "\n\n";
            case "LinkTag":
                const linkTag = paragraph as DocLinkTag;
                const resolved = doReference(linkTag.codeDestination, context);
                if (context.nextLinkIsInclude) {
                    context.nextLinkIsInclude = false;

                    if (!resolved.resolvedApiItem) {
                        return `\`${resolved.errorMessage}\``;
                    }
                    else {
                        if (!context.inToc) {
                            return handleReadmeInclude(resolved.resolvedApiItem, context);
                        }
                        else {
                            tocTodos.push(resolved.resolvedApiItem);
                            return `* ${doLink(resolved.resolvedApiItem.displayName, resolved.resolvedApiItem, context)} ${doDocSection((resolved.resolvedApiItem as ApiDocumentedItem).tsdocComment?.summarySection, { ...context, inList: true })}`;
                        }
                    }
                }
                else {
                    return doLink(linkTag.linkText, resolved.resolvedApiItem, context);
                }
            case "InlineTag":
                const inlineTag = paragraph as DocInlineTag;
                switch (inlineTag.tagNameWithUpperCase) {
                    case "@INCLUDE":
                        console.assert(context.nextLinkIsInclude == false);
                        context.nextLinkIsInclude = true;
                        break;
                    case "@TABLEOFCONTENTS":
                        let [tocCommand, ...tocDataArray] = inlineTag.tagContent.split(" ");
                        let tocData = tocDataArray.join(" ");
                        switch (tocCommand) {
                            case "start":
                                console.assert(!context.inToc, "Duplicate start command for @tableOfContents");
                                context.inToc = true;
                                break;
                            case "end":
                                console.assert(context.inToc, "Missing start command for @tableOfContents");
                                context.inToc = false;
                                break;
                            case "header":
                                return doHeader(tocData, context);
                            case "subheader":
                                return `\n\n${doString(tocData, context)}\n\n`;
                            default:
                                debugger;
                                return "";
                        }
                        break;
                    default:
                        debugger;
                }
                return "\n\n";

            case "CodeSpan":
                const codeSpan = paragraph as DocCodeSpan;
                return `\`${codeSpan.code}\``;
                case "ErrorText":
                    const errorText = paragraph as DocErrorText;
                    debugger;
                    return `# ERROR: ${errorText}`
            default:
                debugger;
                return "";
        }
    }).join("").trim() + (tocTodos.length ? ("\n\n\n" + tocTodos.map(apiItem => handleReadmeInclude(apiItem, context)).join("\n\n<hr />\n\n")) : "");

}

// TODO
export function doLines<C extends InTableContext & InListContext>(lines: string[], context: C) {

}

export function doDocSection<C extends InTableContext & ApiContext & ModelContext & HeaderLevelContext & TrackingContext & InListContext & Partial<ParamsOrReturnContext> & Partial<IsCompositeContext>>(section: DocSection | null | undefined, context: C) {
    let ret = section?.nodes.map(node => {
        let ret = doDocNode(node, context);
        return ret;
    }) ?? [];
    return ret.join(!(context.inTable || context.inList) ? "\n\n" : "<br />");
}

function handleReadmeInclude<C extends HeaderLevelContext & ModelContext & ApiContext & TrackingContext & Partial<IsCompositeContext> & Partial<ParamsOrReturnContext>>(item: ApiItem, context: C): string {
    switch (item.kind) {
        case "Function":
            return handleReadmeIncludeFunction(item as ApiFunction, context);
        case "Interface":
            return doInterfaceToTable((item as ApiInterface), { funcMode: "return", isCompositeFunction: false, ...context });
        case "TypeAlias":
            return doTypeAlias(item as ApiTypeAlias, context);
        default:
            debugger;
            return "";
    }
}

const TypeAliasesToIgnore = new Map([
    ["EventTarget", "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget"],
    ["HTMLAttributes", ""],
    ["JSX.HTMLAttributes", ""],
    ["Omit", ""]
]);

function doTypeAlias<C extends HeaderLevelContext & ModelContext & ApiContext & TrackingContext & Partial<IsCompositeContext> & Partial<ParamsOrReturnContext>>(item: ApiTypeAlias, context: C): string {
    return `${doHeader(item.displayName, context)}

\`\`\`typescript
${item.excerptTokens.map(token => {
        switch (token.kind) {
            case "Content": return token.text;
            default:
                return token.text;
            /*const ref = doReference(token.canonicalReference, context);
            if (ref.resolvedApiItem) {
               // return doLink(token.text, ref.resolvedApiItem, context);
            }
            if (ref.errorMessage) {
                if (TypeAliasesToIgnore.has(token.text)) {
                    if (TypeAliasesToIgnore.get(token.text))
                        //return `[${token.text}](${TypeAliasesToIgnore.get(token.text)})`;
                    else
                        return token.text
                }
                debugger;
                return ref.errorMessage;
            }
            return token.text;


            return "";*/
            //case "R": return token.text;
        }
    }).join("")}
\`\`\``
}

export function doDocComment<C extends InTableContext & InListContext & ApiContext & ModelContext & HeaderLevelContext & TrackingContext & IsCompositeContext>(comment: DocComment | null | undefined, context: C) {
    let replaceNewlines = (context.inTable || context.inList || false);

    if (!comment)
        return "";

    let examples = comment.customBlocks.filter(block => block.blockTag.tagNameWithUpperCase == "@EXAMPLE");

    return [
        doDocSection(comment.summarySection, context),
        doDocBlock(comment.remarksBlock, context),
        comment.seeBlocks.length ? `**See also**: ${comment.seeBlocks.map(block => doDocBlock(block, context)).join(" ; ")}` : "",
        examples.length ? examples.map(block => doDocBlock(block, context)) : ""
    ].filter(s => !!s).join(replaceNewlines ? "<br />" : "\n\n");
}


export function doReference<C extends ApiContext & ModelContext>(declarationReference: DocDeclarationReference | ExcerptToken["canonicalReference"] | null | undefined, { api, model }: C) {
    if (declarationReference == null)
        return {
            resolvedApiItem: undefined as ApiItem | undefined,
            errorMessage: "Missing reference"
        };
    else
        return model.resolveDeclarationReference(declarationReference, api);
}
