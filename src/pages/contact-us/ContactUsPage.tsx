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
// import { serialize } from "v8";

function ContactUsPage() {
  const data = { bgImage: { gradient: true }, title: "تواصل معنا" };
  const state = useSelector((state: { settings: SettingsStateType }) => state);
  const { t } = useTranslation();
  const getvalue = getValueByKey(state.settings);
  const address = getvalue("address") as
    | undefined
    | {
        address: string;
        link: string;
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
                    مواقع التواصل الاجتماعي
                  </h4>
                  {Array.isArray(emails) && (
                    <div className="info-item">
                      <div className="info-icon">
                        <EnvelopeFill />
                      </div>
                      <div className="content">
                        <h5 className="title">البريد الالكتروني</h5>
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
                        <h5 className="title">البريد الالكتروني</h5>
                        {address.map((address) => (
                          <p>{address.address}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                {/* Link With Links */}
                <LinksShape />
              </div>
              <div className="map-container">
                <GoogleMap
                  coOrdinates={{
                    // lat: 30.067358909951952,
                    // lng: 31.356044271558698,
                    lat: 21.626874490305553,
                    lng: 39.128184993865666,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default ContactUsPage;
