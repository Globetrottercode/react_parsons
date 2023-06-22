import ChatLogo from "../images/chat-svgrepo-com.svg";
import Logo from "../images/Logo.png";
function Home() {
  return (
    <>
      <div
        className="h-screen flex-col"
        style={{ display: "flex", backgroundColor: "lightblue" }}
      >
        <div
          style={{ display: "flex" }}
          className="bg-sky-500 basis-3/4 flex-col"
        >
          <div
            style={{ display: "flex" }}
            className="h-1/6 bg-sky-800 items-center"
          >
            <img
              style={{ height: "5vh" }}
              src={Logo}
              alt="logo"
              className="ml-4"
            ></img>
          </div>

          <img
            style={{ height: "30vh", margin: "5% 5%" }}
            src={ChatLogo}
            // className="m"
            alt="chatLogo"
          />
          {/* <img
            style={{ height: "50%" }}
            className="h-2/4"
            src={ChatLogo}
            alt="chatLogo"
          /> */}
        </div>
        <div className="bg-sky-200 basis-1/4"></div>
      </div>
    </>
  );
}

export default Home;
