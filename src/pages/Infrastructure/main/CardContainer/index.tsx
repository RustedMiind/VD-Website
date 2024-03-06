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
import fileImage from "assets/images/IPB.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FindInPageIcon from "@mui/icons-material/FindInPage";
const GridItem = (props: GridProps) => (
  <Grid item lg={3} md={4} sm={6} {...props}>
    {props.children}
  </Grid>
);
export default function CardContainer() {
  const cardCount = 10;
  return (
    <Container maxWidth={"xl"}>
      <Grid container spacing={4}>
        {Array.from({ length: cardCount }, (_, index) => (
          <GridItem>
            <Paper
              sx={{
                overflow: "hidden",
                pb: 3,
              }}
            >
              <img
                width="100%"
                height="240px"
                style={{ objectFit: "cover" }}
                src={fileImage}
                alt=""
              />
              <Box sx={{ px: 2 }}>
                <Stack
                  sx={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography color="primary">جدة</Typography>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    <Typography color="text.disabled">3 أشهر</Typography>
                  </Box>
                </Stack>
                <Typography
                  sx={{ fontWeight: "700", fontSize: "22px", color: "#000" }}
                >
                  اسم المخطط 676
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
                  <Avatar src="/broken-image.jpg" />
                  <Box>
                    <Typography variant="body2" color="text.disabled">
                      المهندس المسؤول
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: "#000", fontWeight: 500 }}
                    >
                      محمد خالد عبدالله
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Paper>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
