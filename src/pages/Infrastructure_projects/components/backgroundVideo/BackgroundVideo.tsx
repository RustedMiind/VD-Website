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
  const [subTitles, setSubTitles] = useState<subType[]>([]);

  let singleLink = subTitles.map((ele) => {
    return (
      <Button
        onClick={() => setActiveSubTitle(ele.name)}
        variant={activeSubTitle === ele.name ? "contained" : "text"}
        className={activeSubTitle === ele.name ? "active" : ""}
        sx={{
          marginX: "2rem",
        }}
      >
        {ele?.name}
      </Button>
    );
  });

  useEffect(() => {
    axios
      .get<{ sub_types: subType[] }>(api("employee/contract/types/1"))
      .then(({ data }) => {
        console.log("InfrastructureContextProvider Data:-", data);
        setSubTitles(data.sub_types);
      })
      .catch((err) => {
        console.log(
          "Error in fetch data in InfrastructureContextProvider:",
          err
        );
      });
  }, []);

  useEffect(() => {
    // ! Handle if there is only one classification.
    if (subTitles.length > 1) {
      setSubTitles([
        {
          id: 1,
          name: t("InfrastructureProjects.subTitles.all"),
          direct_entry_type_id: 0,
        },
        ...subTitles,
      ]);
    } else if (subTitles.length == 1) {
      setActiveSubTitle(subTitles[0].name);
    }
  }, [subTitles]);

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
            top: "33.5%",
            color: "#fff",
            fontWeight: 800,
          }}
        >
          <Typography variant="h2">مشاريع البنية التحتية</Typography>
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

type subType = {
  id: number;
  direct_entry_type_id: number;
  name: string;
};

type propsType = {
  activeSubTitle: string;
  setActiveSubTitle: React.Dispatch<string>;
};
export default BackgroundVideo;
