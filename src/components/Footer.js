import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css"

function Footer() {

    return (

        <div className="footer">
            <div className="socialMedia">
            <h1 style={{color:" white"}} className="text-center" >Contact Us</h1>

                <InstagramIcon /><TwitterIcon /><FacebookIcon /><LinkedInIcon />
            </div>
            <p1>hello nithin</p1>

        </div>
    );
}

export default Footer;
