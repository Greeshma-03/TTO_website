import React from "react"
import "../styles/Home.css"
import bg from "../assets/cc.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import img2 from '../Img/image 2.png'
import img8 from '../Img/image 8.png'
import img11 from '../Img/image 11.png'
import img13 from '../Img/image 13.png'
import img14 from '../Img/image 14.png'
import img16 from '../Img/image 16.png'
import img17 from '../Img/image 17.png'


function Home() {
    return (


        <div className="home" style={{ backgroundColor: '#D4F1F4' }} style={{ height: "220vh" }} >
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
                            <img src={img2} className='w-100' alt='Sample' />
                            <div class="card-body">
                                <h5 class="card-title"> <b> Startup Seeding </b></h5>
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
                            <img src={img13} className='w-100' alt='Sample' />

                            <div class="card-body">
                                <h5 class="card-title"> <b> Technology Licensing </b></h5>
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
                            <img src={img14} className='w-100' alt='Sample' />
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



                <Row className="justify-content-left align-items-left my-5 text-white"  style={{ backgroundImage: `url("https://mdbootstrap.com/img/new/standard/city/023.webp")`, backgroundSize: 'cover', backgroundPosition: 'bottom right 15%' }} >
                    <Col xs={6} style={{ maxWidth: '65%' }}>
                        <div style={{ padding: "30px 30px" }} >

                            <h1>Latest news/blogs</h1>
                            <p>
                                Machine learning algorithms are capable of processing vast amounts of data and discovering patterns and insights that would otherwise be hidden. This allows companies to make better and more informed decisions, leading to improved business performance and increased profitability. For example, in the finance industry, machine learning algorithms are being used to detect fraudulent activity and improve risk management. In the healthcare industry, machine learning is being used to develop personalized treatment plans and predict disease outbreaks
                            </p>
                            <Button variant="success">More Info</Button>

                        </div>
                    </Col>
                </Row>
                <Row className="my-5" style={{ backgroundColor: 'lightblue' }}>
                    <Col xs={9} style={{ textAlign: 'left', maxWidth: '55%' }}>
                        <div style={{ padding: '20px 30px' }}>
                            <h1>Latest Technology</h1>
                            <p>
                                Machine learning algorithms are capable of processing vast amounts of data and discovering patterns and insights that would otherwise be hidden. This allows companies to make better and more informed decisions, leading to improved business performance and increased profitability. For example, in the finance industry, machine learning algorithms are being used to detect fraudulent activity and improve risk management. In the healthcare industry, machine learning is being used to develop personalized treatment plans and predict disease outbreaks
                            </p>
                        </div>
                    </Col>
                    <Col xs={3} style={{ width: '460px', float: 'right', padding: ' 25px 0 20px 0' }}>
                        <Image src={img8} className="img-fluid" />
                    </Col>
                </Row>


                <Row className="my-5" style={{ backgroundColor: 'lavenderblush' }}>
                    <Col xs={9} style={{ textAlign: 'left', maxWidth: '55%' }}>
                        <div style={{ padding: '20px 30px' }}>
                            <h1>Latest Product</h1>
                            <p>
                                Machine learning algorithms are capable of processing vast amounts of data and discovering patterns and insights that would otherwise be hidden. This allows companies to make better and more informed decisions, leading to improved business performance and increased profitability. For example, in the finance industry, machine learning algorithms are being used to detect fraudulent activity and improve risk management. In the healthcare industry, machine learning is being used to develop personalized treatment plans and predict disease outbreaks
                            </p>
                        </div>
                    </Col>
                    <Col xs={3} style={{ width: '460px', float: 'right', padding: ' 25px 0 20px 0' }}>
                        <Image src={img16} className="img-fluid" />
                    </Col>
                </Row>

                <Row className="my-5">
                    <grid style={{ backgroundColor: "lavender", width: "100%", padding: " 30px 30px" }}>
                        <h3>
                            Quick Links
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <a style={{ textDecoration: "underline" }} href="#">iiit.ac.in</a>
                            <a style={{ textDecoration: "underline" }} href="#">portals.iiit.ac.in</a>
                            <a style={{ textDecoration: "underline" }} href="#">tto.iiit.ac.in</a>
                            <a style={{ textDecoration: "underline" }} href="#">www.google.com</a>

                        </div>
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