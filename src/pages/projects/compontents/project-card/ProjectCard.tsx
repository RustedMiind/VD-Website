import { ProjectType } from "redux/reducers/projectsSlice";
import { NavLink } from "react-router-dom";
import "./project-card.scss";
import wave from "assets/images/wave.png";
import {
  ArrowBarLeft,
  ArrowLeft,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";

function ProjectCard({ project }: PropsType) {
  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url("${project["main-image"]}")`,
      }}
    >
      <div className="info" style={{ backgroundImage: `url("${wave}")` }}>
        <div className="name">{project.name}</div>
        <NavLink className="link" to={project.id.toString()}>
          <div>عرض المشروع</div>
          <ArrowLeftCircleFill />
        </NavLink>
      </div>
    </div>
  );
}

type PropsType = {
  project: ProjectType;
};
export default ProjectCard;
