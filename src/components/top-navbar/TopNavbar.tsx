import "./top-navbar.scss";
import logo from "assets/images/logo-vision.png";
import { useState } from "react";
import { At, Telephone, Whatsapp } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

function TopNavbar() {
  const [navClass, setNavClass] = useState<"" | "hide-top">("");
  const { t } = useTranslation();
  return (
    <nav className="top-navbar">
      <div className="nav-item main">
        <div className="icon">
          <img src={logo} alt="" />
        </div>
        <div className="content">
          <div className="title">{t("vision.name")}</div>
          <div className="value">{t("vision.for")}</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <At />
        </div>
        <div className="content">
          <div className="title">{t("contact.email")}</div>
          <div className="value">vision22@support.com</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <Telephone />
        </div>
        <div className="content">
          <div className="title">{t("contact.phone")}</div>
          <div className="value ltr">+966 123 4566 234</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <Whatsapp />
        </div>
        <div className="content">
          <div className="title">{t("contact.whatsapp")}</div>
          <div className="value ltr">+966 123 4566 234</div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
