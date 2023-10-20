import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import InfoWithImage from "../../components/info-with-image/InfoWithImage";
import Typography from "@mui/material/Typography";
import { Box, Grid, Stack, Tab, Tabs } from "@mui/material";
import MenuCard from "components/menu-card/MenuCard";
import FourImagesPreview from "components/four-images-preview/FourIMagesPreview";
import React from "react";

function DesignPreview() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <PageBannerLayout
      data={{ title: "خدمة التصميم", bgImage: { gradient: true } }}
    >
      <div className="tight-section">
        <div className="design-before-preview">
          <InfoWithImage />
        </div>
      </div>
      <div className="tight-section px-8">
        <Typography gutterBottom variant="h5">
          معلومات التصميم
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <MenuCard
              title="معلومات التصميم"
              items={[
                { name: "المعلومة الاولي", value: "1500" },
                { name: "المعلومة الثانية", value: "قيمة المعلومة" },
                { name: "المعلومة الثالثة", value: "12 قدم" },
                { name: "المعلومة الرابعة", value: "قيمة" },
                { name: "المعلومة الخامسة" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MenuCard
              checkIcons
              title="معلومات التصميم"
              items={[
                { name: "المعلومة الاولي", value: "1500" },
                { name: "المعلومة الثانية", value: "قيمة المعلومة" },
                { name: "المعلومة الثالثة", value: "12 قدم" },
                { name: "المعلومة الرابعة", value: "قيمة" },
                { name: "المعلومة الخامسة" },
                { name: "السادسة", value: "قيمة المعلومة" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <MenuCard
              checkIcons
              gutterBottom
              title="معلومات التصميم"
              items={[
                { name: "المعلومة الاولي", value: "1500" },
                { name: "المعلومة الثانية", value: "قيمة المعلومة" },
                { name: "المعلومة الثالثة", value: "12 قدم" },
                { name: "المعلومة الرابعة", value: "قيمة" },
              ]}
            />
            <MenuCard
              title="معلومات التصميم"
              items={[
                { name: "المعلومة الاولي", value: "1500" },
                { name: "المعلومة الثانية", value: "قيمة المعلومة" },
                { name: "المعلومة الثالثة", value: "12 قدم" },
                { name: "المعلومة الرابعة", value: "قيمة" },
              ]}
            />
          </Grid>
        </Grid>
      </div>

      <div className="tight-section px-8">
        <Typography variant="h5" pt={2} gutterBottom>
          تفاصيل المخطط الهندسي
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ ml: 1 }}
        >
          <Tab label="الفكرة الاولي" {...a11yProps(0)} />
          <Tab label="الفكرة الثانية" {...a11yProps(1)} />
          <Tab label="الفكرة الثالثة" {...a11yProps(2)} />
        </Tabs>
        <Stack>
          <FourImagesPreview
            images={[
              "https://images.unsplash.com/photo-1471039497385-b6d6ba609f9c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
              "https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
              "https://plus.unsplash.com/premium_photo-1680157071241-034d017884ca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
            ]}
          />
        </Stack>
      </div>
    </PageBannerLayout>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default DesignPreview;
