import { Extractor, ExtractorConfig, ExtractorMessage, ExtractorMessageCategory } from "@microsoft/api-extractor";
import { ApiDocumentedItem, ApiEntryPoint, ApiFunction, ApiInterface, ApiItem, ApiModel, ApiPackage, ApiPropertySignature, Excerpt, ExcerptToken } from "@microsoft/api-extractor-model";
import { DocBlock, DocCodeSpan, DocComment, DocFencedCode, DocLinkTag, DocNode, DocParagraph, DocPlainText, DocSection, DocSoftBreak } from "@microsoft/tsdoc";
import { RecursiveMap } from "map-and-set-extensions";
import { dirname, join } from "path";
import { fileURLToPath } from 'url';
import { ApiContext, ModelContext, doSummary } from "./readme-gen-shared.js";

export { ApiDocumentedItem, ApiEntryPoint, ApiFunction, ApiInterface, ApiItem, ApiModel, ApiPackage, ApiPropertySignature, DocBlock, DocCodeSpan, DocComment, DocFencedCode, DocLinkTag, DocNode, DocParagraph, DocPlainText, DocSection, DocSoftBreak, Excerpt, ExcerptToken, Extractor, ExtractorConfig, ExtractorMessage, ExtractorMessageCategory, RecursiveMap, dirname, fileURLToPath, join };

export function generateReadme<C extends ApiContext & ModelContext>(packageDocumentation: DocComment, { api, model, ...c }: C) {


    let context = { headerLevel: 3, api, model, inTable: false, nextLinkIsInclude: false, ...c };


    let nextLinkIsInclude = false;
    return doSummary(packageDocumentation.summarySection, context);

    /*

.nodes.map(node => {
        switch (node.kind) {
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
                            if (nextLinkIsInclude) {
                                nextLinkIsInclude = false;
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
                                    console.assert(nextLinkIsInclude == false);
                                    nextLinkIsInclude = true;
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
                })
            default:
                debugger;
                return "";
        }
    }


     */
}

