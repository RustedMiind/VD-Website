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
    (state: { services: ServicesStateType }) => state
  );
  const dispatch = useDispatch();
  console.log(services);
  useEffect(() => {
    requestSetServices(dispatch);
  }, []);
  return (
    <PageBannerLayout data={data}>
      <div className="services-page tight-section">
        {/* {services === "loading" && <ServicePlaceHolder />}
        {typeof services === "object" &&
          services.map((service) => <ServiceCard data={service} />)} */}
        {typeof services === "object" && (
          <HexagonsContainer services={services} />
        )}
      </div>
      <Test />
    </PageBannerLayout>
  );
}

export default Services;
