import {
  Box,
  Button,
  ButtonProps,
  Chip,
  Dialog,
  DialogContent,
  Drawer,
  Fab,
  Fade,
  Grid,
  Grow,
  Paper,
  Slider,
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import BaseAddLabelToEl, { AddLabelToElProps } from "components/AddLabelToEl";
import CloseIcon from "@mui/icons-material/Close";
import {
  Contractor,
  MapReportContractor,
} from "pages/Infrastructure_projects/types/WorkInstructionsReport";
import { Employee } from "types/Employee";
import { CustomPaper } from "../Filters";
import { ImgHTMLAttributes, useEffect, useState } from "react";
import AltDrawer from "../AltDrawer";
import Countdown from "react-countdown";
const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 50,
    label: "50",
  },

  {
    value: 100,
    label: "100",
  },
];
function valuetext(value: number) {
  return `${value}`;
}
const SquareButton = (props: ButtonProps) => (
  <Paper sx={{ p: 0.2 }}>
    <Button sx={{ width: "50px", height: "50px", p: 0 }} {...props} />
  </Paper>
);

export const IconImage = (props: ImgHTMLAttributes<HTMLImageElement>) => (
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
export function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number } & { lineColor?: boolean }
) {
  return (
    <Box
      sx={{
        position: "relative",
        left: "10%",
        display: "inline-flex",
        marginY: 2,
        border: "1px dashed ",
        borderRadius: "50%",
        p: 0.5,
      }}
    >
      <CircularProgress
        size={90}
        color={props.lineColor ? "primary" : "secondary"}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.primary"
          sx={{ fontWeight: "700", fontSize: "19px" }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
function ReportDialog({ onClose, open, withSubDrawer }: PropsType) {
  const [progress, setProgress] = useState(50);
  const [timerOpen, setTimerOpen] = useState(false);
  return (
    <>
      <AltDrawer open={open && withSubDrawer} />
      <Drawer
        open={open}
        variant={"persistent"}
        SlideProps={{ direction: "right" }}
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
          <Stack direction={"row-reverse"}>
            <Box sx={{ width: 0.6, p: 1 }}>
              <img
                style={{ width: "100%" }}
                alt="org"
                src="https://cdn.discordapp.com/attachments/1195066403288535111/1216388626418765924/image.png?ex=6600352f&is=65edc02f&hm=476fd009f65dd5af48fcb663960fdeb575701a3af78393cd8d6f5a42e3a45204&"
              />
            </Box>
            <Box sx={{ width: 0.4, p: 1 }}>
              <Fab onClick={onClose} color="error" size="small">
                <CloseIcon />
              </Fab>
            </Box>
          </Stack>
          <CustomPaper>
            <Stack spacing={2}>
              <AddLabelToEl label="المستفيد من الخدمة">
                مستشفي دكتور سليمان الحبيب
              </AddLabelToEl>
              <AddLabelToEl label="ممثل طالب الخدمة">
                م. احمد الخياط
              </AddLabelToEl>
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <SquareButton LinkComponent={"a"} href="tel:+201095574449">
                <IconImage
                  src="https://cdn.discordapp.com/attachments/1195066403288535111/1216375987286183976/image.png?ex=6600296a&is=65edb46a&hm=08c51e67e1f46ca6620534743d4e13095ce8299a156d8a4e27fb456adabb85d0&"
                  alt=""
                />
              </SquareButton>
              <SquareButton component={"a"} href="http://wa.me/+966538500542">
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
              src="https://cdn.discordapp.com/attachments/1195066403288535111/1216388322599895060/image.png?ex=660034e7&is=65edbfe7&hm=39547f5e9f4abf1b1e8a94f67158324b073b243b271a303e1ff00e663f0d9f2c&"
              alt=""
            />
          </Paper>
          <Paper>
            <Paper sx={{ m: 2 }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1195066403288535111/1216529409633157240/image.png?ex=6600b84d&is=65ee434d&hm=c75c2fcb5080fe8353dd6b1171bd59b8ff8e0db9a135682e2804464d76f7cf93&"
                    alt=""
                  />
                  <Typography>مدة الضخ</Typography>
                </Stack>
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216663854705147934/image.png?ex=66013583&is=65eec083&hm=f2cdee76162d5c8ae6dc7f4888a1ecab4b2a363fe65e12be48d1d1bbb252f217&"
                    alt=""
                  />
                  <Typography>4</Typography>
                </Stack>
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216664232146374787/image.png?ex=660135dd&is=65eec0dd&hm=0d62d42dd6f8f50ace38a8d6b9d304f3987dbb883a82b21449a2cfddfad639f4&"
                    alt=""
                  />
                  <Typography>2</Typography>
                </Stack>
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <Typography>200م</Typography>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216664471368499220/image.png?ex=66013616&is=65eec116&hm=8dad3fb123695821376ac9695efdd1fd1c1e5d8b6f2dde447ab1166872df087d&"
                    alt=""
                  />
                  <Typography>مسار الربط</Typography>
                </Stack>
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <Typography>5000م.ط</Typography>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216664471368499220/image.png?ex=66013616&is=65eec116&hm=8dad3fb123695821376ac9695efdd1fd1c1e5d8b6f2dde447ab1166872df087d&"
                    alt=""
                  />
                  <Typography>الاطوال</Typography>
                </Stack>
              </Stack>
            </Paper>
            <Paper sx={{ m: 2 }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216666143218208819/image.png?ex=660137a5&is=65eec2a5&hm=bf8dc847f6bd8bcb77869d321df5a0d8cedab6347b605e5bef16544ed2dc31f6&"
                    alt=""
                  />
                </Stack>
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216666143218208819/image.png?ex=660137a5&is=65eec2a5&hm=bf8dc847f6bd8bcb77869d321df5a0d8cedab6347b605e5bef16544ed2dc31f6&"
                    alt=""
                  />
                </Stack>
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216666143218208819/image.png?ex=660137a5&is=65eec2a5&hm=bf8dc847f6bd8bcb77869d321df5a0d8cedab6347b605e5bef16544ed2dc31f6&"
                    alt=""
                  />
                </Stack>
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216666143218208819/image.png?ex=660137a5&is=65eec2a5&hm=bf8dc847f6bd8bcb77869d321df5a0d8cedab6347b605e5bef16544ed2dc31f6&"
                    alt=""
                  />
                </Stack>
                <Stack sx={{ alignItems: "center", padding: 2 }}>
                  <IconImage
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216666143218208819/image.png?ex=660137a5&is=65eec2a5&hm=bf8dc847f6bd8bcb77869d321df5a0d8cedab6347b605e5bef16544ed2dc31f6&"
                    alt=""
                  />
                </Stack>
              </Stack>
            </Paper>
            <Stack
              sx={{ m: 2 }}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Typography>الخطوط البديلة</Typography>
              <TableBody>
                <TableRow>
                  <TableCell>200</TableCell>
                  <TableCell>747</TableCell>
                  <TableCell>74</TableCell>
                  <TableCell>54</TableCell>
                  <TableCell>45</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>200</TableCell>
                  <TableCell>747</TableCell>
                  <TableCell>74</TableCell>
                  <TableCell>54</TableCell>
                  <TableCell>45</TableCell>
                </TableRow>
              </TableBody>
            </Stack>
          </Paper>
          <Paper>
            <Paper sx={{ m: 2 }}>
              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Grid item xs={3}>
                  <Button variant="contained" color="secondary">
                    تصريح الضخ
                  </Button>
                </Grid>
                <Grid item xs={9}>
                  <Box>
                    <Slider
                      track={false}
                      getAriaValueText={valuetext}
                      defaultValue={[20, 37, 50]}
                      marks={marks}
                    />
                    <Slider
                      track={false}
                      aria-labelledby="track-false-range-slider"
                      getAriaValueText={valuetext}
                      defaultValue={[20, 37, 50]}
                      marks={marks}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Paper sx={{ m: 2 }}>
              <Stack alignItems={"center"}>
                <Box textAlign={"center"}>
                  <Typography sx={{ fontWeight: "700" }}>
                    عدد الايام المتبقية لانهاء الضخ
                  </Typography>
                  <Typography variant="body1" fontWeight={700}>
                    <Countdown date={new Date("2024-03-25")} />
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Stack>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <SquareRoundedIcon color="secondary" />
                        <Typography variant="body2">المنفذ</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <SquareRoundedIcon color="info" />
                        <Typography variant="body2">المتبقي</Typography>
                      </Box>
                    </Stack>
                    <CircularProgressWithLabel value={progress} />
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Paper>
          <Paper sx={{ p: 1 }}>
            <Paper sx={{ p: 1, m: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography
                    sx={{ borderBottom: "2px solid", fontWeight: "700", mt: 2 }}
                  >
                    نسب انجاز الخطوط البديلة
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Paper>
                    <TableBody>
                      <TableRow>
                        <TableCell>اجمالي الاطوال</TableCell>
                        <TableCell>747</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>المتبقي</TableCell>
                        <TableCell>747</TableCell>
                      </TableRow>
                    </TableBody>
                  </Paper>
                </Grid>
              </Grid>
              <Grid container sx={{ mt: 5 }} rowGap={3}>
                <Grid item xs={4}>
                  <Typography variant="body2">مشروع الامير فواز</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <Slider
                      color="secondary"
                      aria-label="Always visible"
                      value={55}
                      getAriaValueText={valuetext}
                      valueLabelDisplay="on"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">
                    مشروع الامير فواز الثاني
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <Slider
                      aria-label="Always visible"
                      value={20}
                      getAriaValueText={valuetext}
                      valueLabelDisplay="on"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">
                    مشروع الامير فواز الثالث
                  </Typography>
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <Slider
                      color="success"
                      aria-label="Always visible"
                      value={86}
                      getAriaValueText={valuetext}
                      valueLabelDisplay="on"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Paper sx={{ m: 1, p: 1 }}>
              <Stack alignItems={"start"}>
                <Box>
                  <Typography sx={{ fontWeight: "700" }}>
                    النسبة المئوية الكلية من انجاز المشروع
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Stack>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <SquareRoundedIcon color="primary" />
                        <Typography variant="body2">المنفذ</Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <SquareRoundedIcon color="info" />
                        <Typography variant="body2">المتبقي</Typography>
                      </Box>
                    </Stack>
                    <CircularProgressWithLabel lineColor value={progress} />
                  </Box>
                </Box>
              </Stack>
            </Paper>
          </Paper>
          <Paper>
            <Stack
              m={2}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Paper
                sx={{
                  width: "100px",
                  height: "130px",
                  textAlign: "center",
                  py: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: 1,
                  }}
                >
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src="https://cdn.discordapp.com/attachments/1216663823956836385/1216686123301212300/image.png?ex=66014a40&is=65eed540&hm=fb23703237c3a2235c0c4f96420fb37d9f3e648357a5ce14b91953b82626f8a2&"
                    alt=""
                  />
                  <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
                    شات
                  </Typography>
                </Box>
              </Paper>
              <Paper
                sx={{
                  width: "100px",
                  height: "130px",
                  textAlign: "center",
                  py: 1,
                }}
                component={Button}
                onClick={() => setTimerOpen(true)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: 1,
                  }}
                >
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src={
                      timerOpen
                        ? "https://cdn.discordapp.com/attachments/1216663823956836385/1216687820878512229/image.png?ex=66014bd5&is=65eed6d5&hm=989de16703926ecdb05353fc47c4ba53ed090e6dd743d1b54c1c39729fe8b8d3&"
                        : "https://cdn-icons-png.flaticon.com/512/2014/2014825.png"
                    }
                    alt=""
                  />
                  {timerOpen && (
                    <Typography variant="body1" fontWeight={700}>
                      <Countdown date={new Date("2024-03-25")} />
                    </Typography>
                  )}
                </Box>
              </Paper>
              <Paper
                sx={{
                  width: "100px",
                  height: "130px",
                  textAlign: "center",
                  py: 1,
                }}
              >
                <img
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                  src="https://cdn.discordapp.com/attachments/1216663823956836385/1216687994640011264/image.png?ex=66014bfe&is=65eed6fe&hm=0debb8c1b251c74607ff128ba6b09a3c5570c531ec21ef7cc4ea2a9d4f6906d4&"
                  alt=""
                />
                <Typography sx={{ fontWeight: "700" }}>م/ محمد راغب</Typography>
              </Paper>
            </Stack>
          </Paper>
        </Stack>
      </Drawer>
    </>
  );
}

type PropsType = {
  open: boolean;
  withSubDrawer: boolean;
  onClose: () => void;
};

export default ReportDialog;
