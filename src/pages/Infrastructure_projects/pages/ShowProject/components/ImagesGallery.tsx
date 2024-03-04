import { useTranslation } from "react-i18next";
import imgSrc from "../../../../../assets/images/IPB.png";
import { Box, Grid, Typography } from "@mui/material";

export default function ImagesGallery({ urls }: { urls: string[] }){
  const { t } = useTranslation();
  let images =
    urls?.length > 0
      ? urls.map((url, idx) => {
          return { id: `Img_${idx}_${Math.random() * 10}`, src: url };
        })
      : [];
  let more = images.length > 4,
    imagesArr = images;
  if (more) imagesArr = images.slice(0, 4);

  return (
    <Grid container sx={{ width: "95%" }}>
      {imagesArr.map((ele) => {
        return (
          <Grid key={ele.id} item xs={12} md={6} sx={{ padding: "0.2rem" }}>
            <img
              src={ele.src}
              style={{ margin: "4px", borderRadius: "12px" }}
              width="100%"
              height="220px"
              alt="Image"
            />
          </Grid>
        );
      })}
      {/* {more && (
        <Grid item xs={12} md={6} sx={{ padding: "0.2rem" }}>
          <Box
            style={{
              height: "220px",
              width: "100%",
              margin: "4px",
              borderRadius: "12px",
              backgroundImage: `url(${images[5].src})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "12px",
                backgroundColor: "#565454ab",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
              }}
            >
              <Typography variant="body2">
                <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>5+</span>
                <br />
                {t("InfrastructureProjects.showPage.more")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      )} */}
    </Grid>
  );
};

