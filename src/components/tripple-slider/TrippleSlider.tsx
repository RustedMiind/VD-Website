import { Swiper, SwiperSlide } from "swiper/react";
import slide_image_1 from "assets/images/bg-temp.jpg";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "./triple-slider.scss";
import { AttachmentType } from "redux/reducers/projectsSlice";

function TrippleSlider(props: PropsType) {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const slides: any[] = props.images ? repeat(props.images, 5) : [];
  console.log(slides);
  return (
    <div className="swiper-custom rtl">
      <div className="container">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect={"coverflow"}
          // grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          loop={true}
          speed={1000}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.slideNext(1000);
            }, 1000);
            console.log(swiper);
          }}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          // navigation={{
          //   nextEl: ".swiper-button-next",
          //   prevEl: ".swiper-button-prev",
          //   // clickable: true,
          // }}
          className="swiper_container"
        >
          {slides?.map((image) => (
            <SwiperSlide key={image.original_name}>
              <div className="image-container">
                <img src={image.path} alt="slide_image" />
                {image.describtion && <div className="describtion">hello</div>}
              </div>
            </SwiperSlide>
          ))}

          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">left</div>
            <div className="swiper-button-next slider-arrow">right</div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
}

type PropsType = {
  images: AttachmentType[] | undefined;
};

export default TrippleSlider;
