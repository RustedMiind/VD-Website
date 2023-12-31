import { NavLink } from "react-router-dom";
import "./latest-news-section.scss";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube } from "swiper/modules";
import { MainStateType } from "redux/reducers/mainSlice";
import { ProjectType, ProjectsListType } from "redux/reducers/projectsSlice";
import { useTranslation } from "react-i18next";
import ForceRerender from "components/force-rerender/ForceRerender";

function LatestNewsSection() {
  const main = useSelector((state: { main: MainStateType }) => state.main);
  const { t } = useTranslation();

  const projects: ProjectsListType =
    typeof main === "object" ? main.projects : [];
  const lastProject: ProjectType = projects[projects.length - 1];

  return (
    <>
      {typeof projects === "object" && lastProject && (
        <ForceRerender condition={projects}>
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
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  className="bg-container w-100"
                  style={{
                    backgroundImage: `url("${project["main-image"]}")`,
                  }}
                >
                  <div className="latest-news-section">
                    <div className="content-container  tight-section">
                      <h2 className="section-title">
                        {t("titles.importantProjects")}
                      </h2>
                      <div className="content">
                        <div className="image">
                          <div className="image-container-16-9">
                            <img src={project["main-image"]} alt="" />
                          </div>
                        </div>
                        <div className="describtion-card">
                          <h3 className="news-title">
                            <span className="the-title">{project.title}</span>
                          </h3>
                          <p>{project.description}</p>
                          <div className="read-more-button-container flip-ltr">
                            <NavLink to={"/projects"}>
                              {t("buttons.more")}
                              <ArrowLeftCircleFill />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ForceRerender>
      )}
    </>
  );
}

export default LatestNewsSection;
