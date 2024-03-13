import { Box, Button, Grid, Typography } from "@mui/material";
import bgImg from "../../../../assets/images/infrestructurePeojectsImages/projectDetailsBG.png";
import CompletionRates from "./components/CompletionRates/CompletionRates";
import ZoningPlan from "./components/ZoningPlan/ZoningPlan";
import { Printer } from "react-bootstrap-icons";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { useEffect, useState } from "react";
import ChatBox from "pages/Infrastructure_projects/components/Chat/ChatBox";
import { UserState, UserStateType } from "redux/reducers/userSlice";
import { SettingsStateType } from "redux/reducers/settingsSlice";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "pages/Infrastructure_projects/components/Loading/Loading";
import axios from "axios";
import api from "methods/api";
import AttachmentSections from "./components/AttachmentSections";

type showProjctInformation = {
  id: number;
  name: string;
  Contract_status: number;
  amount: string;
  branchName: string;
  supportNumber: string;
  OwnerName: string; //client.name
  contractorName: string;
  numberOfPieces: number;
  area: number;
  masterImg: string;
  location: string;
};

type ContractSubItem = {
  contract_item_id: number;
  created_at: string;
  employee_id: number;
  id: number;
  is_attachment: number;
  is_processing: number;
  is_progress_bar: number;
  name: string;
  updated_at: string;
};

type ContractItems = {
  contract_id: number;
  contract_sub_items: ContractSubItem[];
  created_at: string;
  description: string;
  end_date: string;
  id: number;
  manager_id: number;
  name: string;
  start_date: string;
  updated_at: string;
};

const ProjectDetails = () => {
  const [showChatBox, setShowChatBox] = useState<Boolean>(false);
  const [project, setProject] = useState<showProjctInformation>();
  const Naviator = useNavigate();
  let { projectId } = useParams();
  const [loading, setLoading] = useState(false);
  const [contractItems, setContractItems] = useState<ContractItems[]>([]);
  // const [contractRatioItems, setContractRatioItems] = useState<ContractSubItem[]>([]);
  // const [contractProcessingItems, setContractProcessingItems] = useState<ContractSubItem[]>([]);
  // const [contractAttachmentItems, setContractAttachmentItems] = useState<ContractSubItem[]>([]);
  const { user } = useSelector(
    (state: { settings: SettingsStateType; user: any }) => ({
      settings: state.settings,
      user: state.user,
    })
  );

  // useEffect(() => {
  //   if (
  //     user?.userState === UserState.NOT_USER ||
  //     user?.userState === UserState.UNKNOWN ||
  //     user == undefined
  //   ) {
  //     return Naviator("/");
  //   } else {
  //     //TODO::check user able to see project details or not?
  //     axios
  //       .get(api(`client/contact-details-authorized/${projectId}`))
  //       .then((response) => {
  //         console.log("Response101", response);
  //         if (response?.data?.msg?.includes("not")) {
  //           Naviator(`/`);
  //         }
  //       })
  //       .catch((err) => {
  //         Naviator(`/`);
  //         console.log("Error::", err);
  //       });
  //   }
  // }, []);

  //TODO::fetch project data
  useEffect(() => {
    setLoading(true);
    axios
      .get(api(`employee/contract-details/${projectId}`))
      .then((data) => {
        setProject({
          id: +data?.data?.data?.id,
          name: data?.data?.data?.details,
          Contract_status: +data?.data?.data?.Contract_status,
          branchName: data?.data?.data?.branch?.name,
          supportNumber: data?.data?.data?.client?.phone,
          OwnerName: data?.data?.data?.client?.name,
          contractorName: "contractorName",
          area: data?.data?.data?.contract_details?.area,
          location: data?.data?.data?.contract_details?.location,
          numberOfPieces: data?.data?.data?.contract_details?.number_parts,
          masterImg: data?.data?.data?.contract_details?.media?.filter(
            (ele: { collection_name: string }) =>
              ele?.collection_name == "master_plan"
          )[0]?.original_url,
          amount: "",
        });
        setContractItems(data?.data?.data?.contract_items);
      })
      .catch((err) => {
        console.log("Error in fetch projects Data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log("Project_data", project);
  }, [project]);

  if (loading)
    return <Loader h="95vh" title="جاري تحميل بيانات مشروع البنية التحتية.." />;

  return (
    <Box
      id="ProjectInfrestructureDetailsPage"
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
          }}
        >
          <Typography variant="h3" sx={{ fontSize: "2.5rem" }} fontWeight={700}>
            تفاصيل المشروع {project?.name}
          </Typography>
        </Grid>
        {/* Details */}
        <Grid
          container
          sx={{
            marginY: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Grid item xs={12} md={3} marginBottom={"2rem"}>
            <CompletionRates contractItems={contractItems} />
          </Grid>
          <Grid item xs={12} md={5} marginBottom={"2rem"}>
            <ZoningPlan
              masterImg={project?.masterImg}
              contractItems={contractItems}
            />
          </Grid>
          <Grid item xs={12} md={3} marginBottom={'2rem'}>
            <AttachmentSections contractItems={contractItems} />
          </Grid>
        </Grid>
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

export default ProjectDetails;
