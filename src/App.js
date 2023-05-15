import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from '@mui/material';


const App = () => (
    <BrowserRouter>
    <Box sx={{ backgroundColor: '#000' }}>
        Navbar
        <routes>
           
           <route path="/" exact element={<Feed/>} />
           <route path="/video/:id" />
        
        </routes>
    </Box>
    </BrowserRouter>
)


export default App