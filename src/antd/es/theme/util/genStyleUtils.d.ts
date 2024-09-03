import type { AliasToken, ComponentTokenMap } from '../interface';
export declare const genStyleHooks: <C extends keyof ComponentTokenMap>(component: C | [C, string], styleFn: import("@ant-design/cssinjs-utils").GenStyleFn<ComponentTokenMap, AliasToken, C>, getDefaultToken?: import("@ant-design/cssinjs-utils").GetDefaultToken<ComponentTokenMap, AliasToken, C> | undefined, options?: {
    resetStyle?: boolean;
    resetFont?: boolean;
    deprecatedTokens?: [keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C], undefined>, keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C], undefined>][] | undefined;
    unitless?: (keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C], undefined> extends infer T extends keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<CompTokenMap, AliasToken>[C_1], undefined> ? { [key in T]: boolean; } : never) | undefined;
    clientOnly?: boolean;
    order?: number;
    injectStyle?: boolean;
} | undefined) => (prefixCls: string, rootCls?: string) => readonly [(node: import("react").ReactElement) => import("react").ReactElement, string, string], genComponentStyleHook: <C_2 extends keyof ComponentTokenMap>(componentName: C_2 | [C_2, string], styleFn: import("@ant-design/cssinjs-utils").GenStyleFn<ComponentTokenMap, AliasToken, C_2>, getDefaultToken?: import("@ant-design/cssinjs-utils").GetDefaultToken<ComponentTokenMap, AliasToken, C_2> | undefined, options?: {
    resetStyle?: boolean;
    resetFont?: boolean;
    deprecatedTokens?: [keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C_2], undefined>, keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C_2], undefined>][] | undefined;
    clientOnly?: boolean;
    order?: number;
    injectStyle?: boolean;
    unitless?: (keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C_2], undefined> extends infer T_2 extends keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<CompTokenMap, AliasToken>[C_2_1], undefined> ? { [key_2 in T_2]: boolean; } : never) | undefined;
} | undefined) => (prefixCls: string, rootCls?: string) => import("@ant-design/cssinjs-utils/lib/interface").UseComponentStyleResult, genSubStyleComponent: <C_1 extends keyof ComponentTokenMap>(componentName: C_1 | [C_1, string], styleFn: import("@ant-design/cssinjs-utils").GenStyleFn<ComponentTokenMap, AliasToken, C_1>, getDefaultToken?: import("@ant-design/cssinjs-utils").GetDefaultToken<ComponentTokenMap, AliasToken, C_1> | undefined, options?: {
    resetStyle?: boolean;
    resetFont?: boolean;
    deprecatedTokens?: [keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C_1], undefined>, keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C_1], undefined>][] | undefined;
    clientOnly?: boolean;
    order?: number;
    injectStyle?: boolean;
    unitless?: (keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<ComponentTokenMap, AliasToken>[C_1], undefined> extends infer T_1 extends keyof Exclude<import("@ant-design/cssinjs-utils").OverrideTokenMap<CompTokenMap, AliasToken>[C_1_1], undefined> ? { [key_1 in T_1]: boolean; } : never) | undefined;
} | undefined) => import("react").FunctionComponent<import("@ant-design/cssinjs-utils/lib/util/genStyleUtils").SubStyleComponentProps>;
