import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Login from "./tabs/login/Login";

function LoginRegister(props: PropsType) {
  return <Login open={props.open} onClose={props.onClose} />;
}

type PropsType = { open: boolean; onClose: () => void };

export default LoginRegister;
