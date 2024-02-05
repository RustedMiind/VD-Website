import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ChoiceCard from "components/choice-card/ChoiceCard";
import Grid, { GridProps } from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Design } from "types/Design/Design";

const GridItem = (props: GridProps) => (
  <Grid item xs={12} md={6} lg={4} xl={3} p={1} {...props} />
);

function Step1({ design }: { design?: Design }) {
  return (
    <Box py={2}>
      {design && (
        <Grid container>
          <GridItem>
            <ChoiceCard
              current
              title={"التصميم فقط"}
              description={
                "لاأرغب بشراء خدمة مواءمة أو رخصة بناء ،فقط خدمة تصميم خارجي"
              }
              price={`${design?.price_after || design?.price_before} ر.س.`}
            />
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

export default Step1;
