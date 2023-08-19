import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";
import "./about-us.scss";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import ScrollAnimation from "react-animate-on-scroll";
import IconsSlider from "components/icons-slider/IconsSlider";
import { Bullseye, EyeFill, RocketTakeoffFill } from "react-bootstrap-icons";
function AboutUs() {
  const data: PageBannerDataType = {
    bgImage: false || "",
    title: false || "نبذة عنا",
  };

  return (
    <PageBannerLayout data={data}>
      <div className="about-us-page">
        <div className="tight-section">
          <ScrollAnimation animateIn="animate-fade-to-left">
            {" "}
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
                <div className="image-container-16-9">
                  <img
                    src="https://images.unsplash.com/photo-1584904939065-6864ccc1fcab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
                    alt=""
                  />
                </div>
                {/* <div className="couners-container">
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
                <p>
                  ا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                  هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص
                  أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
                  يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك
                  مولد النص العربى زيادة عدد الفقرات كما تريد،
                </p>
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
              {isVisible ? <CountUp duration={5} end={1000} /> : 0}
            </div>
          )}
        </ReactVisibilitySensor> */}
        <div className="wide-section bg-container">
          <div className="tight-section">
            <ScrollAnimation animateIn="animate-fade-to-left">
              <div className="three-cards-cotnainer">
                <div className="card-item">
                  <div className="icon-head">
                    <Bullseye />
                  </div>
                  <h4>الرؤية</h4>
                  <p>
                    تولد مثل هذا النص أو العديد منن تولد مثل هذا النص أو العديد
                    منن تولد مثل هذا النص أو العديد من
                  </p>
                </div>
                <div className="card-item">
                  <div className="icon-head">
                    <RocketTakeoffFill />
                  </div>
                  <h4>الهدف</h4>
                  <p>
                    تولد مثل هذا النص أو العديد منن تولد مثل هذا النص أو العديد
                    منن تولد مثل هذا النص أو العديد من
                  </p>
                </div>
                <div className="card-item">
                  <div className="icon-head">
                    <EyeFill />
                  </div>
                  <h4>الشعار</h4>
                  <p>
                    تولد مثل هذا النص أو العديد منن تولد مثل هذا النص أو العديد
                    منن تولد مثل هذا النص أو العديد من
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <div className="about-icons-container wide-section">
            <IconsSlider
              title="شهاداتنا"
              className="tight-section"
              icons={[
                "https://image.similarpng.com/very-thumbnail/2020/06/logo-pepsi-icon-PNG.png",
                "https://image.similarpng.com/very-thumbnail/2020/06/logo-pepsi-icon-PNG.png",
                "https://image.similarpng.com/very-thumbnail/2020/06/logo-pepsi-icon-PNG.png",
              ]}
            />
          </div>

          <div className="bg-container-dark">
            <ScrollAnimation animateIn="animate-fade-to-left">
              <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }: { isVisible: boolean }) => (
                  <div className="statistics-container tight-section">
                    <div className="total">
                      <h3>
                        {isVisible ? <CountUp duration={5} end={1000} /> : 0}
                      </h3>
                      <div>اجمالي عدد المشاريع</div>
                    </div>
                    <div className="counters">
                      <div className="top">
                        <div className="item">
                          <div className="count-number">
                            {isVisible ? <CountUp duration={5} end={245} /> : 0}
                          </div>
                          <div>مباني سكنية</div>
                        </div>
                        <div className="item">
                          <div className="count-number">
                            {isVisible ? <CountUp duration={5} end={23} /> : 0}
                          </div>
                          <div>مباني سكنية</div>
                        </div>
                        <div className="item">
                          <div className="count-number">
                            {isVisible ? <CountUp duration={5} end={4} /> : 0}
                          </div>
                          <div>مباني سكنية</div>
                        </div>
                      </div>
                      <div className="bottom">
                        <div className="item">
                          <div className="count-number">
                            {isVisible ? <CountUp duration={5} end={800} /> : 0}
                          </div>
                          <div>مباني سكنية</div>
                        </div>
                        <div className="item">
                          <div className="count-number">
                            {isVisible ? <CountUp duration={5} end={143} /> : 0}
                          </div>
                          <div>مباني سكنية</div>
                        </div>
                        <div className="item">
                          <div className="count-number">
                            {isVisible ? <CountUp duration={5} end={22} /> : 0}
                          </div>
                          <div>مباني سكنية</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ReactVisibilitySensor>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default AboutUs;
