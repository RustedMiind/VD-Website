interface kv<key, val> {
  key: key;
  value: val;
}

export type SettingValueType =
  | kv<"name", string>
  | kv<"slogan", string>
  | kv<
      "social",
      {
        facebook: string | undefined;
        instagram: string | undefined;
        snapchat: string | undefined;
      }
    >
  | kv<"emails", string[]>
  | kv<"phones", string[]>
  | kv<"whatsapp", string[]>
  | kv<
      "address",
      {
        address: string;
        link: string;
      }[]
    >
  | kv<"logo", string>
  | kv<"name", [string]>;

export function getValueByKey(arr: SettingValueType[] | undefined) {
  console.log("arr ----", arr, typeof arr);
  if (typeof arr === "object") {
    return function (key: string) {
      const find = arr.find((element) => {
        if (element.key === key) {
          return true;
        } else {
        }
      });
      return find?.value;
    };
  } else console.log("Get value Called");
  return function () {
    return "";
  };
}
