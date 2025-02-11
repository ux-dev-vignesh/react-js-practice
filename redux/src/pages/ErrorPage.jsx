import {useEffect} from "react"
import {useNavigate} from "react-router-dom"
import {Button} from "@mui/material"

const ErrorPage=()=>{

    const navigate=useNavigate();

    useEffect(()=>{
        const timer=setTimeout(()=>{
            navigate('/home');
        },10000);

        return()=>clearTimeout(timer);
    },[navigate])

    return(
        <>
        <p>404</p>
        <p>oops! page not found</p>
        
            <Button onClick={() => { navigate("/home") }}>Go Back Home</Button>
        </>
    )
}

export default ErrorPage