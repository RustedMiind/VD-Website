import { ServiceType } from "redux/reducers/servicesSlice";
import "./circular-shape.scss";
import shape1 from "assets/images/cicular-shape/HalfCircle1.png";
import shape2 from "assets/images/cicular-shape/HalfCircle2.png";
import shape3 from "assets/images/cicular-shape/HalfCircle3.png";
import shape4 from "assets/images/cicular-shape/HalfCircle4.png";
import shape5 from "assets/images/cicular-shape/HalfCircle5.png";
import shape6 from "assets/images/cicular-shape/HalfCircle6.png";
import repeatArr from "methods/repeatArr";
import { NavLink } from "react-router-dom";
const bi = 3.14159;
const images = repeatArr([shape1, shape2, shape3, shape4, shape5, shape6], 2);
function CircularShape(props: PropsType) {
  let data = props.services.slice(0, 9);
  if (props.services.length < 5) {
    data = repeatArr(props.services, 5).slice(0, 5);
  }
  const count = data.length,
    rotationAngle = 360 / count,
    radiusLength = 16 * 26.25,
    circumference = 2 * bi * radiusLength;
  const itemWidth = circumference / count;
  return (
    <div
      className="circle-test"
      style={{ width: radiusLength * 2, height: radiusLength * 2 }}
    >
      {data.map((item, index) => (
        <div
          className="item"
          style={{
            transform: `rotate(${rotationAngle * index}deg)`,
            width: itemWidth,
          }}
        >
          <div className="top-image">
            <img src={images[index]} alt="" />
            <div
              className="content"
              style={{ transform: `rotate(-${rotationAngle * index}deg)` }}
            >
              <h4 className="item-title">{item.name}</h4>
              <p>{item.description}</p>
              <NavLink
                to={item.id.toString()}
                className="service-link link-with-arrow"
              >
                المزيد
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

type PropsType = {
  services: ServiceType[];
};

export default CircularShape;
