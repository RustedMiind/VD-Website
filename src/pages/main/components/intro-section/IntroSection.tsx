import "./intro-section.scss";
import introVideo from "assets/videos/new-bg.mp4";
import introVideoMobile from "assets/videos/new-bg.mp4";
import { NavLink } from "react-router-dom";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { MainStateType } from "redux/reducers/mainSlice";
import { useTranslation } from "react-i18next";

function IntroSection() {
  const main = useSelector((state: { main: MainStateType }) => state.main);
  const { t } = useTranslation();
  const mainDescribtion =
    main && typeof main === "object" && main.main_description
      ? main.main_description
      : "";
  return (
    <div className="intro-section">
      <video className="intro-background screen" loop autoPlay muted>
        <source src={introVideo} type="video/mp4" />
      </video>
      <video className="intro-background mobile" loop autoPlay muted>
        <source src={introVideoMobile} type="video/mp4" />
      </video>
      {/* <img src={bgImage} className="intro-background" alt="" /> */}
      <div className="page-content">
        <NavLink to="contact" className="request-service">
          {t("buttons.orderService")}
        </NavLink>
        <div className="intro-small-card">
          {/* <p>{mainDescribtion && mainDescribtion}</p> */}
          <a
            href={mainDescribtion}
            target="_blank"
            className="icon-text-hover flip-ltr"
          >
            {t("buttons.more")}
            <ArrowLeftCircleFill />
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
