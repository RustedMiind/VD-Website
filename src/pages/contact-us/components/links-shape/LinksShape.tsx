import image from "assets/images/SocialMediaVector.png";
import {
  Facebook,
  Instagram,
  Snapchat,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import "./links-shape.scss";

function LinksShape() {
  return (
    <div className="links-shape">
      <img src={image} alt="shape" className="shape-img" />
      <div className="links">
        <div className="links-row">
          <div></div>
          <a className="link-item" target="_blank" href="#">
            <Whatsapp />
          </a>
          <div></div>
        </div>
        <div className="links-row">
          <a className="link-item" target="_blank" href="#">
            <Twitter />
          </a>
          <a className="link-item" target="_blank" href="#">
            <Facebook />
          </a>
          <a className="link-item" target="_blank" href="#">
            <Instagram />
          </a>
        </div>
        <div className="links-row">
          <div></div>
          <a className="link-item" target="_blank" href="#">
            <Snapchat />
          </a>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LinksShape;
