import {
  Box,
  Button,
  Container,
  Grid,
  GridProps,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { Contract } from "types/Contract/Contract";
import { NavLink } from "react-router-dom";
import placeholderImage from "assets/images/card-image-placeholder.png";

function InfrastructureCard({ details }: PropsType) {
  return (
    <Paper
      sx={{
        overflow: "hidden",
        pb: 3,
        height: 1,
      }}
    >
      <img
        width="100%"
        height="240px"
        style={{ objectFit: "cover" }}
        src={
          details.contract_details?.media?.[0].original_url || placeholderImage
        }
        alt=""
      />
      <Box sx={{ px: 2, pt: 1 }}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography color="primary">{details.branch?.name}</Typography>
          <Stack direction={"row"} spacing={0.5} color={"text.secondary"}>
            <AccessTimeIcon />
            <Typography color="text.disabled">{details.period} يوم</Typography>
          </Stack>
        </Stack>
        <Typography sx={{ fontWeight: "700", color: "#000" }} variant="h6">
          {details.details}
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 1,
            my: 2,
          }}
        >
          <Button
            size="large"
            sx={{ flexGrow: 1 }}
            variant="outlined"
            color="secondary"
            component={NavLink}
            to={`${details.id}`}
            startIcon={<VisibilityIcon />}
          >
            الاستعراض
          </Button>
          <Button variant="contained" size="large" color="secondary">
            <FindInPageIcon />
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            gap: 1,
          }}
        >
          <Avatar />
          <Box>
            <Typography
              variant="body2"
              sx={{ fontSize: 12 }}
              color="text.secondary"
            >
              المهندس المسؤول
            </Typography>
            <Typography color="black" fontWeight={700}>
              {details.employee?.name}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Paper>
  );
}

type PropsType = {
  details: Contract;
};

export default InfrastructureCard;
