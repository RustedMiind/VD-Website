import {
  Button,
  Container,
  Grid,
  GridProps,
  Stack,
  Box,
  Typography,
  TypographyProps,
} from "@mui/material";
import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import ProjectDetails from "./Details";
import PrintIcon from "@mui/icons-material/Print";
import Divider from "@mui/material/Divider";
import ContactViaWhatsApp from "./Details/ContactViaWhatsApp";
import ProjectMap from "./Media/Map";
import ImagesGrid from "./Media/ImagesGrid";

const GridItem = (props: GridProps) => <Grid item {...props} />;
const SectionTitle = (props: TypographyProps) => (
  <Typography variant="h5" fontWeight={700} gutterBottom {...props} />
);

function ProjectPreviewPage() {
  return (
    <PageBannerLayout data={{ bgImage: { gradient: true }, title: "مخطط 544" }}>
      <Container fixed maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Details */}
          <GridItem xs={12} md={6} lg={7.5}>
            <Stack spacing={3}>
              <Box>
                <SectionTitle>استعراض مخطط 544</SectionTitle>
                <ProjectDetails />
              </Box>
              <Button
                startIcon={<PrintIcon />}
                variant="contained"
                color="secondary"
                size="large"
              >
                طباعة الصفحة
              </Button>
              <Divider />
              <ContactViaWhatsApp />
            </Stack>
          </GridItem>
          {/* Media */}
          <GridItem xs={12} md={6} lg={4.5}>
            <Stack spacing={2}>
              <Box>
                <SectionTitle>الخريطة</SectionTitle>
                <ProjectMap />
              </Box>
              <Box>
                <SectionTitle>عرض الصور</SectionTitle>
                <ImagesGrid />
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </PageBannerLayout>
  );
}

export default ProjectPreviewPage;
