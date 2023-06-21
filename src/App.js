import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

import sendRequest from "./requests/sendRequest";

function App() {
  let [array, setArray] = useState(["Add Text in Input", "Click Add Button"]);
  let [input, setInput] = useState("");
  async function handleClick() {
    let res = await sendRequest(input);
    setArray([...array, res.message]);
    setInput("");
    console.log(array);
  }
  return (
    <div className="App">
      <div style={{ border: "4px solid orange", margin: "5% 30%" }}>
        {array.map((ele) => {
          console.log("hello", ele);
          return <p>{ele}</p>;
        })}
      </div>
      {/* <form> */}
      <input
        style={{
          marginBottom: "4%",
          width: "30%",
          height: "5vh",
          textAlign: "center",
        }}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <br />
      <button onClick={handleClick}>Add</button>
      {/* </form> */}
    </div>
  );
}

export default App;
