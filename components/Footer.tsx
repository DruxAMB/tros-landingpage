import React from "react";
import Logo from "../public/images/logo-white.png";
import LogoGold from "../public/images/logo-gold.png";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./ui/form";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="bg-[#529c4f]  border-t border-[#cc9933]">
      <div className="p-3 md:px-24">
        <ul className="grid grid-cols-2 md:grid-cols-4 items-center text-white font-semibold">
          <li className="flex">
            <Image
              src={Logo}
              alt="logo"
              height={10}
              width={10}
              className="h-3 my-auto mx-2"
            />{" "}
            Reduce
          </li>
          <li className="flex">
            <Image
              src={Logo}
              alt="logo"
              height={10}
              width={10}
              className="h-3 my-auto mx-2"
            />{" "}
            Reuse
          </li>
          <li className="flex">
            <Image
              src={Logo}
              alt="logo"
              height={10}
              width={10}
              className="h-3 my-auto mx-2"
            />{" "}
            Recycle
          </li>
          <li className="flex">
            <Image
              src={Logo}
              alt="logo"
              height={10}
              width={10}
              className="h-3 my-auto mx-2"
            />{" "}
            Redeem
          </li>
        </ul>

        <div className="grid grid-cols-2 lg:grid-cols-4 mt-24">
          <ul className="text-white font-semibold">
            <Link href="/" className="flex">
              <Image
                src={LogoGold}
                alt="logo"
                height={10}
                width={10}
                className="h-3 my-auto mx-2"
              />
              Home
            </Link>
            <Link href="/about" className="flex">
              <Image
                src={LogoGold}
                alt="logo"
                height={10}
                width={10}
                className="h-3 my-auto mx-2"
              />
              About
            </Link>
            <Link href="/problem" className="flex">
              <Image
                src={LogoGold}
                alt="logo"
                height={10}
                width={10}
                className="h-3 my-auto mx-2"
              />
              Problems
            </Link>
            <Link href="/solution" className="flex">
              <Image
                src={LogoGold}
                alt="logo"
                height={10}
                width={10}
                className="h-3 my-auto mx-2"
              />
              Solutions
            </Link>
            <Link href="/contact" className="flex">
              <Image
                src={LogoGold}
                alt="logo"
                height={10}
                width={10}
                className="h-3 my-auto mx-2"
              />
              Contact Us
            </Link>
          </ul>

          <div className="m-auto">
            <p className="font-bold md:text-xl text-white mb-2">
              Subscribe to Our News Letter
            </p>
            <form action="">
              <input type="text" className="p-2 w-full" />
              <Button className="w-full">SUBSCRIBE</Button>
            </form>
          </div>
        </div>

      </div>
        <div className="text-center mt-10 border-t border-[#cc9933] bg-green-700 text-white p-2">
          alrights reserved &copy; by <a href="/">tros</a>
        </div>
    </div>
  );
};
