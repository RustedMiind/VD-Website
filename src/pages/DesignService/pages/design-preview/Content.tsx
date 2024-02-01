import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import MenuCard from "components/menu-card/MenuCard";
import MainDataSection from "./MainDataSection";
import { useContext } from "react";
import { DesignContext } from "./context";
import CardsPlaceholder from "./PlaceHolders/Cards";

function Content() {
  const { design, attachmentsOptions, status } = useContext(DesignContext);

  return (
    <PageBannerLayout
      data={{ title: "خدمة التصميم", bgImage: { gradient: true } }}
    >
      <div className="tight-section mb-4">
        <MainDataSection />
      </div>
      <div className="tight-section px-8">
        <Typography gutterBottom variant="h5">
          معلومات التصميم
        </Typography>
        {status === "loading" && <CardsPlaceholder />}
        {status === "none" && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <MenuCard
                title="معلومات التصميم"
                items={[
                  { name: "اسم المخطط", value: design?.engineering_name },
                  { name: "مطبخ", value: design?.kitchen },
                  { name: "غرفة معيشة", value: design?.living_room },
                  { name: "غرفة العشاء", value: design?.dinner_room },
                  { name: "غرفة نوم رئيسية", value: design?.main_bedroom },
                  { name: "مساحة الارض", value: design?.area },
                  { name: "طول الارض", value: design?.height_floor },
                  { name: "عرض الارض", value: design?.width_floor },
                  { name: "عرض الشارع", value: design?.width_front_street },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MenuCard
                checkIcons
                title="محتويات ملف التصميم"
                items={
                  attachmentsOptions?.map((option) => ({
                    name: option.key,
                  })) || []
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MenuCard
                checkIcons
                gutterBottom
                title="مرافق الوحدة"
                items={
                  design?.attachments?.map((attachment) => ({
                    name: attachment.typeName,
                    menuItemProps: {
                      component: "a",
                      href: attachment.file,
                      target: "_blank",
                    },
                  })) || []
                }
              />
              <MenuCard
                title="عنوان الفيلا"
                items={[
                  { name: "عرض الشارع", value: design?.width_front_street },
                ]}
              />
            </Grid>
          </Grid>
        )}
      </div>
    </PageBannerLayout>
  );
}

export default Content;
