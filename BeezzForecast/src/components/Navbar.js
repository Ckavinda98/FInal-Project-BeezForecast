import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(false);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
    setNav(false);
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BEEZFORECAST.</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="/" onClick={handleScrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClose}>
                About
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={handleClose}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/predict" onClick={handleClose}>
                Predict
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleClose}>
                Statistic
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <ul className="hidden md:flex">
            <li className="border-none bg-transparent text-black mr-4">
              <Link to="/login" onClick={handleScrollToTop}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={handleClose}>
                Sing Up
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/" onClick={handleScrollToTop}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/about" onClick={handleClose}>
            About
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/" onClick={handleClose}>
            Support
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/" onClick={handleClose}>
            Platforms
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/" onClick={handleClose}>
            Pricing
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <ul className="hidden md:flex">
            <li className="border-none bg-transparent text-black mr-4">
              <Link to="/login" onClick={handleScrollToTop}>
                Login
              </Link>
            </li>
            <li className="px-8 py-3">
              <Link to="/register" onClick={handleClose}>
                Sing Up
              </Link>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
