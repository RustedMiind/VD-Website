import {
  ArrowDownLeftCircleFill,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import { ServiceType } from "redux/reducers/servicesSlice";

function ServiceCard(props: PropsType) {
  return (
    <div className="service-card-2">
      <div className="card-head">
        <h4>{props.service.name}</h4>
      </div>
      <div className="service-card-content">
        <p>{props.service.description}</p>
      </div>
      <NavLink
        to={props.service.id.toString()}
        className="service-link link-with-arrow"
      >
        المزيد
        <ArrowLeftCircleFill />
      </NavLink>
    </div>
  );
}

type PropsType = {
  service: ServiceType;
};

export default ServiceCard;
