import React from "react";
import { Button } from "./ui/button";
import Avatar from "../public/images/Avatar.png";
import Logo from "../public/images/logo-dark.png";
import HeroImage from "../public/images/hero-image.jpg";
import Recycle from "../public/images/recycle.jpg";
import Recycle2 from "../public/images/recycle2.png";
import { ArrowDown, PlusCircleIcon } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="my-20 grid">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid gap-5 order-2 md:order-1">
          <h1 className="font-semibold text-4xl md:text-7xl tracking-wide leading-snug">
            Let's make the future tasty and cleaner together
          </h1>
          <p className="text-xl">
            Production of recycling that not only{" "}
            <span className="font-semibold underline">ensures the safety</span>{" "}
            of products, but also has a{" "}
            <span className="font-semibold underline">minimal</span>{" "}
            environmental impact
          </p>
          <div className="flex gap-1">
            <Button
              variant="outline"
              className="bg-transparent focus:border-2 rounded-full focus:border-black p-8 text-md flex gap-2 font-semibold text-black"
            >
              Join EcoFuture Now{" "}
              <Image src={Logo} alt="Avatar" height={30} width={30} />{" "}
            </Button>
            <Button
              variant="outline"
              className="bg-transparent focus:border-2 rounded-full focus:border-black p-8 text-md flex gap-2 font-semibold text-black"
            >
              Download App <ArrowDown />
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={HeroImage}
            alt="hero"
            height={500}
            width={450}
            className=" object-cover"
          />
        </div>
      </div>
      


      <div className="grid md:grid-cols-2 gap-4 mt-20 font-semibold">
        <div className="border rounded-xl grid grid-cols-2 gap-5 p-5 bg-[#72c98813]">
          <div className="grid gap-4">
            <div className="flex gap-2">
              <p className="bg-white rounded-full text-black py-2 px-3 h-10 shadow-sm">
                001
              </p>
              <div className="flex gap-10 p-1 justify-between bg-[#72c98833] rounded-full h-10">
                <div className="flex">
                  <Image
                    src={Avatar}
                    quality={100}
                    alt="Avatar"
                    height={10}
                    width={35}
                    className="rounded-full"
                  />
                  <Image
                    src={Avatar}
                    quality={100}
                    alt="Avatar"
                    height={10}
                    width={35}
                    className="rounded-full"
                  />
                </div>
                <PlusCircleIcon className="p-0 m-0 h-8 w-8 text-[#66af6d]" />
              </div>
            </div>
            <p className="text-xl h-fit">Limited sustainable packaging options</p>
          </div>
          <Image
            src={Recycle}
            alt="recycle"
            height={100}
            width={300}
            className="rounded-lg h-36"
          />
        </div>
        <div className="border rounded-xl grid grid-cols-2 gap-5 p-5 bg-[#72c98813]">
          <div className="grid gap-4">
            <div className="flex gap-2">
              <p className="bg-white rounded-full text-black py-2 px-3 h-10 shadow-sm">
                002
              </p>
              <div className="flex gap-10 p-1 justify-between bg-[#72c98833] rounded-full h-10">
                <div className="flex">
                  <Image
                    src={Avatar}
                    quality={100}
                    alt="Avatar"
                    height={10}
                    width={35}
                    className="rounded-full"
                  />
                  <Image
                    src={Avatar}
                    quality={100}
                    alt="Avatar"
                    height={10}
                    width={35}
                    className="rounded-full"
                  />
                  <Image
                    src={Avatar}
                    quality={100}
                    alt="Avatar"
                    height={10}
                    width={35}
                    className="rounded-full"
                  />
                </div>
                <PlusCircleIcon className="p-0 m-0 h-8 w-8 text-[#66af6d]" />
              </div>
            </div>
            <p className="text-xl">Plastic environmental pollution</p>
          </div>
          <Image
            src={Recycle2}
            alt="recycle2"
            height={100}
            width={300}
            className="rounded-lg h-36"
          />
        </div>
      </div>
    </div>
  );
};
