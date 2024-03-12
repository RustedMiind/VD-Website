import { Box, Button, Chip, Paper, Stack } from "@mui/material";
import React from "react";

export default function ButtonsColor({
  handleSelect,
  selected,
  handSelectSub,
  selectedSub,
}: PropsType) {
  function getVariant(color: string): "contained" | "outlined" {
    return selected === color ? "contained" : "outlined";
  }
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
          <Button
            variant={getVariant("yellow")}
            onClick={handleSelect}
            value="yellow"
          >
            لم يبدأ
          </Button>
        </Paper>
        <Paper>
          <Button
            color="secondary"
            value="blue"
            onClick={handleSelect}
            variant={getVariant("blue")}
          >
            جاري التسليم
          </Button>
        </Paper>
        <Paper>
          <Button
            color="error"
            value="red"
            onClick={handleSelect}
            variant={getVariant("red")}
          >
            متوقف
          </Button>
        </Paper>
        <Paper>
          <Button
            color="success"
            value="green"
            onClick={handleSelect}
            variant={getVariant("green")}
          >
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
        <Chip
          label="بديل"
          variant={selectedSub === "alt" ? "filled" : "outlined"}
          color="warning"
          onClick={() => handSelectSub("alt")}
        />
        <Chip
          label="ضخ"
          variant={selectedSub === "push" ? "filled" : "outlined"}
          color="secondary"
          onClick={() => handSelectSub("push")}
        />
      </Box>
    </Stack>
  );
}
type PropsType = {
  selected: string | undefined;
  handleSelect: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handSelectSub: (selected: string) => void;
  selectedSub?: string;
};
