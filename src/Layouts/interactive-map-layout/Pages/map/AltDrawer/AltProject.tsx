import {
  Grid,
  Paper,
  Stack,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Box,
  Slider,
} from "@mui/material";
import {
  CircularProgressWithLabel,
  IconImage,
} from "../MapBanner/ReportDrawer";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";

function AltProject({ openDialog }: PropsType) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Stack spacing={1}>
          <Paper sx={{ p: 1 }}>
            <Stack spacing={1}>
              <Stack direction="row">
                <Typography
                  gutterBottom
                  fontWeight={700}
                  sx={(theme) => ({
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                  })}
                >
                  نسب انجاز مشروع الامير فواز
                </Typography>
                <TableContainer>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell component="th" color="primary.main">
                          اجمالي الاطوال
                        </TableCell>
                        <TableCell align="right">1200</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="th" color="primary.main">
                          المتبقي
                        </TableCell>
                        <TableCell align="right">200</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
              <Grid container sx={{ mt: 5 }} rowGap={3}>
                <Grid item xs={4}>
                  <Typography variant="body2">البند الاول</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <Slider
                      color="secondary"
                      aria-label="Always visible"
                      value={20}
                      valueLabelDisplay="on"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">البند الثاني</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <Slider
                      aria-label="Always visible"
                      value={80}
                      valueLabelDisplay="on"
                    />
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2">البند الثالث</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Box>
                    <Slider
                      color="success"
                      aria-label="Always visible"
                      value={80}
                      valueLabelDisplay="on"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Stack>
          </Paper>
          <Paper sx={{ p: 1 }}>
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
                  <CircularProgressWithLabel lineColor value={70} />
                </Box>
              </Box>
            </Stack>
          </Paper>

          <Paper sx={{ p: 1 }}>
            <img
              style={{ width: "100%" }}
              onClick={openDialog}
              src="https://cdn.discordapp.com/attachments/1200820678006415432/1217090775473717278/image.png?ex=6602c31d&is=65f04e1d&hm=339a46111d811f867e20fa90c97371625c4014df343c4f3fb635c373b395ee84&"
            />
          </Paper>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Typography
          textAlign={"center"}
          fontWeight={700}
          variant="h5"
          gutterBottom
        >
          مشروع الامير فواز
        </Typography>
        <Paper>
          <img
            style={{ width: "100%" }}
            src="https://media.discordapp.net/attachments/1195066403288535111/1216953256706576454/image.png?ex=6602430a&is=65efce0a&hm=7601cd040996ddea1d69767a4a9a89413507a83f921e0db064c8780d01c34fe2&=&format=webp&quality=lossless&width=459&height=350"
            alt=""
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

type PropsType = {
  openDialog: () => void;
};

export default AltProject;
