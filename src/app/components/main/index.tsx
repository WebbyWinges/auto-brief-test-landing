"use client";
import React from "react";
import { Card } from "../ui/Card/card";
import { Button } from "../ui/button";
import { ArrowBottom } from "../../assets/icons/ArrowBottom";
import { useTranslation } from "../../lib/hooks/useTranslation";
import { DemoModal } from "../ui/Modal/demo";

export const Main = () => {
  const { t } = useTranslation({ namespace: "Main" });
  const { t: b } = useTranslation({ namespace: "Button" });
  return (
    <Card
      className="xl:mx-[20px] px-[16px] sm:px-[50px] pt-[60px] pb-[40px] relative min-h-[780px] sm:min-h-[100%]"
      variant="default"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-[50px]">
          <h1 className="text-[48px] sm:text-[94px] xl:text-[130px] leading-[90%] xl:leading-[100px]">
            {t("title-1")} <br /> {t("title-2")} <br />
            <span className="text-[#2463EB] block xl:hidden  ">
              {" "}
              {t("title-3")}
            </span>
          </h1>
          <p className="  block xl:hidden leading-[120%] text-[18px] sm:text-[20px] xl:text-[24px] text-[#1E344FB2] text-left">
            {t("desc-1")}
            <br className="block sm:hidden" /> {t("desc-2")}
            <br className="hidden sm:block" /> {t("desc-3")} {t("desc-6")}
            <br className="block sm:hidden" />
            {t("desc-7")} <br className="hidden sm:block" />
          </p>
          <DemoModal>
            <Button className="max-w-[215px]" variant={"ordinary"}>
              {b("demo")}
            </Button>
          </DemoModal>
        </div>
        <p className="  hidden xl:block text-[20px] xl:text-[24px] text-[#1E344FB2] text-right pt-[70px]">
          {t("desc-1")} {t("desc-2")}
          {t("desc-3")} {t("desc-6")}
          {t("desc-7")}
        </p>
      </div>
      <div className="  mr-[-50px]">
        <div className=" relative top-[40px]">
          <h1 className="hidden xl:block text-[130px] leading-[100px] absolute  right-[70px] top-[100px]">
            {t("title-3")}
          </h1>
          <div className="hidden sm:block  absolute right-[47%]  bottom-[10%]">
            <div className="bg-[#2463EB1A] w-[100px] h-[100px] rounded-full flex justify-center items-center ">
              <div className="bg-[#2463EB66] w-[75px] h-[75px] rounded-full flex justify-center items-center ">
                <a href="#FAQ">
                  <Button className=" hover:!bg-[#d6dbeb] max-w-[48px] max-h-[48px] bg-white p-[12px] duration-300 cursor-pointer">
                    <ArrowBottom />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <img className="hidden sm:block" src={"/main/3DModel.svg"} />
          {/* <img className="w-[100%] sm:hidden" src={"/main/3DMobile.svg"} /> */}
        </div>
      </div>
      <img
        className="w-[100%] absolute left-0 bottom-0 right-0 sm:hidden"
        src={"/main/3DMobile.svg"}
      />

      <div className="block sm:hidden absolute left-1/2 bottom-[5%] transform -translate-x-1/2">
        <div className="bg-[#2463EB1A] w-[100px] h-[100px] rounded-full flex justify-center items-center ">
          <div className="bg-[#2463EB66] w-[75px] h-[75px] rounded-full flex justify-center items-center ">
            <a href="#FAQ">
              <Button className=" hover:!bg-[#d6dbeb] max-w-[48px] max-h-[48px] bg-white p-[12px] duration-300 cursor-pointer">
                <ArrowBottom />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};
