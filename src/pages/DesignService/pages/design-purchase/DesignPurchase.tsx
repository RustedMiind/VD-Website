import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ChoiceCard from "components/choice-card/ChoiceCard";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Step1 from "./steps/Step1";
import { useState } from "react";
import Step2 from "./steps/Step2";

const steps: StepType[] = [
  { name: "التصاميم الخارجية", element: <Step1 /> },
  { name: "التصاميم 2", element: <Step2 /> },
  { name: "التصاميم 3", element: <div>Hello to step 3</div> },
  { name: "التصاميم 4", element: <div>Hello to step 4</div> },
];

function DesignPurchase() {
  const [currentStep, setCurrentStep] = useState(0);

  function handleValueChange(delta: number = 1) {
    const newValue = currentStep + delta;
    if (newValue < 0 || newValue >= steps.length) {
      return;
    }
    setCurrentStep(newValue);
  }

  return (
    <PageBannerLayout
      data={{ title: "عنوان التصميم", bgImage: { gradient: true } }}
    >
      <div className="tight-section my-4">
        <Box sx={{ width: 1 }}>
          <Stepper activeStep={currentStep} alternativeLabel>
            {steps.map(({ name }) => (
              <Step key={name}>
                <StepLabel>{name}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <Stack sx={{ minHeight: "300px" }}>{steps[currentStep].element}</Stack>
        <Stack direction={"row"} gap={2}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              handleValueChange(-1);
            }}
            disabled={currentStep === 0}
          >
            السابق
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              handleValueChange(1);
            }}
            disabled={currentStep === steps.length - 1}
          >
            التالي
          </Button>
        </Stack>
      </div>
    </PageBannerLayout>
  );
}

type StepType = { name: string; element: React.ReactElement };

export default DesignPurchase;
