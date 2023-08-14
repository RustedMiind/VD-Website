import "./intro-section.scss";
import introVideo from "assets/videos/intro.mp4";
import bgImage from "assets/images/bg-temp.jpg";

function IntroSection() {
  return (
    <div className="intro-section">
      <video className="intro-background" loop autoPlay muted>
        <source src={introVideo} type="video/mp4" />
      </video>
      {/* <img src={bgImage} className="intro-background" alt="" /> */}
    </div>
  );
}

export default IntroSection;
