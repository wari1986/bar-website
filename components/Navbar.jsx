import { React, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen p-6 ">
      <div className="flex lg:px-12">
        <div className="flex items-center w-full cursor-pointer">
          <p className="text-3xl text-left lg:text-5xl ">
            <Link href="/">
              <h1>Chez Albina</h1>
            </Link>
          </p>
        </div>
        {/* Toogle button */}
        <div
          onClick={handleClick}
          className="flex items-center text-lg  md:hidden z-10"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div className="hidden md:flex lg:space-x-8 lg:text-lg cursor-pointer">
          <Link href="/about">
            <p className="active:text-[#333333] text-bold">About</p>
          </Link>
          <Link href="/menu">
            <p className="active:text-[#333333] text-bold">Menu</p>
          </Link>
          <div className="flex justify-end">
            <Link href="/contact">
              <p className="active:text-[#333333] text-bold">Contact</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="">
        <ul
          className={
            !nav
              ? "hidden"
              : " top-22 left-0 w-full h-1/2 absolute flex flex-col bg-black justify-center items-center z-10  space-y-8 cursor-pointer"
          }
        >
          <Link href="/about">
            <li className="text-lg">About</li>
          </Link>
          <Link href="/menu">
            <li className="text-lg">Menu</li>
          </Link>
          <Link href="/contact">
            <li className="text-lg">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
