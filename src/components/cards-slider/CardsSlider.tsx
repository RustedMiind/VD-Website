import "./cards-slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import slide_image_1 from "assets/images/bg-temp.jpg";
import topRightBorder from "assets/images/1.png";
import bottomLeftBorder from "assets/images/2.png";
import bg from "assets/images/card-bg.png";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { AttachmentType } from "redux/reducers/projectsSlice";
import { useSelector } from "react-redux";
import { MainStateType, MembersType } from "redux/reducers/mainSlice";

function CardsSlider(props: PropsType) {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const { main } = useSelector((state: { main: MainStateType }) => state);
  const slides: MembersType =
    typeof main === "object" ? repeat(main.members, 5) : [];

  return (
    <>
      {typeof main === "object" && (
        <div className="swiper-custom-cards tight-section rtl">
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
              {slides?.map((member) => (
                <SwiperSlide key={Math.random()}>
                  {/* <div className="image-container">
                <img
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                  }
                  alt="slide_image"
                />
              </div> */}
                  <div
                    className="card-content-wrapper"
                    style={{ backgroundImage: `url("${bg}")` }}
                  >
                    <div className="card-content">
                      <img src={topRightBorder} alt="" className="top-right" />
                      <img
                        src={bottomLeftBorder}
                        alt=""
                        className="bottom-left"
                      />
                      <div className="person-info">
                        <div className="image">
                          <div className="image-container">
                            <img src={member.image} alt="" />
                          </div>
                        </div>
                        <div className="info-container">
                          <h6 className="name">{member.name}</h6>
                          <div>{member.job_title}</div>
                        </div>
                      </div>
                      <div className="paragraph">
                        <ul>{member.description}</ul>
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
      )}
    </>
  );
}

type PropsType = {
  // images: AttachmentType[] | undefined;
};

export default CardsSlider;
