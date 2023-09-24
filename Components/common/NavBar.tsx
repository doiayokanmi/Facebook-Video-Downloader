"use client";

import React, { useState } from "react";
import {
  ShieldQuestion,
  Menu,
  ScrollText,
  MailPlus,
  Coffee,
  Github,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <header className="flex z-50 sticky shadow-lg top-0 text-white font-semibold bg-primary justify-between items-center md:px-24 px-4">
        <div className="flex items-center gap-8 py-4 md:py-0">
          <div className="flex items-center">
            <Menu className="md:hidden cursor-pointer" onClick={toggleNav} />
            <Link href="/" className="font-bold">
              <Image
                src={"/images/logo.png"}
                width={150}
                height={100}
                alt="logo"
              />
            </Link>
          </div>

          <div
            className={`flex md:h-auto overflow-hidden absolute transition-all ease-in-out  border-t-2 md:border-0 top-14 w-full flex-col md:flex-row left-0 bg-primary md:static ${
              isNavOpen ? "h-[230px]" : "h-0 p-0"
            }`}
          >
            <Link
              href="/"
              className="flex items-center p-4 gap-1 hover:bg-hover hover:underline"
            >
              <ShieldQuestion size={18} /> How To Use
            </Link>
            <Link
              href="/"
              className="flex items-center p-4 gap-1 hover:bg-hover hover:underline"
            >
              <ScrollText size={18} /> Docs
            </Link>
            <Link
              href="/"
              className="flex items-center p-4 gap-1 hover:bg-hover hover:underline"
            >
              <MailPlus size={18} /> Contact Us
            </Link>

            <div className="items-center justify-evenly border-t-2 py-4 md:hidden flex">
              <Link href="/" className="pe-2 hover:text-hover">
                <Facebook size={24} />
              </Link>
              <Link href="/" className="pe-2 hover:text-hover">
                <Twitter />
              </Link>
              <Link href="/" className="pe-2 hover:text-hover">
                <Github />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="items-center hidden md:flex">
            <Link href="/" className="pe-2 hover:text-hover">
              <Facebook />
            </Link>
            <Link href="/" className="pe-2 hover:text-hover">
              <Twitter />
            </Link>
            <Link href="/" className="pe-2 hover:text-hover">
              <Github />
            </Link>
          </div>

          <Link
            href="https://www.buymeacoffee.com/doiayokanmi"
            className="p-2 flex items-center gap-1 hover:bg-hover font-semibold text-sm bg-yellow-500 rounded"
          >
            <Coffee size={18} /> Buy Me A Coffee
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
