import {
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  Drawer,
  Fade,
  Grid,
  Grow,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import BaseAddLabelToEl, { AddLabelToElProps } from "components/AddLabelToEl";
import {
  Contractor,
  MapReportContractor,
} from "pages/Infrastructure_projects/types/WorkInstructionsReport";
import { Employee } from "types/Employee";
import { CustomPaper } from "../Filters";
import { ImgHTMLAttributes } from "react";

const SquareButton = (props: ButtonProps) => (
  <Paper sx={{ p: 0.2 }}>
    <Button sx={{ width: "50px", height: "50px", p: 0 }} {...props} />
  </Paper>
);

const IconImage = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img
    style={{ width: 32, height: 32, objectFit: "contain" }}
    alt={props.alt}
    {...props}
  />
);

const AddLabelToEl = (props: AddLabelToElProps) => (
  <BaseAddLabelToEl
    labelTypographyProps={{
      gutterBottom: false,
      color: "secondary.main",
      fontWeight: 700,
    }}
    {...props}
  >
    <Typography variant="body1" fontWeight={700} color="primary.main">
      {props.children}
    </Typography>
  </BaseAddLabelToEl>
);

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
    >
      <Stack width={400} spacing={2} p={2}>
        <CustomPaper>
          <Stack spacing={2}>
            <AddLabelToEl label="المستفيد من الخدمة">
              مستشفي دكتور سليمان الحبيب
            </AddLabelToEl>
            <AddLabelToEl label="ممثل طالب الخدمة">م. احمد الخياط</AddLabelToEl>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-around"}
          >
            <SquareButton>
              <IconImage
                src="https://cdn.discordapp.com/attachments/1195066403288535111/1216375987286183976/image.png?ex=6600296a&is=65edb46a&hm=08c51e67e1f46ca6620534743d4e13095ce8299a156d8a4e27fb456adabb85d0&"
                alt=""
              />
            </SquareButton>
            <SquareButton>
              <IconImage
                src="https://cdn.discordapp.com/attachments/1195066403288535111/1216376049382985728/image.png?ex=66002979&is=65edb479&hm=2a9da5ec7336ddeaaeac081b0d39570eaed37c4d54e7ae77ae172d3308e63c34&"
                alt=""
              />
            </SquareButton>
            <SquareButton>
              <IconImage
                src="https://cdn.discordapp.com/attachments/1195066403288535111/1216376086045392947/image.png?ex=66002982&is=65edb482&hm=6d604a36dbc3ac6b2681ada9250c41b73f8b635afb76160d34898cdaf5e82eed&"
                alt=""
              />
            </SquareButton>
          </Stack>
        </CustomPaper>

        <Paper>
          <img
            style={{ width: "100%" }}
            src="https://cdn.discordapp.com/attachments/1195066403288535111/1216379203130232922/image.png?ex=66002c69&is=65edb769&hm=11a5032ade45b0aa90d4c63d145ce8ee646227e760e1f57708880c49004b2f67&"
            alt=""
          />
        </Paper>
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
