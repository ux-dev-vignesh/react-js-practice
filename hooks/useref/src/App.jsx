import React from "react";
import "./App.css"
import UsingState from "./component/UsingState";
import UsingRef from "./component/UsingRef";
import FocusRef from "./component/FocusRef";

const App = () => {
  return (
    <>
      <h3 style={{ marginBottom: "15px", marginTop: "10px" }}>Useref Hook</h3>
      <div className="container">
        {/* <UsingState />
        <hr />
        <UsingRef /> */}
        <FocusRef/>
      </div>
    </>
  );
}


export default App;