import { ServiceType, ServicesSectionType } from "redux/reducers/servicesSlice";
import CircularShape from "../circular-shape/CircularShape";
import "./circle-container.scss";

function CircleContainer(props: PropsType) {
  return (
    <div className={`circle-container ${props.addClass}`}>
      <div className="service-section-about">
        <h3>{props.service.title}</h3>
        <p>{props.service.description}</p>
      </div>
      <CircularShape services={props.service.services} />
    </div>
  );
}

type PropsType = {
  service: ServicesSectionType;
  addClass: string;
};

export default CircleContainer;
