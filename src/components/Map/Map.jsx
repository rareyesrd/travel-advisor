import React from "react";

import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/lab";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles";

const Map = ({ setCoodinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBFC1t9Wa-NG4qhBliNBLZsVCDqUwZUg1s" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        option={""}
        onChange={(e) => {
          console.log(e);
          setCoodinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChlidClik={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
