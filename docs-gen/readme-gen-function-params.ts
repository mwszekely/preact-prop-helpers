import { ApiFunction, ApiInterface, ApiMethodSignature, ApiPropertySignature, Excerpt, Parameter } from "@microsoft/api-extractor-model";
import { IsCompositeContext } from "./readme-gen-function.js";
import { ApiContext, HeaderLevelContext, InCodeSpanContext, InTableContext, ModelContext, TrackingContext, doCodeSpan, doDocBlock, doDocSection, doHeader, doLink, doReference, doString } from "./readme-gen-shared.js";

interface PararamsOrReturnContext {
    funcMode: 'params' | 'return';
}

/**
 * Prints the parameters for the function in `context.api`.
 */
export function handleParams<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & TrackingContext>(item: readonly Parameter[], { headerLevel, ...context }: C) {
    const biggerContext = { ...context, headerLevel: headerLevel + 1 };

    if (context.isCompositeFunction) {
        return handleParamsComposite(item, biggerContext);
    }
    return `
|Parameter|Type|Description|
|---------|----|-----------|
${item.map(param => handleParamNonComposite(param, biggerContext)).join("\n")}
`
}

/**
 * Prints "boring" function parameters to a table
 */
function handleParamNonComposite<C extends ModelContext & ApiContext & HeaderLevelContext & TrackingContext>(item: Parameter, context: C) {
    const refs = item.parameterTypeExcerpt.tokens.slice(item.parameterTypeExcerpt.tokenRange.startIndex, item.parameterTypeExcerpt.tokenRange.endIndex).map(token => {
        switch (token.kind) {
            case "Reference":
                const ref = doReference(token.canonicalReference, context);
                return { text: token.text, errorMessage: ref.errorMessage, resolvedApiItem: ref.resolvedApiItem };


            default:
                // !! Intentional fall-through !!
                debugger;
            // !! Intentional fall-through !!
            case "Content":
                return { text: token.text, errorMessage: null, resolvedApiItem: null }
        }
    });

    let column1 = item.name;
    let column2 = refs.map(ref => ref.resolvedApiItem ? doLink(ref.text, ref.resolvedApiItem, context) : ref.text).join("");
    let column3 = doDocSection(item.tsdocParamBlock?.content, context);

    return `|${column1}|${column2}|${column3}|`
}

/**
 * Special handling for composite parameters
 */
function handleParamsComposite<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & TrackingContext>(item: readonly Parameter[], context: C) {

    // TODO: Lots and lots and lots of assumptions about how composite parameters are structured.
    // (take a shot for every load-bearing assert you see)
    console.assert(item.length == 1);
    console.assert(context.isCompositeFunction);
    const param = item[0];
    return handleParamOrReturnComposite(param.parameterTypeExcerpt, { ...context, funcMode: "params" });
}

export function handleReturn<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & TrackingContext>(item: ApiFunction, { headerLevel, ...context }: C) {
    if (context.isCompositeFunction) {
        return handleParamOrReturnComposite(item.returnTypeExcerpt, { ...context, headerLevel: headerLevel + 1, funcMode: "return" })
    }
    else {
        return `**Returns** ${doDocBlock(item.tsdocComment?.returnsBlock, { headerLevel: headerLevel + 1, ...context })}`
    }
}

function handleParamOrReturnComposite<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & PararamsOrReturnContext & TrackingContext>(typeExcerpt: Excerpt, context: C) {


    const typeTokens = typeExcerpt.spannedTokens.filter(token => token.kind == "Reference");
    console.assert(typeTokens.length == 1);
    const typeToken = typeTokens[0];
    const typeRef = doReference(typeToken.canonicalReference, context);
    console.assert(!!typeRef.resolvedApiItem, typeRef.errorMessage);
    const type = typeRef.resolvedApiItem as ApiInterface;




    console.assert(type.kind == "Interface");

    let extendsString = handleCompositeParamsExtends(type, context);
    let tableString = handleCompositeParamsMembers(type, { ...context, inTable: true });

    return `
${doHeader(type.displayName, context)}

${extendsString.length > 0 ? `<small>extends ${extendsString.join(", ")}</small>` : ``}

${tableString.length > 0 ? `|Member|Type|Description|
|---------|----|-----------|
${tableString}` : extendsString.length ? `Every member of \`${type.displayName}\` is inherited (see the interface${extendsString.length == 1 ? "" : "s"} it \`extends\` from).` : "This interface is empty."}`;
}




function handleCompositeParamsExtends<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & TrackingContext>(type: ApiInterface, context: C): string[] {
    console.assert(type.kind == "Interface");
    let allExtended = recursiveExtends(type, type, context);

    let extendsString = Array.from(allExtended).map(([, { errorMessage, resolvedApiItem }]) => { return doLink(errorMessage || resolvedApiItem?.displayName, resolvedApiItem, context) });
    return extendsString;
}
function handleCompositeParamsMembersSelf<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & Partial<InTableContext> & InCodeSpanContext & TrackingContext>(type: ApiInterface, context: C) {
    return type.members.map(member => {
        switch (member.kind) {
            case "MethodSignature":
                const method = (member as ApiMethodSignature);
                return `|.${method.displayName}${method.isOptional ? "?" : ""}|Function|${doDocSection(method.tsdocComment?.summarySection, context)}|`;
            case "PropertySignature":
                const property = (member as ApiPropertySignature);
                const typeExcerpt = property.propertyTypeExcerpt.text;
                let typeExcerptString = doCodeSpan(doString(typeExcerpt, context), context);
                return `|.${property.displayName}${property.isOptional ? "?" : ""}|\`${typeExcerptString}\`|${doDocSection(property.tsdocComment?.summarySection, context)}|`;
            default:
                debugger;
                return `|.${member.displayName}| | |`;
        }
    }).join("\n");

}

