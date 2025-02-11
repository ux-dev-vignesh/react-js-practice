import {useState} from "react"
import { Box, Button } from "@mui/material"
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom"
import "@styles/AppLogin.css"

const AppLogin = () => {
    const [loading,setLoading]=useState(false);

    const navigate = useNavigate();

    const navigateFunction=()=>{
        setLoading(true);
        setTimeout(()=>{
            navigate("/home") 
        },2000)
    }

    return (
        <>
            <Box className="loginContainer">
                <Button variant="contained" sx={{ bgcolor: "black" }} onClick={navigateFunction}>
                    Start
                    {loading && <CircularProgress  color="inherit" size='20px' />} 
                </Button>
            </Box>
        </>
    )
}

export default AppLogin