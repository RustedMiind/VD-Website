import React, { useRef, useEffect, useState } from "react";
import bgImg from "assets/images/infrestructurePeojectsImages/Infrastructure_projects_minPageBG.png";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import ParticlesBG from "./Particles";
import axios from "axios";
import api from "methods/api";
import { useSnackbar } from "notistack";

type WorkTypes = {
  id: string;
};

const BackgroundVideo = ({ activeSubTitle, setActiveSubTitle }: propsType) => {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [subTitles, setSubTitles] = useState<
    { id: number; title: string; tag: string }[]
  >([{ id: 0, title: "الكل", tag: "all" }]);
  // const subTitles = [
  //   { id: 1, title: t("InfrastructureProjects.subTitles.all"), tag: "all" },
  //   {
  //     id: 2,
  //     title: t("InfrastructureProjects.subTitles.specialCharts"),
  //     tag: "all1",
  //   },
  //   {
  //     id: 3,
  //     title: t("InfrastructureProjects.subTitles.waterStudies"),
  //     tag: "all2",
  //   },
  //   {
  //     id: 4,
  //     title: t("InfrastructureProjects.subTitles.categoryTitle"),
  //     tag: "all3",
  //   },
  // ];
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
    axios
      .get<{ types: WorkTypes }>(api("employee/contract/types"))
      .then(({ data }) => {
        console.log("Typesssss Data:-", data);
        let n = Object.keys(data?.types).length,
          arr = [{ id: 0, title: "الكل", tag: "all" }];
        for (let i = 0; i < n; i++) {
          let _key = Object.keys(data?.types)[i];
          arr.push({
            title: _key,
            id: +data?.types[_key as keyof WorkTypes],
            tag: `all${i + 1}`,
          });
        }
        console.log("Array101 :", arr);
        setSubTitles(arr);
      })
      .catch((err) => {
        console.log("Error in fetch data:", err);
        enqueueSnackbar("تعذر في تحميل بيانات انواع اوامر العمل", {
          variant: "error",
        });
      });
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
          sx={{ marginBottom: "1rem" }}>
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
