import storage from "methods/storage";
import "./top-navbar.scss";
// import logo from "assets/images/logo-vision.png";
import { useState } from "react";
import { At, Telephone, Whatsapp } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { getValueByKey } from "types/SettingsType";

function TopNavbar() {
  const [navClass, setNavClass] = useState<"" | "hide-top">("");

  const state = useSelector((state: { settings: SettingsStateType }) => state);
  const getvalue = getValueByKey(state.settings);
  const name = getvalue("name") as undefined | string,
    slogan = getvalue("slogan") as undefined | string,
    social = getvalue("social") as
      | undefined
      | {
          facebook: string;
          instagram: string;
          snapchat: string;
        },
    emails = getvalue("emails") as undefined | string[],
    phones = getvalue("phones") as undefined | string[],
    whatsapp = getvalue("whatsapp") as undefined | string[],
    address = getvalue("address") as
      | undefined
      | { address: string; link: string }[],
    logo = getvalue("logo") as undefined | [string];

  const { t } = useTranslation();
  return (
    <nav className="top-navbar">
      <div className="nav-item main">
        {logo && logo[0] ? (
          <div className="icon">
            <img src={storage(logo[0])} alt="" />
          </div>
        ) : (
          ""
        )}
        <div className="content">
          <div className="title">{name}</div>
          <div className="value">{slogan}</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <At />
        </div>
        <div className="content">
          <div className="title">{t("contact.email")}</div>
          <div className="value">{emails && emails[0]}</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <Telephone />
        </div>
        <div className="content">
          <div className="title">{t("contact.phone")}</div>
          <div className="value ltr">{phones && phones[0]}</div>
        </div>
      </div>
      <div className="nav-item">
        <div className="icon">
          <Whatsapp />
        </div>
        <div className="content">
          <div className="title">{t("contact.whatsapp")}</div>
          <div className="value ltr">{whatsapp && whatsapp[0]}</div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
