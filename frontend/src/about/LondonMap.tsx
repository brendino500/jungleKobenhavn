import * as React from "react";
import MapGl, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Container from "@material-ui/core/Container";

import useStyles from "./styles/londonMapStyles";

export default function LondonMap() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <MapGl
        mapboxApiAccessToken={process.env.REACT_APP_MAPTOK}
        height={"50vh"}
        width={"50vh"}
        mapStyle="mapbox://styles/heybt/ckgl0qw1j0r1p19qq7u59kla9"
        latitude={51.500467}
        longitude={-0.082108}
        zoom={14}
      >
        <Marker key="london" latitude={51.500467} longitude={-0.082108}>
          <span role="img" aria-label="marker">
            📍
          </span>
        </Marker>
      </MapGl>
    </Container>
  );
}
