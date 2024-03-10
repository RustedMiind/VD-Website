import {
  Paper,
  Stack,
  Box,
  PaperProps,
  TextField,
  Grid,
  Button,
  DialogActions,
} from "@mui/material";
import headerImg from "./interactive-map-header.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import nafazIcon from "assets/images/nafas.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RobotDialog from "./RobotDialog";

const FormControlWrapper = (props: PaperProps) => (
  <Paper sx={{ px: 1 }} {...props} />
);

function FormComponent({ selectMap, selectedMap }: PropsType) {
  const [loadingDialog, setLoadingDialog] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setLoadingDialog(true);
    setTimeout(() => navigate("map"), 4000);
  };

  return (
    <>
      <RobotDialog open={loadingDialog} />
      <Stack component={Paper} p={3} spacing={4}>
        <Box width={1}>
          <img src={headerImg} alt="header" style={{ width: "100%" }} />
        </Box>
        <FormControl>
          <RadioGroup
            value={selectedMap}
            onChange={(e, v) => {
              console.log(v);
              selectMap(v);
            }}
            sx={{ justifyContent: "space-between", gap: 1 }}
            row
          >
            <FormControlWrapper>
              <FormControlLabel
                value="rain"
                control={<Radio />}
                label="تصريف الامطار"
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <FormControlLabel
                value="elec"
                control={<Radio />}
                label="شركة الكهرباء"
              />
            </FormControlWrapper>
            <FormControlWrapper>
              <FormControlLabel
                value="water"
                control={<Radio />}
                label="شركة المياه"
              />
            </FormControlWrapper>
          </RadioGroup>
        </FormControl>
        <Stack alignItems={"center"} spacing={2}>
          <Box width={0.5}>
            <TextField fullWidth label="الرجاء ادخال كود التعريف" />
          </Box>
          <Box width={0.5}>
            <Button
              color="secondary"
              size="large"
              fullWidth
              onClick={handleNavigate}
            >
              الدخول
            </Button>
          </Box>
        </Stack>
        <DialogActions sx={{ gap: 2 }}>
          <Button
            size="small"
            startIcon={
              <SupportAgentIcon
                color="primary"
                sx={{ fontSize: "30px !important" }}
              />
            }
          >
            التواصل مع الدعم
          </Button>
          <a
            href="https://www.iam.gov.sa/authservice/userauthservice?lang=ar"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="نفاذ" src={nafazIcon} height={24} />
          </a>
        </DialogActions>
      </Stack>
    </>
  );
}

type PropsType = {
  selectedMap: string | undefined;
  selectMap: (selected: string | undefined) => void;
};

export default FormComponent;
