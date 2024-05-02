import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Typography } from "@mui/material";

// const API_KEY = "AIzaSyBx1GmOXC3CLSgfvPNYpu0CEDItEMN3W0M";
const API_KEY = "AIzaSyCLMkS3uH2eW8Fn7a36lKama2jJW9KFFhc";

const PolygonTitle = ({ text }: { text: string; lat: number; lng: number }) => (
  <Typography fontWeight={600}>{text}</Typography>
);

export default function GoOgleMap(props: mapProps) {
  const mapRef = useRef<google.maps.Map<Element> | null>(null);
  const mapsRef = useRef<typeof google.maps | null>(null);

  const handleApiLoaded = (
    map: google.maps.Map<Element>,
    maps: typeof google.maps
  ) => {
    mapRef.current = map;
    mapsRef.current = maps;
    drawPolygon(map, maps);
  };

  const drawPolygon = (
    map: google.maps.Map<Element>,
    maps: typeof google.maps
  ) => {
    const polygon = new maps.Polygon({
      paths: props.polygonCoordinates,
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
    });

    polygon.setMap(map);
  };

  function getPolygonCenter() {
    const totalPoints = props.polygonCoordinates.length;
    let sumLat = 0;
    let sumLng = 0;

    props.polygonCoordinates.forEach((point) => {
      sumLat += point.lat;
      sumLng += point.lng;
    });

    const centerLat = sumLat / totalPoints;
    const centerLng = sumLng / totalPoints;

    return { lat: centerLat, lng: centerLng };
  }

  useEffect(() => {
    if (mapRef.current && mapsRef.current) {
      drawPolygon(mapRef.current, mapsRef.current);
    }
  }, []);

  return (
    <div style={{ height: "400px", width: "95%", margin: "0 auto" }}>
      {props.polygonCoordinates.length == 0 && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{ lat: 21.42251, lng: 39.826168 }}
          defaultZoom={13}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {/* Add any additional components or markers here */}
        </GoogleMapReact>
      )}
      {props.polygonCoordinates.length > 0 && (
        <>
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={props.polygonCoordinates[0]}
            defaultZoom={13}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            {/* Add any additional components or markers here */}
            <PolygonTitle
              lat={getPolygonCenter().lat}
              lng={getPolygonCenter().lng}
              text={props.projectName ?? ""}
            />
          </GoogleMapReact>
        </>
      )}
    </div>
  );
}

type mapProps = {
  map: string;
  projectName: string | undefined;
  polygonCoordinates: {
    lat: number;
    lng: number;
  }[];
};
