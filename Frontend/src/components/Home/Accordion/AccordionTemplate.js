import React from "react";
// import { Helmet } from "react-helmet";
import "./style.css";
import { caller } from "./script";
import pic1 from "./images/1_unsplash.jpg";
import pic2 from "./images/2.jpg";
import pic3 from "./images/3.jpg";
import pic4 from "./images/4.jpg";

const pic1Style = {
  background: `url(${pic1})`,
  backgroundSize: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "80vh",
  borderRadius: "50px",
  color: "azure",
  cursor: "pointer",
  flex: "0.5",
  margin: "10px",
  position: "relative",
  transition: " flex 0.7s ease-in",
};
const pic2Style = {
  background: `url(${pic2})`,
  backgroundSize: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "80vh",
  borderRadius: "50px",
  color: "azure",
  cursor: "pointer",
  flex: "0.5",
  margin: "10px",
  position: "relative",
  transition: " flex 0.7s ease-in",
};
const pic3Style = {
  background: `url(${pic3})`,
  backgroundSize: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "80vh",
  borderRadius: "50px",
  color: "azure",
  cursor: "pointer",
  flex: "0.5",
  margin: "10px",
  position: "relative",
  transition: " flex 0.7s ease-in",
};
const pic4Style = {
  background: `url(${pic4})`,
  backgroundSize: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "80vh",
  borderRadius: "50px",
  color: "azure",
  cursor: "pointer",
  flex: "0.5",
  margin: "10px",
  position: "relative",
  transition: " flex 0.7s ease-in",
};
const bodyCSS = {
  fontFamily: "Roboto sansSerif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  overflow: "hidden",
  margin: "0",
};
const h3CSS = {
  fontSize: "24px",
  position: "absolute",
  bottom: "20px",
  left: "20px",
  margin: "0",
  opacity: "0",
};
function AccordionTemplate() {
  caller();

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="style.css" />
        <title>MY Project</title>
      </head>
      <body style={bodyCSS}>
        <div>
          <div
            className="container"
            style={{ display: "flex", width: "90vw" }}
            onClick={caller}
          >
            <div className="panel active" style={pic1Style}>
              <h3 style={h3CSS}>Explore the bikes</h3>
            </div>
            <div className="panel" style={pic2Style}>
              <h3 style={h3CSS}>Explore the dreams</h3>
            </div>
            <div className="panel" style={pic3Style}>
              <h3 style={h3CSS}>Explore the world</h3>
            </div>
            <div className="panel" style={pic4Style}>
              <h3 style={h3CSS}>Explore</h3>
            </div>
          </div>

          {/* <script src={scriptJS} type="text/javascript"></script> */}
        </div>
      </body>
    </html>
  );
}

export default AccordionTemplate;
