import Link from "next/link";
import links from "../lib/links";
import { Button } from "@chakra-ui/react";
import { FaArrowRight, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { Timeline } from "./Timeline";
import { useState } from "react";
import SpeakersDesktop from "./SpeakersDesktop";
import SpeakersMobile from "./SpeakersMobile";

const Section2 = () => {
  const speakerTitle = "meet our speakers and devs.";

  const [scrollStart, setScrollStart] = useState(false);

  const moving = (dir) => {
    setScrollStart(true);
    const el = document.getElementsByClassName("speakers");
    if (el[0]) {
      if(dir === "left") {
        el[0].scrollLeft -= 300;
      } else if(dir === "right") {
        el[0].scrollLeft += 300;
      }
    }
  };

  return (
    <div className="relative">
      <img
        src="/section2/blur_element.svg"
        className="absolute -top-10 right-[15%] z-1"
        alt="buildspace"
      />
      <div
        style={{
          backgroundImage: 'url("/section2/background.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-2 pt-20 md:pt-32 lg:pt-40 mx-auto px-6 md:px-10 bg-curvature flex flex-col items-center justify-center">
          <h1 className="text-left text-3xl md:text-4xl xl:text-5xl xl:leading-[60px] font-extrabold  text-black tracking-wider font-MonumentEXT ">
            {speakerTitle}
          </h1>
        </div>
        <div className="mx-auto relative border border-red-500">
          <div className="flex h-full items-center z-10 absolute right-5 md:right-10">
            <div
              className="bg-white opacity-80 hover:opacity-100 cursor-pointer p-3 rounded-full"
              onClick={() => moving("right")}
            >
              <FaChevronRight />
            </div>
          </div>
          <div className="flex h-full items-center z-10 absolute left-5 md:left-10">
            <div
              className={`bg-white opacity-80 hover:opacity-100 cursor-pointer p-3 rounded-full ${
                scrollStart ? "block" : "hidden"
              }`}
              onClick={() => moving("left")}
            >
              <FaChevronLeft />
            </div>
          </div>

          <SpeakersMobile />
          <SpeakersDesktop />
        </div>
      </div>

      {/* SCHEDULE SECTION */}
      <div className="md:flex md:flex-row mb-20 md:justify-between w-full md:max-w-[780px] lg:max-w-[900px] xl:max-w-[1000px] mx-auto px-6 md:px-12 mt-16 md:mt-32 relative">
        <div className="flex flex-col lg:max-w-2xl top-0">
          <img
            src="/section2/blur_element_2.svg"
            className="absolute -top-32 -left-28 z-1 md:w-[600px]"
            alt="buildspace"
          />
          <div className="relative z-2 text-black font-MonumentEXT font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
            here&apos;s the <br /> schedule
          </div>
          <div className="text-[#4F4F4F] md:text-base xl:text-lg font-medium my-6 lg:my-6 md:my-6 md:max-w-[300px] xl:max-w-[400px]">
            Take a look at all the awesome thing we have in store for you :)
          </div>
          <Link href={links.apply} passHref={true}>
            <a>
              <Button
                __css={{}}
                disabled
                // rightIcon={<FaArrowRight />}
                className="relative z-2 md:mt-6 lg:mt-6 flex text-lg px-12 py-4 hover:-translate-y-1 shadow-md transition-all hover:scale-105 bg-black text-white rounded-xl justify-center items-center font-semibold hover:bg-gray-900"
              >
                Registrations Closed
              </Button>
            </a>
          </Link>
        </div>
        <div>
          <Timeline />
        </div>
      </div>

      {/* SPONSORS SECTION */}
      <div className="bg-black md:px-6 relative">
        <img
          src="/section2/blur_element_3.svg"
          className="absolute right-60 top-12 z-1 w-60"
          alt="buildspace"
        />
        <div className="container mx-auto relative py-24 rounded px-8 xl:px-16 lg:max-w-[900px] xl:max-w-[1200px]">
          <div className="flex flex-col justify-between items-start">
            <h2 className="font-MonumentEXT text-gray-100 text-4xl md:text-5xl text-left">
              powered by
            </h2>
            <div className=" text-MonumentEXT text-gray-100 text-xl mt-4 text-left">
              you’re in very good hands
            </div>
          </div>
          <div className="flex space-x-10 text-2xl md:text-4xl mt-12 text-white font-bold">
            <div
              className="flex flex-col items-center"
              style={{ textShadow: "2px -2px 30px #8F00FF" }}
            >
              <img
                className="w-10 md:w-20 mb-2"
                src="/polygon.png"
                alt="polygon"
              />
              polygon
            </div>
            <div
              style={{ textShadow: "2px -2px 30px #306AFE" }}
              className="flex flex-col items-center"
            >
              <img
                className="w-10 md:w-20 mb-2 gap-y-2"
                src="/the-graph.png"
                alt="thegraph"
              />
              thegraph
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
