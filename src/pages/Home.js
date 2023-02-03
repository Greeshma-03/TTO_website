import React from "react"
import "../styles/Home.css"
import bg from "../assets/cc.jpg"
import Navbar from "../components/Navbar"
import Navbar2 from "../components/Navbar2"

function Home() {
    return (
        <>


            <div className="headerContainer" style={{ backgroundColor: '#D4F1F4' }}>
                <br />
                <h1 style={{ padding: 1, fontSize: 16 }}>Centre for visual Information Technology</h1>
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>Center for Visual Information Technology (CVIT) focuses on basic and advanced research in image processing, computer vision, computer graphics and machine learning. This center deals with the generation, processing, and understanding of primarily visual data as well as with the techniques and tools required doing so efficiently. The activity of this center overlaps the traditional areas of Computer Vision, Image Processing, Computer Graphics, Pattern Recognition and Machine Learning. CVIT works on both theoretical as well as practical aspects of visual information processing. Center aims to keep the right balance between the cutting edge academic research and impactful applied research.</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 19, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>360 Degree Stereo Video Camera</div>
                <br />
                {/* <img src="../assets/cvit.png" alt="Paris" style="width:150px"/> */}
                <div style={{ textAlign: "left", paddingLeft: 100 }}><img src="https://tto.iiit.ac.in/TTO_website_images/CVIT/360-Stereo-Video-Camera.png" alt="React Image" /></div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>Research Area</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>Computer Vision</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>Keyword</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>Panaromic View, Single Camera, Virtual and augmented Reality</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>Technology Description</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>This unique technology can use a Single camera to capture panoramic videos, presents a practical solution for generating 360 degree stereo panoramic videos using a single camera. Current approaches either use a moving camera that captures multiple images of a scene, which are then stitched together to form the final panorama, or use multiple cameras that are synchronized. A moving camera limits the solution to static scenes, while multi-camera solutions require dedicated calibrated setups. This technology enhances the existing solutions significantly: It solves the problem using a single camera, thus minimizing the calibration problem and providing us the ability to convert any digital camera into a panoramic stereo capture device. It captures all the light rays required for stereo panoramas in a single frame using a compact custom designed mirror, thus making the design practical to manufacture and easier to use.</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>Type of Work</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>System design, though NOT a software</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>Current State of work</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>Technology designed and implemented, Technology thoroughly tested Startup (DreamVu) is currently working on taking this technology to the market</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>Potential Applications</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>1. Low cost panoramic images</div>
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>2. Virtual Telepresence</div>
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>3. Robot / Drone Navigation</div>
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>4. Event Telecast</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>Related Publications</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}> Panoramic Stereo Videos With a Single Camera, IEEE Conference on Computer Vision and Pattern Recognition, 2016</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100, fontWeight: 'bold' }}>Faculty Name</div>
                <br />
                <div style={{ textAlign: "justify", fontSize: 13, paddingLeft: 100, paddingRight: 100 }}>Anoop M Namboodiri</div>
                <br />

            </div>



        </>



    );
}
export default Home;