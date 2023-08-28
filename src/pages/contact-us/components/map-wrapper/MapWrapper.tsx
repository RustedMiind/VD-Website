import { useEffect, useState } from "react";
import GoogleMap from "../map/GoogleMap";

function MapWrapper(props: PropsType) {
  const [showMap, setShowMap] = useState(<></>);
  const newCordinates = { ...props.coOrdinates };
  function updateMap() {
    setShowMap(<GoogleMap coOrdinates={newCordinates} />);
  }
  useEffect(() => {
    setShowMap(<></>);
    setTimeout(() => {
      updateMap();
    }, 500);
  }, [props.coOrdinates]);
  return <div className="map-container">{showMap}</div>;
}

type PropsType = {
  coOrdinates: {
    lat: number;
    lng: number;
  };
};

export default MapWrapper;
