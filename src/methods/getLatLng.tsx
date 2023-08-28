export type LatLngType = {
  lat: number;
  lng: number;
};

export function getLatLngFromStr(str: string): LatLngType {
  const split = str.split(",");
  return {
    lat: parseFloat(split[0]),
    lng: parseFloat(split[1]),
  };
}
