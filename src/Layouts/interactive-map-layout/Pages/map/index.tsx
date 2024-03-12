import { Stack } from "@mui/material";
import MapBanner, { MapPositionsType, MapReportTypes } from "./MapBanner";
import ReportDialog from "./MapBanner/ReportDrawer";
import { useState } from "react";
import SideTabs from "./SideTabs";
export const mapPositions: MapPositionsType[] = [
  {
    name: "جده",
    typeId: 1,
    center: { lat: 21.49417687931842, lng: 39.23323984402052 },
  },
  {
    name: "الرياض",
    typeId: 2,
    center: { lat: 24.772539640503144, lng: 46.821391518405356 },
  },
  {
    name: "المدينة المنورة",
    typeId: 3,
    center: { lat: 24.474017980704378, lng: 39.6182478831776 },
  },
  {
    name: "مكة المكرمة",
    typeId: 4,

    center: { lat: 21.40977625862909, lng: 39.83496956573179 },
  },
];
function InteractiveMapPage() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [subDrawerOpen, setSubDrawerOpen] = useState(false);

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
      <SideTabs />
      <ReportDialog
        open={dialogOpen}
        withSubDrawer={subDrawerOpen}
        onClose={() => {
          setDialogOpen(false);
          setSubDrawerOpen(false);
        }}
      />
      <MapBanner
        openDrawer={(withSubDrawer?: boolean) => {
          setDialogOpen(true);
          setSubDrawerOpen(Boolean(withSubDrawer));
        }}
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
