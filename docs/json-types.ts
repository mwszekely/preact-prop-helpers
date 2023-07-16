
interface Api_Base<T extends string> {
    kind: T;
}

interface Api_BaseReferencable<T extends string> extends Api_Base<T> {
    canonicalReference: ApiCanonicalReference;
}

interface Api_BaseKeyable<T extends string> extends Api_BaseReferencable<T> {
    displayName: string;
    containerKey: string;
    tsdocComment?: ApiComment;
}

interface Api_BaseEntryPointMember {
    isExported: boolean;
    name: string;
}

export interface ApiPackage extends Api_BaseKeyable<"Package"> {
    name: string;
    preserveMemberOrder: boolean;
    entryPoints: readonly ApiEntryPoint[];
}

interface ApiEntryPoint extends Api_BaseKeyable<"EntryPoint"> {
    importPath: string;
    name: string;
    members: readonly EntryPointMember[];
}

interface ApiExcerpt {
    isEmpty: boolean;
    text: string;
    spannedTokens: readonly ApiExcerptToken[];
    tokenRange: TokenSequence;
}
type ApiExcerptToken = ApiExcerptToken_Content | ApiExcerptToken_Reference;
interface ApiExcerptToken_Content extends Api_Base<"Content"> {
    text: string;
}
interface ApiExcerptToken_Reference extends Api_BaseReferencable<"Reference"> {
    text: string;
}

interface Api_BaseFunctionish {
    overloadIndex: number;
    parameters: readonly ApiParameter[];
    typeParameters: readonly TypeParameters[];
}

interface Api_WithSourceLocation {
    sourceLocation: SourceLocation;
    excerpt: ApiExcerpt;
    excerptTokens: readonly ApiExcerptToken[];
}


interface ApiFunction extends Api_BaseEntryPointMember, Api_BaseKeyable<"Function">, Api_BaseFunctionish, Api_WithSourceLocation {
    releaseTag: number;
    returnTypeExcerpt: ApiExcerpt;    
}

interface ApiVariable extends Api_BaseEntryPointMember, Api_BaseKeyable<"Variable">, Api_WithSourceLocation {
    isReadonly: boolean;
    members: readonly never[];
    fileUrlPath: string;
    releaseTag: number;
    variableTypeExcerpt: ApiExcerpt;
}

interface ApiEnum extends Api_BaseEntryPointMember, Api_BaseKeyable<"Enum">, Api_WithSourceLocation {
    members: readonly ApiEnumMember[];
    fileUrlPath: string;
    releaseTag: number;
    preserveMemberOrder: boolean;
}

interface ApiEnumMember extends Api_BaseKeyable<"EnumMember"> {
    name: string;
    releaseTag: number;
    initializerExcerpt: ApiExcerpt;
    members: readonly never[];
    sourceLocation: SourceLocation;
    excerpt: ApiExcerpt;
    excerptTokens: readonly ApiExcerptToken[];
}

interface ApiClass extends Api_BaseEntryPointMember, Api_BaseKeyable<"Class">, Api_WithSourceLocation {
    isAbstract: boolean;
    releaseTag: number;
    typeParameters: readonly TypeParameters[];
    members: readonly ApiClassMember[];
    fileUrlPath: string;
    extendsType: { excerpt: ApiExcerpt; };
    implementsTypes: readonly { excerpt: ApiExcerpt; }[];
    preserveMemberOrder: boolean;
}

type ApiClassMember = ApiConstructor | ApiProperty | ApiMethod;

interface ApiConstructor extends Api_BaseKeyable<"Constructor">, Api_WithSourceLocation {
    members: readonly never[];
    releaseTag: number;
    isProtected: boolean;
    parameters: readonly ApiParameter[];
    overloadIndex: number;
}



interface ApiMethod extends Api_BaseKeyable<"Method">, Api_BaseFunctionish, Api_WithSourceLocation {
    name: string;
    members: readonly never[]
    releaseTag: number;
    isOptional: boolean;
    isAbstract: boolean;
    isStatic: boolean;
    isProtected: boolean;
    returnTypeExcerpt: ApiExcerpt;
}

interface ApiProperty extends Api_BaseKeyable<"Property">, Api_WithSourceLocation {
    members: readonly never[];
    releaseTag: number;
    isEventProperty: boolean;
    isOptional: boolean;
    isAbstract: boolean;
    isStatic: boolean;
    isProtected: boolean;
    isReadonly: boolean;
    propertyTypeExcerpt: ApiExcerpt;
    name: string;
}


interface ApiTypeAlias extends Api_BaseKeyable<"TypeAlias">, Api_WithSourceLocation {
    fileUrlPath: string;
    isExported: boolean;
    members: readonly never[];
    name: string;
    releaseTag: number;
    typeExcerpt: ApiExcerpt;
    typeParameters: readonly TypeParameters[];
}

interface ApiInterface extends Api_BaseEntryPointMember, Api_BaseKeyable<"Interface">, Api_WithSourceLocation {
    fileUrlPath: string;
    members: readonly ApiInterfaceMember[];
    releaseTag: number;
    typeParameters: readonly TypeParameters[];
    extendsTypes: readonly { excerpt: ApiExcerpt; }[];
    preserveMemberOrder: boolean;
}

