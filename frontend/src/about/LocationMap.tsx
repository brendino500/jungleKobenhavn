import * as React from "react";
import MapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { NavigationControl } from "react-map-gl";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

export default function LocationMap() {
  const viewport = {
    latitide: 55,
    longitude: 12,
    zoom: 9,
    bearing: 0,
    pitch: 0,
  };

  const useStyles = makeStyles({
    root: {
      margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <MapGl
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPTOK}
      height={"100vh"}
      width={"100vh"}
      mapStyle="mapbox://styles/heybt/ckgl0qw1j0r1p19qq7u59kla9"
      // onViewportChange={(viewport) => setState({ viewport })}
      zoom={viewport.zoom}
      scrollZoom={true}
    >
      <div style={{ position: "absolute", right: 30, bottom: 30 }}>
        <NavigationControl />
      </div>
    </MapGl>
  );
}
