import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Atlanta from '../../Assests/atlanta.png';
import Chicago from '../../Assests/chicago.png';
import Boston from '../../Assests/boston.png';

export class BootstrapCarousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={Atlanta} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Boston} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={Chicago} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default BootstrapCarousel;
