import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import '../style/Carousel.css'

const CarouselPage = () => {
  return (
    <div className='ad'>
    <Container className='d-flex justify-content-center align-items-center'>
    <Carousel>
      <Carousel.Item>
       <img src ='https://shop-phinf.pstatic.net/20250305_18/1741154585513ow5ll_PNG/A_EB89B4EC87BCED9591_ECB59CEC8381EB8BA8PC_960x328.png?type=a2304_jpg'/>
      </Carousel.Item>

    </Carousel>
    </Container>
    </div>
  );
};

export default CarouselPage;
