import repeatArr from "methods/repeatArr";
import HalfCircleItem from "./HalfCircleItem";
import "./half-circle-container.scss";
import { ServicesSectionType } from "redux/reducers/servicesSlice";

function HalfCircleContainer(props: PropsType) {
  let services = repeatArr(props.service.services, 5).slice(0, 5);

  return (
    <div
      className={`services-cards-section half-circle-section  tight-section  ${props.addClass}`}
    >
      <div className="half-circle-container">
        <div className="service-section-about">
          <h3>{props.service.title}</h3>
          <p>{props.service.description}</p>
        </div>
        <div className="half-circle-shape">
          <div className="half-circle-items-container">
            <HalfCircleItem
              service={services[0]}
              marginBottom={-225}
              index={4}
            />
            <HalfCircleItem
              service={services[1]}
              marginBottom={-50}
              index={2}
              color="light-blue"
            />
            <HalfCircleItem
              service={services[2]}
              marginBottom={0}
              index={1}
              color="orange"
            />
            <HalfCircleItem
              service={services[3]}
              marginBottom={-50}
              index={3}
              color="light-orange"
            />
            <HalfCircleItem
              service={services[4]}
              marginBottom={-225}
              index={5}
            />
          </div>

          <div className="large-circle">{/* <h4>خدمات التصميم</h4> */}</div>
        </div>
      </div>
    </div>
  );
}

type PropsType = {
  service: ServicesSectionType;
  addClass: string;
};

export default HalfCircleContainer;
