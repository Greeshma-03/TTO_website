import React from 'react';
import "../styles/Buttonrow.css"
import { useState, useEffect } from "react";

function ButtonRow() {
  const [activeButton, setActiveButton] = useState(0);

  const buttonStyle = (buttonIndex) => ({
    flexGrow: buttons[buttonIndex].length / 10, // Adjust the factor as needed
  });

  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex);
  };

  return (
    <div style={{fontFamily:'Prompt'}}>
      <Userow onButtonClick={handleButtonClick} activeButton={activeButton} />
      {activeButton === 0 && (
        <div style={{ marginTop: "2em" }}>
          <p style={{ fontSize: "1.1vw", fontWeight: "500", color: "#2C2C2C" }}>Summary</p>
          <p style={{fontSize:"1.05vw",fontWeight:300}}>This unique technology can use a Single camera to capture panoramic videos, presents a practical solution for generating 360 degree stereo panoramic videos using a single camera. Current approaches either use a moving camera that captures multiple images of a scene, which are then stitched together to form the final panorama, or use multiple cameras that are synchronized. A moving camera limits the solution to static scenes, while multi-camera solutions require dedicated calibrated setups. This technology enhances the existing solutions significantly: It solves the problem using a single camera, thus minimizing the calibration problem and providing us the ability to convert any digital camera into a panoramic stereo capture device. It captures all the light rays required for stereo panoramas in a single frame using a compact custom designed mirror, thus making the design practical to manufacture and easier to use.
          </p>
        </div>
      )}
      {activeButton === 1 && (
        <div style={{ marginTop: "2em" }}>
          <p style={{ fontSize: "1.1vw", fontWeight: "500", color: "#2C2C2C" }}>Type of Work</p>
          <p style={{fontSize:"1.05vw",fontWeight:300}} >Presents a practical solution for generating 360 degree stereo panoramic videos using a single camera. Current approaches either use a moving camera that captures multiple images of a scene, which are then stitched together to form the final panorama, or use multiple cameras that are synchronized. A moving camera limits the solution to static scenes, while multi-camera solutions require dedicated calibrated setups. This technology enhances the existing solutions significantly: It solves the problem using a single camera, thus minimizing the calibration problem and providing us the ability to convert any digital camera into a panoramic stereo capture device. It captures all the light rays required for stereo panoramas in a single frame using a compact custom designed mirror, thus making the design practical to manufacture and easier to use.
          </p>
        </div>
      )}
      {activeButton === 2 && (
        <div style={{ marginTop: "2em" }}>
          <p style={{ fontSize: "1.1vw", fontWeight: "500", color: "#2C2C2C" }}>State of Work</p>
          <p style={{fontSize:"1.05vw",fontWeight:300}} >This unique technology can use a Single camera to capture panoramic videos, presents a practical solution for generating 360 degree stereo panoramic videos using a single camera. Current approaches either use a moving camera that captures multiple images of a scene, which are then stitched together to form the final panorama, or use multiple cameras that are synchronized. A moving camera limits the solution to static scenes, while multi-camera solutions require dedicated calibrated setups. This technology enhances the existing solutions significantly: It solves the problem using a single camera, thus minimizing the calibration problem and providing us the ability to convert any digital camera into a panoramic stereo capture device. It captures all the light rays required for stereo panoramas in a single frame using a compact custom designed mirror, thus making the design practical to manufacture and easier to use.
        </p>
        </div>
      )}
      {activeButton === 3 && (
        <div style={{ marginTop: "2em" }}>
          <p style={{ fontSize: "1.1vw", fontWeight: "500", color: "#2C2C2C" }}>Potential Applications</p>
          <p style={{fontSize:"1.05vw",fontWeight:300}} >Content this unique technology can use a Single camera to capture panoramic videos, presents a practical solution for generating 360 degree stereo panoramic videos using a single camera. Current approaches either use a moving camera that captures multiple images of a scene, which are then stitched together to form the final panorama, or use multiple cameras that are synchronized. A moving camera limits the solution to static scenes, while multi-camera solutions require dedicated calibrated setups. This technology enhances the existing solutions significantly: It solves the problem using a single camera, thus minimizing the calibration problem and providing us the ability to convert any digital camera into a panoramic stereo capture device. It captures all the light rays required for stereo panoramas in a single frame using a compact custom designed mirror, thus making the design practical to manufacture and easier to use.
          </p>
        </div>
      )}
      {activeButton === 4 && (
        <div style={{ marginTop: "2em" }}>
          <p style={{ fontSize: "1.1vw", fontWeight: "500", color: "#2C2C2C" }}>Related Publications</p>
          <p style={{fontSize:"1.05vw",fontWeight:300}} >This unique technology can use a Single camera to capture panoramic videos, presents a practical solution for generating 360 degree stereo panoramic videos using a single camera. Current approaches either use a moving camera that captures multiple images of a scene, which are then stitched together to form the final panorama, or use multiple cameras that are synchronized. A moving camera limits the solution to static scenes, while multi-camera solutions require dedicated calibrated setups. This technology enhances the existing solutions significantly: It solves the problem using a single camera, thus minimizing the calibration problem and providing us the ability to convert any digital camera into a panoramic stereo capture device. It captures all the light rays required for stereo panoramas in a single frame using a compact custom designed mirror, thus making the design practical to manufacture and easier to use.
          </p>
        </div>
      )}
      {activeButton === 5 && (
        <div style={{ marginTop: "2em" }}>
          <p style={{ fontSize: "1.1vw", fontWeight: "500", color: "#2C2C2C" }}>Demo Link</p>
          <p style={{fontSize:"1.05vw",fontWeight:300}} >This unique technology can use a Single a practical solution for generating 360 degree stereo panoramic videos using a single camera. Current approaches either use a moving camera that captures multiple images of a scene, which are then stitched together to form the final panorama, or use multiple cameras that are synchronized. A moving camera limits the solution to static scenes, while multi-camera solutions require dedicated calibrated setups. This technology enhances the existing solutions significantly: It solves the problem using a single camera, thus minimizing the calibration problem and providing us the ability to convert any digital camera into a panoramic stereo capture device. It captures all the light rays required for stereo panoramas in a single frame using a compact custom designed mirror, thus making the design practical to manufacture and easier to use.
          </p>
        </div>
      )}
    </div>
  );
}

const Userow = (props) => {
  const buttons = ["Overview", "Type of work", "State of work", "Potential Applications", "Related Publications", "Demo Link"];

  return (
    <div style={{ display: "flex", alignItems: "left" }}>
    {buttons.map((button,index) => (
      <div
        key={index}
        style={{
          padding: "0.1em",
          textDecoration: props.activeButton === index ? "underline" : "none",
          cursor: "pointer",
          marginLeft: 0,
          marginRight: "auto",
          whiteSpace: "nowrap",
          fontSize:"1.1vw",
          font:"Montserrat",
          color: props.activeButton===index? "#1A1A1A":"#515151",
          fontWeight: props.activeButton===index? "500":"400"

        }}
        onClick={() => props.onButtonClick(index)}

      >
        {button}
      </div>
    ))}
  </div>
  );
};


export default ButtonRow;
