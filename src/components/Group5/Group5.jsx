import React from "react";
import "./Group5.css";

export default function Group5() {
  return (
    <div id="group5-container">
      <div id="group5-kidtainer">
        <h3>New</h3>
        <div id="group5-maincontainer">
          <div className="group5-box">
            <h5>Hydrogen VS Electric Cars</h5>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
            <div className="line" />
          <div className="group5-box">
            <h5>The Downsides of AI Artistry</h5>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
            <div className="line" />
          <div className="group5-box">
            <h5>Is VC Funding Drying Up?</h5>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
