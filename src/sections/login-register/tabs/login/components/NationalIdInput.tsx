import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

function NationalIdInput(props: PropsType) {
  const { t } = useTranslation();

  return (
    <TextField
      error={!!props.error}
      autoFocus={props.current}
      disabled={!props.current}
      value={props.value}
      onChange={props.onChange}
      name="nationalId"
      label={t("auth.idNumber")}
      helperText={props.error}
    />
  );
}

type PropsType = {
  error: string;
  current: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default NationalIdInput;
