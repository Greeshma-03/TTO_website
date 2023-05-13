import React from "react"
import "../styles/Patent.css"
import bg from "../assets/cc.jpg"
import Navbar from "../components/Navbar"
import Navbar2 from "../components/Navbar2"
import cvit from "../assets/cvit.png"
import ButtonRow from "../components/Buttonrow"
import { Maximize } from "@material-ui/icons"
import { Grid, Paper, Button, Divider } from '@material-ui/core';
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Select, MenuItem } from '@material-ui/core';
import DatePicker from "react-datepicker";

import { Typography, Checkbox, FormControlLabel, Box, TextField, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaCalendarAlt } from "react-icons/fa";
import 'react-calendar/dist/Calendar.css';
import { Search } from '@material-ui/icons';

import ResponsiveImage from "../components/ResponsiveImage"

import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import upload from '../Img/upload.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        backgroundColor: '#e7f2fb',
        padding: theme.spacing(2),
        minHeight: '100vh',
        padding: ' 0 2em'
    },
    filterGroup: {
        marginTop: theme.spacing(2),
    },


    pagination: {
        display: 'flex',
        listStyleType: 'none',
        margin: 0,
        padding: 0,
    },

    heading: {
        fontFamily: 'Prompt',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '22px',
        lineHeight: '45px',
        letterSpacing: '-0.04em',
        color: '#2C2C2C        '
    },

    eachitem: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 500,
        color: '#4591C5',
        lineHeight: '5px',

    },



    tableitem: {
        fontFamily: 'Hahmlet',
        fontStyle: 'normal',
        fontWeight: 500,
        color: '#2C2C2C',
        lineHeight: '2em',
        fontSize: '19px',

    }
    ,
    checkbox: {
        color: '#4591C5  ', // set the color to blue
        '&$checked': {
            color: '#0E66AC          ', // set the color of the checked state to blue
        },
        // border: '1px solid #0E66AC',

        borderRadius: '4px'
    },

    checked: {},
}));


const SearchBar = () => {
    return (
        <Paper
            elevation={0}
            style={{
                backgroundColor: '#EEEEEE',
                display: 'flex',
                alignItems: 'center',
                padding: '0',
                borderRadius: '0.86vw',
                maxHeight: '4.5vw'
            }}
        >
            <IconButton
                type="submit"
                aria-label="search"
                style={{
                    padding: 10,
                }}
            >
                <SearchIcon style={{ fontSize: "2vw" }} />
            </IconButton>
            <InputBase
                placeholder="Search Patents"
                style={{
                    fontSize: "1.3vw",
                    flex: 1,
                }}
            />

        </Paper>
    );
};



