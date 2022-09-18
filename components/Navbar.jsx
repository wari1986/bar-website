import { React, useState } from "react";
import Link from "next/link";
// import { AiOutlineShopping } from "react-icons/ai";

// import { Cart } from "./";
// import { useStateContext } from "../context/StateContext";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <div className="flex py-4 md:flex-col-reverse lg:flex-col-reverse lg:pt-8 px-4">
        {/* Toogle button */}
        <div
          onClick={handleClick}
          className="flex items-center text-lg text-[#686868] md:hidden z-10"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div className="invisible space-y-0 md:my-12 lg:text-sm lg:space-y-4 lg:my-12 text-[#666666] md:visible lg:visible text-right">
          <p className="active:text-[#333333] text-bold">
            <Link href="/">Home</Link>
          </p>
          <p className="active:text-[#333333] text-bold">
            <Link href="/portfolio">Portfolio</Link>
          </p>
          <div className="flex justify-end">
            <p className="active:text-[#333333] text-bold">
              <Link href="/contactForm">Connect</Link>
            </p>
            <button className="pl-2">+</button>
          </div>
        </div>
        <div className="flex justify-end items-center w-full">
          <p className="text-xl text-[#2B2B2B] text-right  lg:text-2xl">
            <Link href="/">
              <a>
                ADRIANA ESPINOZA
                <br />
                makeup artist |<br /> hairstylist
              </a>
            </Link>
          </p>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="">
        <ul
          className={
            !nav
              ? "hidden"
              : "text-[#686868] top-22 left-0 w-full h-1/9 absolute flex flex-col justify-center items-center z-10 bg-white"
          }
        >
          <li className="py-1 text-xs">
            <Link onClick={handleClick} href="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-1 text-xs">
            {" "}
            <Link
              onClick={handleClick}
              href="/portfolio"
              smooth={true}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="py-1 text-xs">
            {" "}
            <Link
              onClick={handleClick}
              href="/contactForm"
              smooth={true}
              duration={500}
            >
              Connect
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
