"use client";
import React from "react";
import { Button } from "../ui/button";
import { useTranslation } from "../../lib/hooks/useTranslation";
import { LocaleSwitcher } from "../ui/localeSwitch";
import { DemoModal } from "../ui/Modal/demo";

export const Header = () => {
  const { t: b } = useTranslation({ namespace: "Button" });
  const { t } = useTranslation({ namespace: "Header" });

  return (
    <header className=" fixed z-40 w-full lg:relative flex flex-row  justify-between backdrop-blur-[20px] bg-[rgba(255,255,255,0.03)]  px-[16px] sm:px-[40px] lg:px-[80px] py-[20px] lg:py-[23.5px] ">
      <img
        className="sm:block hidden"
        src={"logo/LogoHeader.svg"}
        alt="AutoBrief"
      />
      <img
        className="sm:hidden block"
        src={"logo/LogoMobile.svg"}
        alt="AutoBrief"
      />
      <ul className="hidden lg:flex flex-row gap-[40px] items-center">
        <a href="#possibilities">
          <li className="text-[#1E344F] font-[500] leading-[130%] cursor-pointer">
            {t("adv")}
          </li>
        </a>
        <a href="#howWork">
          <li className="text-[#1E344F] font-[500] leading-[130%] cursor-pointer">
            {t("how")}
          </li>
        </a>
        <a href="#FAQ">
          <li className="text-[#1E344F] font-[500] leading-[130%] cursor-pointer">
            {t("faq")}
          </li>
        </a>
        <a href="#FAQ">
          <li className="text-[#1E344F] font-[500] leading-[130%] cursor-pointer">
            {t("tell")}
          </li>
        </a>
      </ul>

      <div className="flex items-center gap-4">
        <LocaleSwitcher />
        <DemoModal>
          <Button variant="ordinary">{b("demo-d")}</Button>
        </DemoModal>
      </div>
    </header>
  );
};
