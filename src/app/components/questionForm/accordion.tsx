import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "framer-motion";
import { PluseIcon } from "../../assets/icons/PluseIcon";
import { MinusIcon } from "../../assets/icons/MinuseIcon";

export const AccordionComponent = <T extends string>({
  question,
  answer,
}: {
  question: T;
  answer: T;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <Accordion className=" !w-full" type="single" collapsible>
      <AccordionItem className="!w-full" value={question}>
        <AccordionTrigger
          onClick={toggleOpen}
          className="flex flex-row justify-start items-center w-full"
        >
          <div className="flex flex-col w-full ">
            <div className="flex flex-row justify-start items-center w-full gap-[20px] py-[16px] ">
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 0 : 90 }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer "
              >
                {!isOpen ? <PluseIcon /> : <MinusIcon />}
              </motion.div>
              <div
                className={`text-[18px]  ${
                  !isOpen ? "text-[#1E344F]" : "text-[#2463EB]"
                }  `}
              >
                {question}
              </div>
            </div>
            <span className="w-full bg-[#C4C4C4] h-[1px]" />
          </div>
        </AccordionTrigger>
        <AccordionTrigger></AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
