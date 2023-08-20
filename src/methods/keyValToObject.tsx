export interface KeyValue {
  key: string;
  value: unknown;
}

export function createObjectFromKeyValueArray(
  array: KeyValue[]
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  array.forEach((obj: KeyValue) => {
    newObj[obj.key] = obj.value;
  });
  return newObj;
}
