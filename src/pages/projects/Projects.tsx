import { useEffect } from "react";
import ProjectCard from "./compontents/project-card/ProjectCard";
import "./projects.scss";
import { Search } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { requestSetProjects } from "redux/middlewares/projectsMiddleware";
import { projectsStateType } from "redux/reducers/projectsSlice";

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(
    (state: { projects: projectsStateType }) => state.projects
  );

  useEffect(() => {
    requestSetProjects(dispatch);
  }, []);

  return (
    <div className="projects-page">
      <div
        className="bg-container banner"
        style={{
          backgroundImage: `url("${"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}")`,
        }}
      >
        <div className="overlay"></div>
      </div>
      <div className="filter-container">
        <div className="search-bar">
          <input type="text" placeholder="بحث" />
          <Search />
        </div>
      </div>
      <div className="projects-cards-container">
        {/* <ProjectCard /> */}

        {projects.projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
