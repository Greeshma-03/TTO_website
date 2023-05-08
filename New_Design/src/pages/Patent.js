import React from "react"
import "../styles/Patent.css"
import bg from "../assets/cc.jpg"
import Navbar from "../components/Navbar"
import Navbar2 from "../components/Navbar2"
import cvit from "../assets/cvit.png"
import ButtonRow from "../components/Buttonrow"
import { Maximize } from "@material-ui/icons"
import { Grid, Paper, Button, Divider } from '@material-ui/core';


function Component1() {
    return (
        <div style={{ padding: "0 3vw" }}>
            <p style={{ color: '#2C2C2C', fontSize: "1.5vw", fontWeight: '400' }}>
                Center for Visual Information Technology
                <Grid item xs={12} style={{ borderBottom: '0.19vw solid #535353', margin: '0.21vw 0' }}></Grid>

            </p>
            <div style={{ fontSize: "1.07vw", fontWeight: 300, }}>
                <p style={{ color: "#2C2C2C", marginBottom: "1em" }}>360 Degree Stereo Video Camera</p>
                <p style={{ color: "#2C2C2C", marginBottom: "1em" }}>OCR for Indian languages</p>
                <p style={{ color: "#2C2C2C", marginBottom: "1em" }}>360 Degree Stereo Video Camera</p>
                <p style={{ color: "#2C2C2C", marginBottom: "1em" }}>OCR for Indian languages</p>
                <p style={{ color: "#2C2C2C", marginBottom: "1em" }}>360 Degree Stereo Video Camera</p>
                <p style={{ color: "#2C2C2C", marginBottom: "1em" }}>360 Degree Stereo Video Camera</p>
                <p style={{ color: "#2C2C2C", marginBottom: "1em" }}>360 Degree Stereo Video Camera</p>

            </div>

        </div>

    )
}


function Component2() {
    return (
        <div className="headerContainer" style={{ textAlign: "left" }}>
            <div >
                <p style={{ fontSize: "1.5vw", fontWeight: "500", color: '#2C2C2C' }}>360 Degree Stereo Video Camera</p>
                <img src={require('../Img/image 21.png')} alt="your-image" style={{ width: "63vw", height: "300px", padding: "0.6vw 0 1vw 0" }} />

                <div style={{ paddingBottom: "3vw" }}>
                    <p style={{ fontSize: "1.15vw", fontWeight: 300, color: "#1A1A1A" }}>Faculty Name: &nbsp; Anoop Namboodari</p>
                    <p style={{ fontSize: "1.15vw", fontWeight: 300, display: 'block', color: "#1A1A1A" }}>Keywords: &nbsp;   Panaromic View, &nbsp;Single Camera, &nbsp;Virtual and augmented Reality</p>
                </div>

                <div >
                    <ButtonRow />
                </div>
            </div>
        </div>

    )
}

function Patent() {


    return (
        <>
            <div>
                <div style={{ paddingTop: "9.08vw" }}>
                    <p style={{ fontFamily: "Montserrat", fontSize: "1.1vw", margin: 0, paddingLeft: "3em" }}>
                        <span style={{ color: '#9D9D9D',fontWeight:500 }}>Home / CVIT /</span>
                        <span style={{ color: '#1F669F',fontWeight:500 }}> 360 Degree Stereo Video Camera
                        </span>
                    </p>
                </div>
                <div style={{ marginTop: "2rem", display: "flex" }}>
                    <div
                        style={{
                            paddingTop: "1em",
                            width: '24vw',
                            marginRight: '0.5em',
                            fontFamily: 'Prompt',
                            height: 'auto',
                            minHeight: '84vh',
                            overflowY: 'auto',
                        }}
                    >
                        <Component1 />
                    </div>

                    <div style={{
                        width: '72vw',
                        fontFamily: 'Prompt'
                    }}>
                        <Component2 />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Patent;