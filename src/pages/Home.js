import React from "react"
import "../styles/Home.css"
import bg from "../assets/cc.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function Home() {
    return (


        <div className="home" style={{ backgroundColor: '#D4F1F4' }} style={{ height: "170vh" }} >
            <Container >
                <h1 className="text-center" style={{ marginBottom: '40px' }}>Technology Transfer Office</h1>
                <div className="row">
                    <div className="col-sm">
                        
                        <div class="card" >
                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    <p className='text-white mb-0'>Innovator looking to build Deep-tech Startup</p>
                                </div>
                            </div>
                            <img src='https://mdbootstrap.com/img/new/standard/city/052.webp' className='w-100' alt='Sample' />
                            <div class="card-body">
                                <h5 class="card-title"> <b> Productize </b></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">

                        <div class="card" >
                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    <p className='text-white mb-0'>Startup or Company looking for Technology</p>
                                </div>

                            </div>
                            <img src='https://mdbootstrap.com/img/new/standard/city/030.webp' className='w-100' alt='Sample' />

                            <div class="card-body">
                                <h5 class="card-title"> <b> Productize </b></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">

                        <div class="card" >

                            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                                <div className='d-flex justify-content-center align-items-center h-100'>
                                    <p className='text-white mb-0'>Individual wants to build products</p>
                                </div>
                            </div>
                            <img src='https://mdbootstrap.com/img/new/standard/city/033.webp' className='w-100' alt='Sample' />
                            <div class="card-body">
                                <h5 class="card-title"> <b> Productize </b></h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>


                        </div>

                    </div>


                </div >

            </Container>
            <Container>

                <Row className="my-5">
                    <Col xs={9} className="d-flex flex-fill" style={{ textAlign: 'left' }}>
                        <Card className="flex-fill" style={{ backgroundColor: 'lightblue' }}  >
                            <Card.Header as="h5">Latest Technology</Card.Header>
                            <Card.Body className="flex-fill">
                                <Card.Title>Lorem Ipsium</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3} style={{ width: '400px' }} >
                        <Image src="https://mdbootstrap.com/img/new/standard/city/020.webp" className="img-fluid" style={{ border: '20px solid lavender' }} />
                    </Col>


                </Row>
                
            
                <Row className="my-5">
                    <Col xs={9} className="d-flex flex-fill" style={{ textAlign: 'left' }}>
                        <Card className="flex-fill" style={{ backgroundColor: 'lavenderblush' }}  >
                            <Card.Header as="h5">Latest Product</Card.Header>
                            <Card.Body className="flex-fill">
                                <Card.Title>IIITH Canvas</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">View</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={3} style={{ width: '400px' }} >
                        <Image src="https://mdbootstrap.com/img/new/standard/city/013.webp" className="img-fluid" style={{ border: '20px solid lightblue' }} />
                    </Col>


                </Row>

                <Row className="my-5">
                    <grid style={{ backgroundColor: "lightblue", width: "100%", padding: " 30px 30px" }}>
                        <h3>
                            Quick Links
                            <ul>
                                <li><a href="#" style={{ textDecoration: "underline" }}>www.google.com</a></li>
                                <li><a href="#" style={{ textDecoration: "underline" }}>www.google.com</a></li>
                                <li><a href="#" style={{ textDecoration: "underline" }}>www.google.com</a></li>
                                <li><a href="#" style={{ textDecoration: "underline" }}>www.google.com</a></li>
                            </ul>
                        </h3>
                    </grid>

                </Row>

                {/* <Row className="my-5">
                    <Col md={6}>
                        <div className="grid-container" style={{ backgroundImage: `url("https://mdbootstrap.com/img/new/standard/city/013.webp")`, backgroundSize: 'cover', height: '400px', }}>
                            <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100%' }}>
                                <div className="d-flex h-10 align-items-center justify-content-center">
                                    <p className="text-white text-center">Y</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> */}


            </Container>



        </div >







    );
}
export default Home;