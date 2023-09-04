import "./services-section.scss";
import { useState, useRef } from "react";
import topShape from "assets/images/services-header2.png";
import topRightShape from "assets/images/home-vector-right.png";
import medLedtShape from "assets/images/home-vector-left.png";
import { ServiceType, initialService } from "redux/reducers/servicesSlice";
import ServicesSectionCard from "./ServicesSectionCard";
import { useSelector } from "react-redux";
import { MainStateType } from "redux/reducers/mainSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import splitArray from "methods/splitArray";
import { useTranslation } from "react-i18next";

function ServicesSection() {
  const { t } = useTranslation();
  const main = useSelector((state: { main: MainStateType }) => state.main);
  const services: ServiceType[] =
    typeof main === "object" ? main.services : [initialService];
  const twoServicesArr = splitArray(services, 2);
  return (
    <div className="services-section">
      <img src={topShape} className="top-shape" />
      <img src={topRightShape} className="top-right-shape" />
      <img src={medLedtShape} className="med-left-shape" />
      <div className="tight-section">
        <h3>{t("titles.prominentServices")}</h3>
        <div className="services-cards-container">
          <Swiper
            modules={[Autoplay, EffectCube]}
            spaceBetween={0}
            speed={1000}
            fadeEffect={{ crossFade: false }}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            className="slider-services-container"
          >
            {twoServicesArr.map((twoServices) => (
              <SwiperSlide key={twoServices.map((item) => item.id).join("!@#")}>
                <div className="services-cards-container">
                  {twoServices.map((service) => (
                    <ServicesSectionCard
                      key={services[0].id}
                      service={service}
                      index={0}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <div className="change-slide-buttons">
          <div className="increment" ref={navigationPrevRef} />
          <div className="center"></div>
          <div className="decrement" ref={navigationNextRef} />
        </div> */}
      </div>
    </div>
  );
}

export default ServicesSection;
