export type StringObject = { [key: string]: string };
export type KeyValueType = { key: string; value: string };

export function objectToArray(obj: StringObject): KeyValueType[] {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
}
