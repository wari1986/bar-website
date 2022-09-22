import Image from "next/image";
import AboutTextBanner from "../components/AboutTextBanner";
import beerImage from "../public/assets/beer.jpg";
import steakDish from "../public/assets/steak-dish.jpg";
import pastaDish from "../public/assets/pasta-dish.jpg";

const About = () => {
  return (
    <div className='md:flex md:flex-col md:justify-center'>
      <AboutTextBanner
        title="Our Story"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores similique maiores aliquid molestiae iste numquam accusantium quibusdam, quam hic temporibus, error harum provident consequatur consectetur. Earum recusandae hic dolore beatae?"
      />
      <Image
        src={beerImage}
        priority="true"
        layout="responsive"
        alt="hero image"
      />
      <AboutTextBanner
        title="In the Kitchen"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores similique maiores aliquid molestiae iste numquam accusantium quibusdam, quam hic temporibus, error harum provident consequatur consectetur. Earum recusandae hic dolore beatae?"
      />
      <div className="md:flex">
        <div className="md:w-1/2">
          <Image
            src={steakDish}
            priority="true"
            layout="responsive"
            height={500}
            width={500}
            alt="hero image"
          />
        </div>
        <div className="md:w-1/2 ">
          <Image
            src={pastaDish}
            priority="true"
            layout="responsive"
            height={500}
            width={500}
            alt="hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
