import { Stack } from "@mui/material";
import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import CardContainer from "./CardContainer";
import BackgroundVideo from "./backgroundVideo/BackgroundVideo";
import { useState } from "react";
function InfrastructureMainPage() {
  const [activeSubTitle, setActiveSubTitle] = useState<string>("all");

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
      <CardContainer />
    </Stack>
  );
}

export default InfrastructureMainPage;
