import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import "./contact-us-page.scss";
import GoogleMap from "./components/map/GoogleMap";
import ContactForm from "./components/form/Form";
import LinksShape from "./components/links-shape/LinksShape";
import { EnvelopeFill, GeoAltFill, Mailbox } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { useTranslation } from "react-i18next";
import { getValueByKey } from "types/SettingsType";
import MapWrapper from "./components/map-wrapper/MapWrapper";
import { useState, useEffect } from "react";
import { LatLngType, getLatLngFromStr } from "methods/getLatLng";
// import { serialize } from "v8";

function ContactUsPage() {
  const { t } = useTranslation();
  const state = useSelector((state: { settings: SettingsStateType }) => state);
  const data = { bgImage: { gradient: true }, title: t("links.contact") };

  const getvalue = getValueByKey(state.settings);
  const address = getvalue("address") as
    | undefined
    | {
        address: string;
        link: string;
        longLat: string;
      }[];

  const social = getvalue("social") as
    | undefined
    | {
        facebook: string;
        instagram: string;
        snapchat: string;
      };
  const emails = getvalue("emails") as undefined | string[];
  const whatsapp = getvalue("whatsapp") as undefined | [string];
  const [coOrdinates, setCoOrdinates] = useState<LatLngType>(
    getLatLngFromStr(
      typeof address === "object" && address[0] ? address[0].longLat : "0,0"
    )
  );
  useEffect(() => {
    if (typeof address === "object" && address[0]) {
      setCoOrdinates(getLatLngFromStr(address[0].longLat));
    }
  }, [state]);
  return (
    <PageBannerLayout data={data}>
      <div className="contact-us-page">
        <div className="tight-section">
          <div className="rows-container">
            <ContactForm />
            <div className="left-container">
              <div className="contact-about-container">
                <div className="info-container">
                  <h4 className="main-section-title">
                    {t("titles.socialMedia")}
                  </h4>
                  {Array.isArray(emails) && (
                    <div className="info-item">
                      <div className="info-icon">
                        <EnvelopeFill />
                      </div>
                      <div className="content">
                        <h5 className="title">{t("form.email")}</h5>
                        {emails.map((email) => (
                          <p>{email}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  {Array.isArray(address) && (
                    <div className="info-item">
                      <div className="info-icon">
                        <GeoAltFill />
                      </div>
                      <div className="content">
                        <h5 className="title">{t("titles.addresses")}</h5>
                        {address.map((address) => (
                          <p
                            onClick={() => {
                              setCoOrdinates(getLatLngFromStr(address.longLat));
                            }}
                            className="address-change"
                            key={address.longLat}
                          >
                            {address.address}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* Link With Links */}
                <LinksShape
                  links={{
                    whatsapp:
                      "https://wa.me/" +
                      (whatsapp && whatsapp[0] ? whatsapp[0] : ""),
                    facebook: social?.facebook || "",
                    instagram: social?.instagram || "",
                    snapchat: social?.snapchat || "",
                  }}
                />
              </div>
              <MapWrapper coOrdinates={coOrdinates} />
              {/* <input
                type="text"
                value={temp}
                onChange={(e) => {
                  setTemp(e.target.value);
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default ContactUsPage;
