import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from 'next/image';

import image1 from '../public/assets/image1.jpg';
import image2 from "../public/assets/image2.jpg";
import image3 from "../public/assets/image3.jpg";
import image4 from "../public/assets/image4.jpg";
import image5 from "../public/assets/image5.jpg";
import image6 from "../public/assets/image6.jpg";

export default class NextJsCarousel extends Component {
  render() {
    return (
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          swipable={true}
          infiniteLoop={true}
          autoPlay={true}
          showArrows={false}
          useKeyboardArrows={true}
        >
            {images?.map((image) => (
              <Image key={image.id} src={image.src} alt={image.name} layout='responsive' />
            ))}
        </Carousel>
    );
  }
}

const images = [
  {
    id: "image1",
    name: "image1",
    src: image1,
  },
  {
    id: "image2",
    name: "image2",
    src: image2,
  },
  {
    id: "image3",
    name: "image3",
    src: image3,
  },
  {
    id: "image4",
    name: "image4",
    src: image4,
  },
  {
    id: "image5",
    name: "image5",
    src: image5,
  },
  {
    id: "image6",
    name: "image6",
    src: image6,
  },
  {
    id: "image7",
    name: "image1",
    src: image1,
  },
];