type ApiInterfaceMember = ApiPropertySignature | ApiMethodSignature;

interface ApiPropertySignature extends Api_BaseKeyable<"PropertySignature">, Api_WithSourceLocation {
    members: readonly never[];
    releaseTag: number;
    isEventProperty: boolean;
    isOptional: boolean;
    isReadonly: boolean;
    propertyTypeExcerpt: ApiExcerpt;
    name: string;
}

interface ApiMethodSignature extends Api_BaseKeyable<"MethodSignature">, Api_WithSourceLocation, Api_BaseFunctionish {
    members: readonly never[];
    releaseTag: number;
    returnTypeExcerpt: ApiExcerpt;
    isOptional: boolean;
    name: string;
}

interface TypeParameters {
    constraintExcerpt: ApiExcerpt;
    defaultTypeExcerpt: ApiExcerpt;
    isOptional: boolean;
    name: string;
    tsdocTypeParamBlock?: ApiParamBlock;
}

interface ApiParamBlock extends Api_Base<"ParamBlock"> {
    parameterName: string;
    content: ApiParamBlockSection;
    blockTag: ApiBlockTag;
}

interface SourceLocation {
    a?: never;
}

interface ApiParameter {
    isOptional: boolean;
    name: string;
    parameterTypeExcerpt: ApiExcerpt;
    tsdocParamBlock?: ApiParamBlock;
}

interface ApiParamBlock extends Api_Base<"ParamBlock"> {
    parameterName: string;
    content: ApiParamBlockSection;
    blockTag: ApiBlockTag;
}

interface ApiBlockTag extends Api_Base<"BlockTag"> {
    tagName: `@${string}`;
}

export interface ApiParamBlockSection extends Api_Base<"Section"> {
    nodes: readonly (ApiParamBlockSectionParagraph | ApiParamBlockSectionFencedCode)[];
}

interface ApiParamBlockSectionParagraph extends Api_Base<"Paragraph"> {
    nodes: readonly ApiParamBlockSectionNode[];
}

interface ApiParamBlockSectionFencedCode extends Api_Base<"FencedCode"> {
    language: string;
    code: string;
}

interface ApiDeclarationReference extends Api_Base<"DeclarationReference"> {
    memberReferences: readonly MemberReference[];
}

export interface MemberReference extends Api_Base<"MemberReference"> {
    hasDot: boolean;
    memberIdentifier: MemberIdentifier;
}

export interface MemberIdentifier extends Api_Base<"MemberIdentifier"> {
    identifier: string;
    hasQuotes: boolean;
}



export type ApiParamBlockSectionNode = ApiParamBlockSectionNodePlainText | ApiParamBlockSectionNodeLinkTag | ApiParamBlockSectionNodeCodeSpan | ApiParamBlockSectionFencedCode | ApiParamBlockSectionNodeSoftBreak | ApiParamBlockSectionNodeErrorText;

interface ApiParamBlockSectionNodePlainText extends Api_Base<"PlainText"> {
    text: string;
    textExcerpt: TokenSequence
}
interface ApiParamBlockSectionNodeCodeSpan extends Api_Base<"CodeSpan"> {
    code: string;
}

interface ApiParamBlockSectionNodeSoftBreak extends Api_Base<"SoftBreak"> {
}

interface ApiParamBlockSectionNodeLinkTag extends Api_Base<"LinkTag"> {
    codeDestination: ApiDeclarationReference;
    tagName: `@link`;
    linkText?: string;
}

interface ApiParamBlockSectionNodeErrorText extends Api_Base<"ErrorText"> {
    errorLocation: TokenSequence;
    errorMessage: string;
    messageId: string;
    text: string;
    textExcerpt: TokenSequence;
}

interface TokenSequence {
    startIndex: number;
    endIndex: number;
}

type EntryPointMember = ApiFunction | ApiEnum | ApiVariable | ApiTypeAlias | ApiInterface | ApiClass;


interface ApiComment extends Api_Base<"Comment"> {
    summarySection: ApiParamBlockSection;
    typeParams: ApiParamCollection;
    seeBlocks: readonly ApiBlock[];
    params: ApiParamCollection;
    remarksBlock?: ApiBlock;
    summaryBlock?: ApiParamBlockSection;
    modifierTagSet: {
        nodes: readonly ApiBlockTag[];
    }
    customBlocks: readonly ApiBlock[];
    returnsBlock?: ApiBlock;
}

export interface ApiBlock extends Api_Base<"Block"> {
    blockTag: ApiBlockTag;
    content: ApiParamBlockSection;
}

interface ApiParamCollection extends Api_Base<"ParamCollection"> {
    blocks: readonly ApiTypeParamBlock[];
    count: number;
}

interface ApiTypeParamBlock extends Api_Base<"ParamBlock"> {
    parameterName: string;
    content: ApiParamBlock;
    blockTag: ApiBlockTag;
}

interface ApiCanonicalReference {
    isEmpty: boolean;
    source: string;
    navigation?: string;
    symbol?: string;
}


