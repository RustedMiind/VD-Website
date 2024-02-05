import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ChoiceCard from "components/choice-card/ChoiceCard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import AddCardIcon from "@mui/icons-material/AddCard";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Design } from "types/Design/Design";

function Step3({ design }: { design?: Design }) {
  return (
    <Box py={4}>
      <Typography variant="h5">الدفع</Typography>

      <Stack alignItems="center">
        <Paper sx={{ my: 2, p: 1, width: { xs: 1, md: 0.7 } }} elevation={4}>
          <Typography variant="body1" p={1} color="text.secondary">
            يرجى كتابة بيانات البطاقة للدفع المباشر
          </Typography>
          <Grid container>
            <Grid item sm={12} md={6} p={1.5}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="credit-card-number">
                  رقم البطافة
                </InputLabel>
                <OutlinedInput
                  id="credit-card-number"
                  label="رقم البطاقة"
                  endAdornment={
                    <InputAdornment position="end">
                      <AddCardIcon />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12} md={6} p={1.5}>
              <DatePicker
                disablePast
                views={["year", "month"]}
                sx={{ width: 1 }}
              />
            </Grid>
            <Grid item sm={12} md={6} p={1.5}>
              <TextField size="medium" fullWidth label="الأسم" />
            </Grid>
            <Grid item sm={12} md={6} p={1.5}>
              <TextField size="medium" fullWidth label="رمز CVV" />
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Box>
  );
}

export default Step3;
