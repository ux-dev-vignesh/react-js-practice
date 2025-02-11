import React from "react";
import { useRef, useEffect } from "react";

const UsingRef = () => {
    const countRef = useRef(0);
    const spanRef = useRef(null);

    const increment = () => {
        countRef.current++;
        spanRef.current.innerText = countRef.current;
    }

    useEffect(() => {
        console.log("rendered from useref hook");
    })

    return (
        <div>
            <button onClick={increment}>use ref <span ref={spanRef}></span></button>
        </div >
    );
}

export default UsingRef;