const RANK_SELF = 0;
const RANK_COMMON = 1;

function handleCompositeParamsMembers<C extends ModelContext & ApiContext & IsCompositeContext & HeaderLevelContext & InTableContext & InCodeSpanContext & PararamsOrReturnContext & TrackingContext>(type: ApiInterface, context: C) {
    return type.members.map((member): [number, string] => {

        // We return two values -- a number and a string.
        // The number is the sort index. 
        // We want to keep the most common and uninteresting items at the bottom,
        // and the unique items at the top.

        const ref = doReference(member.canonicalReference, context);
        if (ref.resolvedApiItem?.displayName.endsWith("Parameters")) {
            // TODO: Nearly identical to ReturnSelf, below
            let token = (ref.resolvedApiItem as ApiPropertySignature).excerptTokens[1];
            let type = doReference(token.canonicalReference, context);
            if (type.resolvedApiItem?.kind === "Interface" && type.resolvedApiItem.displayName.endsWith("ParametersSelf")) {
                return [RANK_SELF, handleCompositeParamsMembersSelf(type.resolvedApiItem as ApiInterface, context)];
            }
            else {
                debugger;
                console.assert(false, `The only allowed members of a composite param object are \`context\`, \`info\`, \`props\`*, and a member with a publicly exported *\`ParametersSelf\` type (instead of this, which is of type "${(member as ApiPropertySignature)?.excerptTokens?.slice(1).map(t => t.text).join("")}").`)
                return [RANK_SELF, `|${member.displayName}|Unknown|Unknown|`];
            }
        }
        else if (ref.resolvedApiItem?.displayName.endsWith("Return")) {
            // TODO: Nearly identical to ParametersSelf, above
            let token = (ref.resolvedApiItem as ApiPropertySignature).excerptTokens[1];
            let type = doReference(token.canonicalReference, context);
            if (type.resolvedApiItem?.kind === "Interface" && type.resolvedApiItem.displayName.endsWith("ReturnTypeSelf")) {
                return [RANK_SELF, handleCompositeParamsMembersSelf(type.resolvedApiItem as ApiInterface, context)];
            }
            else {
                debugger;
                console.assert(false, `The only allowed members of a composite return object are \`context\`, \`info\`, \`props\`*, and a member with a publicly exported *\`ReturnSelf\` type (instead of this, which is of type "${(member as ApiPropertySignature)?.excerptTokens?.slice(1).map(t => t.text).join("")}").`)
                return [RANK_SELF, `|${member.displayName}|Unknown|Unknown|`];
            }
        }
        else if (ref.resolvedApiItem?.displayName.startsWith("props")) {
            let description = "Spread these props onto the HTML element that will use this logic."
            if (description.endsWith("Stable"))
                description += " **This object and its properties will never change**.";

            switch (ref.resolvedApiItem.displayName) {
                case "props": break;
                case "propsStable": break;
                default: debugger; break;
            }
            return [RANK_COMMON, `|${ref.resolvedApiItem.displayName}|HTML props|${description}|`]
            debugger;
        }
        else if (ref.resolvedApiItem?.displayName.startsWith("context")) {
            const property = (ref.resolvedApiItem as ApiPropertySignature);
            const typeExcerpt = property.propertyTypeExcerpt.text;
            let typeExcerptString = doCodeSpan(doString(typeExcerpt, context), context);
            let description = '';
            if (context.funcMode == "params")
                description = "Functions and data that the parent has made available to each child. Retrieve it with \`useContext\`";
            else if (context.funcMode == "return")
                description = "Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`";
            return [RANK_COMMON, `|${property.displayName}|\`${typeExcerptString}\`|${description}|`]
        }
        else if (ref.resolvedApiItem?.displayName.startsWith("info")) {
            const property = (ref.resolvedApiItem as ApiPropertySignature);
            const typeExcerpt = property.propertyTypeExcerpt.text;
            let typeExcerptString = doCodeSpan(doString(typeExcerpt, context), context);
            return [RANK_COMMON, `|${property.displayName}|\`${typeExcerptString}\`|Data the child makes available to the parent. Passed to \`useManagedChild\`|`]
        }
        else {
            debugger;
        }
        return [RANK_COMMON, `|${member.displayName}| | |`]
    }).sort((lhs, rhs) => { return lhs[0] - rhs[0] }).map(([, str]) => str).filter(str => !!str).join("\n");
}


/*
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
}*/




/**
 * Helper function to decompose an `interface` into all the `interface`s that make it up
 * 
 * TODO: Janky. Like it returns a map, but recursively so there's a lot of copying things around. It's ***fine*** it's just janky.
 */
function recursiveExtends<C extends ApiContext & ModelContext>(root: ApiInterface, type: ApiInterface, context: C): Map<string, ReturnType<typeof doReference>> {
    let allExtended = type.extendsTypes.flatMap(({ excerpt: { spannedTokens } }) => {
        return spannedTokens.filter(token => token.kind == "Reference" && (token.text.endsWith("Parameters") || token.text.endsWith("ReturnType")))
    }).map(token => doReference(token.canonicalReference, context));
    if (allExtended.length == 0) {
        // TODO: Awkward bottom for the recursion
        // Basically, we only want to add ourselves to the extends train if we're *NOT* the only one in it.
        // I.E. LNCParameters extends RTIParameters, so RTIParameters is included there,
        // but also RTIParameters extends RTIParameters (kinda), and we don't want it there.
        //
        // That's what this is. It could be detangled a bit -- it's not very clean -- but this works.  
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
