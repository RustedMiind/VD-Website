import {
  Backdrop,
  Chip,
  ChipProps,
  CircularProgress,
  IconButton,
  Paper,
  Skeleton,
  Stack,
} from "@mui/material";
import GoogleMapReact from "google-map-react";
import engIcon from "../../../../../assets/images/icons/engineer2.png";
import underCon from "../../../../../assets/images/icons/under-con1.png";
import { Tooltip } from "react-tooltip";
import { ImgHTMLAttributes, useState } from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import MapSearchInput from "components/MapsSearchInput";
import {
  Contractor,
  MapReportContractor,
} from "pages/Infrastructure_projects/types/WorkInstructionsReport";
import { Employee } from "types/Employee";

export enum MapReportTypes {
  CONTRACTOR = 1,
  EMPLOYEE = 2,
}

const CustomChip = (props: ChipProps) => (
  <Chip
    component={Paper}
    sx={{ bgcolor: "Background" }}
    size="small"
    label="مهندس"
    icon={<EngineeringIcon />}
    {...props}
  />
);

// Should be translate(-50%, -50%) in ltr layout
const imageContainerStyle = {
  position: "absolute",
  transform: "translate(50%, -50%)",
} as const;

const IconImage = ({
  src,
  ...props
}: { src: string } & ImgHTMLAttributes<HTMLImageElement>) => (
  <div style={imageContainerStyle}>
    <img
      src={src}
      alt="Pin Marker"
      style={{ width: 32, height: 32, objectFit: "contain" }}
      {...props}
    />
  </div>
);
const Marker = (
  props: ImgHTMLAttributes<HTMLImageElement> & {
    lat: number;
    lng: number;
    title: string;
    toolTipId: string;
  }
) => (
  <IconImage
    data-tooltip-id={props.toolTipId}
    data-tooltip-content={props.title}
    {...props}
    src={props.src || engIcon}
  />
);

function MapBanner({
  center,
  mapReport,
  setType,
  openDrawer,
  setReportContractorDetails,
  setReportEmployeeDetails,
  type,
}: PropsType) {
  const [currentCenter, setCurrentCenter] = useState<number | undefined>(
    undefined
  );

  function handleChangeCenterByReport(indexIncrement: number = 1) {
    if (!mapReport) return;
    const newCenterIndex =
      typeof currentCenter === "number" ? currentCenter + indexIncrement : 0;
    console.log(newCenterIndex);
    if (newCenterIndex >= 0 && newCenterIndex < mapReport?.length) {
      setCurrentCenter(newCenterIndex);
    } else {
      setCurrentCenter(0);
    }
  }

  return (
    <Stack sx={{ width: 1, height: "80vh", position: "relative" }}>
      <Backdrop open={!mapReport} sx={{ position: "absolute", zIndex: 100 }}>
        <CircularProgress />
      </Backdrop>
      {mapReport ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBx1GmOXC3CLSgfvPNYpu0CEDItEMN3W0M" }}
          center={currentCenter ? mapReport?.[currentCenter] || center : center}
          defaultZoom={8}
          key={`${center.lat}, ${center.lng}, ${"currentCenter"}`}
          options={{ fullscreenControl: false }}
        >
          {mapReport.map((report) => (
            <Marker
              lat={report.lat}
              lng={report.lng}
              title={report.name}
              key={`${report.id} ${report.type}`}
              toolTipId={report.id?.toString()}
              src={report.type === MapReportTypes.EMPLOYEE ? engIcon : underCon}
              onClick={() => {
                console.log("pressed");
                if (report.employee) {
                  setReportEmployeeDetails(report.employee);
                } else if (report.contractor) {
                  setReportContractorDetails(report.contractor);
                }
                openDrawer();
              }}
            />
          ))}
        </GoogleMapReact>
      ) : (
        <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
      )}
      {mapReport?.map((item) => (
        <Tooltip id={item.id.toString()} />
      ))}
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={{ xs: "end", md: "center" }}
        spacing={1}
        p={1}
        sx={{
          position: "absolute",
          bottom: 0,
          right: { xs: 0, md: 50 },
        }}
      >
        <MapSearchInput />
        <Stack direction="row" alignItems="center">
          <IconButton
            component={Paper}
            size="small"
            sx={{ bgcolor: "Background" }}
            onClick={() => {
              handleChangeCenterByReport(1);
            }}
          >
            <NavigateNextIcon />
          </IconButton>
          <IconButton
            component={Paper}
            size="small"
            sx={{ bgcolor: "Background" }}
            onClick={() => {
              handleChangeCenterByReport(-1);
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
        </Stack>
        <CustomChip
          label="مهندس"
          onClick={() => setType(MapReportTypes.EMPLOYEE)}
          icon={<EngineeringIcon />}
        />
        <CustomChip
          label="امر عمل"
          onClick={() => setType(MapReportTypes.CONTRACTOR)}
          icon={<BusinessIcon />}
        />
      </Stack>
    </Stack>
  );
}

type PropsType = {
  center: {
    lat: number;
    lng: number;
  };
  mapReport?: MapReportBase[];
  type: MapReportTypes;
  setType: (type: MapReportTypes) => void;
  openDrawer: () => void;
  setReportEmployeeDetails: (employee?: Employee) => void;
  setReportContractorDetails: (contractor?: MapReportContractor) => void;
};

export type MapReportBase = {
  name: string;
  lat: number;
  lng: number;
  id: number;
  type: MapReportTypes;
  contractor?: MapReportContractor;
  employee?: Employee;
};

export default MapBanner;
