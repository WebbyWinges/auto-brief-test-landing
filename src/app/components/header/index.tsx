"use client";

import React, { useEffect, useState } from "react";
import { useScroll, AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTranslation } from "../../lib/hooks/useTranslation";
import { LocaleSwitcher } from "../ui/localeSwitch";
import { DemoModal } from "../ui/Modal/demo";
import { Sidepanel } from "../ui/Sidepanel";

export const Header = () => {
  const { t: b } = useTranslation({ namespace: "Button" });
  const { t } = useTranslation({ namespace: "Header" });

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setIsScrolled(y > 10);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const headerContent = (
    <>
      <img
        className="sm:block hidden"
        src={"logo/LogoHeader.svg"}
        alt="AutoBrief"
      />
      <Sidepanel
        trigger={
          <img
            className="sm:hidden block"
            src={"logo/LogoMobile.svg"}
            alt="AutoBrief"
          />
        }
      />
      <ul className="hidden lg:flex flex-row gap-[40px] items-center">
        <a href="#possibilities">
          <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 leading-[130%] cursor-pointer">
            {t("adv")}
          </li>
        </a>
        <a href="#howWork">
          <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 leading-[130%] cursor-pointer">
            {t("how")}
          </li>
        </a>
        <a href="#FAQ">
          <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 leading-[130%] cursor-pointer">
            {t("faq")}
          </li>
        </a>
        <a href="#FAQ">
          <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 leading-[130%] cursor-pointer">
            {t("tell")}
          </li>
        </a>
      </ul>

      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <DemoModal>
          <Button
            className="max-h-[34px] px-[20px] sm:px-[24px] py-[10px] sm:py-[12px] sm:min-h-[42px] sm:max-h-full"
            variant="ordinary"
          >
            {b("demo-d")}
          </Button>
        </DemoModal>
      </div>
    </>
  );

  return (
    <div className="h-[70px] min-h-[70px]">
      <AnimatePresence initial={false} mode="wait">
        {!isScrolled ? (
          <motion.header
            key="relative-header"
            initial={{ opacity: 0, y: -90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative z-40 w-full py-[23.5px] flex flex-row justify-between items-center px-[16px] sm:px-[40px] lg:px-[80px] bg-[rgba(255,255,255,0.03)] backdrop-blur-[20px]"
          >
            {headerContent}
          </motion.header>
        ) : (
          <motion.header
            key="fixed-header"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 z-40 max-w-[1440px] w-full py-[23.5px] flex flex-row justify-between items-center px-[16px] sm:px-[40px] lg:px-[80px] bg-[rgba(255,255,255,0.03)] backdrop-blur-[20px] xl:rounded-2xl xl:mt-[20px]"
          >
            {headerContent}
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
};
