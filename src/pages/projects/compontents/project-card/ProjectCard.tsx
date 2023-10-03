import { ProjectType } from "redux/reducers/projectsSlice";
import { NavLink } from "react-router-dom";
import "./project-card.scss";
import wave from "assets/images/wave.png";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

function ProjectCard({ project }: PropsType) {
  const t = useTranslation().t;

  return (
    <NavLink
      to={project.id.toString()}
      className="project-card"
      // style={{
      //   backgroundImage: `url("${project["main-image"]}")`,
      // }}
    >
      <div className="card-image">
        <img loading="lazy" src={project["main-image"]} alt="" />
      </div>
      <div className="info" style={{ backgroundImage: `url("${wave}")` }}>
        <div className="name">{project.name}</div>
        {/* <NavLink
          className="link-with-arrow flip-ltr"
          to={project.id.toString()}
        >
          <div>{t("buttons.showProject")}</div>
          <ArrowLeftCircleFill />
        </NavLink> */}
      </div>
    </NavLink>
  );
}

type PropsType = {
  project: ProjectType;
};
export default ProjectCard;
