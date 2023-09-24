import TrippleSlider from "components/tripple-slider/TrippleSlider";
import "./service.scss";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import { ServiceType, initialService } from "redux/reducers/servicesSlice";
import axios from "axios";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { LangContext } from "contexts/LangContext";

function ServicePage() {
  const { t } = useTranslation();
  const { serviceId } = useParams();
  const [service, setService] = useState<ServiceType | "error" | "loading">(
    "loading"
  );
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  const data: PageBannerDataType = {
    title: typeof service === "object" ? service.name : t("links.service"),
    bgImage: { gradient: true },
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
  }, [lang]);
  return (
    <PageBannerLayout data={data}>
      <div className="service-page tight-section">
        {/* <button className="link-with-arrow custom flip-ltr">
          اطلب خدمة فورية
          <ArrowLeftCircleFill />
        </button> */}
        {typeof service === "object" && (
          <>
            <div className="section">
              <h3 className="section-title">{t("service.name")}</h3>
              <div className="section-content">{service.name}</div>
            </div>
            <div className="section">
              <h3 className="section-title">{t("service.describtion")}</h3>
              <div className="section-content">{service.description}</div>
            </div>
            {service.examples.length > 0 && (
              <div className="section">
                <h3 className="section-title">{t("service.previousWorks")}</h3>
                <TrippleSlider
                  images={service.examples.map((item) => ({
                    ...item,
                    describtion: item.description,
                  }))}
                />
              </div>
            )}
          </>
        )}
        {service === "error" && (
          <div className="section">
            <h2> {t("loading.error")} </h2>
          </div>
        )}
      </div>
    </PageBannerLayout>
  );
}

export default ServicePage;
