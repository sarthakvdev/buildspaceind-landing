import { Link } from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";

export const Timeline = () => {
  const timelines = [
    {
      title: "Introduction",
      description: "A sneak peek into awesome day",
      time: "11:00am - 11:15am",
    },
    {
      title: "Code - Smart contracts",
      description: "Hands-on coding experience for Web3 enthusiasts",
      time: "11:30am - 1: 30pm",
    },
    {
      title: "Design - UI/UX",
      description: "Hands-on design experience for design enthusiasts",
      time: "2:00pm - 3:30pm",
    },
    {
      title: "Speakers",
      description: "Insightful convos from our brilliant speakers",
      time: "4:30pm - 7:00pm ",
    },
    {
      title: "Networking",
      description: "meet new frens and refresh after a long day",
      time: "7:00pm - 7:30pm",
    },
  ];

  const TimelineObject = ({ title, description, time }) => {
    return (
      <div className="text-black w-[240px] md:w-auto flex space-x-8 my-4 md:my-0 items-start max-w-[500px] break-words">
        <div className="w-0.5 bg-[#E4E7EC] md:h-32"></div>
        <div className="">
          <div className="font-bold text-xl lg:text-2xl">{title}</div>
          <div className="font-semibold text-sm lg:text-md text-gray-600">
            {time}
          </div>
          <div className="text-gray-500 text-sm lg:text-md mt-2">
            {description}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex mt-16 md:mt-0">
      <div className="w-0.5 bg-[#E4E7EC] md:hidden h-auto"></div>
      <div className="w-max flex items-center flex-nowrap">
        <div className="flex flex-col">
          {timelines.map((data, key) => (
            <TimelineObject {...data} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};
