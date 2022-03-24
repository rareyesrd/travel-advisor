import React from "react";

import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/lab";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width: 600px)");

  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBFC1t9Wa-NG4qhBliNBLZsVCDqUwZUg1s" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        option={""}
        // onChange={""}
        onChlidClik={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
