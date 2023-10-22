import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ChoiceCard from "components/choice-card/ChoiceCard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

function Step1() {
  return (
    <Box py={2}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} xl={3} p={1}>
          <ChoiceCard
            // current
            title="test"
            description="Test2"
            price="1236 رس"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3} p={1}>
          <ChoiceCard
            current
            title="test"
            description="Test2"
            price="1236 رس"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3} p={1}>
          <ChoiceCard
            // current
            title="test"
            description="Test2"
            price="1236 رس"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3} p={1}>
          <ChoiceCard
            // current
            title="test"
            description="Test2"
            price="1236 رس"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Step1;
