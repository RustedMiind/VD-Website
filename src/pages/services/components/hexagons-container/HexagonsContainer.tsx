import { ServiceType, ServicesSectionType } from "redux/reducers/servicesSlice";
import "./hexagons-container.scss";
import HexagonShape from "../hexagon-shape/HexagonShape";
import blueBottom from "assets/images/shapes/Shape Hexagon-Bottom.png";
import blueRight from "assets/images/shapes/Shape Hexagon-Right.png";
import blueTop from "assets/images/shapes/Shape Hexagon-Top.png";
import orangeTop from "assets/images/shapes/Shape Hexagon-TopORANGE.png";
import orangeBottom from "assets/images/shapes/Shape Hexagon-BottomORANGE.png";
import orangeLeft from "assets/images/shapes/Shape Hexagon-LeftORANGE.png";
import repeatArr from "methods/repeatArr";

function HexagonsContainer(props: PropsType) {
  let data = props.service.services.slice(0, 6);
  if (props.service.services.length < 6) {
    data = repeatArr(props.service.services, 6).slice(0, 6);
  }

  return (
    <div className={`hexagon-shape-container ${props.addClass}`}>
      <div className="service-section-about">
        <h3>{props.service.title}</h3>
        <p>{props.service.description}</p>
      </div>
      <div className="hexagons-container ltr">
        <div className="hexagons-row">
          <HexagonShape
            bgImg={blueTop}
            service={data[0]}
            //   empty={true}
          />
          <HexagonShape bgImg={orangeTop} service={data[5]} />
        </div>
        <div className="hexagons-row">
          <HexagonShape bgImg={orangeLeft} service={data[1]} />
          <HexagonShape empty={true} bgImg={orangeLeft} service={data[0]} />
          <HexagonShape bgImg={blueRight} service={data[2]} />
        </div>
        <div className="hexagons-row">
          <HexagonShape bgImg={blueBottom} service={data[3]} />
          <HexagonShape bgImg={orangeBottom} service={data[4]} />
        </div>
      </div>
    </div>
  );
}

type PropsType = {
  service: ServicesSectionType;
  addClass: string;
};
export default HexagonsContainer;
