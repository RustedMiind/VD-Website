import TrippleSlider from "components/tripple-slider/TrippleSlider";
import "./project.scss";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";

import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ProjectType } from "redux/reducers/projectsSlice";
import axios from "axios";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { useTranslation } from "react-i18next";
import { LangContext } from "contexts/LangContext";

function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState<ProjectType | "error" | "loading">(
    "loading"
  );
  const { t } = useTranslation();

  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  const data: PageBannerDataType =
    typeof project === "object"
      ? {
          bgImage: project?.["main-image"] || "",
          title: project?.title || `${t("titles.project")} ${projectId}`,
          subtitle: {
            type: "navigate",
            links: [
              { title: t("links.home"), path: "/" },
              { title: t("links.projects"), path: "/projects" },
              {
                title: project?.title || `المشروع ${projectId}`,
                path: `/projects/${projectId}`,
                active: true,
              },
            ],
          },
        }
      : {
          bgImage: "",
          title:
            project === "loading" ? t("project.loading") : t("project.loading"),
          subtitle: {
            type: "navigate",
            links: [
              { title: t("links.home"), path: "/" },
              { title: t("links.projects"), path: "/projects" },
            ],
          },
        };
  useEffect(() => {
    axios
      .get<ApiResponse<ProjectType>>(
        api(`client/company-projects/${projectId}`)
      )
      .then((result) => {
        setProject(result.data.data);
        console.log("project : ", result.data);
      })
      .catch((err) => {});
  }, [lang]);

  return (
    <PageBannerLayout data={data}>
      {typeof project === "object" && (
        <div className="project-page tight-section">
          <section className="section">
            <h3 className="section-title">{t("project.name")}</h3>
            <div className="section-content">
              <p>{project?.title}</p>
            </div>
          </section>
          {project?.attachments && (
            <section className="">
              <TrippleSlider images={project.attachments} />
            </section>
          )}
          <section className="section">
            <h3 className="section-title">{t("project.describtion")}</h3>
            <div className="section-content">
              <p>{project?.description}</p>
            </div>
          </section>
          <section className="section">
            <h3 className="section-title">{t("project.zone")}</h3>
            <div className="section-content">
              <div className="work-areas-container">
                {project?.workZones.map((zone) => (
                  <div key={`${Math.random()}`} className="work-area-card">
                    <div className="title">{zone.name}</div>
                    <div className="content">{zone.zone}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </PageBannerLayout>
  );
}

export default Project;
