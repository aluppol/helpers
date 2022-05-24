type GenericObject<T = any> = {
  [x: string]: T;
};

type NotIncludedType<T extends GenericObject, K extends keyof T> = {
  [Key in keyof T as Exclude<Key, K>]: T[Key]
}

export function sanitizeEntity<T extends GenericObject, K extends keyof T>(entity: T, propsToOmit: K[]): NotIncludedType<T, K> {
  const result = { ...entity };
  propsToOmit.forEach((key) => {
    if ((result as T)[key]) {
      delete (result as T)[key];
    }
  });
  return result;
}
