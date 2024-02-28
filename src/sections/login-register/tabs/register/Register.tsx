import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  GridProps,
  Tab,
  Tabs,
  TextField,
  Grid,
  TextFieldProps,
  SxProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import AddLabelToElComponent from "components/AddLabelToEl";
import CustomFilePond from "components/CustomFilePond";
import axios from "axios";
import api from "methods/api";
import { AuthContext } from "contexts/Auth";
import { FileBondState } from "types/FileBondState";
import { serialize } from "object-to-formdata";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

const ErrorMessage = (props: TypographyProps) => (
  <Typography variant="body2" color="error" {...props} />
);

type ClientForm = {
  type: "individual" | "company";
  name: string;
  card_id: string;
  phone: string;
  letter_head: string;
  email: string;
  register_image: string;
};

const GridItem = (props: GridProps) => (
  <Grid item xs={12} md={6} p={1} {...props} />
);

const AddLabelToEl = (props: { label: string; children: React.ReactNode }) => (
  <AddLabelToElComponent
    labelTypographyProps={{ color: "primary.main" }}
    {...props}
  />
);

const textFieldProps: TextFieldProps = { size: "small", fullWidth: true };

function Register(props: PropsType) {
  const [tab, setTab] = useState<AccountType>("individual");
  const handleChange = (event: React.SyntheticEvent, newValue: AccountType) => {
    setTab(newValue);
  };
  const [status, setStatus] = useState<"none" | "loading" | "error">("none");
  const { closeDialog } = useContext(AuthContext);
  const [files, setFiles] = useState<FileBondState>([]);
  const { enqueueSnackbar } = useSnackbar();
  const { register, handleSubmit, watch } = useForm<ClientForm>();

  const inputs: Partial<ClientForm> = watch();

  const errors: Partial<ClientForm> = {};
  if (tab === "company") {
    if (
      !(
        inputs.card_id?.startsWith("4") ||
        inputs.card_id?.startsWith("7") ||
        inputs.card_id?.startsWith("1")
      )
    )
      errors.card_id =
        "يجب ان يكون رقم الهوية في حالة الشركة يبدأ ب 4 أو 7 أو 1";
  } else {
    if (!(inputs.card_id?.startsWith("10") || inputs.card_id?.startsWith("2")))
      errors.card_id = "يجب ان يكون رقم الهوية في حالة الفرد يبدأ ب 10 أو 2";
    else if (!(inputs.card_id.length === 10))
      errors.card_id = "يجب ان يكون رقم الهوية للفرد 10 ارقام";
  }
  if (!inputs.phone?.startsWith("5"))
    errors.phone = "يجب ان يبدأ رقم الهاتف ب5";
  else if (!(inputs.phone.length === 9))
    errors.phone = "يجب ان يكون عدد الارقام 9 ارقام";
  console.log(inputs);

  const submit = handleSubmit((data) => {
    console.log(data, errors);
    setStatus("loading");
    axios
      .post(
        api("register"),
        serialize({
          ...data,
          type: tab,
          ...(tab === "individual"
            ? { card_image: files[0] }
            : {
                register_image: files[0],
                register_number: data.card_id,
                agent_name: data.name,
              }),
        })
      )
      .then((res) => {
        closeDialog();
        setStatus("none");
        enqueueSnackbar("تم ارسال طلبك. برجاء انتظار الموافقة");
      })
      .catch((err) => {
        console.log(err);
        setStatus("error");
        enqueueSnackbar(
          err?.response?.data?.message ||
            err?.response?.data?.msg ||
            "تعذر في ارسال طلب التسجيل",
          { variant: "error" }
        );
      });
  });

  let disabled = false;

  for (let index in errors) {
    const i = index as keyof typeof errors;
    if (!!errors[i]) disabled = true;
  }
  if (!files.length) disabled = true;

  const visibilityStyles: (type: AccountType) => SxProps = (type) => ({
    display: type === tab ? undefined : "none",
  });
  const { t } = useTranslation();

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={props.open}
      onClose={props.onClose}
      component="form"
      onSubmit={submit}
    >
      <DialogTitle>{t("auth.register")}</DialogTitle>
      <Tabs value={tab} onChange={handleChange}>
        <Tab label={t("auth.title.registerIndividual")} value={"individual"} />
        <Tab label={t("auth.title.registerCompany")} value={"company"} />
      </Tabs>
      <DialogContent>
        <Grid container>
          <GridItem>
            <AddLabelToEl label={t("auth.form.name")}>
              <TextField
                {...textFieldProps}
                {...register("name", {
                  required: true,
                })}
                label={t("auth.form.name")}
              />
            </AddLabelToEl>
          </GridItem>
          <GridItem>
            <AddLabelToEl label={t("auth.form.email")}>
              <TextField
                type="email"
                {...textFieldProps}
                {...register("email", {
                  required: true,
                })}
                label={t("auth.form.email")}
              />
            </AddLabelToEl>
          </GridItem>
          <GridItem>
            <AddLabelToEl label={t("auth.idNumber")}>
              <TextField
                type="number"
                {...textFieldProps}
                {...register("card_id", {
                  required: true,
                })}
                label={t("auth.idNumber")}
              />
              <ErrorMessage>{inputs.card_id && errors.card_id}</ErrorMessage>
            </AddLabelToEl>
          </GridItem>
          <GridItem>
            <AddLabelToEl label={t("auth.form.phone")}>
              <TextField
                type="number"
                {...textFieldProps}
                {...register("phone", {
                  required: true,
                })}
                label={t("auth.form.phone")}
              />
              <ErrorMessage>{inputs.phone && errors.phone}</ErrorMessage>
            </AddLabelToEl>
          </GridItem>
          <GridItem>
            <AddLabelToEl label={t("auth.form.correspondenceAddress")}>
              <TextField
                {...textFieldProps}
                {...register("letter_head", {
                  required: true,
                })}
                label={t("auth.form.correspondenceAddress")}
              />
            </AddLabelToEl>
          </GridItem>
          {/* placeholder for upload file component */}

          <GridItem>
            <AddLabelToEl
              label={
                tab === "individual"
                  ? t("auth.id")
                  : t("auth.companyReferenceNumber")
              }
            >
              <CustomFilePond
                allowMultiple={false}
                files={files}
                onupdatefiles={(fileItems) => {
                  setFiles(fileItems.map((fileItem) => fileItem.file));
                }}
              />
            </AddLabelToEl>
          </GridItem>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <LoadingButton
          size="large"
          loading={status === "loading"}
          // startIcon={<SaveIcon />}
          type="submit"
          loadingPosition="start"
          variant="contained"
          fullWidth
          disabled={disabled}
        >
          {t("auth.register")}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}

type PropsType = { open: boolean; onClose: () => void };

export default Register;

export type AccountType = "individual" | "company";
