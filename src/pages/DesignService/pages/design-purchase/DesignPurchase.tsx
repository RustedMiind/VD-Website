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
import { useEffect, useMemo, useState } from "react";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Setp3";
import Step4 from "./steps/Step4";
import { Design } from "types/Design/Design";
import { KeyValueType } from "methods/objectToArray";
import { useParams } from "react-router-dom";
import { isStringAllNumbers } from "methods/isStringAllNumbers";
import axios from "axios";
import api from "methods/api";
import { useSnackbar } from "notistack";

function DesignPurchase() {
  const [currentStep, setCurrentStep] = useState(0);

  function handleValueChange(delta: number = 1) {
    const newValue = currentStep + delta;
    if (newValue < 0 || newValue >= steps.length) {
      return;
    }
    setCurrentStep(newValue);
  }
  const { enqueueSnackbar } = useSnackbar();

  const [design, setDesign] = useState<undefined | Design>(undefined);
  const [status, setStatus] = useState<StatusType>("none");
  const { designId } = useParams();
  useEffect(() => {
    setDesign(undefined);
    if (designId && isStringAllNumbers(designId)) {
      setStatus("loading");

      // Get Design Data
      axios
        .get<{ design: Design }>(api("client/design/" + designId))
        .then(({ data }) => {
          setDesign(data.design);
          setStatus("none");
        })
        .catch((err) => {
          setStatus("error");
          enqueueSnackbar(
            err.response?.data?.message ||
              err.response?.data?.msg ||
              "تعذر في تحميل بيانات التصميم",
            { variant: "error" }
          );
        });
    }
  }, [designId]);

  const steps: StepType[] = useMemo(
    () => [
      { name: "التصاميم الخارجية", element: <Step1 design={design} /> },
      { name: "ملخص الطلب", element: <Step2 design={design} /> },
      // { name: "التصاميم 3", element: <Step3 design={design} /> },
      // { name: "التصاميم 4", element: <Step4 design={design} /> },
    ],
    [designId, design?.id]
  );

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

type StatusType = "loading" | "error" | "none";

type StepType = { name: string; element: React.ReactElement };

export default DesignPurchase;
