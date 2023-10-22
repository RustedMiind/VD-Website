import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ChoiceCard from "components/choice-card/ChoiceCard";
import Grid from "@mui/material/Grid";

const steps = ["التصاميم الخارجية", "نوع الخدمة", "ملخص الطلب", "الدفع"];

function DesignPurchase() {
  return (
    <PageBannerLayout
      data={{ title: "عنوان التصميم", bgImage: { gradient: true } }}
    >
      <div className="tight-section my-4">
        <Box sx={{ width: 1 }}>
          <Stepper activeStep={2} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
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
      </div>
    </PageBannerLayout>
  );
}

export default DesignPurchase;
