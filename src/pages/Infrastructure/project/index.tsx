import { Button, Container, Grid, GridProps, Stack } from "@mui/material";
import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import ProjectDetails from "./Details";
import PrintIcon from "@mui/icons-material/Print";
import Divider from "@mui/material/Divider";
import ContactViaWhatsApp from "./Details/ContactViaWhatsApp";

const GridItem = (props: GridProps) => <Grid item {...props} />;

function ProjectPreviewPage() {
  return (
    <PageBannerLayout data={{ bgImage: { gradient: true }, title: "مخطط 544" }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Details */}
          <GridItem sm={12} md={6} lg={8}>
            <Stack spacing={3}>
              <ProjectDetails />
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
          <GridItem sm={12} md={6} lg={4}></GridItem>
        </Grid>
      </Container>
    </PageBannerLayout>
  );
}

export default ProjectPreviewPage;
