export interface ItemSubByKey {
  [key: string]: number;
}

export function sumByKey(items: ItemSubByKey[], key: string): number {
  return items.reduce((acc, item) => acc + item[key], 0);
}

export const sum = function (arr: number[]) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};
