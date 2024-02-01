import axios from "axios";
import api from "methods/api";
import { isStringAllNumbers } from "methods/isStringAllNumbers";
import { KeyValueType, objectToArray } from "methods/objectToArray";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Design } from "types/Design/Design";

export const DesignContext = createContext<DesignContextType>({
  status: "none",
});

type DesignContextType = {
  design?: Design;
  attachmentsOptions?: KeyValueType[];
  status: StatusType;
};

export function DesignContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [design, setDesign] = useState<undefined | Design>(undefined);
  const [attachmentsOptions, setAttachmentsOptions] = useState<
    KeyValueType[] | undefined
  >(undefined);
  const [status, setStatus] = useState<StatusType>("none");
  const { designId } = useParams();
  useEffect(() => {
    setDesign(undefined);
    if (designId && isStringAllNumbers(designId)) {
      setStatus("loading");

      // Get Design Data
      axios
        .get<{ design: Design }>(api("client/design/" + designId))
        .then(({ data }) => {
          setDesign(data.design);
          setStatus("none");
        })
        .catch(() => {
          setStatus("error");
        });

      // Get AttachmentOptions
      if (!attachmentsOptions)
        axios
          .get<{
            attachments_type: StringObject;
            utilities_type: StringObject;
          }>(api("client/design/attachment-option"))
          .then(({ data }) => {
            setAttachmentsOptions(objectToArray(data.attachments_type));
          });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [designId]);

  return (
    <DesignContext.Provider value={{ design, attachmentsOptions, status }}>
      {children}
    </DesignContext.Provider>
  );
}

type StatusType = "loading" | "error" | "none";
type StringObject = { [key: string]: string };
