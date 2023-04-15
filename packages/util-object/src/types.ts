export type ESPropertyKey = symbol | string | number /* | bigint */;

/**
 * Safer version of `Function` which should not be called.
 * Every function should be assignable to this, but this should not be assignable to every function.
 */
export type AnyFunction = (...args: never[]) => void;
export type AnyConstructor = new (...args: unknown[]) => unknown;

export type PropertyDescriptorMap = Record<string, PropertyDescriptor>;
