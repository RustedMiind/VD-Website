import {
  Person,
  Folder2,
  CaretLeftFill,
  Download,
} from "react-bootstrap-icons";
import "./about-section.scss";
import whiteHeader from "assets/images/white-header.png";
import CardsSlider from "components/cards-slider/CardsSlider";
import { useSelector } from "react-redux";
import { MainStateType } from "redux/reducers/mainSlice";

function AboutSection() {
  const { main } = useSelector((state: { main: MainStateType }) => state);

  return (
    <div
      className="bg-container"
      style={{
        backgroundImage: `url("${"https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg  "}")`,
      }}
    >
      <div className="about-section">
        <div className="header-image">
          <img src={whiteHeader} alt="" />
        </div>
        <h3 className="">تعرف علينا</h3>
        <div className="content-container">
          <CardsSlider />
          <div className="two-links-container">
            <a href="" className="third">
              تعرف علينا
            </a>
            {typeof main == "object" && main.file && (
              <a
                href={main.file}
                target="_blank"
                download="الهيكل التنظيمي"
                rel="noreferrer"
              >
                <Download />
                تحميل الملف التعريفي
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
