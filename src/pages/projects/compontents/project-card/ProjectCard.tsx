import { ProjectType } from "redux/reducers/projectsSlice";
import "./project-card.scss";
import wave from "assets/images/wave.png";

function ProjectCard({ project }: PropsType) {
  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url("${project["main-image"]}")`,
      }}
    >
      <div className="info" style={{ backgroundImage: `url("${wave}")` }}>
        {project.name}
      </div>
    </div>
  );
}

type PropsType = {
  project: ProjectType;
};
export default ProjectCard;
