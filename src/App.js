import logo from "./logo.svg";
import Chat from "./pages/chats";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";

import sendRequest from "./requests/sendRequest";

function Check() {
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
      <h1>CHATS</h1>
      <div style={{ border: "4px solid orange", margin: "5% 30%" }}>
        {array.map((ele) => {
          console.log("hello", ele);
          return <p>{ele}</p>;
        })}
      </div>
      {/* <form> */}
      <input
        className="border-solid border-2 border-indigo-600"
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chats" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
