import { Stack, Typography } from "@mui/material";
import DetailsTable from "./DetailsTable";

function ProjectDetails() {
  return (
    <Stack>
      <Typography variant="h4" gutterBottom>
        استعراض مخطط 544
      </Typography>
      {/* ColoredTable */}
      <DetailsTable />
    </Stack>
  );
}

export default ProjectDetails;
