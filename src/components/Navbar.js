import React from 'react'
import Logo from "../assets/iiit.jpeg"
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

function Navbar() {
    return (

        <div className="navbar" style={{ marginBottom: "10px" }}>
            <div className='leftSide'>
                <img src={Logo} />
            </div>
            {/* <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/tech">Technology Catalogue</Link>
                <Link to="/patent">Patent</Link>
                <Link to="/publications">Publications</Link>


            </div> */}
        </div>



    );
}
export default Navbar;