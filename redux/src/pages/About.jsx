import { Box, Button } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../slice/counterSlice"

const About=()=>{

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    console.log(count);

    return(
        <Box>
            <Button variant="contained" color="success" onClick={() => { dispatch(increment()) }}>+</Button>
            <Box>{count}</Box>
            <Button variant="contained" onClick={() => { dispatch(decrement()) }}>-</Button>
        </Box>
    )
}

export default About;