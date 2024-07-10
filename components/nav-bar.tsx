import Image from "next/image";
import React from "react";
import Logo from "../public/images/logo-green.png";
import Avatar from "../public/images/avatar.png";
import { Button } from "./ui/button";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <ul className="flex items-center">
        <Button variant="link">
          <Link href="/" className="flex font-bold text-xl">
            <Image
              src={Logo}
              alt="logo"
              height={20}
              width={30}
              className=""
            /> Tros
          </Link>
        </Button>
        <div className="flex gap-5 p-1 justify-between bg-[#72c98833] rounded-full h-10">
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
                    className="rounded-full absolute left-5"
                  />
                </div>
                <p className="p-1 text-sm">90+ reviews</p>
              </div>
      </ul>
      <ul className="hidden md:flex justify-between">
        <Button variant="link" className="border rounded-full focus:bg-[#66af6d] focus:text-white">
          <Link href="/">Home </Link>
        </Button>
        <Button variant="link" className="border rounded-full focus:bg-[#66af6d] focus:text-white">
          <Link href="/">About </Link>
        </Button>
        <Button variant="link" className="border rounded-full focus:bg-[#66af6d] focus:text-white">
          <Link href="/">Problems </Link>
        </Button>
        <Button variant="link" className="border rounded-full focus:bg-[#66af6d] focus:text-white">
          <Link href="/">Solutions </Link>
        </Button>
      </ul>
      <ul className="justify-between">
        <Button variant="link" className="border rounded-full focus:bg-[#66af6d] focus:text-white">
          <Link href="/">Contact Us</Link>
        </Button>
      </ul>
    </nav>
  );
};
