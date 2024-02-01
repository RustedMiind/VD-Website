import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import "./services.scss";
import { useTranslation } from "react-i18next";
import React, { useEffect, useContext } from "react";
import { requestSetServices } from "redux/middlewares/servicesMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { ServicesStateType } from "redux/reducers/servicesSlice";
import HexagonsContainer from "./components/hexagons-container/HexagonsContainer";
import CircleContainer from "./components/circle-container/CircleContainer";
import ServicesCardsContainer from "./components/cards-container/CardsContainer";
import HalfCircleContainer from "./components/half-circle/HalfCircleContainer";
import { Whatsapp } from "react-bootstrap-icons";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { getValueByKey } from "types/SettingsType";
import { LangContext } from "contexts/LangContext";

function Services() {
  const { t } = useTranslation();
  const settings = useSelector(
    (state: { settings: SettingsStateType }) => state.settings
  );
  const getvalue = getValueByKey(settings);
  const whatsapp = getvalue("whatsapp") as undefined | [string];
  const data: PageBannerDataType = {
    bgImage: { gradient: true },
    title: t("links.services"),
  };
  const { services } = useSelector(
    (state: { services: ServicesStateType }) => state.services
  );
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetServices(dispatch)
      .then(() => {})
      .catch(() => {});
  }, [lang]);
  return (
    <PageBannerLayout data={data}>
      <div className="services-page tight-section">
        {/* {services === "loading" && <ServicePlaceHolder />}
        {typeof services === "object" &&
          services.map((service) => <ServiceCard data={service} />)} */}
        {typeof services === "object" &&
          services.map((service, index) => {
            const className = "bg-main-transparent";
            return (
              <React.Fragment key={service.services.map((s) => s.id).join()}>
                {service.design === "hexagon" && (
                  <HexagonsContainer service={service} addClass={className} />
                )}
                {service.design === "circle" && (
                  <CircleContainer service={service} addClass={className} />
                )}
                {service.design === "half_circle" && (
                  <HalfCircleContainer service={service} addClass={className} />
                )}
                {service.design === "cards" && (
                  <ServicesCardsContainer
                    service={service}
                    addClass={className}
                  />
                )}
              </React.Fragment>
            );
          })}
        {/* {services === "loading" && <h2>Loading</h2>} */}
        {services === "error" && <h2>Error Fetching Data</h2>}

        {whatsapp && whatsapp[0] && (
          <a
            className="link-with-arrow custom"
            target="_blank"
            rel="noreferrer"
            href={"https://wa.me/" + whatsapp[0]}
          >
            {t("contact.whatsapp")}
            <Whatsapp />
          </a>
        )}
      </div>
    </PageBannerLayout>
  );
}

export default Services;
