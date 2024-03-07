import { Box, Container, Stack } from "@mui/material";
import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import CardContainer from "./CardContainer";
import BackgroundVideo from "./backgroundVideo/BackgroundVideo";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { requestSetInfrastrucureProjects } from "redux/middlewares/infrastructureMiddleware";
function InfrastructureMainPage() {
  const [activeSubTitle, setActiveSubTitle] = useState<string>("all");
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetInfrastrucureProjects(dispatch);
  }, []);
  return (
    <Stack>
      {/*
      
      -Custom Banner 
        Navigation Filters

      */}
      {/* Search Component */}
      <BackgroundVideo
        activeSubTitle={activeSubTitle}
        setActiveSubTitle={setActiveSubTitle}
      />
      <Container maxWidth="xl">
        <Stack spacing={4} pb={4}>
          <Search />
          <Box>
            <CardContainer />
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}

export default InfrastructureMainPage;
