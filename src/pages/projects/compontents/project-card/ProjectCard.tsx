import { ProjectType } from "redux/reducers/projectsSlice";
import { NavLink } from "react-router-dom";
import "./project-card.scss";
import wave from "assets/images/wave.png";
import {
  ArrowBarLeft,
  ArrowLeft,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";
import { useContext } from "react";
import { LangContext } from "contexts/LangContext";

function ProjectCard({ project }: PropsType) {
  const { lang } = useContext(LangContext);
  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url("${project["main-image"]}")`,
      }}
    >
      <div className="info" style={{ backgroundImage: `url("${wave}")` }}>
        <div className="name">{lang(project.name)}</div>
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
