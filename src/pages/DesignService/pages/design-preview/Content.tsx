import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import MenuCard from "components/menu-card/MenuCard";
import MainDataSection from "./MainDataSection";
import { useContext } from "react";
import { DesignContext } from "./context";
import CardsPlaceholder from "./PlaceHolders/Cards";
import { useSnackbar } from "notistack";
import api from "methods/api";
import { useTranslation } from "react-i18next";

function Content() {
  const { design, attachmentsOptions, status } = useContext(DesignContext);
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return (
    <PageBannerLayout
      data={{ title: t("design.main"), bgImage: { gradient: true } }}
    >
      <div className="tight-section mb-4">
        <MainDataSection />
      </div>
      <div className="tight-section px-8">
        <Typography gutterBottom variant="h5">
          {t("design.title.aboutDesign")}
        </Typography>
        {status === "loading" && <CardsPlaceholder />}
        {status === "none" && (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <MenuCard
                title={t("design.title.aboutDesign")}
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
                title={t("design.title.attachments")}
                items={
                  attachmentsOptions?.map((option) => ({
                    name: option.key,
                    menuItemProps: {
                      onClick: () => {
                        fetch(
                          api(
                            `client/design/zip/${design?.id}/${option.value}`
                          ),
                          {
                            headers: { from: "website" },
                          }
                        ) // FETCH BLOB FROM IT
                          .then((response) => response.blob())
                          .then((blob) => {
                            // RETRIEVE THE BLOB AND CREATE LOCAL URL
                            var _url = window.URL.createObjectURL(blob);
                            window.open(_url, "_blank")?.focus(); // window.open + focus
                          })
                          .catch((err) => {
                            enqueueSnackbar("تعذر في فتح الملف المطلوب");
                          });
                      },
                    },
                  })) || []
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MenuCard
                checkIcons
                gutterBottom
                title={t("design.title.utilities")}
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
                title={t("design.title.address")}
                items={[
                  {
                    name: t("design.title.street"),
                    value: design?.width_front_street,
                  },
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
