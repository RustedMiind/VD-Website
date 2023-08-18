import { useEffect, useState } from "react";
import { ServiceType } from "redux/reducers/servicesSlice";

function ServicesSectionCard(props: PropsType) {
  const [index, setIndex] = useState<IndexStateType>({ value: 0, state: "ok" });
  const service = props.services[index.value];
  useEffect(() => {
    setTimeout(() => {
      setIndex({ ...index, state: "loading" });
      setTimeout(() => {
        setIndex({ state: "ok", value: props.index });
      }, 500);
    }, Math.floor(Math.random() * 500));
  }, [props.index, props.services]);
  return (
    <div
      className={`service-card-main-page  ${
        index.state === "loading" ? index.state : ""
      }`}
    >
      <h5 className="title">{service.name}</h5>
      <p className="describtion">{service.description}</p>
      <img src={service.image} alt="" className="service-image" />
    </div>
  );
}

type PropsType = {
  services: ServiceType[];
  index: number;
};
type IndexStateType = {
  value: number;
  state: "loading" | "ok";
};
export default ServicesSectionCard;
