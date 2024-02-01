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

  const settings = useSelector(
    (state: { settings: SettingsStateType }) => state.settings
  );
  const getvalue = getValueByKey(settings);
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

      {emails && emails[0] && (
        <div className="nav-item">
          <div className="icon">
            <At />
          </div>
          <div className="content">
            <div className="title">{t("contact.email")}</div>
            <a href={"mailto:" + emails[0]} className="value">
              {emails[0]}
            </a>
          </div>
        </div>
      )}
      {phones && phones[0] && (
        <div className="nav-item">
          <div className="icon">
            <Telephone />
          </div>
          <div className="content">
            <div className="title">{t("contact.phone")}</div>
            <a href={"tel:" + phones[0]} className="value ltr">
              {phones[0]}
            </a>
          </div>
        </div>
      )}
      {whatsapp && whatsapp[0] && (
        <div className="nav-item">
          <div className="icon">
            <Whatsapp />
          </div>
          <div className="content">
            <div className="title">{t("contact.whatsapp")}</div>
            <a
              target="_blank"
              href={"https://wa.me/" + whatsapp[0]}
              className="value ltr"
            >
              {whatsapp[0]}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default TopNavbar;
