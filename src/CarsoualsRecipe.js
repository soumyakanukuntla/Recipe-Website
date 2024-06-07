import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarsoualsRecipe = () => {
  return (
    <div style={{width:"96%", margin:"auto"}}>
      <Carousel >
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="/Halwa-1600x426.jpg"
            alt="First slide" style={{height: "45vh"}}
          />
          <Carousel.Caption>
            <h3>Gajar Ka Halwa</h3>
            <p className='fw-bold fs-2'>Name A Sweet That Makes You  Nostalgic.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/Eggless-Cake-1600x426.jpg"
            alt="Second slide" style={{height: "45vh"}}
          />
          <Carousel.Caption>
            <h3>Delicious Cakes</h3>
            <p className='fw-bold fs-2'>Love At First Bite.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" style={{height: "45vh"}} src="/burg2.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3> Life Is Butter With Burger</h3>
            <p className='fw-bold fs-2'>a balanced diet is a burger in each hand.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" style={{height: "45vh"}} src="/all.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3 >Food is love, and dinner is the ultimate date</h3>
            <p className='fw-bold fs-2'> People Who Love To Eat Are Always  The Best People.</p>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarsoualsRecipe;
