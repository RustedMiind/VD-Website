import { Button, Grid, Typography } from "@mui/material";
import GoOgleMap from "./GoogleMap";
import ImagesGallery from "./ImagesGallery";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { UserState, UserStateType } from "redux/reducers/userSlice";
import { useState } from "react";
import LoginRegister from "sections/login-register/LoginRegister";

const MapAndImagesPart = () => {
  const { t } = useTranslation();
  const navigator = useNavigate();
  const { settings, user } = useSelector(
    (state: { settings: SettingsStateType; user: UserStateType }) => ({
      settings: state.settings,
      user: state.user,
    })
  );
  const [loginOpen, setLoginOpen] = useState(false);
  const [navDialog, setNavDialog] = useState<NavDialogTypes>("login");

  return (
    <>
      <Grid
        container
        style={{
          width: "100%",
          padding: "0 0.3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ width: "90%" }}>
          <Grid sx={{ marginY: "1rem" }} item xs={12}>
            <Button
              sx={{
                borderRadius: "24px",
                backgroundColor: "#3169a7",
                float: "right",
              }}
              onClick={() => {
                if (user.user.userState === UserState.NOT_USER) {
                  //login
                  setNavDialog("login");
                  setLoginOpen(true);
                } else {
                  navigator(`/`);
                }
              }}
              variant="contained"
            >
              {t("InfrastructureProjects.buttons.showAllDetails")}
            </Button>
          </Grid>
          <Grid sx={{ marginY: "0.5rem" }} item xs={12}>
            <Typography
              sx={{ marginY: "0.3rem", paddingX: "0.3rem" }}
              variant="h5"
              fontWeight={700}
            >
              {t("InfrastructureProjects.showPage.map")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* <MapWrapper coOrdinates={{ lat: 21.422510, lng: 39.826168 }} /> */}
            <GoOgleMap />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4rem",
            }}
          >
            <ImagesGallery />
          </Grid>
        </Grid>
      </Grid>
      <LoginRegister
        type={navDialog}
        open={loginOpen && user.user.userState === UserState.NOT_USER}
        onClose={() => setLoginOpen(false)}
      />
    </>
  );
};

type NavDialogTypes = "login" | "register";
export default MapAndImagesPart;
