"use client";
import React, { JSX } from "react";
import { Card } from "../ui/Card/card";
import { HRIcon } from "../../assets/icons/Hr";
import { AnalyticsIcon } from "../../assets/icons/Analytics";
import { PriceIcon } from "../../assets/icons/Price";
import { CodePhoneIcon } from "../../assets/icons/CodePhone";
import { useTranslation } from "../../lib/hooks/useTranslation";

export const WhoIs = () => {
  const { t } = useTranslation({ namespace: "WhoIs" });

  const WhoIsData = [
    {
      icon: <HRIcon />,
      title: t("HowFirst.title"),
      description: t("HowFirst.desc"),
    },
    {
      icon: <AnalyticsIcon />,
      title: t("HowTwo.title"),
      description: t("HowTwo.desc"),
    },
    {
      icon: <PriceIcon />,
      title: t("HowThree.title"),
      description: t("HowThree.desc"),
    },
    {
      icon: <CodePhoneIcon />,
      title: t("HowFour.title"),
      description: t("HowFour.desc"),
    },
  ];

  return (
    <section className=" flex flex-col  gap-[50px] p-[16px] sm:p-[40px] xl:p-[60px]">
      <h2 className="text-[48px] font-[400] leading-[120%]">{t("title")}</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-[50px]">
        {WhoIsData.map((card, index) => (
          <WhoIsCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

type WhoIsCard = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const WhoIsCard = ({ icon, title, description }: WhoIsCard) => {
  return (
    <div className="flex flex-col gap-[20px] rounded-[24px] p-[0px] !bg-none">
      {icon}
      <div className="flex flex-col gap-[4px]">
        <h4 className="font-[600] text-[16px] sm:text-[18px] leading-[130%]">
          {title}
        </h4>
        <p className="font-[400] text-[16px] sm:text-[18px] leading-[130%]">
          {description}
        </p>
      </div>
    </div>
  );
};
