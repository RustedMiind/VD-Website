import { Stack } from "@mui/material";
import MapBanner, { MapReportTypes } from "./MapBanner";
import ReportDialog from "./MapBanner/ReportDrawer";
import { useState } from "react";

function InteractiveMapPage() {
  const [dialogOpen, setDialogOpen] = useState(true);

  return (
    <Stack
      sx={{
        position: "absolute",
        width: 1,
        height: 1,
        top: 0,
        left: 0,
        overflow: "hidden",
        zIndex: -1000,
      }}
    >
      <ReportDialog
        open={dialogOpen}
        reportDetails={{}}
        onClose={() => setDialogOpen(false)}
      />
      <MapBanner
        center={{ lat: 29.859389702088066, lng: 31.320020168783053 }}
        openDrawer={() => {}}
        setReportContractorDetails={() => {}}
        setReportEmployeeDetails={() => {}}
        setType={() => {}}
        mapReport={[]}
        type={MapReportTypes.CONTRACTOR}
      />
    </Stack>
  );
}

export default InteractiveMapPage;
