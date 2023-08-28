import "./hexagon-shape.scss";
import { ServiceType } from "redux/reducers/servicesSlice";

function HexagonShape(props: PropsType) {
  return (
    <div className={`hexagon-shape`}>
      {!props.empty && (
        <>
          <img className="shape" src={props.bgImg} alt="" />
          <div className={`content ${props.color}`}>
            <h5 className="title">اسم الخدمة</h5>
            <p className="describtion">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم يمكنك
              أن تولد مثل هذا تولد مثل هذا تولد مثل هذا
            </p>
          </div>
        </>
      )}
    </div>
  );
}

type PropsType = {
  bgImg: string;
  color?: "main" | "secondary";
  service: ServiceType;
  empty?: boolean;
};

export default HexagonShape;
