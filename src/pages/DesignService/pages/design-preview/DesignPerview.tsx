import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import InfoWithImage from "../../components/info-with-image/InfoWithImage";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Tab, Tabs } from "@mui/material";
import MenuCard from "components/menu-card/MenuCard";
import FourImagesPreview from "components/four-images-preview/FourIMagesPreview";
import React from "react";
import MainDataSection from "./MainDataSection";
import { DesignContextProvider } from "./context";
import Content from "./Content";

function DesignPreview() {
  return (
    <DesignContextProvider>
      <Content />
    </DesignContextProvider>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default DesignPreview;
