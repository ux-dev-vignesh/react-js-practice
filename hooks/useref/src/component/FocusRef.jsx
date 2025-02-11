import { useRef } from "react";

const FocusRef = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "#fff";
    }

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>submit</button>
        </>
    )
}

export default FocusRef;