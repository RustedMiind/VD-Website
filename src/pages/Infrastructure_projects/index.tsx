import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import BackgroundVideo from "./components/backgroundVideo/BackgroundVideo";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./index.scss";
import { useTranslation } from "react-i18next";

const Infrastructure_projects_Page = () => {
  // declare state
  const [activeSubTitle, setActiveSubTitle] = useState<string>("all");
  const [searchKey, setSearchKey] = useState<string>("");
  const [showSearch, setShowSearch] = useState(false);
  const { t } = useTranslation();
  const searchLabelVal: JSX.Element = (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SearchOutlinedIcon />
      <span>{t("InfrastructureProjects.buttons.search")}</span>
    </Box>
  );
  const [searchLabel, setSearchLabel] = useState<JSX.Element | string>(
    searchLabelVal
  );

  const projects = [
    { id: 1, name: "project 1" },
    { id: 2, name: "project 2" },
    { id: 3, name: "project 3" },
    { id: 4, name: "project 4" },
    { id: 5, name: "project 5" },
    { id: 6, name: "project 6" },
    { id: 7, name: "project 7" },
    { id: 8, name: "project 8" },
  ];


  return (
    <Box id="InfrestructrueMainPage" sx={{ margin: 0, padding: 0 }}>
      <BackgroundVideo activeSubTitle={activeSubTitle} setActiveSubTitle={setActiveSubTitle}/>
     
      {/* header and search field */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "3rem 0",
          }}
        >
          {!showSearch && (
            <Button
              sx={{
                width: "50px",
                height: "50px",
                backgroundColor: "#f3f5f7",
                color: "#004693",
                border: "1px solid lightgray",
                transition: "all 0.4s ease",
                ":hover": {
                  color: "#004693",
                  background: "#fff",
                },
              }}
              onClick={() => setShowSearch(true)}
            >
              <SearchOutlinedIcon sx={{ fontSize: "30px" }} />
            </Button>
          )}
          {showSearch && (
            <TextField
              label={searchLabel}
              onFocus={() => {
                setSearchLabel("");
              }}
              onBlur={() => {
                if (searchKey.trim().length === 0) {
                  setSearchLabel(searchLabelVal);
                  setShowSearch(false);
                } else setSearchKey("");
              }}
              onChange={(e) => setSearchKey(e.target.value)}
              sx={{
                borderRadius: "35px",
                height: " 50px",
                color: "#004693",
                border: "1px solid #004693",
                outline: "none",
              }}
            />
          )}
        </Box>
      </Box>
      {/* projects' cards */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        <Grid
          container
          style={{
            boxSizing: "border-box",
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} id={p.id} name={p.name} />
          ))}
        </Grid>
      </Box>
      <Box className="pyramid-container">
        <Box id="pyramid-level-3" className="pyramid-level"></Box>
      </Box>
    </Box>
  );
};

export default Infrastructure_projects_Page;
