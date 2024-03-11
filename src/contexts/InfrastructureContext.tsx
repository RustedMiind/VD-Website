import { useState, createContext, useEffect } from "react";
import axios from "axios";
import api from "methods/api";

// * create infrastructure context
export const InfrastructureContext = createContext<InfrastructureContextType>({
  infrastructurePageName: "",
});
// * prepare our provider
function InfrastructureContextProvider({ children }: PropsType) {
  const [infrastructurePageName, setInfrastructurePageName] = useState("");

  useEffect(() => {
    axios
      .get<{ types: WorkTypes }>(api("employee/contract/types"))
      .then(({ data }) => {
        console.log("InfrastructureContextProvider Data:-", data);
        let n = Object.keys(data?.types).length;
        for (let i = 0; i < n; i++) {
          let _key = Object.keys(data?.types)[i];
          if (_key.includes("بني") && _key.includes("تحتي")) {
            setInfrastructurePageName(_key);
            break;
          }
        }
      })
      .catch((err) => {
        console.log(
          "Error in fetch data in InfrastructureContextProvider:",
          err
        );
      });
  }, []);
  return (
    <InfrastructureContext.Provider value={{ infrastructurePageName }}>
      {children}
    </InfrastructureContext.Provider>
  );
}

// * define our types
type InfrastructureContextType = {
  infrastructurePageName: string;
};
type WorkTypes = {
  id: string;
};
type PropsType = { children: React.ReactNode };

export default InfrastructureContextProvider;
