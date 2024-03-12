import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function FileDialog(props: PropsType) {
  return (
    <Dialog maxWidth="md" fullWidth {...props}>
      <DialogContent>
        <Stack alignItems={"center"} spacing={2}>
          <Typography variant="h5" fontWeight={700}>
            تقرير مشروع الامير فواز
          </Typography>
          <Paper
            component="img"
            sx={{ width: 600, maxWidth: 1 }}
            src="https://cdn.discordapp.com/attachments/1200820678006415432/1217087768220532736/image.png?ex=6602c050&is=65f04b50&hm=251bbd547efa3ca49fb1d24fd21330124b8d2693e93665db0b354edf2f6d3191&"
          ></Paper>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          component="a"
          href="https://visiondimensions.com/storage/uploads/website/0/organization_chart/organization_chart_1692824438622.pdf"
          target="_blank"
          startIcon={<DownloadIcon />}
          variant="contained"
          fullWidth
          color="secondary"
          size={"large"}
        >
          تحميل
        </Button>
      </DialogActions>
    </Dialog>
  );
}

type PropsType = DialogProps;

export default FileDialog;
