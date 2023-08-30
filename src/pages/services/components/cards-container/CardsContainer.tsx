import "./cards-container.scss";
import { ServicesSectionType } from "redux/reducers/servicesSlice";
import ServiceCard from "./ServiceCard";

function ServicesCardsContainer(props: PropsType) {
  return (
    <div className={`services-cards-section  tight-section  ${props.addClass}`}>
      <div className="service-section-about">
        <h3>{props.service.title}</h3>
        <p>{props.service.description}</p>
      </div>
      <div className="services-cards-container2">
        {props.service.services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
}

type PropsType = {
  service: ServicesSectionType;
  addClass: string;
};
export default ServicesCardsContainer;
