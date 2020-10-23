import * as React from "react";
import MapGl from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { NavigationControl } from "react-map-gl";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";

export default function KobenhavnMap() {
  const viewport = {
    latitide: 55,
    longitude: 12,
    // center: [12, 51],
    zoom: 4,
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
      height={"75vh"}
      width={"75vh"}
      mapStyle="mapbox://styles/heybt/ckgl0qw1j0r1p19qq7u59kla9"
      // onViewportChange={(viewport) => setState({ viewport })}
      // zoom={viewport.zoom}
      // scrollZoom={false}
    >
      {/* <div style={{ position: "absolute", right: 30, bottom: 30 }}> */}
        {/* <NavigationControl />
      </div> */}
    </MapGl>
  );
}
