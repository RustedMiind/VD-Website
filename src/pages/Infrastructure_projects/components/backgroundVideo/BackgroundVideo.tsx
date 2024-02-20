import React, { useRef, useEffect } from "react";
import bgImg from "assets/images/infrestructurePeojectsImages/Infrastructure_projects_minPageBG.png";
import { Box, Button, Typography } from "@mui/material";
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
  let singleLink = subTitles.map((ele) => {
    return (
      <Button
        onClick={() => setActiveSubTitle(ele.tag)}
        variant={activeSubTitle === ele.tag ? "contained" : "text"}
        className={activeSubTitle === ele.tag ? "active" : ""}
      >
        {ele?.title}
      </Button>
    );
  });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          // backgroundImage: `url(${bgImg})`,
          backgroundSize: "100% 100%",
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
        {/* sub titles links */}
        <Box className="InfrastructureProjectsSubTitlesContainer">
          <Box className="InfrastructureProjectsSubTitles">{singleLink}</Box>
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
