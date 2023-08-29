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
        longLat: string;
      }[]
    >
  | kv<"logo", [string]>
  | kv<"name", [string]>
  | kv<"footer", string>
  | kv<
      "apps",
      {
        app_store_link: string;
        play_store_link: string;
      }
    >;

export function getValueByKey(arr: SettingValueType[] | undefined) {
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
  }

  return function () {
    return "";
  };
}
