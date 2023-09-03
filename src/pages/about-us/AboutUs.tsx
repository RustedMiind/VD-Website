import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import "./about-us.scss";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import ScrollAnimation from "react-animate-on-scroll";
import IconsSlider from "components/icons-slider/IconsSlider";
import { Bullseye, EyeFill, RocketTakeoffFill } from "react-bootstrap-icons";
import PartnersSectionAbout from "./components/partners-section/PartnersSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { requestSetAbout } from "redux/middlewares/aboutMiddleware";
import { AboutStateType } from "redux/reducers/aboutSlice";
import storage from "methods/storage";
import FilesSlider from "components/files-slider/FilesSlider";
import { sum } from "methods/sumByKey";

function AboutUs() {
  const about: AboutStateType = useSelector(
    (state: { about: AboutStateType }) => state.about
  );
  const settingsCondition =
    about && typeof about === "object" && about.settings;
  const condition = about && typeof about === "object";
  const data: PageBannerDataType = {
    bgImage:
      settingsCondition &&
      about.settings.about_page_image &&
      about.settings.about_page_image[0]
        ? storage(about.settings.about_page_image[0])
        : "",
    title: false || "نبذة عنا",
  };
  const [counterRan, setCounterRan] = useState(false);
  const projectsCounts =
    condition && about.projects ? about.projects : undefined;
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetAbout(dispatch);
  }, []);
  return (
    <PageBannerLayout data={data}>
      <div className="about-us-page">
        <div className="tight-section">
          <ScrollAnimation animateIn="animate-fade-to-left">
            {/* {({ isVisible }: { isVisible: boolean }) => ( */}
            <div className="about-us-content">
              <div className="right">
                {/* <h4>
                    اكملنا اكثر من
                    <span className="text-third">
                      {" "}
                      {isVisible ? <CountUp duration={4} end={4000} /> : 0}{" "}
                    </span>
                    مشروع
                  </h4> */}
                <div className="image-container-21-9">
                  <img
                    src={
                      settingsCondition &&
                      about.settings.about_page_image &&
                      about.settings.about_page_image[0]
                        ? storage(about.settings.about_page_image[0])
                        : ""
                    }
                    alt=""
                  />
                </div>
                {/* <div className="counters-container">
                  <div className="counter-item">
                    <div className="val">
                      {true ? <CountUp duration={4} end={23} /> : 0}
                    </div>
                    <div className="name">مراقبة جودة</div>
                  </div>
                </div> */}
              </div>
              <div className="left">
                <h4 className="text-third">من نحن</h4>
                <p>{settingsCondition && about.settings.about_us}</p>
                {/* <div className="two-paragraphs-container">
                  <div className="paragraph">
                    <h4 className="text-third">الرؤية</h4>
                    <p>
                      لنص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                      العديد من
                    </p>
                  </div>
                  <div className="paragraph">
                    <h4 className="text-third">الهدف</h4>
                    <p>
                      لنص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
                      العديد من
                    </p>
                  </div>
                </div>
                <div className="centered-paragraph">
                  <h4 className="text-third">الرسالة</h4>
                  <p>
                    ن تولد مثل هذا النص أو العديد منن تولد مثل هذا النص أو
                    العديد منن تولد مثل هذا النص أو العديد من
                  </p>
                </div> */}
              </div>
            </div>
            {/* )}
          </ReactVisibilitySensor> */}
          </ScrollAnimation>
        </div>
        {/* <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
          {({ isVisible }: { isVisible: boolean }) => (
            <div style={{ height: 100 }}>
              {isVisible ? <CountUp duration={3} end={1000} /> : 0}
            </div>
          )}
        </ReactVisibilitySensor> */}
        <div className="wide-section bg-container">
          <div className="tight-section">
            <ScrollAnimation animateIn="animate-fade-to-left">
              <div className="three-cards-cotnainer">
                {settingsCondition && about.settings.vision && (
                  <div className="card-item">
                    <div className="icon-head">
                      <Bullseye />
                    </div>
                    <h4>الرؤية</h4>
                    <p>{about.settings.vision}</p>
                  </div>
                )}
                {settingsCondition && about.settings.goal && (
                  <div className="card-item">
                    <div className="icon-head">
                      <RocketTakeoffFill />
                    </div>
                    <h4>الهدف</h4>
                    <p>{about.settings.goal}</p>
                  </div>
                )}
                {settingsCondition && about.settings.about_slogan && (
                  <div className="card-item">
                    <div className="icon-head">
                      <EyeFill />
                    </div>
                    <h4>الشعار</h4>
                    <p>{about.settings.about_slogan}</p>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          </div>
          {condition &&
            about.icons &&
            about.icons.icons &&
            about.icons.icons[0] && (
              <div className="about-icons-container wide-section">
                <IconsSlider
                  title={about.icons.type}
                  className="tight-section"
                  icons={about.icons.icons?.map((item) => item.logo)}
                />
              </div>
            )}

          <div className="bg-container-dark">
            <ScrollAnimation animateIn="animate-fade-to-left">
              <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: { isVisible: boolean }) => {
                  isVisible && setCounterRan(true);

                  return (
                    <div className="statistics-container tight-section">
                      <div className="total">
                        <h3>
                          {projectsCounts &&
                          typeof about === "object" &&
                          about.projects &&
                          counterRan ? (
                            <CountUp
                              duration={3}
                              end={sum(
                                about.projects.map((item) => parseInt(item.num))
                              )}
                            />
                          ) : (
                            0
                          )}
                        </h3>
                        <div>اجمالي عدد المشاريع</div>
                      </div>
                      <div className="padding-2">
                        <div className="border-wrapper">
                          <div className="counters">
                            {projectsCounts &&
                              projectsCounts.map((projectcount) => (
                                <div className="item" key={projectcount.name}>
                                  <div className="count-number">
                                    {counterRan ? (
                                      <CountUp
                                        duration={3}
                                        end={parseInt(projectcount.num)}
                                      />
                                    ) : (
                                      0
                                    )}
                                  </div>
                                  <div>{projectcount.name}</div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }}
              </ReactVisibilitySensor>
            </ScrollAnimation>
          </div>

          {condition && (
            <PartnersSectionAbout
              // title={about.partners..type}
              icons={
                about.icons ? about.partners.map((item) => item.logo) : [""]
              }
            />
          )}

          {condition && about.files && about.files[0] && (
            <div className="files-slider-container">
              <h3>اهم الملفات</h3>
              <FilesSlider files={about.files} />
            </div>
          )}
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default AboutUs;
