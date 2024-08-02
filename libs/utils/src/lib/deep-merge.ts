/**
 * Deeply merges the properties of the source objects into the target object.
 * @param target - The target object to be updated.
 * @param sources - The source objects whose properties will be merged into the target object.
 * @returns The updated target object.
*/
export function deepMerge<T>(target: T, source: Partial<T>): T {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (source[key] instanceof Object && target[key] instanceof Object) {
        target[key] = deepMerge(target[key] as any, source[key] as any) as any;
      } else {
        target[key] = source[key] as any;
      }
    }
  }
  return target;
}

