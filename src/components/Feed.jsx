import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/icons-material";

const Feed = () => {
  return (
    <Stack sx={{ flexDirction: { sx: "coloumn", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px soild #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        SideBar
        <Typography className="copyright" variant="body2" sx= {{mt: 1.5, color: '#fff' }}>
          CopyRight 2023 Hemang Bairwa
        </Typography>
    
      </Box>
    </Stack>
  );
};

export default Feed
