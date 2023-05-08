import "../styles/Home.css"
import MyTable from "../components/Table";
import Button from "../components/Button";
import axios from "axios";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SearchBar from '../components/mysearchbar';
import { fontWeight } from "@mui/system";

import ItemList from "../components/Imagepopup";

import React, { useState, useEffect } from "react";


function Catalogue() {

    
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);


    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(users.length / usersPerPage);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data);
        };
        fetchData();
    }, []);


    return (

        <>

            <div style={{
                backgroundColor: '#EFF8FF', paddingTop: "9em",fontSize:"16px"
            }}>
                <div >
                    <div style={{ margin: "0em" }}>
                        <p style={{ fontFamily: "Montserrat", fontSize: 21, margin: "0em", paddingLeft: "3em" }}>
                            <span style={{ color: '#9D9D9D' }}>Home /</span>
                            <span style={{ color: '#1F669F' }}> &nbsp; Technology Catalogue</span>
                        </p>

                    </div>

                    <div style={{ padding: "1em 5em" }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: "2em" }}>
                            <SearchBar />
                        </div>
                        {/* <Box sx={{}}>
                            <Grid container spacing={2} style={{ fontFamily: 'Hahmlet' }}
                                justifyContent="space-between" alignItems="left" sx={{ px: '9vw' }}>
                                <Grid item xs={2.4} wrap="wrap">
                                    <Button text="Center for Visual Information Technology (CVIT)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap">
                                    <Button text="Machine Learning Lab (ML Lab)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap">
                                    <Button text="Robotics Research Center (RRC)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap">
                                    <Button text="Data Science and Analytics Centre (DSAC)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap" sx={{ marginBottom: "2em" }}>
                                    <Button text="Software Engineering Research Center (SERC)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap" >
                                    <Button text="Data Science and Analytics Centre (DSAC)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap">
                                    <Button text="Software Engineering Research Center (SERC)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap">
                                    <Button text="Robotics Research Center (RRC)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap">
                                    <Button text="Center for Security, Theory and Algorithms (CSTAR)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>
                                <Grid item xs={2.4} wrap="wrap">
                                    <Button text="Earthquake Engneering Research Centre (EERC)" onClick={() => console.log('Button 1 clicked')} />
                                </Grid>


                            </Grid>

                            <div style={{ display: "flex", justifyContent: "center", margin: "1em 0 7em 0" }}>
                                <button style={{ color: "#F56E0D" }} onClick={() => console.log('Button 1 clicked')}>See More</button>
                            </div>
                        </Box> */}


                        <ItemList />
                        <div style={{ display: "flex", justifyContent: "center", margin: "1em 0 7em 0" }}>
                            <button style={{ color: "#F56E0D" }} onClick={() => console.log('Button 1 clicked')}>See More</button>
                        </div>

                    </div>

                </div>

                <div style={{
                    backgroundColor: 'white',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding:"3em 0 1em 0"
                }}>
                    <p style={{
                        textAlign: 'center',
                        fontWeight: 500,
                        fontSize: "46px",
                    }}>Patents filed under CVIT</p>
                </div>

                {/* <div style={{ padding: "1.5em 4em 7em 3em", overflowX: "auto" }}> 
                    <MyTable users={currentUsers}/>
                </div> */}

            </div>
        </>

    );
}
export default Catalogue;