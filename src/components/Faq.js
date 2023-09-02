import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Faq = () => {
  const questions = [
    {
      title: "Where's the event?",
      answer: "Bangalore, Karnataka",
    },
    {
      title: "What's the venue?",
      answer: "Meet's venue will be shared with the selected folks over the email.",
    },
    {
      title: "Is the registration free or paid?",
      answer: "It's completely free.",
    },
    {
      title: "Would we receive any swags?",
      answer: "YES!!!",
    },
    {
      title:
        "Who's organising this buildspace India meet? Are you affiliated with the main buildspace?",
      answer:
        "We're a group of volunteers who are facilitating this IRL meet. Yes, we're with the main buildspace and are funded from the buildspace DAO treasury. The identity of the members of the team will be shared after the event.",
    },
    {
      title: "Would you be paying for my trip or stay in Bangalore?",
      answer:
        "No, we won't be. All the attendees will have to manage their travel and accomodation expenses by themselves.",
    },
    {
      title: "Can I attend without the event passes?",
      answer:
        "No, the pass is mandatory. In case you're travelling to Bangalore specifically for this event, then we might bend some rules.",
    },
    {
      title: "What all should we bring?",
      answer:
        "If possible, bring your laptops for the code/design along sessions. It would be super cool! The event could go on for hours so please also carry water.",
    },
    {
      title: "Do I need to show COVID medical report to attend the event?",
      answer:
        "No, but masks are mandatory. Make it, if possible, bring vaccine certificates who are above 18.",
    },
    {
      title: "When would we receive the NFT passes for the event?",
      answer:
        "A week prior to the event. But your slot confirmation would be sent well in advance via email.",
    },
    {
      title:
        "I'm traveling from a different city and the trip might cost me a lot. Should I attend?",
      answer:
        "If you can attend, then why not. We're putting our best efforts to make it a memorable event. While, if this is a success, we might consider doing it in other cities as well. Who knows. 👀",
    },
    {
      title: "Any age limit?",
      answer: "Nope",
    },
  ];

  return (
    <div className="max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto px-6 pt-[80px] md:pt-40">
      <div>
        <div className="relative flex flex-col items-center justify-center sm:px-0 z-20 pb-32">
          <div className="pb-10 md:pb-20">
            <h1
              role="heading"
              className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-10 text-black text-MonumentEXT"
            >
              frequently asked questions
            </h1>
          </div>
          <div className="w-full md:px-10">
            <Accordion allowToggle>
              {questions.map((data, key) => (
                <AccordionItem key={key} border="none">
                  <h2>
                    <AccordionButton
                      className="cursor-pointer"
                      mb="4"
                      py="6"
                      px="12"
                      fontSize="xl"
                      rounded="xl"
                      bg="black"
                      color="white"
                      _hover={{ bg: "blackAlpha.900" }}
                      _focus={{}}
                      _active={{}}
                    >
                      <Box flex="1" textAlign="left">
                        {data.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    p="6"
                    mb="6"
                    fontSize="lg"
                    border="none"
                    color="black"
                  >
                    {data.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
