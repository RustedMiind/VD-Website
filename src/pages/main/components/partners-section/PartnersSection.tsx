import "./partners-sections.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function PartnersSection() {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const slides: any[] = true ? repeat([1, 2, 3, 4, 5, 6], 5) : [];

  return (
    <div className="partners-section">
      <h3 className="section-header">شركاؤنا</h3>
      <div className="swiper-container">
        <Swiper
          modules={[Autoplay]}
          //   spaceBetween={0}
          slidesPerView={4}
          loop={true}
          speed={2500}
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
                <img
                  src="https://image.pngaaa.com/744/131744-middle.png"
                  alt=""
                />
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
  );
}

export default PartnersSection;
