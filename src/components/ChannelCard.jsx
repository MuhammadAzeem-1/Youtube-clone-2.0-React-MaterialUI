import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

function ChannelCard({ channelDetails, marginTop }) {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "21px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "320px", md: "320px" },
        height: "320px",
        margin: "auto",
        marginTop,
      }}
    >
      <Link to={`./channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircle
              sx={{ fontSize: "15px", fontWeight: "500", color: "gray" }}
            />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
