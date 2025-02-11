import React from "react"
import {Routes,Route,Navigate} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import ErrorPage from "../pages/ErrorPage"

const AppRouter=()=>{
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;