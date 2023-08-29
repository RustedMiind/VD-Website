import "./test.scss";
import shape from "assets/images/Group 716.png";

const items = [1, 2, 3, 1, 1, 2, 3, 2, 2];
const bi = 3.14159;
function Test() {
  const count = items.length,
    rotationAngle = 360 / items.length,
    radiusLength = 500,
    circumference = 2 * bi * radiusLength;
  const itemWidth = circumference / count;
  return (
    <div
      className="circle-test"
      style={{ width: radiusLength * 2, height: radiusLength * 2 }}
    >
      {items.map((item, index) => (
        <div
          className="item"
          style={{
            transform: `rotate(${rotationAngle * index}deg)`,
            width: itemWidth,
          }}
        >
          <div className="top-image">
            <img src={shape} alt="" />
            <div
              className="content"
              style={{ transform: `rotate(-${rotationAngle * index}deg)` }}
            >
              <h4 className="item-title">عنوان الخدمة</h4>
              <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Test;
