import React from "react";
import "./Group3.css";
import background from "../../assets/images/image-web-3-mobile.jpg";

export default function Group3() {
  return (
    <div id="group3-container">
      <img id="backImg" src={background}></img>
      <h2>The Bright Future of Web 3.0?</h2>
      <p>We dive into the next evolution of the web that claims to put the power of the platforms 
       back into the hands of the people. But is it really fulfilling its promise?
      </p>
      <button>READ MORE</button>
    </div>
  );
}
