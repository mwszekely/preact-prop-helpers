import { Extractor, ExtractorConfig, ExtractorMessage, ExtractorMessageCategory } from "@microsoft/api-extractor";
import { ApiDocumentedItem, ApiEntryPoint, ApiFunction, ApiInterface, ApiItem, ApiMethodSignature, ApiModel, ApiPackage, ApiPropertySignature, Excerpt, ExcerptToken, Parameter } from "@microsoft/api-extractor-model";
import { DocBlock, DocCodeSpan, DocComment, DocFencedCode, DocLinkTag, DocNode, DocParagraph, DocPlainText, DocSection, DocSoftBreak } from "@microsoft/tsdoc";
import { RecursiveMap } from "map-and-set-extensions";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';
import { ApiContext, HeaderLevelContext, InCodeSpanContext, InTableContext, ModelContext, doCodeSpan, doHeader, doLink, doReference, doRemarks, doString, doSummary } from "./readme-gen-shared.js";

export { ApiDocumentedItem, ApiEntryPoint, ApiFunction, ApiInterface, ApiItem, ApiModel, ApiPackage, ApiPropertySignature, DocBlock, DocCodeSpan, DocComment, DocFencedCode, DocLinkTag, DocNode, DocParagraph, DocPlainText, DocSection, DocSoftBreak, Excerpt, ExcerptToken, Extractor, ExtractorConfig, ExtractorMessage, ExtractorMessageCategory, RecursiveMap, dirname, fileURLToPath, join };

interface IsCompositeContext {
    isCompositeFunction: boolean;
}

export function handleReadmeIncludeFunction<C extends HeaderLevelContext & ApiContext & ModelContext>(item: ApiFunction, context: C) {
    let isCompositeFunction = false;

    if (item.tsdocComment?.modifierTagSet.hasTagName("@compositeParams")) {
        isCompositeFunction = true;
    }

    return `${doHeader(item.displayName, context)}

${doSummary(item.tsdocComment?.summarySection, context)}

${handleParams(item.parameters, { ...context, api: item, isCompositeFunction })}

${doRemarks(item.tsdocComment?.remarksBlock, context)}

`;
}

function recursiveExtends<C extends ApiContext & ModelContext>(root: ApiInterface, type: ApiInterface, context: C): Map<string, ReturnType<typeof doReference>> {
    let allExtended = type.extendsTypes.flatMap(({ excerpt: { spannedTokens } }) => { return spannedTokens.filter(token => token.kind == "Reference" && token.text.endsWith("Parameters")) }).map(token => doReference(token.canonicalReference, context));
    if (allExtended.length == 0) {
        if (root != type)
            return new Map([[type.displayName, { resolvedApiItem: type, errorMessage: undefined }]]);
        else
            return new Map();
    }

    type T = [string, ReturnType<typeof doReference>];

    return new Map(allExtended.flatMap((value): T[] => {
        if (value.resolvedApiItem?.kind == "Interface" && value.resolvedApiItem?.displayName.endsWith("Parameters")) {
            return [...recursiveExtends(root, value.resolvedApiItem as ApiInterface, context)];
        }
        return [[value.resolvedApiItem?.displayName || value.errorMessage || "(Unknown)", value!] as T];
    }));
}

/**
 * 
 * How composite params are handled:
 * 
 * #### UseCompleteListNavigationParameters
 * extends a, b, c, d
 * 
 * 
 * #### UseRovingIndexParameters
 * extends a
 * * rovingTabIndexParameters:
 *   * a, `boolean`: a parameter. **Default**: false
 *   * b, `number`
 * * `context`: `UseRovingTabIndexContext`
 * * `props`: 
 * 
 */

