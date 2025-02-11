import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App';

const Component4 = () => {

    const { theme } = useContext(ThemeContext);

    const textStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    }

    return (
        <h4 style={textStyle}>Component4</h4>
    )
}

export default Component4