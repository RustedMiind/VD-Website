import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import "./services.scss";
import { useTranslation } from "react-i18next";
import ServiceCard from "./components/service-card/ServiceCard";
import { useEffect } from "react";
import { requestSetServices } from "redux/middlewares/servicesMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { ServicesStateType } from "redux/reducers/servicesSlice";
import ServicePlaceHolder from "./components/placeholder/ServicesPlaceholder";
import HexagonShape from "./components/hexagon-shape/HexagonShape";
import HexagonsContainer from "./components/hexagons-container/HexagonsContainer";
import Test from "./components/test/Test";

function Services() {
  const { t } = useTranslation();
  const data: PageBannerDataType = {
    bgImage:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/street-photography-exercises-16.jpg?fit=1500%2C919&ssl=1",
    title: t("links.services"),
  };
  const { services } = useSelector(
    (state: { services: ServicesStateType }) => state.services
  );
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetServices(dispatch);
  }, []);
  return (
    <PageBannerLayout data={data}>
      <div className="services-page tight-section">
        {/* {services === "loading" && <ServicePlaceHolder />}
        {typeof services === "object" &&
          services.map((service) => <ServiceCard data={service} />)} */}
        {typeof services === "object" &&
          services.map((service) => (
            <>
              {service.design === "circle" && (
                <HexagonsContainer services={service.services} />
              )}
            </>
          ))}
        {services === "loading" && <h2>Loading</h2>}
        {services === "error" && <h2>Error Fetching Data</h2>}
      </div>
      {/* <Test /> */}
    </PageBannerLayout>
  );
}

export default Services;
