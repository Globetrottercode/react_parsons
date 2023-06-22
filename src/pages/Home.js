import ChatLogo from "../images/chat-svgrepo-com.svg";
import Logo from "../images/Logo.png";
import "../index.css";
import "../App.css";
function Home() {
  return (
    <>
      <div
        className="h-screen flex-col"
        style={{ display: "flex", backgroundColor: "lightblue" }}
      >
        <div
          style={{ display: "flex", textAlign: "center" }}
          className="bg-sky-500 basis-3/4 flex-col"
        >
          <div style={{ display: "flex" }} className="h-1/6 items-center">
            <img
              style={{ height: "5vh" }}
              src={Logo}
              alt="logo"
              className="ml-16"
            ></img>
          </div>
          <div className="hello"></div>
          <img
            style={{ height: "30vh", margin: "5% 5%" }}
            src={ChatLogo}
            alt="chatLogo"
          />
          <p className=" text-slate-600">
            Chat from anywhere, anytime, at your ease.
          </p>
        </div>
        <div
          style={{ display: "flex" }}
          className="bg-sky-200 basis-1/4 items-center justify-center"
        >
          <div
            className=" items-center justify-center"
            style={{
              width: "40%",
              height: "30%",
              display: "flex",
            }}
          >
            <input
              placeholder="First Name"
              style={{
                height: "85%",
                width: "50%",
                borderTopLeftRadius: "1vh",
                borderBottomLeftRadius: "1vh",
                textAlign: "center",
              }}
            />
            <div
              style={{
                display: "flex",
                // backgroundColor: "red",
                width: "20%",
                height: "85%",
                borderTopRightRadius: "1vh",
                borderBottomRightRadius: "1vh",
                color: "white",
              }}
              className="items-center justify-center gBtn"
            >
              <p>Google</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
