import "./partners-sections.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useSelector } from "react-redux";
import { MainStateType } from "redux/reducers/mainSlice";
import ScrollAnimation from "react-animate-on-scroll";
import IconsSlider from "components/icons-slider/IconsSlider";

function PartnersSection() {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const { main } = useSelector((state: { main: MainStateType }) => state);
  const slides: any[] =
    typeof main === "object" ? repeat(main.icons.icons, 6) : [{ path: "" }];
  return (
    <div className="partners-section">
      <div className="tight-section">
        {typeof main === "object" &&
          main.icons &&
          main.icons.type &&
          main.icons.icons && (
            <IconsSlider
              icons={main.icons.icons.map((icon) => icon.logo)}
              title={main.icons.type}
            />
          )}
      </div>
    </div>
  );
}

export default PartnersSection;
