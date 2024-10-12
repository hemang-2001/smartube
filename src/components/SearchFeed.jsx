import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { SideBar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import { categories } from '../utils/constants';



const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);


    const [selectedCategory, setSelectedCategory] = useState(`New`);
  


return (


  <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 }}}>
  
            <SideBar
              selectedCategory= { selectedCategory }
              setSelectedCategory= { setSelectedCategory } />
  
              <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
              Copyright 2023 Hemang B.
              </Typography>
        </Box>
    
      <Box
        p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
          Search Results for: <span style={{ color: '#F31503' }} >
            {searchTerm} </span> videos
        </Typography>
        <Videos videos={videos} />
      </Box>
      </Stack>
  
);
};

      export default SearchFeed; 