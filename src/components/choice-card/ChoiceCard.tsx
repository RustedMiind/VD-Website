import { Box, Stack, FormControlLabel, Radio, Typography } from "@mui/material";
import "./choice-card.scss";
import { useTranslation } from "react-i18next";

function ChoiceCard(props: PropsType) {
  const { t } = useTranslation();

  return (
    <div className={`choice-card ${props.current ? "current" : ""}`}>
      <div className="card-head">
        <Stack direction="row" px={2}>
          <FormControlLabel
            value="female"
            disabled={!props.current}
            control={
              <Radio color="secondary" size="small" checked={props.current} />
            }
            label={props.title}
          />
        </Stack>
      </div>
      <Box px={3} py={2}>
        <Typography
          sx={{ mb: 3 }}
          variant="body2"
          color={props.current ? undefined : "text.disabled"}
        >
          {props.description}
        </Typography>
        <Typography
          variant="h6"
          color={props.current ? "primary" : "text.disabled"}
        >
          {props.price}
        </Typography>

        <Typography color={"text.disabled"}>
          {props.helperText || t("design.title.priceTitle2")}
        </Typography>
      </Box>
    </div>
  );
}

type PropsType = {
  title: string;
  description: string;
  price: string;
  helperText?: string;
  current?: boolean;
};

export default ChoiceCard;
