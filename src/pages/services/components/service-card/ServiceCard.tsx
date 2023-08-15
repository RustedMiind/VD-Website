import { ServiceType } from "redux/reducers/servicesSlice";
import "./service-card.scss";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

function ServiceCard({ data }: PropsType) {
  return (
    <div className="service-card">
      <div className="image-container">
        <img src={data.image} alt="service" />
      </div>
      <div className="content">
        <h4>{data.name}</h4>
        <div className="describtion">{data.description}</div>
        <NavLink to={data.id.toString()} className="link-with-arrow">
          طلب الخدمة
          <ArrowLeftCircleFill />
        </NavLink>
      </div>
    </div>
  );
}

type PropsType = {
  data: ServiceType;
};

export default ServiceCard;
