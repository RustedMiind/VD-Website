import React, { useRef, useEffect } from "react";
import bgImg from "assets/images/infrestructurePeojectsImages/Infrastructure_projects_minPageBG.png";
import { Box, Button, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ParticlesBG from "./Particles";

const BackgroundVideo = ({ activeSubTitle, setActiveSubTitle }: propsType) => {
  const { t } = useTranslation();

  const subTitles = [
    { id: 1, title: t("InfrastructureProjects.subTitles.all"), tag: "all" },
    {
      id: 2,
      title: t("InfrastructureProjects.subTitles.specialCharts"),
      tag: "all1",
    },
    {
      id: 3,
      title: t("InfrastructureProjects.subTitles.waterStudies"),
      tag: "all2",
    },
    {
      id: 4,
      title: t("InfrastructureProjects.subTitles.categoryTitle"),
      tag: "all3",
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPositionY: "bottom",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          paddingBottom: "4rem",
          position: "relative",
        }}
      >
        {/* particles-js */}
        <ParticlesBG />
        <Box
          sx={{
            position: "absolute",
            top: "39%",
            color: "#fff",
            fontWeight: 800,
          }}
        >
          <Typography variant="h2">مشاريع البنية التحتية</Typography>
        </Box>
        {/* sub titles links */}
        <Box
          component={Container}
          maxWidth={"xl"}
          sx={({ breakpoints }) => ({
            position: "absolute",
            bottom: "18%",
            display: "flex",
            justifyContent: "center",
            background: " rgba(243, 245, 247, 0.2)",
            borderRadius: "10px",
          })}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            {subTitles.map((subtitle) => (
              <Button
                onClick={() => setActiveSubTitle(subtitle.tag)}
                variant={activeSubTitle === subtitle.tag ? "contained" : "text"}
                sx={{
                  color: "primary.contrastText",
                  my: 2,
                  borderRadius: "50px",
                }}
                // disabled
              >
                {subtitle?.title}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

type propsType = {
  activeSubTitle: string;
  setActiveSubTitle: React.Dispatch<string>;
};
export default BackgroundVideo;