function Component1() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handlePClick = (index) => {
        setActiveIndex(index);
    }
    const classes = useStyles();


    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [showCalendar1, setShowCalendar1] = useState(false);
    const toggleCalendar1 = () => setShowCalendar1(!showCalendar1);
    const [endDate, setEndDate] = useState(new Date());
    const [showCalendar2, setShowCalendar2] = useState(false);
    const toggleCalendar2 = () => setShowCalendar2(!showCalendar2);
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

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id));
    };
    const handleShowMoreFilters = () => {
        setShowMoreFilters(true);
    };
    const handleShowLessFilters = () => {
        setShowMoreFilters(false);
    };

    const handleClearAll = () => {
        setShowMoreFilters(false)

    }


    return (
        <>
            <div style={{ padding: "0 3vw" }}>
                <SearchBar />
                <Grid container spacing={1} style={{ paddingTop: "1vw" }}>
                    <Grid item xs={6} sm={6} md={6}>
                        <p style={{ color: "#A0A0A0", fontSize: "1.3vw", padding: "0.35vw 0" }}>Reset Filters</p>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6}>
                        <Paper style={{ backgroundColor: "#09A5AF", padding: "0.35vw 0", borderRadius: "0.86vw" }}>
                            <span onClick={() => window.location.href = '#'} style={{ fontSize: "1.3vw", color: "#FEFEFE" }}>&nbsp;<ResponsiveImage src={upload} maxHeight={40} maxWidth={40} />&nbsp; Upload</span>
                        </Paper>
                    </Grid>
                </Grid>
                <p style={{ color: '#2C2C2C', fontSize: "1.73vw", fontWeight: '400', paddingTop: "2vw" }}>
                    Patent Status
                    <Grid item xs={12} style={{ borderBottom: '0.19vw solid #535353', margin: '0.21vw 0' }}></Grid>

                </p>
                <div style={{ fontSize: "1.28vw", fontWeight: 300 }}>
                    <p style={{ color: activeIndex === 0 ? "#1369CB" : "#2C2C2C", }} onClick={() => handlePClick(0)}>Filed</p>
                    <p style={{ color: activeIndex === 1 ? "#1369CB" : "#2C2C2C", }} onClick={() => handlePClick(1)}>Published</p>
                    <p style={{ color: activeIndex === 2 ? "#1369CB" : "#2C2C2C" }} onClick={() => handlePClick(2)}>Granted</p>
                </div>

            </div>

            <div style={{ padding: "2vw 3vw" }}>
                <p style={{ color: '#2C2C2C', fontSize: "1.73vw", fontWeight: '400' }}>
                    Research Lab
                    <Grid item xs={12} style={{ borderBottom: '0.19vw solid #535353', margin: '0.21vw 0' }}></Grid>

                </p>
                <div style={{ fontSize: "1.28vw", fontWeight: '300' }}>
                    <p style={{ color: activeIndex === 0 ? "#1369CB" : "#2C2C2C", }} onClick={() => handlePClick(0)}>Machine Learning Lab</p>
                    <p style={{ color: activeIndex === 1 ? "#1369CB" : "#2C2C2C", }} onClick={() => handlePClick(1)}>Robotics Research Centre</p>
                    <p style={{ color: activeIndex === 2 ? "#1369CB" : "#2C2C2C", }} onClick={() => handlePClick(2)}>Cognitive science Lab</p>
                    <p style={{ color: activeIndex === 3 ? "#1369CB" : "#2C2C2C", }} onClick={() => handlePClick(3)}>Computer Systems Group</p>
                    <p style={{ color: activeIndex === 1 ? "#1369CB" : "#2C2C2C", }} onClick={() => handlePClick(1)}>Robotics Research Centre</p>
                    <p style={{ color: activeIndex === 2 ? "#1369CB" : "#2C2C2C", }} onClick={() => handlePClick(2)}>Cognitive science Lab</p>
                </div>

            </div>


            <div style={{ padding: "0 3vw" }}>
                <p style={{ color: '#2C2C2C', fontSize: "1.73vw", fontWeight: '400' }}>
                    Search By Date
                    <Grid item xs={12} style={{ borderBottom: '0.19vw solid #535353', margin: '0.21vw 0' }}></Grid>

                </p>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={12} md={12} style={{padding:"1vw 0 5vw 0"}}>
                        <Typography style={{ color: '#2C2C2C', fontSize: "0.97vw", fontWeight: '400',fontFamily:"Prompt" }}>Start Date</Typography>
                        <div style={{ position: "absolute" }}>
                            <TextField
                                style={{
                                    background: "#FFFFFF",
                                    boxShadow: '0px 4px 4px rgba(194, 194, 194, 0.25), 4px 4px 4px rgba(163, 163, 163, 0.25)'
                                }}
                                variant="outlined"
                                size="small"
                                value={startDate.toLocaleDateString()}
                                InputProps={{
                                    endAdornment: (
                                        <FaCalendarAlt
                                            className={classes.icon}
                                            onClick={toggleCalendar1}
                                            style={{ cursor: "pointer", color: '#626262' }}
                                        />
                                    ),
                                }}
                            />
                            {showCalendar1 && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-10vw', // Adjust the positioning as needed
                                        right: '-15vw',
                                        zIndex: '9999',
                                    }}
                                >
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        dateFormat="yyyy/MM/dd"
                                        onClickOutside={() => setShowCalendar1(false)}
                                        inline
                                    />
                                </div>
                            )}
                        </div>

                    </Grid>


                    <Grid item xs={12} sm={12} md={12}>
                    <Typography style={{ color: '#2C2C2C', fontSize: "0.97vw", fontWeight: '400',fontFamily:"Prompt" }}>End Date</Typography>
                    <div style={{ position: "absolute" }}>
                        <TextField
                            style={{
                                background: "#FFFFFF",
                                boxShadow: '0px 4px 4px rgba(194, 194, 194, 0.25), 4px 4px 4px rgba(163, 163, 163, 0.25)'
                            }}
                            variant="outlined"
                            size="small"
                            value={endDate.toLocaleDateString()}
                            InputProps={{
                                endAdornment: (
                                    <FaCalendarAlt
                                        className={classes.icon}
                                        onClick={toggleCalendar2}
                                        style={{ cursor: "pointer", color: '#626262' }}
                                    />
                                ),
                            }}
                        />
                        {showCalendar2 && (
                            <div
                            // style={{
                            //     position: 'absolute',
                            //     top: '-10vw',
                            //     right: '-15vw',
                            //     zIndex: '9999',
                            //     background: 'radial-gradient(105.48% 170.35% at 0% 0%, rgba(9, 165, 175, 0.2) 0%, rgba(85, 219, 227, 0.2) 77.08%, rgba(194, 251, 255, 0.2) 100%)',
                            //     boxShadow: '2px 16px 19px rgba(0, 0, 0, 0.09)',
                            //     backdropFilter: 'blur(40px)',
                            //     borderRadius: '8px',
                            //   }}
                            >
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat="yyyy/MM/dd"
                                    onClickOutside={() => setShowCalendar2(false)}
                                    inline
                                    // style={{
                                    //     background: 'radial-gradient(105.48% 170.35% at 0% 0%, rgba(9, 165, 175, 0.2) 0%, rgba(85, 219, 227, 0.2) 77.08%, rgba(194, 251, 255, 0.2) 100%)',
                                    //     boxShadow: '2px 16px 19px rgba(0, 0, 0, 0.09)',
                                    //     backdropFilter: 'blur(40px)',
                                    //     borderRadius: '8px',
                                    //   }}
                                
                                />
                            </div>
                        )}
                    </div>

                </Grid>


            </Grid>

        </div>
        </>


    )
}


