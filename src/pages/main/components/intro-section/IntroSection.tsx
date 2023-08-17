import "./intro-section.scss";
import introVideo from "assets/videos/bg-video.mp4";
import introVideoMobile from "assets/videos/bg-mobile.mp4";
import bgImage from "assets/images/bg-temp.jpg";

function IntroSection() {
  return (
    <div className="intro-section">
      {/* <video className="intro-background" loop autoPlay muted>
        <source src={introVideo} type="video/mp4" />
      </video> */}
      <video className="intro-background" loop autoPlay muted>
        <source src={introVideoMobile} type="video/mp4" />
      </video>
      {/* <img src={bgImage} className="intro-background" alt="" /> */}
      <div className="page-content">
        <a href="#" className="request-service">
          اطلب خدمتك
        </a>
      </div>
    </div>
  );
}

export default IntroSection;
