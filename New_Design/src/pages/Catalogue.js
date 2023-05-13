import React from "react"
import "../styles/Home.css"
import bg from "../assets/cc.jpg"
import Navbar from "../components/Navbar"
import Navbar2 from "../components/Navbar2"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Grid,  Button, Divider } from '@material-ui/core';

import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import t1 from '../Img/image 28.png'
import ResponsiveImage from "../components/ResponsiveImage"


import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
        maxHeight:'4vw'
      }}
    >
         <IconButton
        type="submit"
        aria-label="search"
        style={{
          padding: 10,
        }}
      >
        <SearchIcon style={{fontSize:"2vw"}} />
      </IconButton>
      <InputBase
        placeholder="Search Catalogue"
        style={{
          fontSize:"1.3vw",
          flex: 1,
        }}
      />
     
    </Paper>
  );
};



function Catalogue() {

    return (
        <>
            <p style={{ fontFamily: "Montserrat", fontSize: "1.1vw", margin: 0, paddingLeft: "3vw" ,paddingTop:"9vw"}}>
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
    
                        <SearchBar/>
                    </Grid>


                    <Grid item xs={12} style={{ borderBottom: '0.27vw solid #535353' }}></Grid>

                    <Grid container spacing={0}>

                        <Grid xs={4} sm={4} md={4}>
                            <Grid container style={{ padding: "2.5vw 0" }}>
                                <Grid item xs={2} sm={2} md={2}>
                                    <ResponsiveImage src={t1} alt="icon" maxWidth={100} maxHeight={100} />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8}>
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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
                                    <a href="/patent"  style={{ fontSize: "1.19vw", color: "#353535", fontWeight: "300",textDecoration:"None" }}>Centre for Visual Information Technology (CVIT)</a>
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