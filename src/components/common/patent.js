import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


import * as React from 'react';

import Navbar from "../templates/Navbar";



const Patent_page = (props) => {
    // const navigate = useNavigate();
    const [check, setcheck] = useState("0");
    const onsubmitb = (event) => {
        setcheck("1");
    };

    const onsubmitv = (event) => {
        setcheck("2");
    };


    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Navbar />
            <div className="container">
            </div>
            <div container align={"center"}>
               Hi, this is patent's page... To be added
            </div>
        </div>
    );
};

export default Patent_page;
