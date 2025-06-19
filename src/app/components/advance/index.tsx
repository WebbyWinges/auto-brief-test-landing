"use client";
import React from "react";
import { Card } from "../ui/Card/card";
import { useTranslation } from "../../lib/hooks/useTranslation";

export const Advance = () => {
  const { t } = useTranslation({ namespace: "Possibilities" });
  return (
    <div className="flex flex-col gap-[8px] sm:gap-[20px] py-[60px] sm:py-[80px] lg:py-[120px] px-[16px] sm:px-[40px] lg:px-[60px]">
      <Card className="px-[18px] py-[18px] lg:px-[40px] lg:py-[30px] flex flex-col gap-[8px] sm:gap-[20px]  rounded-[32px] bg-[#DCE4F9]">
        <h2 className="font-[600] text-[20px] lg:text-[32px] text-[#1E344F]">
          {t("FirstDesktop.title")}
        </h2>
        <p className="text-[#1E344F] text-[16px] lg:text-[18px]">
          <span className="sm:block hidden"> {t("FirstDesktop.desc")}</span>
          <span className="sm:hidden block">
            {t("FirstDesktop.descMobile")}
          </span>
        </p>
      </Card>
      <div className="flex flex-col-reverse lg:flex-row items-start gap-[20px]">
        <Card className="px-[18px] py-[18px] lg:px-[40px] lg:py-[30px] flex flex-col gap-[8px] sm:gap-[20px] lg:max-w-[738px]  rounded-[32px] bg-[#DCE4F9] ">
          <h2 className="font-[600] text-[20px] lg:text-[32px] text-[#1E344F]">
            {t("SecondDesktop.title")}
          </h2>
          <p className="text-[#1E344F] text-[16px] lg:text-[18px]">
            <span className="sm:block hidden">{t("SecondDesktop.desc")}</span>
            <span className="sm:hidden block">
              {t("SecondDesktop.descMobile")}
            </span>
          </p>
        </Card>
        <Card className="px-[18px] py-[18px] lg:px-[40px] lg:py-[30px] flex flex-col gap-[8px] sm:gap-[20px]  rounded-[32px] bg-white ">
          <h2 className="font-[600] text-[20px] lg:text-[32px] text-[#1E344F]">
            {t("ThirdDesktop.title")}
          </h2>
          <p className="text-[#1E344F] text-[16px] lg:text-[18px]">
            <span className="sm:block hidden">{t("ThirdDesktop.desc")}</span>
            <span className="sm:hidden block">
              {t("ThirdDesktop.descMobile")}
            </span>
          </p>
        </Card>
      </div>
      <div className="flex flex-col lg:flex-row  items-start gap-[20px]">
        <Card className="px-[18px] py-[18px] lg:px-[40px] lg:py-[30px] flex flex-col gap-[8px] sm:gap-[20px]  rounded-[32px] bg-white ">
          <h2 className="font-[600] text-[20px] lg:text-[32px] text-[#1E344F]">
            {t("FourDesktop.title")}
          </h2>
          <p className="text-[#1E344F] text-[16px] lg:text-[18px]">
            <span className="sm:block hidden"> {t("FourDesktop.desc")}</span>
            <span className="sm:hidden block">
              {t("FourDesktop.descMobile")}
            </span>
          </p>
        </Card>

        <Card className="px-[18px] py-[18px] lg:px-[40px] lg:py-[30px] flex flex-col gap-[8px] sm:gap-[20px]  lg:max-w-[738px]  rounded-[32px] bg-[#DCE4F9] ">
          <h2 className="font-[600] text-[20px] lg:text-[32px] text-[#1E344F]">
            {t("FiveDesktop.title")}
          </h2>
          <p className="text-[#1E344F] text-[16px] lg:text-[18px]">
            <span className="sm:block hidden"> {t("FiveDesktop.desc")}</span>
            <span className="sm:hidden block">
              {t("FiveDesktop.descMobile")}
            </span>
          </p>
        </Card>
      </div>
    </div>
  );
};
