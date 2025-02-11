import React from "react";
import { useState, useEffect } from "react";

const UsingState = () => {
    let [number, setNumber] = useState(0);
    useEffect(() => {
        console.log("Use State Component Rerender!");

    });

    return (
        <div>
            <button onClick={() => { setNumber((n) => n + 1) }}>use state <span>{number}</span></button>
        </div>
    )
}

export default UsingState;