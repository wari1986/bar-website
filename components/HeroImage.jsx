import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/hero-image.jpeg";

const HeroImage = () => {
  return (
    <Image
      src={heroImage}
      priority="true"
      layout="responsive"
      alt="hero image"
    />
  );
};

export default HeroImage;
