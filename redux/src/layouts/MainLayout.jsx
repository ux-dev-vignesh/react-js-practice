import {Box} from "@mui/material"
import CssBaseline from '@mui/material/CssBaseline';
import AppHeader from "../components/AppHeader"
import AppMain from "../components/AppMain"
import AppFooter from "../components/AppFooter"
import {Outlet} from "react-router-dom"

const MainLayout=()=>{
    return(
     <Box component="section">
        <CssBaseline/>
     <AppHeader/>
     <AppMain>
        <Outlet/>
     </AppMain>
     <AppFooter/>
     </Box>
    )
}

export default MainLayout;