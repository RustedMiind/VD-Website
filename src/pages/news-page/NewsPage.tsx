import "./news-page.scss";
import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import { useTranslation } from "react-i18next";

function NewsPage() {
  const { t } = useTranslation();

  const data = {
    title: t("links.news"),
    bgImage: "",
  };
  return (
    <PageBannerLayout data={data}>
      <div className="news-page tight-section">
        <h2 className="news-section-header">اخر اخبارنا</h2>
        <div className="news-grid-layout">
          <div className="news-grid-item">
            <div className="new-news-card">
              <div className="content-container">
                <p className="new-icon">جديد</p>
                <h6 className="card-title">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                  توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.
                  هذا النص
                </h6>
              </div>
            </div>
          </div>
          <div className="news-grid-item">
            <div className="new-news-cards-container">
              <div className="new-news-card row-1-of-2">
                <div className="content-container">
                  <p className="new-icon">جديد</p>
                  <h6 className="card-title">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا. هذا النص
                  </h6>
                </div>
              </div>
              <div className="new-news-card row-1-of-2">
                <div className="content-container">
                  <p className="new-icon">جديد</p>
                  <h6 className="card-title">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا. هذا النص
                  </h6>
                </div>
              </div>
              <div className="new-news-card row-1-of-1">
                <div className="content-container">
                  <p className="new-icon">جديد</p>
                  <h6 className="card-title">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل
                    هذا. هذا النص
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="news-section-header">احدث الاخبار</h2>
        <div className="news-grid-layout">
          <div className="news-grid-item">
            <div className="inline-card main-card">
              <img
                className="card-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnW1Vf6vjLjDfG8JZyubARDUorkFXu9jj0Q&usqp=CAU"
              />
              <div className="content-container">
                <div>
                  <h4 className="title">الوصف</h4>
                  <p className="descibtion">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                    توليد هذا النص
                  </p>
                </div>
                <div className="date">8 يوليو 2023</div>
              </div>
            </div>
          </div>
          <div className="news-grid-item">
            <div className="news-three-cards-container">
              <div className="inline-card">
                <img
                  className="card-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnW1Vf6vjLjDfG8JZyubARDUorkFXu9jj0Q&usqp=CAU"
                />
                <div className="content-container">
                  <div>
                    <h4 className="title">الوصف</h4>
                    <p className="descibtion">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص
                    </p>
                  </div>
                  <div className="date">8 يوليو 2023</div>
                </div>
              </div>
              <div className="inline-card">
                <img
                  className="card-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnW1Vf6vjLjDfG8JZyubARDUorkFXu9jj0Q&usqp=CAU"
                />
                <div className="content-container">
                  <div>
                    <h4 className="title">الوصف</h4>
                    <p className="descibtion">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص
                    </p>
                  </div>
                  <div className="date">8 يوليو 2023</div>
                </div>
              </div>
              <div className="inline-card">
                <img
                  className="card-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnW1Vf6vjLjDfG8JZyubARDUorkFXu9jj0Q&usqp=CAU"
                />
                <div className="content-container">
                  <div>
                    <h4 className="title">الوصف</h4>
                    <p className="descibtion">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
                      توليد هذا النص
                    </p>
                  </div>
                  <div className="date">8 يوليو 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default NewsPage;
