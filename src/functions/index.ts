/**
 * @param  {Object}   object Any type inherited from Object.
 * @return {string[]} Array of prototype constructor names
 */
export function introspect<O extends Object>(object: O): string[] {
    const parent = Object.getPrototypeOf(object);

    return parent ? [parent.constructor.name, ...introspect(parent)] : [];
}
