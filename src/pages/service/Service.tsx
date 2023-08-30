import TrippleSlider from "components/tripple-slider/TrippleSlider";
import "./service.scss";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ServiceType, initialService } from "redux/reducers/servicesSlice";
import axios from "axios";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";

function ServicePage() {
  const { t } = useTranslation();
  const { serviceId } = useParams();
  const [service, setService] = useState<ServiceType | "error" | "loading">(
    "loading"
  );
  const data: PageBannerDataType = {
    bgImage:
      "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/11/street-photography-exercises-16.jpg?fit=1500%2C919&ssl=1",
    title: typeof service === "object" ? service.name : t("titles.service"),
  };
  useEffect(() => {
    axios
      .get<ApiResponse<ServiceType>>(api(`client/services/${serviceId}`))
      .then((result) => {
        setService(result.data.data);
      })
      .catch((err) => {
        setService("error");
      });
  }, []);
  return (
    <PageBannerLayout data={data}>
      <div className="service-page tight-section">
        {/* <button className="link-with-arrow custom">
          اطلب خدمة فورية
          <ArrowLeftCircleFill />
        </button> */}
        {typeof service === "object" && (
          <>
            <div className="section">
              <h3 className="section-title">اسم الخدمة</h3>
              <div className="section-content">{service.name}</div>
            </div>
            <div className="section">
              <h3 className="section-title">وصف الخدمة</h3>
              <div className="section-content">{service.description}</div>
            </div>
            <div className="section">
              <h3 className="section-title">الاعمال السابقة</h3>
              <TrippleSlider
                images={service.examples.map((item) => ({
                  ...item,
                  describtion: item.description,
                }))}
              />
            </div>
          </>
        )}
        {service === "error" && (
          <div className="section">
            <h2> فشل التحميل </h2>
          </div>
        )}
      </div>
    </PageBannerLayout>
  );
}

export default ServicePage;
