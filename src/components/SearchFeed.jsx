import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  console.log(videos);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh" }}>
      <Typography
        varient="h4"
        fontWeight="bold"
        md={2}
        sx={{
          color: "white",
        }}
      >
        Search Result For {searchTerm}
        <span style={{ color: "#F31503" }}> Videos</span>
      </Typography>
      <Videos Videos={videos} />
    </Box>
  );
};

export default SearchFeed;
