import { Box, Button, Chip, Paper, Stack } from "@mui/material";
import React from "react";

export default function ButtonsColor() {
  return (
    <Stack
      sx={{
        position: "absolute",
        zIndex: 100,
        bottom: "20px",
        left: "80px",
        flexDirection: "row",
        gap: 3,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
        <Paper>
          <Button variant="outlined">لم يبداء</Button>
        </Paper>
        <Paper>
          <Button color="secondary" variant="outlined">
            جاري التسليم
          </Button>
        </Paper>
        <Paper>
          <Button color="error" variant="outlined">
            متوقف
          </Button>
        </Paper>
        <Paper>
          <Button color="success" variant="outlined">
            جاري العمل
          </Button>
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Chip size="small" label="بديل" variant="outlined" color="warning" />
        <Chip size="small" label="ضخ" variant="outlined" color="secondary" />
      </Box>
    </Stack>
  );
}
type PropsType = {
  title: string;
  color: string;
};
