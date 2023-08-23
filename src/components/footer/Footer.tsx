import { NavLink } from "react-router-dom";
import logo from "assets/images/logo-vision.png";
import "./footer.scss";
import {
  Facebook,
  GooglePlay,
  Instagram,
  Snapchat,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { getValueByKey } from "types/SettingsType";
import storage from "methods/storage";
import { navigationRoutes } from "methods/data/navigationRoutes";
import { useTranslation } from "react-i18next";

function Footer() {
  const state = useSelector((state: { settings: SettingsStateType }) => state);
  const { t } = useTranslation();
  const getvalue = getValueByKey(state.settings);
  const logo = getvalue("logo") as undefined | string[];
  const phones = getvalue("phones") as undefined | string[];
  const name = getvalue("name") as undefined | string;
  const slogan = getvalue("slogan") as undefined | string;
  const footer = getvalue("footer") as undefined | string;
  const whatsapp = getvalue("whatsapp") as undefined | [string];
  const apps = getvalue("apps") as
    | undefined
    | {
        app_store_link: string;
        play_store_link: string;
      };
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
  return (
    <footer className="footer">
      <div className="footer-content">
        {logo && logo[0] && (
          <div className="logo-container">
            <img src={storage(logo[0])} alt="" />
          </div>
        )}
        <div className="top-section">
          <div className="card-content">
            <div className="title">تحميل التطبيقات</div>
            <div className="section-content icons-with-data">
              <div className="icon-with-data">
                <div className="icon">
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 43 43"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="21.5" cy="21.5" r="21.5" fill="#F19B02" />
                    <path
                      d="M13.5312 11.1371V31.8617C13.5314 31.9066 13.5448 31.9506 13.5698 31.9879C13.5948 32.0253 13.6303 32.0545 13.6718 32.0717C13.7133 32.089 13.759 32.0937 13.8031 32.0851C13.8473 32.0765 13.8879 32.0551 13.9199 32.0236L24.7109 21.4999L13.9199 10.9752C13.8879 10.9436 13.8473 10.9222 13.8031 10.9136C13.759 10.905 13.7133 10.9097 13.6718 10.927C13.6303 10.9443 13.5948 10.9734 13.5698 11.0108C13.5448 11.0482 13.5314 11.0921 13.5312 11.1371Z"
                      fill="#0F3B80"
                    />
                    <path
                      d="M29.2354 17.1757L15.7048 9.72116L15.6964 9.71642C15.4633 9.58985 15.2418 9.90521 15.4327 10.0887L26.0392 20.2306L29.2354 17.1757Z"
                      fill="#0F3B80"
                    />
                    <path
                      d="M15.4343 32.9112C15.2423 33.0948 15.4638 33.4101 15.698 33.2835L15.7064 33.2788L29.2359 25.8243L26.0397 22.7683L15.4343 32.9112Z"
                      fill="#0F3B80"
                    />
                    <path
                      d="M34.6973 20.1817L30.9189 18.1008L27.3662 21.5001L30.9189 24.8978L34.6973 22.8184C35.7251 22.2505 35.7251 20.7497 34.6973 20.1817Z"
                      fill="#0F3B80"
                    />
                  </svg>
                </div>
                <div className="small-title-content">
                  <div className="small-title">متوفر علي </div>
                  <a target="_blank" href={apps?.play_store_link}>
                    متجر بلاي ستور
                  </a>
                </div>
              </div>
              <div className="icon-with-data">
                <div className="icon">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 2.8125C11.6244 2.8125 2.8125 11.6244 2.8125 22.5C2.8125 33.3756 11.6244 42.1875 22.5 42.1875C33.3756 42.1875 42.1875 33.3756 42.1875 22.5C42.1875 11.6244 33.3756 2.8125 22.5 2.8125ZM15.0293 31.1036C14.9085 31.3097 14.7356 31.4803 14.5279 31.5983C14.3202 31.7163 14.0851 31.7776 13.8463 31.776C13.6029 31.7781 13.3636 31.7124 13.1555 31.5861C13.0005 31.4963 12.8647 31.3768 12.7561 31.2344C12.6474 31.092 12.5679 30.9295 12.5222 30.7563C12.4764 30.5831 12.4654 30.4026 12.4896 30.2251C12.5138 30.0476 12.5728 29.8766 12.6633 29.722L14.0071 27.4878C14.075 27.3725 14.1719 27.2769 14.2882 27.2106C14.4044 27.1443 14.536 27.1096 14.6698 27.1099H14.8685C15.8432 27.1099 16.5252 27.6961 16.7238 28.2639L15.0293 31.1036ZM26.4067 26.7091L17.6063 26.7188H11.7571C11.5731 26.7195 11.3908 26.6829 11.2214 26.6111C11.0519 26.5394 10.8988 26.4339 10.7713 26.3012C10.6439 26.1684 10.5447 26.0112 10.4798 25.839C10.4149 25.6668 10.3857 25.4832 10.3939 25.2993C10.4221 24.561 11.0663 24.0021 11.8002 24.0021H16.04L21.0665 15.4459L19.4388 12.6729C19.0723 12.041 19.2349 11.2078 19.8633 10.8105C20.0182 10.7104 20.1918 10.6425 20.3736 10.6111C20.5554 10.5797 20.7417 10.5854 20.9213 10.6279C21.1008 10.6703 21.2699 10.7486 21.4184 10.8581C21.5669 10.9676 21.6918 11.106 21.7854 11.2649L22.6556 12.7512H22.6652L23.5362 11.2649C23.63 11.1068 23.7546 10.9692 23.9027 10.8602C24.0508 10.7513 24.2194 10.6733 24.3982 10.6309C24.5771 10.5885 24.7627 10.5826 24.944 10.6134C25.1252 10.6443 25.2984 10.7113 25.4531 10.8105C26.078 11.2078 26.2389 12.041 25.8697 12.6756L24.242 15.4485L22.66 18.1459L19.2243 24.0047V24.0144H24.2877C24.9223 24.0144 25.7177 24.3554 26.0394 24.9038L26.0675 24.9609C26.3514 25.4435 26.5122 25.7748 26.5122 26.2573C26.5076 26.414 26.4727 26.5683 26.4094 26.7117L26.4067 26.7091ZM33.2402 26.7188H30.8575V26.7284L32.5995 29.6912C32.7869 30.0033 32.8442 30.3764 32.7592 30.7303C32.6742 31.0842 32.4537 31.3906 32.1451 31.5835C31.9312 31.7139 31.6855 31.7829 31.435 31.783C31.1968 31.7829 30.9626 31.7212 30.7553 31.6038C30.548 31.4865 30.3746 31.3175 30.252 31.1133L27.6776 26.7311L26.078 24.0064L24.0144 20.4785C23.7155 19.9748 23.553 19.4018 23.543 18.8162C23.5329 18.2305 23.6757 17.6523 23.9572 17.1387C24.365 16.4188 24.677 16.2299 24.677 16.2299L29.2676 23.9941H33.2147C33.953 23.9941 34.5867 24.5619 34.621 25.2905C34.6281 25.4758 34.5977 25.6605 34.5316 25.8337C34.4655 26.0069 34.3651 26.165 34.2363 26.2984C34.1076 26.4318 33.9533 26.5378 33.7825 26.61C33.6118 26.6823 33.4282 26.7192 33.2429 26.7188H33.2402Z"
                      fill="#F19B02"
                    />
                  </svg>
                </div>
                <div className="small-title-content">
                  <div className="small-title">متوفر علي </div>
                  <a target="_blank" href={apps?.app_store_link}>
                    متجر اب ستور
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="title">ارقام الاتصال</div>
            <div className="section-content icons-with-data">
              <div className="icon-with-data">
                <div className="icon">
                  <TelephoneFill />
                </div>
                <div className="section-content">
                  {phones &&
                    phones.map((phone) => (
                      <a key={phone} href={"tel:" + phone}>
                        {phone}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="title">النشرة الاخبارية</div>
            <div className="section-content news-letter">
              <form action="">
                <div className="input-wrapper">
                  <input type="text" placeholder="البريد الالكتروني" />
                  <button type="submit">اشتراك</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom-section">
          <div className="card-content">
            <div className="title">الروابط المهمة</div>
            <div className="section-content">
              {navigationRoutes.map((item) => (
                <NavLink to={item.path}>{t(item.name)}</NavLink>
              ))}
            </div>
          </div>
          <div className="card-content">
            <div className="title">{`${name} ${slogan}`}</div>
            <div className="section-content max-w-4">
              <p>{footer && footer}</p>
            </div>
          </div>
          <div className="card-content">
            <div className="title">عنواننا</div>
            <div className="section-content max-w-2 adresses">
              {address?.map((item) => (
                <a target="_blank" href={item.link} key={item.link}>
                  {item.address}
                </a>
              ))}
            </div>
          </div>
          <div className="card-content link-icons">
            <div className="title">التواصل</div>
            <div className="section-content">
              {whatsapp && whatsapp[0] && (
                <a target="_blank" href={"https://wa.me/" + whatsapp[0]}>
                  <Whatsapp />
                </a>
              )}
              {social && social.instagram && (
                <a target="_blank" href={social.instagram}>
                  <Instagram />
                </a>
              )}
              {social && social.snapchat && (
                <a target="_blank" href={social.snapchat}>
                  <Snapchat />
                </a>
              )}
              {social && social.facebook && (
                <a target="_blank" href={social.facebook}>
                  <Facebook />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
