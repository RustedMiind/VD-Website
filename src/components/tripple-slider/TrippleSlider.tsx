import { Swiper, SwiperSlide } from "swiper/react";
import slide_image_1 from "assets/images/bg-temp.jpg";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./triple-slider.scss";
import { AttachmentType } from "redux/reducers/projectsSlice";

function TrippleSlider(props: PropsType) {
  return (
    <div className="swiper-custom">
      <div className="container">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            // clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {props.images?.map((image) => (
            <SwiperSlide>
              <img src={image.path} alt="slide_image" />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">left</div>
            <div className="swiper-button-next slider-arrow">right</div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

type PropsType = {
  images: AttachmentType[] | undefined;
};

export default TrippleSlider;
