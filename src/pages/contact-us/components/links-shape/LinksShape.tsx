import image from "assets/images/SocialMediaVector.png";
import {
  Facebook,
  Instagram,
  Snapchat,
  Twitter,
  Whatsapp,
} from "react-bootstrap-icons";
import "./links-shape.scss";

type PropsType = {
  links: {
    whatsapp: string;
    facebook: string;
    instagram: string;
    snapchat: string;
  };
};

function LinksShape(props: PropsType) {
  return (
    <div className="links-shape">
      <img src={image} alt="shape" className="shape-img" />
      <div className="links">
        <div className="links-row">
          <div></div>
          <a className="link-item" target="_blank" href={props.links.whatsapp}>
            <Whatsapp />
          </a>
          <div></div>
        </div>
        <div className="links-row">
          <a className="link-item" target="_blank" href={props.links.facebook}>
            <Facebook />
          </a>
          <div></div>
          <a className="link-item" target="_blank" href={props.links.instagram}>
            <Instagram />
          </a>
        </div>
        <div className="links-row">
          <div></div>
          <a className="link-item" target="_blank" href={props.links.snapchat}>
            <Snapchat />
          </a>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LinksShape;
