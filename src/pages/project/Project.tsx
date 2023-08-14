import TrippleSlider from "components/tripple-slider/TrippleSlider";
import "./project.scss";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProjectType } from "redux/reducers/projectsSlice";
import axios from "axios";
import api from "methods/api";
import ApiResponse from "types/ApiResponse";
import { useContext } from "react";
import { LangContext } from "contexts/LangContext";

function Project() {
  const { lang } = useContext(LangContext);
  const { projectId } = useParams();
  const [project, setProject] = useState<ProjectType | undefined>();

  const data: PageBannerDataType = {
    bgImage: project?.["main-image"] || "",
    title: lang(project?.title) || `المشروع ${projectId}`,
  };
  useEffect(() => {
    axios
      .get<ApiResponse<ProjectType>>(
        api(`client/company-projects/${projectId}`)
      )
      .then((result) => {
        console.log(result);
        setProject(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageBannerLayout data={data}>
      <div className="project-page">
        <section className="section">
          <h3 className="section-title">اسم المشروع</h3>
          <div className="section-content">
            <p>{lang(project?.title)}</p>
          </div>
        </section>
        {/* <section className="section">
          <TrippleSlider images={project?.attachments} />
        </section> */}
        <section className="section">
          <h3 className="section-title">الوصف</h3>
          <div className="section-content">
            <p>{lang(project?.description)}</p>
          </div>
        </section>
        <section className="section">
          <h3 className="section-title">نطاق العمل</h3>
          <div className="section-content">
            <div className="work-areas-container">
              {project?.workZones.map((zone) => (
                <div className="work-area-card">
                  <div className="title">{zone.name}</div>
                  <div className="content">{zone.zone}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageBannerLayout>
  );
}

export default Project;
