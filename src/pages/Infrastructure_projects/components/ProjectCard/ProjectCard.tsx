import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Img from "../../../../assets/images/infrestructurePeojectsImages/plan.png";
import avatarImg from "../../../../assets/images/infrestructurePeojectsImages/avatar.png";
import { useNavigate } from "react-router-dom";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import { useSelector } from "react-redux";
import { UserState, UserStateType } from "redux/reducers/userSlice";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { useState } from "react";
import LoginRegister from "sections/login-register/LoginRegister";
import axios from "axios";
import api from "methods/api";
import { useSnackbar } from "notistack";

const ProjectCard = (props: propsType) => {
  const Navigator = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  let { id, name } = props;
  const { settings, user } = useSelector(
    (state: { settings: SettingsStateType; user: any }) => ({
      settings: state.settings,
      user: state.user,
    })
  );
  const [loginOpen, setLoginOpen] = useState(false);
  const [navDialog, setNavDialog] = useState<NavDialogTypes>("login");
  let _period =
    +props.period > 999
      ? `${(+props.period / 365).toFixed(1).toString()} سنة`
      : +props.period > 99
      ? `${(+props.period / 30).toFixed(1).toString()} شهر`
      : `${props.period} يوم`;

  // TODO::function to check valid to continue in login or not
  const unAbaleToSeeProjectDetails = (nationalNum: string) => {
    return !props?.cardId || nationalNum != props?.cardId?.toString();
  };
  const redirectToDetails = () => {
    Navigator(`/infrastructure_projects/details/${id}`);
  };

  return (
    <>
      <Grid
        item
        xs={12}
        md={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "93%",
            height: 440,
            borderRadius: "13px",
            margin: "0.5rem",
            boxSizing: "border-box",
            cursor: "pointer",
            transition: "all 0.5s ease",
            ":hover": {
              boxShadow: "1px 1px 12px 2px lightgray",
              transform: " scale(1.06)",
            },
            background: "#fff",
          }}
          className="ProjectCard"
          onClick={() => Navigator(`show/${id}`)}
        >
          <CardMedia
            sx={{ height: 228 }}
            image={props.imgUrl && props.imgUrl.length > 0 ? props.imgUrl : Img}
            title={name}
          />
          <CardContent sx={{ bgcolor: "#fff" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography color={"#f19b02"} variant="body1" fontSize={"1rem"}>
                {props.branchName}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "85px",
                  color: "#A8A8A8",
                }}
                variant="body1"
                fontSize={"1rem"}
              >
                <AccessTimeIcon />
                <Typography fontFamily={"Cairo"} variant="body1">
                  {_period}
                </Typography>
              </Typography>
            </Box>
            {/* plan name */}
            <Typography
              sx={{
                fontSize: "20px",
                color: "#000",
                fontWeight: "700",
              }}
              variant="h6"
            >
              {name}
            </Typography>
            {/* show and details btns */}
            <Box
              sx={{
                marginY: "0.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Button
                sx={{
                  width: "70%",
                  background: "#f3f5f7",
                  color: "#004693",
                  display: "flex",
                  justifycontent: "start",
                  padding: "9px",
                  fontsize: "19px",
                  fontfamily: "cairo",
                  fontweight: "600",
                  border: "1px solid lightgrey",
                  transition: "all 0.4s ease",
                  ":hover": {
                    background: "#004693",
                    color: "#fff",
                  },
                }}
                onClick={() => Navigator(`show/${id}`)}
              >
                <RemoveRedEyeIcon sx={{ paddingRight: "5px" }} />
                الأستعراض
              </Button>
              <Button
                sx={{
                  height: "45px",
                  color: "#fff",
                  background: "#004693",
                  display: "flex",
                  justifycontent: "start",
                  padding: "9px",
                  fontsize: "19px",
                  fontfamily: "cairo",
                  fontweight: "600",
                  border: "1px solid lightgrey",
                  transition: "all 0.5s",
                  ":hover": {
                    color: "#004693",
                    background: "#fff",
                  },
                }}
                onClick={() => {
                  if (
                    user == undefined ||
                    user?.userState === UserState.NOT_USER ||
                    user?.userState === UserState.UNKNOWN
                  ) {
                    setNavDialog("login");
                    setLoginOpen(true);
                  } else {
                    //TODO::check user able to see project details or not?
                    axios
                      .get(api(`client/contact-details-authorized/${props.id}`))
                      .then((response) => {
                        if (
                          response?.data?.msg?.includes("authorized") &&
                          !response?.data?.msg?.includes("not")
                        ) {
                          Navigator(`details/${id}`);
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
              >
                <FindInPageOutlinedIcon sx={{ fontSize: "25px" }} />
              </Button>
            </Box>
            {/* The responsible Engineer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: "100%",
                marginTop: "0.7rem",
              }}
            >
              <Avatar src={avatarImg} />
              <Box sx={{ paddingX: "0.3rem" }}>
                <Typography variant="body2" color="text.secondary">
                  المهندس المسئول
                </Typography>
                <Typography
                  fontSize={16}
                  fontWeight={700}
                  variant="body2"
                  sx={{ color: "#000" }}
                >
                  {props.engineerName}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <LoginRegister
        type={navDialog}
        open={loginOpen}
        unAbaleToSeeProjectDetails={unAbaleToSeeProjectDetails}
        redirectTo={redirectToDetails}
        onClose={() => setLoginOpen(false)}
      />
    </>
  );
};

type NavDialogTypes = "login" | "register";
type propsType = {
  id: number;
  name: string;
  period: string;
  branchName: string;
  engineerName: string;
  imgUrl: string;
  cardId?: number;
};

export default ProjectCard;
