import type { GetDefaultToken } from '../../theme/internal';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
}
export declare const prepareComponentToken: GetDefaultToken<'Space'>;
declare const _default: (prefixCls: string, rootCls?: string) => readonly [(node: import("react").ReactElement) => import("react").ReactElement, string, string];
export default _default;
