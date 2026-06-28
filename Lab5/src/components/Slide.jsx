import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide1.jpg"
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Welcome to Our Restaurant</h3>
          <p>Experience the finest dining</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide2.jpg"
          alt="Second slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Delicious Menu</h3>
          <p>Explore our amazing food selection</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/slide3.jpg"
          alt="Third slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Fresh Ingredients</h3>
          <p>Quality you can taste</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;
