import { ApiFunction } from "@microsoft/api-extractor-model";
import { DocLinkTag, DocParagraph } from "@microsoft/tsdoc";
import { handleParams, handleReturn } from "./readme-gen-function-params.js";
import { ApiContext, HeaderLevelContext, ModelContext, TrackingContext, doDocBlock, doDocNode, doDocSection, doHeader, doReference } from "./readme-gen-shared.js";

export interface IsCompositeContext {
    isCompositeFunction: boolean;
}


export function handleReadmeIncludeFunction<C extends HeaderLevelContext & ApiContext & ModelContext & TrackingContext>(item: ApiFunction, context: C): string {
    let isCompositeFunction = false;

    if (item.tsdocComment?.modifierTagSet.hasTagName("@compositeParams")) {
        isCompositeFunction = true;
    }

    let childIncludes = new Map<string, ApiFunction | null>();
    let examples = new Array<string>();
    for (let cb of item.tsdocComment?.customBlocks ?? []) {
        if (cb.blockTag.tagName === '@hasChild') {
            console.assert(cb.content.nodes.length === 1, "A @hasChild tag must be exactly one block-paragraph long with only a @link tag.");
            let p = cb.content.nodes[0] as DocParagraph;
            let links: DocLinkTag[] = [];
            for (let node of p.nodes) {
                if (node.kind === 'SoftBreak') continue;
                if (node.kind === 'LinkTag') links.push(node as DocLinkTag);
                else console.assert(false, "A @hasChild tag must be exactly one block-paragraph long with only a @link tag.");
            }

            links.forEach(link => {
                const ref = doReference(link.codeDestination, context);
                if (!ref.resolvedApiItem) {
                    debugger;
                    console.assert(false);
                }
                childIncludes.set(ref.errorMessage || ref.resolvedApiItem?.displayName || "", ref.resolvedApiItem as ApiFunction)
            })
        }
        else if (cb.blockTag.tagNameWithUpperCase == '@EXAMPLE') {
            const [header, ...example] = cb.content.nodes;
            examples.push(`**${doDocNode(header, context)}**

${example.map(node => doDocNode(node, context)).join("\n")}`);
        }
        else {
            debugger;
            console.assert(false, `Unknown block-level tag "${cb.blockTag.tagName}"`)
        }
    }

    return `${doHeader(item.displayName, context)}

${doDocSection(item.tsdocComment?.summarySection, context)}

${item.tsdocComment?.seeBlocks.length ? `**See also** ${item.tsdocComment?.seeBlocks.map(block => doDocBlock(block, context))}` : ''}

${handleParams(item.parameters, { ...context, api: item, isCompositeFunction })}

${handleReturn(item, { ...context, api: item, isCompositeFunction })}

${doDocBlock(item.tsdocComment?.remarksBlock, context)}

${examples}

${Array.from(childIncludes).map(([, func]) => { return func ? handleReadmeIncludeFunction(func, context) : "(Missing reference)" }).join("\n")}
`;
}

