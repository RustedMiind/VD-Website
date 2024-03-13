import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

// const API_KEY = "AIzaSyBx1GmOXC3CLSgfvPNYpu0CEDItEMN3W0M";
const API_KEY = "AIzaSyCLMkS3uH2eW8Fn7a36lKama2jJW9KFFhc";

export default function GoOgleMap(props: mapProps) {
  const mapRef = useRef<google.maps.Map<Element> | null>(null);
  const mapsRef = useRef<typeof google.maps | null>(null);
  const [polygonCoordinates, setPolygonCoordinates] = useState<
    { lat: number; lng: number }[]
  >([]);

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
    let validChars = ".0123456789";
    let mapStr = props.map?.slice(3, -3);
    let polygonCoordinatesArr = [];
    let n = mapStr?.length,
      coordinate = "",
      lat = "",
      long = "",
      _key = true;
    for (let i = 0; i < n; i++) {
      if (validChars.indexOf(mapStr[i]) != -1) {
        coordinate += mapStr[i];
      } else {
        if (lat.length == 0) {
          lat = coordinate;
          coordinate = "";
        }
        if (lat.length > 0 && long.length == 0) {
          long = coordinate;
          coordinate = "";
        }
        if (lat.length > 0 && long.length > 0) {
          polygonCoordinatesArr.push({ lat: +lat, lng: +long });
          lat = "";
          long = "";
        }
      }
    }
    // console.log("polygonCoordinates", polygonCoordinatesArr);
    setPolygonCoordinates(polygonCoordinatesArr);
    const polygon = new maps.Polygon({
      paths: polygonCoordinatesArr,
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
    });

    polygon.setMap(map);
  };

  useEffect(() => {
    if (mapRef.current && mapsRef.current) {
      drawPolygon(mapRef.current, mapsRef.current);
    }
  }, []);

  return (
    <div style={{ height: "400px", width: "95%", margin: "0 auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={
          polygonCoordinates.length
            ? polygonCoordinates[0]
            : { lat: 21.42251, lng: 39.826168 }
        }
        defaultZoom={3}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {/* Add any additional components or markers here */}
      </GoogleMapReact>
    </div>
  );
}

type mapProps = {
  map: string;
};
