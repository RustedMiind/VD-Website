import React, { useRef, useEffect, useState } from "react";
import bgImg from "assets/images/infrestructurePeojectsImages/Infrastructure_projects_minPageBG.png";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ParticlesBG from "./Particles";
import axios from "axios";
import api from "methods/api";
import { useSnackbar } from "notistack";


const BackgroundVideo = ({ activeSubTitle, setActiveSubTitle }: propsType) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  // its dummy till back-end prepare apis
  const [subTitles, setSubTitles] = useState<
    { id: number; title: string; tag: string }[]
  >([
    { id: 2, title: "تصنيف 1", tag: "all1" },
    { id: 3, title: "تصنيف 2", tag: "all2" },
    { id: 4, title: "تصنيف 3", tag: "all3" },
  ]);

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

  useEffect(() => {
    // ! Handle if there is only one classification.
    if (subTitles.length > 1) {
      setSubTitles([
        {
          id: 1,
          title: t("InfrastructureProjects.subTitles.all"),
          tag: "all",
        },
        ...subTitles,
      ]);
    }
  }, []);

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
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            color: "#fff",
            fontWeight: 800,
          }}
        >
          <Typography variant="h1">مشاريع البنية التحتية</Typography>
        </Box>
        {/* sub titles links */}
        <Box
          className="InfrastructureProjectsSubTitlesContainer"
          sx={{ marginBottom: "1rem" }}
        >
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
