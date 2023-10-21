import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isStringAllNumbers } from "methods/isStringAllNumbers";
import Individual from "./tabs/Individual";
import Company from "./tabs/company";

function Register(props: PropsType) {
  const [tab, setTab] = useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={props.open}
      onClose={props.onClose}
      component="form"
      // onSubmit={submitHandler}
    >
      <DialogTitle>التسجيل</DialogTitle>
      <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="تسجيل حساب فرد" value={1} />
        <Tab label="تسجيل حساب شركة" value={2} />
      </Tabs>
      {tab === 1 && <Individual />}
      {tab === 2 && <Company />}
    </Dialog>
  );
}

type PropsType = { open: boolean; onClose: () => void };

export default Register;

export type AccountType = "individual" | "company";
