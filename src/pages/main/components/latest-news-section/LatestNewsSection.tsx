import "./latest-news-section.scss";

function LatestNewsSection() {
  return (
    <div
      className="bg-container"
      style={{
        backgroundImage: `url("${"https://image.shutterstock.com/image-photo/farmer-holding-soil-hands-closeup-260nw-1992117911.jpg"}")`,
      }}
    >
      <div className="latest-news-section">
        <div className="content-container">
          <h2 className="section-title">اخر اخبارنا</h2>
          <div className="content">
            <div className="image">
              <img
                src="https://image.shutterstock.com/image-photo/farmer-holding-soil-hands-closeup-260nw-1992117911.jpg"
                alt=""
              />
            </div>
            <div className="describtion-card">
              <h3 className="news-title">خدمات التربة</h3>
              <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
                هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل
                في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى هذا
                النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل في
                نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsSection;
