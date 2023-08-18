import "./partners-sections.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useSelector } from "react-redux";
import { MainStateType } from "redux/reducers/mainSlice";

function PartnersSection() {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const { main } = useSelector((state: { main: MainStateType }) => state);
  const slides: any[] =
    typeof main === "object" ? repeat(main.icons.icons, 6) : [{ path: "" }];
  return (
    <div className="partners-section">
      <h3 className="section-header">
        {typeof main === "object" && main.icons && main.icons.type}
      </h3>
      <div className="swiper-container">
        {typeof main === "object" && (
          <Swiper
            modules={[Autoplay]}
            //   spaceBetween={0}
            slidesPerView={4}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              // reverseDirection: true,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.slideNext(1000);
              }, 2000);
              console.log(swiper);
            }}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {slides.map((slide) => (
              <SwiperSlide>
                <div className="swiper-item">
                  <img src={slide.logo} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="swiper-pagination">
        <div className="page"></div>
        <div className="page active"></div>
        <div className="page"></div>
      </div>
    </div>
  );
}

export default PartnersSection;
