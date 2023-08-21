import { useEffect, useState } from "react";
import ProjectCard from "./compontents/project-card/ProjectCard";
import "./projects.scss";
import { Filter, Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { requestSetProjects } from "redux/middlewares/projectsMiddleware";
import { projectsStateType } from "redux/reducers/projectsSlice";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import PlaceHolder from "./compontents/placeholder/Placeholder";
import SearchAndFilter from "components/search-and-filter/SearchAndFilter";

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(
    (state: { projects: projectsStateType }) => state.projects
  );
  const data: PageBannerDataType = {
    bgImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    title: "المشاريع",
    search: true,
  };
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    requestSetProjects(dispatch);
  }, []);
  const toShow =
    typeof projects.projects === "object" &&
    projects.projects &&
    projects.projects.length
      ? projects.projects.filter((project) => {
          return (
            (search === "" || project.name.includes(search)) &&
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
              الكل
            </div>
            {projects.projectTypes.map((projectType) => (
              <div
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
                {search ? "لا يوجد المشروع الذي تبحث عنه" : "لا يوجد مشاريع"}
              </h2>
            )}
          </div>
        )}
        {/* Error */}
        {projects.projects === "error" && projects.projects && (
          <div className="projects-cards-container">
            <h2>فشل التحميل</h2>
          </div>
        )}
        {/* Loading */}
        {projects.projects === "loading" && projects.projects && (
          <div className="projects-cards-container">
            <PlaceHolder />
          </div>
        )}
      </div>
      {/* {(!projects.projects.length || !projects) && <PlaceHolder />} */}
    </PageBannerLayout>
  );
}

export default Projects;
