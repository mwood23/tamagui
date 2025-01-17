import { Variable } from './createVariable.js';
type DeepTokenObject<Val extends string | number = any> = {
    [key: string]: Val | DeepTokenObject<Val>;
};
export type DeepVariableObject<A extends DeepTokenObject> = {
    [Key in keyof A]: A[Key] extends string | number ? Variable<A[Key]> : A[Key] extends DeepTokenObject ? DeepVariableObject<A[Key]> : never;
};
export declare const tokensKeysOrdered: WeakMap<object, any>;
export declare const createVariables: <A extends DeepTokenObject<any>>(tokens: A, parentPath?: string, isFont?: boolean) => DeepVariableObject<A>;
export {};
//# sourceMappingURL=createVariables.d.ts.map