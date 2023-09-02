import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import ScrollContainer from "react-indiana-drag-scroll";
import speakersList from "../lib/speakersList";

export const SpeakersMobile = () => {
  const Speaker = ({ name, designation, description, href, imgSrc }) => {
    return (
      <div className="h-[380px] min-w-[250px] w-60 pb-8 p-2 bg-[#151515] rounded-2xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <div className=" p-4 flex justify-center w-full">
          <img
            className="w-full object-cover rounded-xl"
            src={imgSrc}
            alt={name}
          />
        </div>
        <div className="p-2 flex justify-center items-center flex-col text-center">
          <Link href={href}>
            <a target="_blank">
              <div className="flex items-center text-lg text-white space-x-2">
                <h2 className="font-bold text-white">{name}</h2>
                <FaTwitter className="hover:scale-105" />
              </div>
            </a>
          </Link>
          <p className="text-sm px-4 text-gray-100 mb-2">{designation}</p>
          <p className="text-sm px-4 text-white font-semibold">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <ScrollContainer className="speakers">
      <div className="w-max lg:ml-[60px] xl:ml-[140px] flex relative mx-auto px-6 md:px-10 lg:pb-16 bg-curvature flex-col items-center justify-center">
        <div className="w-full mt-10 gap-4 flex items-center flex-nowrap">
          {speakersList.map((data, key) => (
            <Speaker {...data} key={key} />
          ))}
        </div>
      </div>
    </ScrollContainer>
  );
};

export default SpeakersMobile;
