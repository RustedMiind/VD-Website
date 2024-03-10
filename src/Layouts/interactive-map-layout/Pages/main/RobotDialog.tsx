import { Dialog, DialogContent, DialogProps } from "@mui/material";
import animation from "assets/images/robot-loading.gif";

function RobotDialog(props: PropsType) {
  return (
    <Dialog {...props} PaperProps={{ sx: { bgcolor: "background.default" } }}>
      <DialogContent>
        <img src={animation} alt="loading robot" />
      </DialogContent>
    </Dialog>
  );
}

type PropsType = DialogProps;

export default RobotDialog;
