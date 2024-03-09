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
    <Drawer open={open} onClose={onClose} sx={{ direction: "rtl" }}>
      <Stack width={400}>
        <Grid container rowSpacing={2}>
          {contractor && (
            <>
              <InfoItem
                label="الرقم المرجعي"
                value={contractor.reference_number}
              />
              <InfoItem
                label="نوع امر العمر"
                value={contractor.type_work_instruction?.name}
              />
              <InfoItem
                label="وصف امر العمل"
                value={contractor.type_work_instruction?.description}
              />
              <InfoItem
                label="التكلفة التقديرية"
                value={contractor.expected_cost}
              />
              <InfoItem
                label="الاحداثيات"
                value={`${contractor.longitude}, ${contractor.latitude}`}
              />
              <InfoItem label="المقاول" value={contractor.contractor.name} />
              <InfoItem label="المدة" value={`${contractor.period} يوم`} />
              <InfoItem label="تاريخ الاسناد" value={contractor.start_date} />
            </>
          )}
          {employee && (
            <>
              <InfoItem label="الاسم" value={employee.name} />
              <InfoItem label="رقم الجوال" value={employee.phone} />
              <InfoItem label="العنوان" value={employee.address} />
            </>
          )}
        </Grid>
      </Stack>
    </Drawer>
  );
}

type PropsType = {
  open: boolean;
  onClose: () => void;
  reportDetails: { contractor?: MapReportContractor; employee?: Employee };
};

export default ReportDialog;
