import React from "react";
import Image from "next/image";
import heroImage from "../public/assets/hero-image.jpg";

const HeroImage = () => {
  return (
    <Image
      src={heroImage}
      priority="true"
      layout="intrinsic"
      alt="hero image"
    />
  );
};

export default HeroImage;
