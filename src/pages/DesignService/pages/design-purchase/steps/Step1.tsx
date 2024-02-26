import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ChoiceCard from "components/choice-card/ChoiceCard";
import Grid, { GridProps } from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Design } from "types/Design/Design";
import { useTranslation } from "react-i18next";

const GridItem = (props: GridProps) => (
  <Grid item xs={12} md={6} lg={4} xl={3} p={1} {...props} />
);

function Step1({ design }: { design?: Design }) {
  const { t } = useTranslation();
  return (
    <Box py={2}>
      {design && (
        <Grid container>
          <GridItem>
            <ChoiceCard
              current
              title={t("design.title.designOnly")}
              description={t("design.title.designOnlyDescription")}
              price={`${design?.price_after || design?.price_before} ${t(
                "currency.sar"
              )}`}
            />
          </GridItem>
        </Grid>
      )}
    </Box>
  );
}

export default Step1;
