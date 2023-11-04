import React from "react";
import { CardMedia } from "@mui/material";
import { Box } from "@material-ui/core";

const Video = () => {
  return (
    <Box
      component="div" 
      sx={{
        width: "100vh", // Set the width to 100% for responsiveness
        margin: "0 auto",
        display: "flex",
        flexGrow:"1"
        
      }}
    >
      <CardMedia
        component="video"
        autoPlay
        loop
        muted
        sx={{ width: "100%", height: "auto" }} // Set height to "auto"
      >
        <source src="rice.mp4" type="video/mp4" />
      </CardMedia>
    </Box>
  );
};

export default Video;
