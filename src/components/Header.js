import Link from "next/link";
import { Popover } from "@headlessui/react";
import links from "../lib/links";
import { Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Header = () => (
  <Popover className="relative">
    <div className="max-w-[1400px] mx-auto px-4">
      <div className="flex justify-between items-center md:justify-between sm:px-6 md:space-x-10 py-6">
        <img
          src="/Logo.svg"
          alt="buildspace india"
          className="w-36 md:w-auto"
        />
        {/* Desktop Navigation */}
        <div className="hidden md:inline-flex justify-between md:items-center space-x-0">
          <div className="flex items-center text-lg font-bold space-x-12 ">
            <Link href={links.twitter}>
              <a target="_blank">
                <div className="text-gray-900 font-semibold tracking-wide cursor-pointer">
                  twitter.
                </div>
              </a>
            </Link>
            <Link href={links.discord}>
              <a target="_blank">
                <div className="text-gray-900 font-semibold tracking-wide cursor-pointer">
                  discord.
                </div>
              </a>
            </Link>
            <Link href={links.apply} passHref={true}>
              <Button
                __css={{}}
                rightIcon={<FaArrowRight />}
                className="flex lg:text-lg px-12 py-4 hover:-translate-y-1 shadow-md transition-all hover:scale-105 bg-black text-white rounded-xl justify-center items-center font-semibold hover:bg-gray-900"
              >
                Get tickets
              </Button>
            </Link>
          </div>
        </div>
        {/* Mobile Navigation */}
      </div>
    </div>
  </Popover>
);

export default Header;
