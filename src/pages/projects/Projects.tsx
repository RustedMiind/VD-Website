import { useEffect } from "react";
import ProjectCard from "./compontents/project-card/ProjectCard";
import "./projects.scss";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { requestSetProjects } from "redux/middlewares/projectsMiddleware";
import { projectsStateType } from "redux/reducers/projectsSlice";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import PlaceHolder from "./compontents/placeholder/Placeholder";

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
  useEffect(() => {
    requestSetProjects(dispatch);
  }, []);

  return (
    <PageBannerLayout data={data}>
      {/* Success */}
      {typeof projects.projects === "object" && projects.projects && (
        <div className="projects-cards-container">
          {projects.projects.length ? (
            projects.projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <h2>لا يوجد مشاريع</h2>
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
      {/* {(!projects.projects.length || !projects) && <PlaceHolder />} */}
    </PageBannerLayout>
  );
}

export default Projects;
