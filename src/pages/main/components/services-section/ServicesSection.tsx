import "./services-section.scss";
import topShape from "assets/images/services-header2.png";

function ServicesSection() {
  return (
    <div className="services-section">
      <img src={topShape} className="top-shape" />
      {/* <div
        className="top-shape"
        style={{ backgroundImage: `url(${topShape})` }}
      ></div> */}
      <h2>أبرز خدماتنا</h2>
      <div className="services-cards-container">
        <div className="service-card">
          <h3 className="title">التصميم الانشائي</h3>
          <p className="describtion">
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس
          </p>
          <img
            src="https://images.businessnewsdaily.com/app/uploads/2022/04/04082415/Customer_Service_Getty_nortonrsx.jpg"
            alt=""
            className="service-image"
          />
        </div>
        <div className="service-card">
          <h3 className="title">التصميم الانشائي</h3>
          <p className="describtion">
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس
          </p>
          <img
            src="https://images.businessnewsdaily.com/app/uploads/2022/04/04082415/Customer_Service_Getty_nortonrsx.jpg"
            alt=""
            className="service-image"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
