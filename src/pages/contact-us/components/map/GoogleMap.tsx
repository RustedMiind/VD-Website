import React from "react";
import GoogleMapReact from "google-map-react";

function GoogleMap(props: PropsType) {
  const myLatLng = props.coOrdinates;
  function renderMarkers(map: any, maps: any) {
    let marker = new maps.Marker({
      position: props.coOrdinates,
      map,
      title: "Hello World!",
    });
  }
  const defaultProps = {
    center: myLatLng,
    zoom: 15,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBx1GmOXC3CLSgfvPNYpu0CEDItEMN3W0M" }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
}

type PropsType = {
  coOrdinates: {
    lat: number;
    lng: number;
  };
};

export default GoogleMap;
