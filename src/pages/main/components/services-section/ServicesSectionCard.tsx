import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ServiceType } from "redux/reducers/servicesSlice";

function ServicesSectionCard(props: PropsType) {
  const [index, setIndex] = useState<IndexStateType>({ value: 0, state: "ok" });
  const service = props.service;
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIndex({ ...index, state: "loading" });
  //     setTimeout(() => {
  //       setIndex({ state: "ok", value: props.index });
  //     }, 500);
  //   }, Math.floor(500));
  // }, [props.index, props.services]);
  return (
    <div
      className={`service-card-main-page  ${
        index.state === "loading" ? index.state : ""
      }`}
    >
      <NavLink to={`/services/${service.id}`}>
        <h5 className="title">{service.name}</h5>
      </NavLink>
      <p className="describtion">{service.description}</p>
      <div className="image-container-21-9 hover-image">
        <img src={service.image} alt="" />
      </div>
    </div>
  );
}

type PropsType = {
  service: ServiceType;
  index: number;
};
type IndexStateType = {
  value: number;
  state: "loading" | "ok";
};
export default ServicesSectionCard;
