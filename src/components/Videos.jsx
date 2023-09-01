import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ Videos, direction }) => {
  if (!Videos?.length) return "loading";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="Wrap"
      justifyContent="start"
      gap={2}
    >
      {Videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}

          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
