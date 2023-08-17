import "./cards-slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import slide_image_1 from "assets/images/bg-temp.jpg";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { AttachmentType } from "redux/reducers/projectsSlice";

function CardsSlider(props: PropsType) {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const slides: any[] = true ? repeat([1, 2, 3, 4, 5, 6], 5) : [];

  return (
    <div className="swiper-custom-cards rtl">
      <div className="container">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          effect={"coverflow"}
          // grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          loop={true}
          speed={1000}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.slideNext(1000);
            }, 2000);
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
              {/* <div className="image-container">
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                  }
                  alt="slide_image"
                />
              </div> */}
              <div className="card-content-wrapper">
                <div className="card-content">
                  <div className="person-info">
                    <div className="image">
                      <div className="image-container">
                        <img
                          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="info-container">
                      <h6 className="name">اسم الشخص</h6>
                      <div>هو مثال لنص يمكن أن يستب</div>
                    </div>
                  </div>
                  <div className="paragraph">
                    <ul>
                      <li>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا
                        النص هو مثال لنص يمكن أن يستبدل في نفس المساح
                      </li>
                      <li>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا
                        النص هو مثال لنص يمكن أن يستبدل في نفس المساح
                      </li>
                      <li>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا
                        النص هو مثال لنص يمكن أن يستبدل في نفس المساح
                      </li>
                      <li>
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة هذا
                        النص هو مثال لنص يمكن أن يستبدل في نفس المساح
                      </li>
                    </ul>
                  </div>
                </div>
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
  // images: AttachmentType[] | undefined;
};

export default CardsSlider;
