import { ServiceType } from "redux/reducers/servicesSlice";
import "./hexagons-container.scss";
import HexagonShape from "../hexagon-shape/HexagonShape";
import blueBottom from "assets/images/shapes/Shape Hexagon-Bottom.png";
import blueRight from "assets/images/shapes/Shape Hexagon-Right.png";
import blueTop from "assets/images/shapes/Shape Hexagon-Top.png";
import orangeTop from "assets/images/shapes/Shape Hexagon-TopORANGE.png";
import orangeBottom from "assets/images/shapes/Shape Hexagon-BottomORANGE.png";
import orangeLeft from "assets/images/shapes/Shape Hexagon-LeftORANGE.png";

function HexagonsContainer(props: PropsType) {
  return (
    <div className="hexagons-container ltr">
      <div className="hexagons-row">
        <HexagonShape
          bgImg={blueTop}
          service={props.services[0]}
          empty={true}
        />
        <HexagonShape bgImg={orangeTop} service={props.services[0]} />
      </div>
      <div className="hexagons-row">
        <HexagonShape bgImg={orangeLeft} service={props.services[0]} />
        <HexagonShape
          empty={true}
          bgImg={orangeLeft}
          service={props.services[0]}
        />
        <HexagonShape bgImg={blueRight} service={props.services[0]} />
      </div>
      <div className="hexagons-row">
        <HexagonShape bgImg={blueBottom} service={props.services[0]} />
        <HexagonShape bgImg={orangeBottom} service={props.services[0]} />
      </div>
    </div>
  );
}

type PropsType = {
  services: ServiceType[];
};
export default HexagonsContainer;
