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
import axios from "axios";
import api from "methods/api";
import { useSnackbar } from "notistack";

const MapAndImagesPart = ({
  mapStr,
  urls,
  id,
  cardId,
}: {
  mapStr: string;
  urls: string[];
  id?: number;
  cardId?: number;
}) => {
  const { t } = useTranslation();
  const navigator = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { settings, user } = useSelector(
    (state: { settings: SettingsStateType; user: any }) => ({
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
                if (
                  user == undefined ||
                  user?.userState === UserState.NOT_USER ||
                  user?.userState === UserState.UNKNOWN
                ) {
                  //login
                  setNavDialog("login");
                  setLoginOpen(true);
                } else {
                  //TODO::check user able to see project details or not?
                  axios
                    .get(api(`client/contact-details-authorized/${id}`))
                    .then((response) => {
                      if (
                        response?.data?.msg?.includes("authorized") &&
                        !response?.data?.msg?.includes("not")
                      ) {
                        navigator(`/infrastructure_projects/details/${id}`);
                      } else {
                        enqueueSnackbar(
                          "ليس لديك صلاحية لروية تفاصيل المشروع",
                          { variant: "error" }
                        );
                      }
                    })
                    .catch((err) => {
                      console.log("Error::", err);
                    });
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
            <GoOgleMap map={mapStr} />
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
            <ImagesGallery urls={urls} />
          </Grid>
        </Grid>
      </Grid>
      <LoginRegister
        type={navDialog}
        open={loginOpen}
        cardId={cardId ?? -1}
        redirectTo={`/infrastructure_projects/details/${id}`}
        onClose={() => setLoginOpen(false)}
      />
    </>
  );
};

type NavDialogTypes = "login" | "register";
export default MapAndImagesPart;
