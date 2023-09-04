import "./files-slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import fileImage from "assets/images/file-image.png";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import { Download } from "react-bootstrap-icons";
import { FileType } from "redux/reducers/aboutSlice";

function FilesSlider(props: PropsType) {
  const repeat = (arr: any[], n: number): any[] => Array(n).fill(arr).flat();
  const slides: FileType[] =
    typeof props.files === "object" ? repeat(props.files, 5) : [];

  return (
    <>
      {typeof slides === "object" && (
        <div className="swiper-custom-files tight-section rtl">
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
              {slides?.map((file) => (
                <SwiperSlide key={Math.random()}>
                  <div
                    className="card-content-wrapper"
                    style={{
                      backgroundImage: `linear-gradient(259.28deg, #004693 0%, #29285E 100%)`,
                    }}
                  >
                    <img src={fileImage} className="file-bg-image" alt="" />
                    <div className="card-content">
                      <div className="right-side">
                        <h4>{file.original_name}</h4>
                        <p>حجم الملف: {file.size}</p>
                        <p>نوع الملف: {file.extension}</p>
                      </div>
                      <div className="left-side">
                        <a
                          download
                          href={file.path}
                          target="_blank"
                          className="download-link"
                        >
                          تحميل الملف
                          <Download />
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}

type PropsType = {
  files: FileType[];
};

export default FilesSlider;
