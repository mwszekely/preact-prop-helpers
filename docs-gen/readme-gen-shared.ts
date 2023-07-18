
import { ApiItem, ApiModel, ExcerptToken } from "@microsoft/api-extractor-model";
import { DocBlock, DocCodeSpan, DocDeclarationReference, DocInlineTag, DocLinkTag, DocNode, DocParagraph, DocPlainText, DocSection, DocSoftBreak } from "@microsoft/tsdoc";
import { ApiFunction, handleReadmeIncludeFunction } from "./readme-gen-function.js";

export interface HeaderLevelContext { headerLevel: number }
export interface ApiContext { api: ApiItem }
export interface ModelContext { model: ApiModel }
export interface InTableContext { inTable: boolean; }
export interface InCodeSpanContext { inCodeSpan?: boolean; }
export interface IncludeContext { nextLinkIsInclude: boolean; } // Caution: This one is mutable

export function doHeader<C extends HeaderLevelContext>(value: string, context: C) {
    return `${"#".repeat(context.headerLevel)} ${value}`;
}

export function doLink(linkText: string | null | undefined, resolvedApiItem: ApiItem | undefined | null) {
    if (resolvedApiItem == null)
        return `${linkText || "<missing reference>"}`
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
    let spaceStart = codeText.startsWith("`")? " " : "";
    let spaceEnd = codeText.endsWith("`")? " " : "";

    return `${delimiter}${spaceStart}${codeText}${spaceEnd}${delimiter}`;
}

export function doString<C extends Partial<InTableContext>>(string: string, context: C) {
    if (context.inTable) {
        return string.replaceAll("|", "\\|").replaceAll("\n", "<br />");
    }
    else {
        return string;
    }
}

export function doRemarks<C extends Partial<InTableContext> & ApiContext & ModelContext & Partial<IncludeContext> & HeaderLevelContext>(section: DocBlock | null | undefined, context: C) {
    return section?.content.nodes.map(node => { return doDocNode(node, context); }).join(!context.inTable ? "\n\n" : "<br />") ?? "";
}

export function doDocNode<C extends Partial<InTableContext> & ApiContext & ModelContext & Partial<IncludeContext> & HeaderLevelContext>(node: DocNode | null | undefined, context: C) {
    if (!node)
        return "";

    switch (node?.kind) {
        case "Paragraph":
            const p = (node as DocParagraph);
            return p.nodes.map(paragraph => {
                switch (paragraph.kind) {
                    case "PlainText":
                        const plainText = paragraph as DocPlainText;
                        return plainText.text;
                    case "SoftBreak":
                        const softBreak = paragraph as DocSoftBreak;
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
                                return handleReadmeInclude(resolved.resolvedApiItem, context);
                            }
                        }
                        else {
                            return doLink(linkTag.linkText, resolved.resolvedApiItem);
                        }
                    case "InlineTag":
                        const inlineTag = paragraph as DocInlineTag;
                        switch (inlineTag.tagNameWithUpperCase) {
                            case "@INCLUDE":
                                console.assert(context.nextLinkIsInclude == false);
                                context.nextLinkIsInclude = true;
                                break;
                            default:
                                debugger;
                        }
                        return "\n\n";

                    case "CodeSpan":
                        const codeSpan = paragraph as DocCodeSpan;
                        return `\`${codeSpan.code}\``;
                    default:
                        debugger;
                        return "";
                }
            }).join("").trim();
        default:
            debugger;
            break;

    }
}

export function doSummary<C extends Partial<InTableContext> & ApiContext & ModelContext & Partial<IncludeContext> & HeaderLevelContext>(section: DocSection | null | undefined, context: C) {
    return section?.nodes.map(node => { return doDocNode(node, context); }).join(!context.inTable ? "\n\n" : "<br />") ?? "";
}

function handleReadmeInclude<C extends HeaderLevelContext & ModelContext & ApiContext>(item: ApiItem, context: C): string {
    switch (item.kind) {
        case "Function":
            return handleReadmeIncludeFunction(item as ApiFunction, context);

        default:
            debugger;
            return "";
    }
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
