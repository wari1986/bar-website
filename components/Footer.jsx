import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-auto w-3/5 text-center space-y-4 px-9 py-2 text-sm md:mt-8 md:py-4">
      <div className="space-y-2">
        <p>Tue - Fri: 04pm - 00pm</p>
        <p>Sat - Sun: 11am - 00pm</p>
      </div>
      <div>
        <a href="https://www.google.com/maps/place/Chez+Albina/@50.8382095,4.4125639,15z/data=!4m2!3m1!1s0x0:0x5ad790935a98b564?sa=X&ved=2ahUKEwij3cfFrp_6AhWIy6QKHXL5CtYQ_BJ6BAhWEAU">
          Rue Georges et Jacques Martin 27, 1150 Woluwe-Saint-aierre Bruxelles
        </a>
      </div>

      <div className="space-y-4">
        <h1 className='text-xl '>Follow Us</h1>
        <div className="flex justify-center space-x-5">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook page"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="instagram profile"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noreferrer"
            aria-label="tik tok profile"
          >
            <FaTiktok />
          </a>
          <a
            href="https://wa.me/+32485245769"
            target="_blank"
            rel="noreferrer"
            aria-label="whatsapp number"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <p>Chez Albina - 2022</p>
      </div>
    </div>
  );
};

export default Footer;
