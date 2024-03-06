import { Box, Stack, Typography } from "@mui/material";
import GoogleMapApiKey from "contstants/GoogleMapApiKey";
import GoogleMapReact from "google-map-react";

function ProjectMap() {
  return (
    <Box width={1} height={400}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GoogleMapApiKey,
        }}
        defaultCenter={{ lat: 21.42251, lng: 39.826168 }}
        defaultZoom={14}
      >
        {/* Add any additional components or markers here */}
      </GoogleMapReact>
    </Box>
  );
}

export default ProjectMap;
