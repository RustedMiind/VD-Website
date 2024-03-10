import {
  Dialog,
  DialogContent,
  Drawer,
  Fade,
  Grid,
  Grow,
  Stack,
  Typography,
} from "@mui/material";
import AddLabelToEl from "components/AddLabelToEl";
import {
  Contractor,
  MapReportContractor,
} from "pages/Infrastructure_projects/types/WorkInstructionsReport";
import { Employee } from "types/Employee";

const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) => (
  <Grid item xs={12} lg={6} p={1}>
    <AddLabelToEl
      labelTypographyProps={{ variant: "body2", fontWeight: 700 }}
      label={label}
    >
      <Typography variant="body1">{value}</Typography>
    </AddLabelToEl>
  </Grid>
);

function ReportDialog({
  onClose,
  open,
  reportDetails: { contractor, employee },
}: PropsType) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      slotProps={{
        backdrop: {
          sx: {
            bgcolor: "transparent",
          },
        },
      }}
      PaperProps={{
        sx(theme) {
          return {
            bgcolor: `${theme.palette.background.default}99`,
            backdropFilter: "blur(10px)",
          };
        },
      }}
      sx={{ direction: "rtl" }}
    >
      <Stack width={400} spacing={2} p={2}></Stack>
    </Drawer>
  );
}

type PropsType = {
  open: boolean;
  onClose: () => void;
  reportDetails: { contractor?: MapReportContractor; employee?: Employee };
};

export default ReportDialog;
