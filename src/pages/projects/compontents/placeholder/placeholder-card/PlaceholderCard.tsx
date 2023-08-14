import "./placeholder-card.scss";
import wave from "assets/images/wave.png";

function PlaceholderCard() {
  return (
    <div className="project-card placeholder-project-card">
      <div className="info" style={{ backgroundImage: `url("${wave}")` }}>
        <div className="name"> </div>
      </div>
    </div>
  );
}

export default PlaceholderCard;