import { FiChevronDown } from 'react-icons/fi';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // Handle the click event for each option
        console.log('Clicked option:', option);
    };

    return (
        <div className="dropdown-menu">
            <div className="dropdown-toggle" onClick={handleToggle}>
                Sort By <FiChevronDown />
            </div>
            {isOpen && (
                <div className="dropdown-options">
                    <div className="option" onClick={() => handleOptionClick('oldest')}>
                        Oldest
                    </div>
                    <div className="option" onClick={() => handleOptionClick('newest')}>
                        Newest
                    </div>
                    <div className="option" onClick={() => handleOptionClick('current')}>
                        Current
                    </div>
                </div>
            )}
        </div>
    );
};




function Component2() {
    return (
        <div className="headerContainer" style={{ textAlign: "left" }}>
            <div >
                <Grid item xs={10} sm={10} md={10} style={{  paddingBottom: "6vw" }}>
                    <p style={{ fontWeight: "300", fontSize: "1.5vw" }}> Patent | <span style={{ color: "#1191A3" }}> Machine Learning Lab </span>| <span style={{ color: "#08C089" }}> US Patent Granted </span> </p>
                    <p style={{ fontWeight: "500", color: "#2C2C2C", fontSize: "1.83vw" }}>System and Method For Capturing Horizontal Disparity Stereo Panorama</p>
                    <p style={{ fontWeight: "300", color: "#525252", fontSize: "1.62vw" }}>Application/Patent No - US1054249B2, Application US15/627,224</p>
                    <p style={{ fontWeight: "400", color: "#A7A6A6" }}>Prof. Anoop Namboodiri, Mr.Rajat Agarwal, Amrisha Vohra</p>
                </Grid>

                <Grid item xs={10} sm={10} md={10} style={{  paddingBottom: "6vw" }}>
                    <p style={{ fontWeight: "300", fontSize: "1.5vw" }}> Patent | <span style={{ color: "#1191A3" }}> Machine Learning Lab </span>| <span style={{ color: "#08C089" }}> US Patent Granted </span> </p>
                    <p style={{ fontWeight: "500", color: "#2C2C2C", fontSize: "1.83vw" }}>System and Method For Capturing Horizontal Disparity Stereo Panorama</p>
                    <p style={{ fontWeight: "300", color: "#525252", fontSize: "1.62vw" }}>Application/Patent No - US1054249B2, Application US15/627,224</p>
                    <p style={{ fontWeight: "400", color: "#A7A6A6" }}>Prof. Anoop Namboodiri, Mr.Rajat Agarwal, Amrisha Vohra</p>
                </Grid>

                <Grid item xs={10} sm={10} md={10} style={{  paddingBottom: "6vw" }}>
                    <p style={{ fontWeight: "300", fontSize: "1.5vw" }}> Patent | <span style={{ color: "#1191A3" }}> Machine Learning Lab </span>| <span style={{ color: "#08C089" }}> US Patent Granted </span> </p>
                    <p style={{ fontWeight: "500", color: "#2C2C2C", fontSize: "1.83vw" }}>System and Method For Capturing Horizontal Disparity Stereo Panorama</p>
                    <p style={{ fontWeight: "300", color: "#525252", fontSize: "1.62vw" }}>Application/Patent No - US1054249B2, Application US15/627,224</p>
                    <p style={{ fontWeight: "400", color: "#A7A6A6" }}>Prof. Anoop Namboodiri, Mr.Rajat Agarwal, Amrisha Vohra</p>
                </Grid>


            </div>
        </div>

    )
}

function Patent() {

    const [sortOption, setSortOption] = useState('newest');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        setIsDropdownOpen(false);
    };

    const handleSortClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <div style={{ paddingTop: "7vw" }}>

                <Container style={{ maxWidth: "95%", fontFamily: 'Prompt', paddingTop: "2em", margin: "0 0 0 2vw" }}>

                    <Grid container spacing={0}>
                        <Grid item xs={6} sm={6} md={6}>
                            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                                <p style={{ color: "#2C2C2C", fontSize: "2.87vw", fontWeight: 600, margin: 0 }}>All Patents</p>
                            </div>
                        </Grid>
                        <Grid item xs={5} sm={5} md={5}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                                <p style={{ fontSize: "1.3vw", margin: 0 }}>Sort By:  Newest</p><DropdownMenu />


                            </div>
                        </Grid>


                        <Grid item xs={11} style={{ borderBottom: '0.27vw solid #535353' }}></Grid>

                    </Grid>



                </Container>


                <div style={{ marginTop: "2rem", display: "flex" }}>


                    <div
                        style={{
                            paddingTop: "1em",
                            width: '24vw',
                            marginRight: '5vw',
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
                        fontFamily: 'Prompt',
                        paddingBottom: "10vw"
                    }}>
                        <Component2 />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Patent;