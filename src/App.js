import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


const App = () => (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <routes>
           
           <route path="/" exact element={<Feed />} />
           <route path="/video/:id" element={<VideoDetail />} />
           <route path="/Channel/:id" element={<ChannelDetail />} />
           <route path="/Search/:searchTerm" element={<SearchFeed />} />
        
        </routes>
    </Box>
    </BrowserRouter>
)


export default App