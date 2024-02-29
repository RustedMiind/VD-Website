import {
  IconButton,
  IconButtonProps,
  Skeleton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import GoogleMapReact from "google-map-react";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import engIcon from "../../../../../assets/images/icons/engineer2.png";
import companyIcon from "../../../../../assets/images/icons/company.png";
import { MapReport } from "pages/Infrastructure_projects/types/WorkInstructionsReport";

const IconImage = ({ src }: { src: string }) => (
  <img
    src={src}
    alt="Pin Marker"
    style={{ width: 32, height: 32, objectFit: "contain" }}
  />
);
const Marker = (
  props: IconButtonProps & { lat: number; lng: number; title: string }
) => (
  <Tooltip
    placement="top-end"
    title={<Typography>{props.title}</Typography>}
    arrow
  >
    <div lat={props.lat} lng={props.lng}>
      <IconImage src={engIcon} />
    </div>
  </Tooltip>
);

function MapBanner({ center, mapReport }: PropsType) {
  return (
    <Stack sx={{ width: 1, height: "80vh" }}>
      {mapReport ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBx1GmOXC3CLSgfvPNYpu0CEDItEMN3W0M" }}
          center={center}
          defaultZoom={8}
          key={`${center.lat}, ${center.lng}`}
        >
          {mapReport.map(
            (item) =>
              item.employee_track &&
              item.employee_track.latitude &&
              item.employee_track.longitude && (
                <Marker
                  lat={parseFloat(item.employee_track?.latitude)}
                  lng={parseFloat(item.employee_track?.longitude)}
                  title={item.full_name}
                  key={item.id}
                />
              )
          )}
        </GoogleMapReact>
      ) : (
        <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
      )}
    </Stack>
  );
}

type PropsType = {
  center: {
    lat: number;
    lng: number;
  };
  mapReport?: MapReport[];
};

export default MapBanner;
