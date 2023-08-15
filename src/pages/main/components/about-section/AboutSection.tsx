import { Person, Folder2, CaretLeftFill } from "react-bootstrap-icons";
import "./about-section.scss";
import whiteHeader from "assets/images/white-header.png";

function AboutSection() {
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
          <div className="manager-card">
            <h5 className="title">
              <span className="icon-with-border">
                <Person />
              </span>
              المدير التنفيذي
            </h5>
            <div className="image">
              <img
                src="https://media.istockphoto.com/id/1341347262/photo/portrait-smiling-african-american-businessman-in-blue-suit-sit-at-table-for-meeting-in-office.webp?b=1&s=170667a&w=0&k=20&c=ROzf-9PsItphtLJpDBLZ75aiDXYGvet3dViR8r6t54Q="
                alt=""
              />
            </div>
            <div className="name">م/ سعد مشعل</div>
          </div>
          <div className="profile-card">
            <h5 className="title">
              <span className="icon-with-border">
                <Folder2 />
              </span>
              الملف التعريفي
            </h5>
            <div className="about-us">
              <p>هذا نص مثال هذا نص مثال هذا نص مثال هذا نص مثال</p>
            </div>
            <a href="" className="more-content-btn">
              لمزيد من المعلومات
              <CaretLeftFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
