import { NavLink } from "react-router-dom";
import "./latest-news-section.scss";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { MainStateType } from "redux/reducers/mainSlice";
import {
  ProjectType,
  ProjectsListType,
  ProjectsType,
} from "redux/reducers/projectsSlice";

function LatestNewsSection() {
  const main = useSelector((state: { main: MainStateType }) => state.main);

  const projects: ProjectsListType =
    typeof main === "object" ? main.projects : [];
  const lastProject: ProjectType = projects[projects.length - 1];

  return (
    <>
      {typeof projects === "object" && lastProject && (
        <div
          className="bg-container"
          style={{
            backgroundImage: `url("${lastProject["main-image"]}")`,
          }}
        >
          <div className="latest-news-section">
            <div className="content-container  tight-section">
              <h2 className="section-title">أهم المشاريع</h2>
              <div className="content">
                <div className="image">
                  <div className="image-container-16-9">
                    <img src={lastProject["main-image"]} alt="" />
                  </div>
                </div>
                <div className="describtion-card">
                  <h3 className="news-title">
                    <span className="the-title">{lastProject.title}</span>
                  </h3>
                  <p>{lastProject.description}</p>
                  <div className="read-more-button-container">
                    <NavLink to={"/projects"}>
                      المزيد
                      <ArrowLeftCircleFill />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LatestNewsSection;
