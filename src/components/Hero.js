import { Button, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Timer from "./Timer.js";
import links from "../lib/links";

function Hero() {
  const text = "bringing the world’s biggest web3 network to Bangalore ";

  return (
    <div className="bg-curvature relative">
      <img
        src="/section1/star_group_blur.svg"
        className="absolute right-10 z-0  w-[450px] xl:w-[800px]"
        alt="buildspace"
      />
      <div className="relative z-1 container mx-auto flex flex-col md:flex-row px-6 justify-center md:space-x-6 lg:space-x-28 md:items-center pt-8 md:pb-32 lg:pb-28 md:px-32 lg:px-32">
        <div className="flex flex-col md:mt-12 lg:max-w-2xl">
          <h1 className="font-MonumentEXT  text-gray-100 font-bold text-left md:text-left text-[40px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl">
            <span className="text-gray-900 font-MonumentEXT">
              buildspace <br />
              <span className="font-MonumentEXT text-gray-900 relative">
                <img
                  src="/section1/gradient-text.svg"
                  alt="buildspace India"
                  className="absolute -bottom-2 w-full scale-150"
                />
                <span className="relative z-1">India</span>
              </span>
            </span>
          </h1>
          <div className="text-left md:text-left text-[#4F4F4F] md:text-lg lg:text-xl xl:text-2xl font-inter my-[24px] lg:my-6 md:my-4 max-w-[200px] md:mx-0 md:max-w-[300px] xl:max-w-[400px]">
            {text}
          </div>

          <Link href={links.apply} passHref={true}>
            <button
              // __css={{}}
              // rightIcon={<FaArrowRight />}
              disabled
              className="mb-10 md:mb-0 w-max md:mx-0 mt-4 md:mt-6 lg:mt-10 flex lg:text-lg px-12 py-4 hover:-translate-y-1 shadow-md transition-all hover:scale-105 bg-black text-white rounded-xl justify-center items-center font-semibold hover:bg-gray-900"
            >
              Registrations Closed
            </button>
          </Link>
        </div>
        <div className="ml-18">
          <img
            src="/section1/art.svg"
            alt="buildspace india logo"
            className="my-[64px] md:my-0 px-10 mt-4 md:mt-0 md:px-0 min-w-[280px] lg:min-w-[350px]"
          />
        </div>
      </div>
      <div className="flex justify-center items-center bg-black w-full py-10 md:py-20 lg:py-28 text-left px-10 md:px-20">
        <Timer />
      </div>
    </div>
  );
}

export default Hero;
