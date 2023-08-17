import "./services-section.scss";
import { useState, useEffect } from "react";
import topShape from "assets/images/services-header2.png";
import { ServiceType, initialService } from "redux/reducers/servicesSlice";
import ServicesSectionCard from "./ServicesSectionCard";
import { setInterval } from "timers";

function ServicesSection() {
  const [indexes, setIndexes] = useState<number[]>([0, 1]);
  const [enablePlay, setEnablePlay] = useState<boolean>(true);
  const [services, setServices] = useState<ServiceType[]>([
    { ...initialService, id: 0 },
    { ...initialService, id: 1 },
  ]);
  const handleIncrement = () => {
    setIndexes(
      indexes.map((value, index, arr) => {
        return value + 1 === arr.length ? 0 : value + 1;
      })
    );
    setEnablePlay(false);
  };
  const handleDecrement = () => {
    setIndexes(
      indexes.map((value, index, arr) => {
        return value - 1 === -1 ? arr.length - 1 : value - 1;
      })
    );
    setEnablePlay(false);
  };
  const handleIncrementAutoplay = () => {
    setIndexes(
      indexes.map((value, index, arr) => {
        return value - 1 === -1 ? arr.length - 1 : value - 1;
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (enablePlay) handleIncrementAutoplay();
    }, 5000);
  }, [indexes]);
  return (
    <div className="services-section">
      <img src={topShape} className="top-shape" />
      {/* <div
        className="top-shape"
        style={{ backgroundImage: `url(${topShape})` }}
      ></div> */}
      <div className="tight-section">
        <h3>أبرز خدماتنا</h3>
        <div className="services-cards-container">
          {indexes.map((index, i) => (
            <ServicesSectionCard
              key={services[i].id}
              services={services}
              index={index}
            />
          ))}
        </div>

        <div className="change-slide-buttons">
          <div className="increment" onClick={handleIncrement}></div>
          <div className="center"></div>
          <div className="decrement" onClick={handleDecrement}></div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
