import {createSlice} from "@reduxjs/toolkit"

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            console.log(state);
        },
        decrement:(state)=>{
            console.log(state);
        }
    }
})

export default counterSlice.reducer