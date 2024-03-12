import { StackedBarChartRounded } from "@mui/icons-material";
import { Drawer, DrawerProps, Paper, PaperProps, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "./alt-drawer.scss";
import AltProject from "./AltProject";

const SwiperSlidePaper = (props: PaperProps) => (
  <Paper
    {...props}
    sx={(theme) => ({
      p: 2,
      height: 1,
      bgcolor: `${theme.palette.background.default}AA`,
      backdropFilter: "blur(15px)",
      overflowY: "scroll",
    })}
  />
);

function AltDrawer(props: DrawerProps) {
  return (
    <Drawer
      variant={"persistent"}
      anchor="bottom"
      {...props}
      PaperProps={{
        sx(theme) {
          return {
            bgcolor: "transparent",
            outline: "none",
            border: "none",
            pointerEvents: "none",
            ">*": {
              pointerEvents: "all",
            },
          };
        },
        elevation: 0,
      }}
    >
      <Stack
        className="map-swiper"
        component={Paper}
        elevation={0}
        sx={(theme) => ({
          width: "calc(100% - 425px)",
          height: 400,
          bgcolor: "transparent",
          p: 2,
        })}
      >
        <Paper
          elevation={0}
          sx={{
            bgcolor: "transparent",
            overflow: "hidden",
            height: 1,
          }}
        >
          <Swiper
            spaceBetween={10}
            slidesPerView={1.7}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <SwiperSlidePaper>
                <AltProject />
              </SwiperSlidePaper>
            </SwiperSlide>

            <SwiperSlide>
              <SwiperSlidePaper>
                <AltProject />
              </SwiperSlidePaper>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlidePaper>
                <AltProject />
              </SwiperSlidePaper>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlidePaper>
                <AltProject />
              </SwiperSlidePaper>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlidePaper>
                <AltProject />
              </SwiperSlidePaper>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlidePaper>
                <AltProject />
              </SwiperSlidePaper>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlidePaper>
                <AltProject />
              </SwiperSlidePaper>
            </SwiperSlide>
          </Swiper>
        </Paper>
      </Stack>
    </Drawer>
  );
}

export default AltDrawer;
