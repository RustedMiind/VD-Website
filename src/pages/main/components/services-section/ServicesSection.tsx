import "./services-section.scss";
import { useState, useEffect } from "react";
import topShape from "assets/images/services-header2.png";
import { ServiceType, initialService } from "redux/reducers/servicesSlice";
import ServicesSectionCard from "./ServicesSectionCard";
import { setInterval } from "timers";
import { useSelector } from "react-redux";
import { MainStateType } from "redux/reducers/mainSlice";

function ServicesSection() {
  const [indexes, setIndexes] = useState<number[]>([0, 1]);
  const [enablePlay, setEnablePlay] = useState<boolean>(true);
  const { main } = useSelector((state: { main: MainStateType }) => state);
  const services: ServiceType[] =
    typeof main === "object" ? main.services : [initialService];
  // const [servicess, setServices] = useState<ServiceType[]>([
  //   { ...initialService, id: 0 },
  //   { ...initialService, id: 1 },
  // ]);
  const handleIncrement = () => {
    if (typeof main === "object" && main.services)
      setIndexes(
        indexes.map((value) => {
          return value + 1 === main.services.length ? 0 : value + 1;
        })
      );
    setEnablePlay(false);
  };
  const handleDecrement = () => {
    if (typeof main === "object" && main.services)
      setIndexes(
        indexes.map((value) => {
          return value - 1 === -1 ? main.services.length - 1 : value - 1;
        })
      );
    setEnablePlay(false);
  };
  const handleIncrementAutoplay = () => {
    if (typeof main === "object" && main.services)
      setIndexes(
        indexes.map((value) => {
          return value - 1 === -1 ? main.services.length - 1 : value - 1;
        })
      );
  };

  useEffect(() => {
    setTimeout(() => {
      if (enablePlay) handleIncrementAutoplay();
      console.log(enablePlay);
    }, 5000);
  }, [indexes, main]);
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
          {typeof services === "object" && services[1] ? (
            indexes.map((index, i) => (
              <ServicesSectionCard
                key={services[i].id}
                services={services}
                index={index}
              />
            ))
          ) : (
            <>
              {services[0] && (
                <ServicesSectionCard
                  key={services[0].id}
                  services={services}
                  index={0}
                />
              )}
            </>
          )}
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
