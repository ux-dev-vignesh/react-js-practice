import React from "react"
import {Routes,Route,Navigate} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import About from "../pages/About"

const AppRouter=()=>{
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            </Route>
        </Routes>
    )
}

export default AppRouter;