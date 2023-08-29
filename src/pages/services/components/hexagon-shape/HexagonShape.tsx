import { NavLink } from "react-router-dom";
import "./hexagon-shape.scss";
import { ServiceType } from "redux/reducers/servicesSlice";

function HexagonShape(props: PropsType) {
  return (
    <div className={`hexagon-shape ${props.empty ? "empty" : ""}`}>
      {!props.empty && (
        <>
          <img className="shape" src={props.bgImg} alt="" />
          <div className={`content ${props.color}`}>
            <h5 className="title">{props.service.name}</h5>
            <p className="describtion">{props.service.description}</p>
            <NavLink
              to={props.service.id.toString()}
              className="service-link link-with-arrow"
            >
              المزيد
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

type PropsType = {
  bgImg: string;
  color?: "main" | "secondary";
  service: ServiceType;
  empty?: boolean;
};

export default HexagonShape;
