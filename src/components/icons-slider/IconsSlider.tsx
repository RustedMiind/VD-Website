import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ScrollAnimation from "react-animate-on-scroll";
import "./icons-slider.scss";
import ForceRerender from "components/force-rerender/ForceRerender";

function IconsSlider(props: PropsType) {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const slides: string[] = repeat(props.icons, 6);

  return (
    <ForceRerender condition={props.icons}>
      <>
        <ScrollAnimation animateIn="animate-fade-to-left">
          <div className={`partners-wrapper ${props.className}`}>
            <h3 className="section-header text-main">{props.title}</h3>

            <div className="swiper-container">
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
                  }, 5000);
                }}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={Math.random()}>
                    <div className="swiper-item">
                      <img src={slide} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-pagination">
              <div className="page"></div>
              <div className="page active"></div>
              <div className="page"></div>
            </div>
          </div>
        </ScrollAnimation>
      </>
    </ForceRerender>
  );
}

type PropsType = {
  title: string;
  icons: string[];
  className?: string;
};

export default IconsSlider;
