import { Paper, Stack, Typography } from "@mui/material";

function EmptyItemsContainer({ title = "غير موجود", subTitle }: PropsType) {
  return (
    <Stack
      component={Paper}
      alignItems="center"
      justifyContent="center"
      spacing={2}
      width={1}
      height={1}
      elevation={0}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1" color="text.disabled">
        {subTitle}
      </Typography>
    </Stack>
  );
}

type PropsType = {
  title?: string;
  subTitle?: String;
};

export default EmptyItemsContainer;
