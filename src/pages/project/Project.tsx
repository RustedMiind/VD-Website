import TrippleSlider from "components/tripple-slider/TrippleSlider";
import "./project.scss";
import "./swiper-custom.scss";
import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";

import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();
  const data: PageBannerDataType = {
    bgImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    title: `المشروع ${projectId}`,
  };
  return (
    <PageBannerLayout data={data}>
      <div className="project-page">
        <section className="section">
          <h3 className="section-title">اسم المشروع</h3>
          <div className="section-content">
            <p>مشروع البنية التحتية</p>
          </div>
        </section>
        <section className="section">
          <TrippleSlider />
        </section>
        <section className="section">
          <h3 className="section-title">الوصف</h3>
          <div className="section-content">
            <p>
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا. هذا النص
              هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص
              من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
            </p>
          </div>
        </section>
        <section className="section">
          <h3 className="section-title">نطاق العمل</h3>
          <div className="section-content">
            <div className="work-areas-container">
              <div className="work-area-card">
                <div className="title">خدمة الامن والسلامة</div>
                <div className="content">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                </div>
              </div>
              <div className="work-area-card">
                <div className="title">خدمة الامن والسلامة</div>
                <div className="content">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                </div>
              </div>
              <div className="work-area-card">
                <div className="title">خدمة الامن والسلامة</div>
                <div className="content">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                </div>
              </div>
              <div className="work-area-card">
                <div className="title">خدمة الامن والسلامة</div>
                <div className="content">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageBannerLayout>
  );
}

export default Project;
