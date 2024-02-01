import { useEffect, useState, useContext } from "react";
import ProjectCard from "./compontents/project-card/ProjectCard";
import "./projects.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { requestSetProjects } from "redux/middlewares/projectsMiddleware";
import { projectsStateType } from "redux/reducers/projectsSlice";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import PlaceHolder from "./compontents/placeholder/Placeholder";
import SearchAndFilter from "components/search-and-filter/SearchAndFilter";
import { useTranslation } from "react-i18next";
import { LangContext } from "contexts/LangContext";

function Projects() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const projects = useSelector(
    (state: { projects: projectsStateType }) => state.projects
  );
  const data: PageBannerDataType = {
    bgImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    title: t("links.projects"),
    search: true,
    // subtitle: {
    //   type: "paragraph",
    //   paragraph:
    //     "لا تتردد في الاتصال بنا في اي وقت اذا كنت بحاجة لاستشارة فورية او لديك اي استفسارات",
    // },
  };
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    requestSetProjects(dispatch);
  }, [lang]);
  const toShow =
    typeof projects.projects === "object" &&
    projects.projects &&
    projects.projects.length
      ? projects.projects.filter((project) => {
          return (
            (search === "" ||
              project.name.toLowerCase().includes(search.toLowerCase())) &&
            (type === "" || project.projectType.id.toString() === type)
          );
        })
      : [];

  return (
    <PageBannerLayout data={data}>
      <div className="tight-section">
        <SearchAndFilter filter={{ value: [search, setSearch] }} />
        {typeof projects === "object" && projects.projectTypes && (
          <div className="types-container">
            <div
              className={`type ${type === "" ? "current" : ""}`}
              onClick={() => {
                setType("");
              }}
            >
              {t("titles.all")}
            </div>
            {projects.projectTypes.map((projectType) => (
              <div
                key={projectType.id}
                className={`type ${
                  type === projectType.id.toString() ? "current" : ""
                }`}
                onClick={() => {
                  setType(projectType.id.toString());
                }}
              >
                {projectType.name}
              </div>
            ))}
          </div>
        )}
        {/* Success */}
        {typeof projects.projects === "object" && projects.projects && (
          <div className="projects-cards-container">
            {/* Projects Exists */}
            {toShow.length ? (
              toShow.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <h2>
                {search ? t("projects.notFound") : t("projects.noProjects")}
              </h2>
            )}
          </div>
        )}
        {/* Error */}
        {projects.projects === "error" && projects.projects && (
          <div className="projects-cards-container">
            <h2>{t("projects.error")}</h2>
          </div>
        )}
        {/* Loading */}
        {projects.projects === "loading" && projects.projects && (
          // <div className="projects-cards-container">
          <PlaceHolder />
          // </div>
        )}
      </div>
      {/* {(!projects.projects.length || !projects) && <PlaceHolder />} */}
    </PageBannerLayout>
  );
}

export default Projects;
