
import React, { useState } from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };



    return (
        <>

            <div className="header">
                {/* <div className='inside_header'> */}
                <div className='' >
                    <div className='A_text_overimage' style={{
                        // position: 'absolute',
                        // top:'25%',
                        // left:'40%'

                        // marginTop: '180px',
                        // marginLeft: '700px',


                    }}>

                        <div className='text'>


                            <div className='A_text' >

                              
                            </div>
                            <div className='H_btn'>
                                

                            </div>

                        </div>


                    </div>
                    <Alert style={{ marginTop: "101px", marginBottom: '-5px', textAlign: 'center', backgroundColor: 'black', color: 'whitesmoke', height: '58px' }}>
                        <p style={{ paddingTop: "-20px", fontFamily: 'sans-serif', color: 'whitesmoke' }}>Free Shipping on Orders Over 1250
                        </p>
                    </Alert>


                    {/* <img className='banner_image' src="/images/05.jpg" /> */}
                    <Carousel activeIndex={index} onSelect={handleSelect}>

                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="/images/05.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption >
                                

                            <div  className="home_heading"style={{
                                    fontSize: '40px',
                                    color: 'black',
                                    fontFamily: 'revert',
                                    marginLeft: '18px'

                                }}>
                                    we are  <span style={{ color: 'tomato' }}>pet friendly..</span>
                                </div>

                                <Link to={`/details/${1}`}>
                            <Button
                                style={{
                                    borderRadius: 30,
                                    backgroundColor: "white",
                                    color: 'black',
                                    fontSize: "15px",
                                    padding: "17px 25px",
                                    marginTop:'5px'
                                   
                                        
                                }}
                                variant="contained"
                                
                            
                            >Shop Now
                            </Button>
                        </Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="/images/05.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                

                            <div  className="home_heading" style={{
                                    fontSize: '40px',
                                    color: 'black',
                                    fontFamily: 'revert',
                                    marginLeft: '18px'

                                }}>
                                    we are  <span style={{ color: 'tomato' }}>pet friendly..</span>
                                </div>

                                <Link to={`/details/${1}`}>
                            <Button
                                style={{
                                    borderRadius: 30,
                                    backgroundColor: "white",
                                    color: 'black',
                                    fontSize: "15px",
                                    padding: "17px 25px",
                                    marginTop:'5px'
                                   
                                        
                                }}
                                variant="contained"
                                
                            
                            >Shop Now
                            </Button>
                        </Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100"
                                src="/images/05.jpg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>


                                <div  className="home_heading"style={{
                                    fontSize: '40px',
                                    color: 'black',
                                    fontFamily: 'revert',
                                    marginLeft: '18px'

                                }}>
                                    we are  <span style={{ color: 'tomato' }}>pet friendly..</span>
                                </div>

                                <Link to={`/details/${1}`}>
                            <Button
                                style={{
                                    borderRadius: 30,
                                    backgroundColor: "white",
                                    color: 'black',
                                    fontSize: "15px",
                                    padding: "17px 25px",
                                    marginTop:'5px'
                                   
                                        
                                }}
                                variant="contained"
                                
                            
                            >Shop Now
                            </Button>
                        </Link>
                                
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>













                </div>
            </div>
        </>

    )
}

export default Header
