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

const FormControlWrapper = (props: PaperProps) => (
  <Paper sx={{ px: 1 }} {...props} />
);

function FormComponent({ selectMap, selectedMap }: PropsType) {
  return (
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
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="الرجاء ادخال كود التعريف" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              color="secondary"
              component={Paper}
              size="large"
              sx={{ height: 1 }}
              fullWidth
            >
              الدخول
            </Button>
          </Grid>
        </Grid>
      </Box>
      <DialogActions>
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
        <Button size="small" variant="outlined">
          النفاذ الوطني
        </Button>
      </DialogActions>
    </Stack>
  );
}

type PropsType = {
  selectedMap: string | undefined;
  selectMap: (selected: string | undefined) => void;
};

export default FormComponent;
