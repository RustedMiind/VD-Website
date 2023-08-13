import "./top-navbar.scss";
import logo from "assets/images/logo-vision.png";
import { useState } from "react";
import { At, Telephone, Whatsapp } from "react-bootstrap-icons";

function TopNavbar() {
  const [navClass, setNavClass] = useState<"" | "hide-top">("");
  return (
    <nav className="top-navbar">
      <div className="nav-item main">
        <div className="icon">
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <div className="title">تواصل معنا عبر الايميل</div>
          <div className="value">vision22@support.com</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <At />
        </div>
        <div className="content">
          <div className="title">تواصل معنا عبر الايميل</div>
          <div className="value">vision22@support.com</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <Telephone />
        </div>
        <div className="content">
          <div className="title">تواصل معنا عبر الهاتف</div>
          <div className="value ltr">+966 123 4566 234</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <Whatsapp />
        </div>
        <div className="content">
          <div className="title">تواصل معنا عبر الواتس اب</div>
          <div className="value ltr">+966 123 4566 234</div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
