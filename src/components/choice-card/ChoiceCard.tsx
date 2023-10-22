import { Box, Stack, FormControlLabel, Radio, Typography } from "@mui/material";
import "./choice-card.scss";

function ChoiceCard(props: PropsType) {
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
            label="التصميم فقط"
          />
        </Stack>
      </div>
      <Box px={3} py={2}>
        <Typography color={props.current ? undefined : "text.disabled"}>
          {props.description}
        </Typography>
        <Typography
          variant="h6"
          color={props.current ? "primary" : "text.disabled"}
        >
          {props.price}
        </Typography>

        <Typography color={"text.disabled"}>
          {props.helperText || "السعر شامل القيمة المضافة"}
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
