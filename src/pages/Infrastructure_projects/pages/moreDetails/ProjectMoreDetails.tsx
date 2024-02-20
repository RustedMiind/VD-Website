import { Box, Button, Grid, Typography } from "@mui/material";
import bgImg from "../../../../assets/images/infrestructurePeojectsImages/projectDetailsBG.png";
import MoreDetailsInformation from "./MoreDetailsInformation";
import { Printer } from "react-bootstrap-icons";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useEffect, useState } from "react";
import ChatBox from "pages/Infrastructure_projects/components/Chat/ChatBox";
import { useSelector } from "react-redux";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { UserState, UserStateType } from "redux/reducers/userSlice";
import { useNavigate } from "react-router-dom";

const ProjectMoreDetails = () => {
  const [showChatBox, setShowChatBox] = useState<Boolean>(false);
  const Naviator = useNavigate();
  const { user } = useSelector(
    (state: { settings: SettingsStateType; user: UserStateType }) => ({
      settings: state.settings,
      user: state.user,
    })
  );

  useEffect(() => {
    console.log("User101", user);
    if (
      user.user.userState === UserState.NOT_USER ||
      user.user.userState === UserState.UNKNOWN
    ) {
      return Naviator("/");
    }
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        width: "100%",
        backgroundSize: "100% 100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container sx={{ width: "95%", paddingTop: "6rem" }}>
        {/* buttions */}
        <Grid
          item
          xs={12}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3169a7",
              marginX: "3px",
              borderRadius: "24px",
              width: "110px",
            }}
          >
            التصميم
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f19b02",
              marginX: "3px",
              borderRadius: "24px",
              width: "110px",
            }}
          >
            الاشراف
          </Button>
        </Grid>
        {/* title */}
        <Grid
          item
          xs={12}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "0.5rem auto 2rem",
          }}
        >
          <Typography variant="h3" fontSize={"2.88rem"} fontWeight={700}>
            تفاصيل المشروع مخطط 604
          </Typography>
        </Grid>
        {/* Content */}
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              backgroundColor: "#fff",
              borderRadius: "17px",
              boxSizing: "border-box",
              padding: "1rem",
            }}
          >
            <MoreDetailsInformation />
          </Grid>
        </Grid>
        {/* Print & chat Btns */}
        {/* print btn */}
        <Grid
          item
          xs={12}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginY: "2rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#004693",
              borderRadius: "7px",
              width: "350px",
              height: "50px",
            }}
          >
            <Printer style={{ fontSize: 18, fontWeight: 700 }} />
            <Typography
              fontSize={18}
              fontWeight={700}
              sx={{ marginX: "0.4rem" }}
              variant="body2"
            >
              طباعة
            </Typography>
          </Button>
        </Grid>
        {/* chat btn */}
        <Grid
          item
          xs={12}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "start",
            marginY: "2rem",
            position: "relative",
          }}
        >
          {showChatBox && (
            <>
              <ChatBox />
              <Button
                onClick={() => setShowChatBox(false)}
                sx={{
                  position: "absolute",
                  bottom: "120%",
                  left: "90%",
                  background: "#f19b02",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  color: "#fff",
                }}
              >
                <KeyboardArrowDownOutlinedIcon />
              </Button>
            </>
          )}
          <Button
            variant="contained"
            onClick={() => setShowChatBox(true)}
            sx={{
              backgroundColor: "#f19b02",
              width: "10rem",
              height: "3rem",
              borderRadius: "0 24px 24px",
            }}
          >
            <QuestionAnswerOutlinedIcon />
            <Typography
              sx={{ marginX: "0.4rem" }}
              fontSize={18}
              fontWeight={700}
              variant="body2"
            >
              استشرنا
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectMoreDetails;
