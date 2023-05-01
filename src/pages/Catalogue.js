import React from "react"
import "../styles/Home.css"
import bg from "../assets/cc.jpg"
import Navbar from "../components/Navbar"
import Navbar2 from "../components/Navbar2"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Grid, Button, Divider } from '@material-ui/core';

import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import t1 from '../Img/image 28.png'
import ResponsiveImage from "../components/ResponsiveImage"
import Modal from 'react-modal';


import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from "react";
import upload from '../Img/upload.png'
import axios from 'axios';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const SearchBar = () => {
    return (
        <Paper
            elevation={0}
            style={{
                backgroundColor: '#EEEEEE',
                display: 'flex',
                alignItems: 'center',
                padding: '0',
                width: '20vw',
                borderRadius: '0.86vw',
                maxHeight: '4vw'
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
                placeholder="Search Catalogue"
                style={{
                    fontSize: "1.3vw",
                    flex: 1,
                }}
            />

        </Paper>
    );
};



function Catalogue() {
    const [technologies, setTechnologies] = useState([]);

    useEffect(() => {
        // Call your API here and store the response in searchResults state
        fetch('http://localhost:4000/tech/technologies')
            .then(response => response.json())
            .then(data => setTechnologies(data));
    }, []);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [techName, settechName] = useState("");
    const [techCenter, settechCenter] = useState("");
    const [techFaculty, settechFaculty] = useState("");
    const [techOverview, settechOverview] = useState("");
    const [techDescription, settechDescription] = useState("");

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTech = {
            Name: techName,
            CenterName: techCenter,
            FacultyName: techFaculty,
            Overview: techOverview,
            Description: techDescription,

        }
        axios.post('http://localhost:4000/tech/technology', newTech)
            .then(function (res) {
                window.location = "/brief"

            });

        alert(`The name you entered was: ${techName}`)
    }

    return (
        <>
            <p style={{ fontFamily: "Montserrat", fontSize: "1.1vw", margin: 0, paddingLeft: "3vw", paddingTop: "9vw" }}>
                <span style={{ color: '#9D9D9D', fontWeight: 500 }}>Home / CVIT /</span>
                <span style={{ color: '#1F669F', fontWeight: 500 }}> Technology Catalogue
                </span>
            </p>
            <Container style={{ maxWidth: "80%", fontFamily: 'Prompt', paddingTop: "3vw" }}>

                <Grid container spacing={0} >
                    <Grid item xs={6} sm={6} md={6}>
                        <p style={{ color: "#2C2C2C", fontSize: "2.87vw", fontWeight: 600 }}>Technology Catalogue</p>
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} container justify="flex-end">
                        <Paper style={{ maxHeight: 60, marginRight: 40, backgroundColor: "#09A5AF", padding: "0.35vw 0", borderRadius: "0.86vw" }}>
                            <span onClick={openModal} style={{ fontSize: "1.3vw", color: "#FEFEFE", paddingRight: 20 }}>&nbsp;<ResponsiveImage src={upload} maxHeight={20} maxWidth={40} />&nbsp; Upload</span>
                        </Paper>

                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            style={{
                                overlay: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#F1FEFF;',
                                },
                                content: {
                                    width: '60%',
                                    height: '60%',
                                    margin: 'auto',
                                },
                                fontFamily: "Prompt"
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            </div>


                            <Grid container spacing={0} >
                                <Grid item xs={4} sm={4} md={4}>
                                    {/* <p style={{ color: "#2C2C2C", fontSize: "1.87vw", fontWeight: 600 }}>Upload Technology</p> */}
                                </Grid>
                                <Grid item xs={4} sm={4} md={4}>
                                    <p style={{ textAlign: 'center', font: "Prompt", fontSize: "1.63vw", fontColor: "#2C2C2C",fontWeight:"400" }}>Add Technology</p>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3}>
                                    {/* <Button variant="contained" style={{ font: "Roboto", fontWeight: 500, textTransform: 'none', fontSize: "1.14vw", backgroundColor: '#09A5AF', color: '#FFFFFF', borderRadius: "2.7vw", padding: "1vw 2.2vw", maxHeight: '3.2vw' }}>
                                        Upload Technology
                                    </Button> */}
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} container justify="flex-end">
                                    <button onClick={closeModal} style={{transform: 'scale(0.6)',width: '1.5vw', height: '1.5vw', borderRadius: '1vw'}}>X</button>
                                </Grid>
                            </Grid>


                            <form onSubmit={handleSubmit} style={{ fontFamily: "Prompt", fontSize: "1.13vw" }}>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', fontFamily: "Prompt" }}>
                                    <label style={{ flex: '0 0 10.8vw' }}>Centre</label>
                                    <input
                                        type="text"
                                        value={techName}
                                        onChange={(e) => settechName(e.target.value)}
                                        style={{ flex: '1', maxWidth: '300px', backgroundColor: "#F1FEFF", border: "0.058vw solid #09A5AF" }}
                                    />
                                </div>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{ flex: '0 0 200px' }}>Brief Description</label>
                                    <input
                                        type="text"
                                        value={techCenter}
                                        onChange={(e) => settechCenter(e.target.value)}
                                        style={{ flex: '1', maxWidth: '300px', backgroundColor: "#F1FEFF", border: "0.058vw solid #09A5AF" }}
                                    />
                                </div>
                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{ flex: '0 0 200px' }}>Faculty Members</label>
                                    <input
                                        type="text"
                                        value={techFaculty}
                                        onChange={(e) => settechFaculty(e.target.value)}
                                        style={{ flex: '1', maxWidth: '300px', backgroundColor: "#F1FEFF", border: "0.1vw solid #09A5AF" }}
                                    />
                                </div>

                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{ flex: '0 0 200px' }}>Detailed Summary</label>
                                    <input
                                        type="text"
                                        value={techOverview}
                                        onChange={(e) => settechOverview(e.target.value)}
                                        style={{ flex: '1', maxWidth: '300px', height: '10.37vw', backgroundColor: "#F1FEFF", border: "0.058vw solid #09A5AF" }}

                                    />
                                </div>

                                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                    <label style={{ flex: '0 0 200px' }}>Add Projects</label>
                                    <input
                                        type="text"
                                        value={techDescription}
                                        onChange={(e) => settechDescription(e.target.value)}
                                        style={{ flex: '1', maxWidth: '300px', height: '3vw', backgroundColor: "#F1FEFF", border: "0.058vw solid #09A5AF" }}
                                    />
                                </div>


                                {/* <div style={{ display: 'flex', alignItems: "flex-end" }}>
                                    <Button variant="contained" style={{ font: "Roboto", fontWeight: 500, textTransform: 'none', fontSize: "1.34vw", backgroundColor: '#09A5AF', color: '#FFFFFF', borderRadius: "2.7vw", padding: "0 2.2vw", maxHeight: '2.7em' }}>
                                        Upload Technology
                                    </Button>
                                </div> */}

                                <Grid container spacing={0} >
                                    <Grid item xs={4} sm={4} md={4}>
                                        {/* <p style={{ color: "#2C2C2C", fontSize: "1.87vw", fontWeight: 600 }}>Upload Technology</p> */}
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4}>
                                        {/* <p style={{ color: "#2C2C2C", fontSize: "1.87vw", fontWeight: 600 }}>Upload Technology</p> */}
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Button variant="contained" style={{ font: "Roboto", fontWeight: 500, textTransform: 'none', fontSize: "1.14vw", backgroundColor: '#09A5AF', color: '#FFFFFF', borderRadius: "2.7vw", padding: "1vw 2.2vw", maxHeight: '3.2vw' }}>
                                            Upload Technology
                                        </Button>                                    </Grid>
                                </Grid>
                            </form>
                        </Modal>
                        <SearchBar />
                    </Grid>


                    <Grid item xs={12} style={{ borderBottom: '0.27vw solid #535353' }}></Grid>

                    <Grid container spacing={0}>
                        {technologies.map(result => (
                            <Grid xs={4} sm={4} md={4} key={result.id}>
                                <Grid container style={{ padding: "2.5vw 0" }}>
                                    <Grid item xs={2} sm={2} md={2}>
                                        <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                    </Grid>

                                    <Grid item xs={8} sm={8} md={8}>
                                        <a href={`/patent/${result._id}`} style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>{result.Name}</a>
                                        <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>{result.Description}</p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}

                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2} >
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent" style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300", textDecoration: "None" }}>Centre for Visual Information Technology (CVIT)</a>
                                    <p style={{ fontSize: "0.97vw", color: "#757575", fontWeight: "300" }}>Creating the future of personal and shared reality</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>



                </Grid>
            </Container >
        </>
    )
}


export default Catalogue




////
// 1. Compile all the APIs for technologies and patents and form a document
// 2. Add more fields to addition of tech and patent
// Implement the search funcitonality 
// 3. Try to improve the UI and final display
// 
// 4. Compile all the rest APIs like centers,publications etc.