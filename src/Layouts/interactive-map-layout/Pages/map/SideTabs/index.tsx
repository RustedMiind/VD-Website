import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function SideTabs() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 50,
        right: 0,
        maxWidth: "80vh",
        bgcolor: "background.default",
        transform: "rotate(90deg)",
        transformOrigin: "right bottom",
        zIndex: 100,
      }}
    >
      <Tabs
        // value={value}
        // onChange={handleChange}
        textColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="الاستشارات الهندسية" />
        <Tab label="الامن والسلامة" />
        <Tab label="اعمال البيئة" />
        <Tab label="سلامة المختبر" />
        <Tab label="اعمال خرسانة" />
        <Tab label="اعمال التربة" />
      </Tabs>
    </Box>
  );
}

export default SideTabs;
