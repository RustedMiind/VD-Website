import "./partners-sections.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function PartnersSection() {
  return (
    <div className="partners-section">
      <h2 className="section-header">شركاؤنا</h2>
      <div className="swiper-container">
        <Swiper
          modules={[Autoplay]}
          //   spaceBetween={0}
          slidesPerView={4}
          //   loop={true}
          speed={2500}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            // reverseDirection: true,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="swiper-item">
              <img
                src="https://image.pngaaa.com/744/131744-middle.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <img
                src="https://spng.pinpng.com/pngs/s/608-6088018_visit-our-work-dole-logo-png-white-transparent.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <img
                src="https://image.pngaaa.com/744/131744-middle.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <img src="https://image.pngaaa.com/376/50376-small.png" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <img
                src="https://www.pngitem.com/pimgs/m/110-1103620_world-health-organization-logo-white-png-transparent-png.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-item">
              <img
                src="https://smallimg.pngkey.com/png/small/1008-10087161_northrop-grumman-foundation-walmart-logo-png-white.png"
                alt=""
              />
            </div>
          </SwiperSlide>
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
