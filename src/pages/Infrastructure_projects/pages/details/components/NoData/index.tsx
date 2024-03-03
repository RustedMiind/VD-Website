import { Box, Typography } from "@mui/material";
import noDataImg from "../../../../../../assets/images/infrestructurePeojectsImages/no-data-concept-illustration.jpg";

export default function ThereIsNoData() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        src={noDataImg}
        alt="no data"
        style={{
          width: "100%",
          height: "325px",
        }}
      />
      <Typography variant="body1">لايوجد بيانات</Typography>
    </Box>
  );
}
