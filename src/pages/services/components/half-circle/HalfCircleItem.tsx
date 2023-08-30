import { NavLink } from "react-router-dom";
import { ServiceType } from "redux/reducers/servicesSlice";

function HalfCircleItem(props: PropsType) {
  return (
    <NavLink
      to={`/services/${props.service.id}`}
      className="half-circle-item"
      style={{ marginBottom: props.marginBottom }}
    >
      <h5 className="circle-title">{props.service.name}</h5>
      <p className="circle-describtion">{props.service.description}</p>
      <div className={`number-circle ${props.color}`}>{props.index}</div>
    </NavLink>
  );
}

type PropsType = {
  marginBottom: number;
  service: ServiceType;
  color?: "light-blue" | "orange" | "light-orange";
  index: number;
};
export default HalfCircleItem;
