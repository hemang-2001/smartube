import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import { Box } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link' ;




const App = () => (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>

    <Alert severity="warning">
  <AlertTitle>Essive API Calls</AlertTitle>
  Please Fork this Project on <Link href="https://github.com/hemang-2001/smartube">GitHub</Link> and add your own API key by steps shown in documentation if you use it ragularly. Star the repository too
</Alert>


        <Navbar />
        <Routes>
           
           <Route path="/" exact element={<Feed />} />
           <Route path="/video/:id" element={<VideoDetail />} />
           <Route path="/Channel/:id" element={<ChannelDetail />} />
           <Route path="/Search/:searchTerm" element={<SearchFeed />} />
        
        </Routes>
    </Box>
    </BrowserRouter>
)


export default App
