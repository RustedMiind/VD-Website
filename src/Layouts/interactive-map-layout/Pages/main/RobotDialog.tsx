import { Dialog, DialogContent, DialogProps } from "@mui/material";
import animation from "assets/images/robot-loading.gif";

function RobotDialog(props: PropsType) {
  return (
    <Dialog
      {...props}
      maxWidth={"lg"}
      fullWidth
      PaperProps={{ sx: { bgcolor: "background.default" } }}
    >
      <DialogContent>
        <img width={"100%"} src={animation} alt="loading robot" />
      </DialogContent>
    </Dialog>
  );
}

type PropsType = DialogProps;

export default RobotDialog;
