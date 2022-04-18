import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';

const Banner = () => {
    return (
        <div className='container-fluid mt-5'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        height='650px'
                        className=" d-block img-fluid  "
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>EIGHT WEEKS</h1>
                        <h5>FOR YOUR FRIENDS AND FAMILY</h5>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img

                        className="d-block img-fluid "
                        src={slider2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>IT HURTS NOW</h5>
                        <h3>BUT ONE DAY IT WILL BE YOUR</h3>
                        <h1>WARM UP!</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height='650px'
                        className="d-block img-fluid"
                        src={slider3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>YOUR BODY IS REFLECTION </h1>
                        <h3>OF YOUR LIFE STYLE</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;