function handleCompositeParamsExtends<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext>(type: ApiInterface, context: C) {
    console.assert(type.kind == "Interface");
    let allExtended = recursiveExtends(type, type, context);

    let extendsString = Array.from(allExtended).map(([, { errorMessage, resolvedApiItem }]) => { return doLink(errorMessage || resolvedApiItem?.displayName, resolvedApiItem) });
    return extendsString;
}
function handleCompositeParamsMembersSelf<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & Partial<InTableContext> & InCodeSpanContext>(type: ApiInterface, context: C) {
    // type.preserveMemberOrder = true;

    return type.members.map(member => {
        switch (member.kind) {
            case "MethodSignature":
                const method = (member as ApiMethodSignature);
                return `|.${method.displayName}${method.isOptional ? "?" : ""}|Function|${doSummary(method.tsdocComment?.summarySection, context)}|`;
            case "PropertySignature":
                const property = (member as ApiPropertySignature);
                const typeExcerpt = property.propertyTypeExcerpt.text;
                let typeExcerptString = doCodeSpan(doString(typeExcerpt, context), context);
                return `|.${property.displayName}${property.isOptional ? "?" : ""}|\`${typeExcerptString}\`|${doSummary(property.tsdocComment?.summarySection, context)}|`;
            default:
                debugger;
                return `|.${member.displayName}| | |`;
        }
    }).join("\n");

}
function handleCompositeParamsMembers<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & InTableContext>(type: ApiInterface, context: C) {
    return type.members.map(member => {
        const ref = doReference(member.canonicalReference, context);
        if (ref.resolvedApiItem?.displayName.endsWith("Parameters")) {
            let token = (ref.resolvedApiItem as ApiPropertySignature).excerptTokens[1];
            let type = doReference(token.canonicalReference, context);
            console.assert(type.resolvedApiItem?.kind === "Interface" && type.resolvedApiItem.displayName.endsWith("Self"));
            return handleCompositeParamsMembersSelf(type.resolvedApiItem as ApiInterface, context);
            debugger;
        }
        else if (ref.resolvedApiItem?.displayName.endsWith("Return")) {
            debugger;
        }
        else if (ref.resolvedApiItem?.displayName.startsWith("props")) {
            debugger;
        }
        else if (ref.resolvedApiItem?.displayName.startsWith("context")) {
            debugger;
        }
        else {

        }
        return `|${member.displayName}| | |`
    }).join("\n");
}

function handleCompositeParams<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext>(item: readonly Parameter[], context: C) {
    console.assert(item.length == 1);
    console.assert(context.isCompositeFunction);
    const param = item[0];
    const typeTokens = param.parameterTypeExcerpt.spannedTokens.filter(token => token.kind == "Reference");
    console.assert(typeTokens.length == 1);
    const typeToken = typeTokens[0];
    const typeRef = doReference(typeToken.canonicalReference, context);
    console.assert(!!typeRef.resolvedApiItem, typeRef.errorMessage);
    const type = typeRef.resolvedApiItem as ApiInterface;




    console.assert(type.kind == "Interface");
    let allExtended = recursiveExtends(type, type, context); //type.extendsTypes.flatMap(({ excerpt: { spannedTokens } }) => { return spannedTokens.filter(token => token.kind == "Reference" && token.text.endsWith("Parameters")) }).map(token => doReference(token.canonicalReference, context));

    let extendsString = handleCompositeParamsExtends(type, context);
    let tableString = handleCompositeParamsMembers(type, { ...context, inTable: true });
    
    return `
${doHeader(type.displayName, context)}
${extendsString.length > 0 ? `<small>extends ${extendsString.join(",")}</small>` : ``}
${tableString.length > 0 ? `|Member|Type|Description|
|---------|----|-----------|
${tableString}` : extendsString.length? "No other parameters are defined other than whats been extended from" : "No parameters are defined"}`;
}

function handleParams<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext>(item: readonly Parameter[], { headerLevel, ...context }: C) {
    if (context.isCompositeFunction) {
        return handleCompositeParams(item, { ...context, headerLevel: headerLevel + 1 });
    }
    return `
|Parameter|Type|Description|
|---------|----|-----------|
${item.map(param => handleParam(param, context)).join("\n")}
`
}

function handleParam<C extends ModelContext & ApiContext>(item: Parameter, context: C) {
    const refs = item.parameterTypeExcerpt.tokens.slice(item.parameterTypeExcerpt.tokenRange.startIndex, item.parameterTypeExcerpt.tokenRange.endIndex).map(token => {
        switch (token.kind) {
            case "Reference":
                const ref = doReference(token.canonicalReference, context);
                return { text: token.text, errorMessage: ref.errorMessage, resolvedApiItem: ref.resolvedApiItem };


            default:
                debugger;
            // Intentional fall-through
            case "Content":
                return { text: token.text, errorMessage: null, resolvedApiItem: null }
        }
    });

    let column1 = item.name;
    let column2 = refs.map(ref => ref.resolvedApiItem ? doLink(ref.text, ref.resolvedApiItem) : ref.text).join("");
    let column3 = item.tsdocParamBlock?.content.nodes.map(node => docNodeCommentInParams(node));

    return `|${column1}|${column2}|${column3}|`
}

function docNodeCommentInParams(d: DocNode) {
    switch (d.kind) {
        case "Paragraph":
            return (d as DocParagraph).nodes.map(docNodeCommentInParamsNode)
        default:
            debugger;
            return "";
    }
}

function docNodeCommentInParamsNode(d: DocNode) {
    switch (d.kind) {
        case "PlainText":
            return (d as DocPlainText).text;
        case "SoftBreak":
            return " ";
        default:
            debugger;
            return "";
    }
}