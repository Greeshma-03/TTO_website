import React, { useState } from 'react'
import Logo from "../assets/iiit.jpeg"
import { Link } from "react-router-dom"
import "../styles/Navbar2.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar2() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);

    };

    return (

        <div className="navbar2" style={{ fontSize: '20px' }}>
            <div className="leftSide">
                <div className='hiddenLinks' id={openLinks ? "open" : "close"}>
                    <Link to="/" style={{ marginRight: "40px" }}>Home</Link>
                    <Link to="/tech" style={{ marginRight: "10px" }}>Technology Catalogue</Link>
                    <Link to="/patent" style={{ marginRight: "10px" }}>Patent</Link>
                    <Link to="/publications">Publications</Link>
                </div>

            </div>
            <div className='rightSide'>
                <Link to="/" style={{ marginRight: "40px" }}>Home</Link>
                <Link to="/tech" style={{ marginRight: "40px" }}>Technology Catalogue</Link>
                <Link to="/patent" style={{ marginRight: "40px" }}>Patent</Link>
                <Link to="/publications">Publications</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>


            </div>
        </div>



    );
}
export default Navbar2;