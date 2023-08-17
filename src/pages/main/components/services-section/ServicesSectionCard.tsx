import { useEffect, useState } from "react";
import { ServiceType } from "redux/reducers/servicesSlice";

function ServicesSectionCard(props: PropsType) {
  const [index, setIndex] = useState<IndexStateType>({ value: 0, state: "ok" });
  useEffect(() => {
    setTimeout(() => {
      setIndex({ ...index, state: "loading" });
      setTimeout(() => {
        setIndex({ state: "ok", value: props.index });
      }, 500);
    }, Math.floor(Math.random() * 500));
  }, [props.index, props.services]);
  return (
    <div
      className={`service-card-main-page  ${
        index.state === "loading" ? index.state : ""
      }`}
    >
      <h5 className="title">التصميم الانشائي</h5>
      <p className="describtion">
        لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
        أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت انيم
        أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس
      </p>
      <img
        src="https://images.businessnewsdaily.com/app/uploads/2022/04/04082415/Customer_Service_Getty_nortonrsx.jpg"
        alt=""
        className="service-image"
      />
    </div>
  );
}

type PropsType = {
  services: ServiceType[];
  index: number;
};
type IndexStateType = {
  value: number;
  state: "loading" | "ok";
};
export default ServicesSectionCard;
