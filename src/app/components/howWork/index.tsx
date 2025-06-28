"use client";
import React, { JSX } from "react";
import { Card } from "../ui/Card/card";

import HowWorkSVG from "../../../../public/howWork/howWork.svg";
import TabletSVG from "../../../../public/howWork/Tablet.svg";
import MobileSVG from "../../../../public/howWork/Mobile.svg";

import { PhoneIcon } from "../../assets/icons/Phone";
import { Transcription } from "../../assets/icons/Transcription";
import { AnalysIcon } from "../../assets/icons/Analys";
import { CalendarIcon } from "../../assets/icons/Calendar";
import { TelegramIcon } from "../../assets/icons/Telegram";
import { useTranslation } from "../../lib/hooks/useTranslation";
import Image from "next/image";

export const HowWork = () => {
  const { t } = useTranslation({ namespace: "HowWork" });

  const HowWorkData = [
    {
      icon: <PhoneIcon />,
      title: t("HowFirst.title"),
      description: t("HowFirst.desc"),
    },
    {
      icon: <Transcription />,
      title: t("HowTwo.title"),
      description: t("HowTwo.desc"),
    },
    {
      icon: <AnalysIcon />,
      title: t("HowHowThree3.title"),
      description: t("HowHowThree3.desc"),
    },
    {
      icon: <CalendarIcon />,
      title: t("HowThree.title"),
      description: t("HowThree.desc"),
    },
    {
      icon: <TelegramIcon />,
      title: t("HowFour.title"),
      description: t("HowFour.desc"),
    },
  ];
  return (
    <section className=" flex flex-col items-center xl:flex-row gap-[20px] p-[16px] sm:p-[40px] xl:p-[60px]">
      <Image
        priority={true}
        className="hidden xl:block max-h-[634px]  max-w-[630px] w-full"
        src={HowWorkSVG}
        alt="AutoBrief"
      />

      <Image
        priority={true}
        className="hidden sm:block xl:hidden max-w-[630px] w-full"
        src={TabletSVG}
        alt="AutoBrief"
      />
      <Image
        priority={true}
        className=" bock  sm:hidden  max-w-[630px] w-full"
        src={MobileSVG}
        alt="AutoBrief"
      />
      <div className="flex flex-col gap-[30px] w-full ">
        <h2 className="text-[48px] font-[500] leading-[120%]">
          {t("title-1")} <span className="text-[#2463EB]"> {t("title-2")}</span>{" "}
        </h2>
        <div className="flex flex-col gap-[20px]">
          {HowWorkData.map((card, index) => (
            <HowWorkCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type HowWorkCard = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const HowWorkCard = ({ icon, title, description }: HowWorkCard) => {
  return (
    <Card
      variant="shadow"
      className="flex flex-row gap-[12px] rounded-[24px] p-[12px] sm:p-[20px]"
    >
      {icon}
      <div className="flex flex-col gap-[4px]">
        <h4 className="font-[600] text-[16px] sm:text-[18px] leading-[130%]">
          {title}
        </h4>
        <p className="font-[400] text-[16px] sm:text-[18px] leading-[130%]">
          {description}
        </p>
      </div>
    </Card>
  );
};
