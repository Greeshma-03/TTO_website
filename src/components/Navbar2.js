import React , {useState} from 'react'
import Logo from "../assets/iiit.jpeg"
import { Link } from "react-router-dom"
import "../styles/Navbar2.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar2() {

    const [openLinks,setOpenLinks]= useState(false)

    const toggleNavbar =()=>{
        setOpenLinks(!openLinks);
        
    };

    return (

        <div className="navbar2">
            <div className="leftSide">
                <div className='hiddenLinks' id={openLinks ? "open" : "close"}>
                    <Link to="/">Home</Link>
                    <Link to="/tech">Technology Catalogue</Link>
                    <Link to="/patent">Patent</Link>
                    <Link to="/publications">Publications</Link>


                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/tech">Technology Catalogue</Link>
                <Link to="/patent">Patent</Link>
                <Link to="/publications">Publications</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>


            </div>
        </div>



    );
}
export default Navbar2;