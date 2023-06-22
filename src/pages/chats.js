import LOGO from "../images/Logo.png";
import chatSvg from "../images/chat-svgrepo-com.svg";
import lockSvg from "../images/lock.svg";
import { useState } from "react";

let array = [
  "Sam",
  "James",
  "Peter",
  "Alice",
  "Natasa",
  "Victor",
  "Josh",
  "Havaz",
  "Neville",
  "Gavi",
  "Pique",
  "Mike",
  "Harvey",
  "John",
  "Tom",
  "Trevor",
  "Jenny",
  "Alicia",
  "Novoc",
  "Perisic",
];

function Chat() {
  let [selectedUser, setSelectedUser] = useState("");
  //   sessionStorage.setItem("selectedUser", "value");
  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          className="basis-1/3 bg-cyan-200 flex-col"
          style={{ height: "100vh", display: "flex" }}
        >
          <div
            style={{ display: "flex", height: "10vh" }}
            className="bg-cyan-700 items-center"
          >
            <img
              style={{ height: "5vh" }}
              src={LOGO}
              alt="logo"
              className="ml-4"
            ></img>
            <p className="ml-4  text-xl font-mono text-white ">Online</p>
          </div>

          <div
            style={{
              height: "90vh",
              backgroundColor: "green",
              overflowY: "scroll",
            }}
          >
            {array.map((el) => {
              return (
                <>
                  <div
                    onClick={() => {
                      setSelectedUser(el);
                    }}
                    style={{
                      height: "10vh",
                      backgroundColor: "white",
                      display: "flex",
                    }}
                    className=" items-center hover:text-orange-500"
                  >
                    <p className="ml-8 font-mono">{el}</p>
                  </div>
                  <hr />
                </>
              );
            })}
          </div>
        </div>
        {selectedUser !== "" ? (
          <>
            {" "}
            <div
              style={{
                height: "100vh",
                display: "flex",
              }}
              className="basis-2/3 bg-cyan-100 flex-col"
            >
              <div
                style={{
                  height: "10vh",
                  borderLeft: "1px solid gray",
                  display: "flex",
                }}
                className=" bg-cyan-700 items-center"
              >
                <p className="ml-8 font-mono">{selectedUser}</p>
              </div>
              <div style={{ height: "80vh" }} className=" bg-slate-200"></div>
              <div style={{ height: "10vh" }} className=" bg-cyan-700"></div>
            </div>{" "}
          </>
        ) : (
          <>
            {" "}
            <div
              style={{
                height: "100vh",
                display: "flex",
              }}
              className="basis-2/3  bg-cyan-400 justify-center items-center flex-col"
            >
              <img className="h-3/6" src={chatSvg} alt="chatSvg"></img>
              <p className="mt-8 text-slate-500">
                <img
                  src={lockSvg}
                  style={{ display: "inline-block", height: "2vh" }}
                  alt="lock"
                />{" "}
                Connect with people globally and safely
              </p>
            </div>{" "}
          </>
        )}
      </div>
    </>
  );
}

export default Chat;

{
  /* <div className="basis-2/28 bg-slate-200"></div>
<div className="basis-24/28  bg-slate-500"></div>
<div className="basis-2/28  bg-slate-800"></div> */
}
