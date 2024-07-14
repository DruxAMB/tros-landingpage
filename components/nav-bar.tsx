"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/images/logo-green.png";
import Avatar from "../public/images/avatar.png";
import { Button } from "./ui/button";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";

export const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="flex justify-between items-center p-3 lg:px-28 bg-white border-b border-[#cc9933] fixed top-0 w-full z-10">
      <ul className="flex items-center">
        <Button variant="link">
          <Link href="/" className="p-2 flex font-bold text-xl">
            <Image src={Logo} alt="logo" height={20} width={30} className="" />{" "}
            Tros
          </Link>
        </Button>
        <div className="hidden md:flex gap-5 p-1 justify-between bg-[#72c98833] rounded-full h-10">
          <div className="flex relative">
            <Image
              src={Avatar}
              quality={100}
              alt="Avatar"
              height={10}
              width={30}
              className="rounded-full"
            />
            <Image
              src={Avatar}
              quality={100}
              alt="Avatar"
              height={10}
              width={30}
              className="rounded-full absolute left-4"
            />
          </div>
          <p className="p-1 text-sm">90+ reviews</p>
        </div>
      </ul>
      <div className="md:hidden">
        <Button variant="ghost" onClick={handleMenu}>
          <MenuIcon className={`${menu ? "hidden" : "block"} h-10 w-10`} />
          <X className={`${menu ? "flex" : "hidden"} h-10 w-10`} />
        </Button>
      </div>
      
      <div
        className={`${
          menu ? "block absolute top-16 bg-white p-5 w-full" : "hidden md:block"
        }`}
      >
        <ul className="md:flex justify-between mt-5 md:m-0">
          <Button
            variant="link"
            className="border w-full rounded-full active:bg-[#529c4f] active:text-white"
          >
            <Link className="p-2" href="/">Home </Link>
          </Button>
          <Button
            variant="link"
            className="border w-full rounded-full active:bg-[#529c4f] active:text-white"
          >
            <Link className="p-2" href="/about">About </Link>
          </Button>
          <Button
            variant="link"
            className="border w-full rounded-full active:bg-[#529c4f] active:text-white"
          >
            <Link className="p-2" href="/problem">Problems </Link>
          </Button>
          <Button
            variant="link"
            className="border w-full rounded-full active:bg-[#529c4f] active:text-white"
          >
            <Link className="p-2" href="/solution">Solutions </Link>
          </Button>
        </ul>
        <ul className={`${menu ? "block mt-10" : "hidden"} md:hidden`}>
          <Button
            variant="link"
            className="border rounded-full w-full bg-[#529c4f] text-white active:text-black active:bg-white"
          >
            <Link className="p-2" href="/contact">Contact Us</Link>
          </Button>
        </ul>
      </div>


      <ul className="hidden md:block">
        <Button
          variant="link"
          className="border rounded-full w-full active:bg-[#529c4f] active:text-white"
        >
          <Link className="p-2" href="/contact">Contact Us</Link>
        </Button>
      </ul>
    </nav>
  );
};
