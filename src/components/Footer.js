import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navigation = [
    {
      name: "email us",
      href: "mailto:buildspaceind@gmail.com",
    },
    {
      name: "twitter",
      href: "https://twitter.com/buildspaceind",
    },
    {
      name: "discord",
      href: "https://discord.com/invite/vPmqZqgpsS",
    },
  ];

  return (
    <footer className="text-black">
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:px-8 md:flex md:items-center md:justify-between pb-20">
        <div className="mt-8 md:mt-0 md:order-1 text-xl">
          <Image
            className="w-14 h-14"
            src="/buildspace-logo.svg"
            alt="logo"
            height="56"
            width="56"
          />
          <p className="font-bold">buildspace India</p>
          <p className="font-normal">where devs learn by building.</p>
          <p className="font-normal text-[18px] mt-5 text-gray-600">
            Copyright © 2021 BuildSpace. All rights reserved.
          </p>
        </div>
        <div className="flex mt-8 md:mt-0 flex-col md:text-right md:justify-center md:space-x-8 md:order-2">
          <p className="text-2xl font-black mb-6 hidden md:block">
            Contact with us
          </p>
          <ul>
            {navigation.map((item) => (
              <li
                key={item.name}
                className="text-xl font-normal mb-2 hover:text-gray-600"
              >
                <Link href={item.href}>
                  <a target="_blank">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
