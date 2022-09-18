import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
// import { AiOutlineShareAlt } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-sm text-[#666666] px-4 pt-4 md:pt-4 md:mb-8 lg:mb-8 lg:text-xs" >
      <div className="flex justify-center lg:justify-end space-x-5 my-4">
        <a
          href="https://www.facebook.com/AdrianaEspinozaMua/photos"
          target="_blank"
          rel="noreferrer"
          aria-label="facebook page"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/adriespinoza_makeup/"
          target="_blank"
          rel="noreferrer"
          aria-label="instagram profile"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@adriespinoza_makeup"
          target="_blank"
          rel="noreferrer"
          aria-label="tik tok profile"
        >
          <FaTiktok />
        </a>
        <a
          href="https://wa.me/+59174350041"
          target="_blank"
          rel="noreferrer"
          aria-label="whatsapp number"
        >
          <FaWhatsapp />
        </a>
      </div>
      <div className="flex justify-center lg:justify-end">
        <p>Adriana Espinoza</p>
      </div>
    </div>
  );
};

export default Footer;
