import { Stack } from "@mui/material";
import MapBanner, { MapReportTypes } from "./MapBanner";
import ReportDialog from "./MapBanner/ReportDrawer";
import { useState } from "react";
const mapPositions = [
  {
    name: "جده",
    typeId: 1,
    center: { lat: 24.774265, lng: 46.738586 },
  },
  {
    name: "الرياض",
    typeId: 2,
    center: { lat: 30.033333, lng: 31.233334 },
  },
  {
    name: "المدينة",
    typeId: 3,
    center: { lat: 30.033333, lng: 31.233334 },
  },
  {
    name: "العزيزيه",
    typeId: 4,
    center: { lat: 30.033333, lng: 31.233334 },
  },
];
function InteractiveMapPage() {
  const [dialogOpen, setDialogOpen] = useState(false);

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
        openDrawer={() => {}}
        setReportContractorDetails={() => {}}
        setReportEmployeeDetails={() => {}}
        setType={() => {}}
        mapReport={[]}
        type={MapReportTypes.CONTRACTOR}
        mapPositions={mapPositions}
      />
    </Stack>
  );
}

export default InteractiveMapPage;
