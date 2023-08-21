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
      // style={{
      //   backgroundImage: `url("${project["main-image"]}")`,
      // }}
    >
      <div className="card-image">
        <img src={project["main-image"]} alt="" />
      </div>
      <div className="info" style={{ backgroundImage: `url("${wave}")` }}>
        <div className="name">{project.name}</div>
        <NavLink className="link-with-arrow" to={project.id.toString()}>
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
