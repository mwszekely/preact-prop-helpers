import { DocComment } from "@microsoft/tsdoc";
import { } from "map-and-set-extensions";
import { ApiContext, ModelContext, TrackingContext, doDocSection } from "./readme-gen-shared.js";


export function generateReadme<C extends ApiContext & ModelContext>(packageDocumentation: DocComment, { api, model, ...c }: C) {
    let context = { 
        headerLevel: 3, 
        api, 
        model, 
        inTable: false, 
        nextLinkIsInclude: false, 
        documented: new Set(), 
        referenced: new Set(), ...c 
    } satisfies  TrackingContext & ApiContext & ModelContext;
    
    let ret = doDocSection(packageDocumentation.summarySection, context);

    let linksMissingDocumentation = "";
    for (let ref of context.referenced) {
        if (!context.documented.has(ref))
            linksMissingDocumentation += `\n##### ${ref}`
    }
    

    return `
${ret}

## The following items are missing their documentation (or should not have been linked to):

${linksMissingDocumentation}
`
}

