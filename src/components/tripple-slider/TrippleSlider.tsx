import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "./triple-slider.scss";
import { AttachmentType } from "redux/reducers/projectsSlice";
import ForceRerender from "components/force-rerender/ForceRerender";

function TrippleSlider(props: PropsType) {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const slides: any[] = props.images ? repeat(props.images, 5) : [];
  return (
    <div className="swiper-custom rtl">
      <div className="container">
        <ForceRerender condition={props.images}>
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect={"coverflow"}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            loop={true}
            speed={800}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.slideNext(1000);
              }, 1000);
            }}
            slidesPerView={2.2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            className="swiper_container"
          >
            {slides?.map((image) => (
              <SwiperSlide key={Math.random()}>
                <div className="image-container">
                  <img src={image.path} alt="slide_image" />
                  {image.describtion && (
                    <div className="describtion">{image.describtion}</div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ForceRerender>
      </div>
    </div>
  );
}

type PropsType = {
  images: AttachmentType[];
};

export default TrippleSlider;
