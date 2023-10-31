import React from "react";
import { Grid } from "@mui/material";

const Video = () => {
  return (
    <Grid>
      <video width="100%" autoPlay loop muted>
        <source src="rice.mp4" type="video/mp4" />
      </video>
    </Grid>
  );
};

export default Video;
