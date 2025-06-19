"use client";
import React from "react";

import { Button } from "../ui/button";
import { DownloadedIcon } from "../../assets/icons/DownLoaded";
import { useTranslation } from "../../lib/hooks/useTranslation";
import { DemoModal } from "../ui/Modal/demo";

export const TalkHour = () => {
  const { t } = useTranslation({ namespace: "TalkHour" });
  const { t: b } = useTranslation({ namespace: "Button" });
  return (
    <>
      <section className=" hidden xl:flex flex-col  gap-[50px] relative min-h-[533px]">
        <div className="flex flex-row gap-[46px] items-center relative !z-[10] max-w-[1000px] min-[1340px]:max-w-[1040px] mt-[35px]">
          <SvgIcon />
          <h2 className="text-[32px] xl:text-[48px] font-[400] leading-[120%]">
            {t("title-1")} <br />{" "}
            <span className="text-[#2463EB]">{t("title-2")} </span>{" "}
            {t("title-3")}
          </h2>
          <DemoModal>
            <Button
              className="absolute right-0 bottom-[10px] xl:bottom-0 z-20"
              variant="ordinary"
            >
              {b("demo")}
            </Button>
          </DemoModal>
        </div>

        <img
          className="absolute left-0 top-[25px] z-[-100]  max-[1300px]:max-w-[1280px]"
          src={"talk/block.svg"}
          alt="AutoBrief"
        />

        <div className="flex flex-col gap-[12px] text-[18px] max-w-[320px] absolute right-0 bottom-0">
          <p className="text-[#1E344F]">{t("desc")}</p>
          <a className="flex flex-row items-center gap-[8px] text-[#2463EB]">
            {b("down")} <DownloadedIcon />
          </a>
        </div>
      </section>

      <section className=" rounded-0 sm:rounded-[32px] flex flex-col gap-[20px] xl:hidden p-[16px] sm:p-[40px]  bg-[#C1D1F7]">
        <div>
          <h2 className="text-[22px] sm:text-[32px] pb-[20px] xl:text-[48px] font-[400] leading-[120%]">
            {t("title-1")} <br />{" "}
            <span className="text-[#2463EB]">{t("title-2")}</span>{" "}
            {t("title-3")}
          </h2>

          <div className="flex flex-col gap-[12px] text-[16px] sm:text-[18px]">
            <p className="text-[#1E344F]">{t("desc")}</p>
            <a className="flex flex-row items-center gap-[8px] text-[#2463EB]">
              {b("demo")} <DownloadedIcon />
            </a>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <DemoModal>
            <Button className="max-w-[197px]" variant="ordinary">
              {b("demo")}
            </Button>
          </DemoModal>
        </div>
      </section>
    </>
  );
};

export const SvgIcon = () => {
  return (
    <svg
      width="100"
      height="148"
      viewBox="0 0 100 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.000488281 50C0.000488281 33.2094 0.000488281 24.8142 3.07283 18.3182C6.23818 11.6257 11.6262 6.23769 18.3187 3.07234C24.8146 0 33.2099 0 50.0005 0C66.791 0 75.1863 0 81.6823 3.07234C88.3748 6.23769 93.7628 11.6257 96.9281 18.3182C100 24.8142 100 33.2094 100 50V98C100 114.791 100 123.186 96.9281 129.682C93.7628 136.374 88.3748 141.762 81.6823 144.928C75.1863 148 66.791 148 50.0005 148C33.2099 148 24.8146 148 18.3187 144.928C11.6262 141.762 6.23818 136.374 3.07283 129.682C0.000488281 123.186 0.000488281 114.791 0.000488281 98V50Z"
        fill="#C1D1F7"
      />
      <path
        d="M0.000488281 50C0.000488281 33.2094 0.000488281 24.8142 3.07283 18.3182C6.23818 11.6257 11.6262 6.23769 18.3187 3.07234C24.8146 0 33.2099 0 50.0005 0C66.791 0 75.1863 0 81.6823 3.07234C88.3748 6.23769 93.7628 11.6257 96.9281 18.3182C100 24.8142 100 33.2094 100 50V98C100 114.791 100 123.186 96.9281 129.682C93.7628 136.374 88.3748 141.762 81.6823 144.928C75.1863 148 66.791 148 50.0005 148C33.2099 148 24.8146 148 18.3187 144.928C11.6262 141.762 6.23818 136.374 3.07283 129.682C0.000488281 123.186 0.000488281 114.791 0.000488281 98V50Z"
        fill="url(#paint0_linear_303_916)"
        fill-opacity="0.2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_303_916"
          x1="100"
          y1="116.5"
          x2="1.40269e-06"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#2463EB" stop-opacity="0" />
          <stop offset="1" stop-color="#2463EB" />
        </linearGradient>
      </defs>
    </svg>
  );
};
