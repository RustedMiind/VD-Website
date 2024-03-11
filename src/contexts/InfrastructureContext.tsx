import { useState, createContext, useEffect } from "react";
import axios from "axios";
import api from "methods/api";

// * create infrastructure context
export const InfrastructureContext = createContext<InfrastructureContextType>({
  electronServicesLinks: [],
});
// * prepare our provider
function InfrastructureContextProvider({ children }: PropsType) {
  const [electronServicesLinks, setElectronServicesLinks] = useState<string[]>(
    []
  );

  useEffect(() => {
    axios
      .get<{ services: string[] }>(api("employee/electronic-services"))
      .then(({ data }) => {
        console.log("data?.services", data?.services);
        setElectronServicesLinks(data?.services);
      })
      .catch((err) => {
        console.log(
          "Error in fetch data in InfrastructureContextProvider:",
          err
        );
      });
  }, []);
  return (
    <InfrastructureContext.Provider value={{ electronServicesLinks }}>
      {children}
    </InfrastructureContext.Provider>
  );
}

// * define our types
type InfrastructureContextType = {
  electronServicesLinks: string[];
};
type WorkType = {
  id: number;
  name: string;
};
type subType = {
  id: number;
  direct_entry_type_id: number;
  name: string;
};

type PropsType = { children: React.ReactNode };

export default InfrastructureContextProvider;
