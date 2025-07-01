"use client";
import React from "react";
import { PhoneFooterIcon } from "../../assets/icons/footer/Phone";
import { TelegramFooterIcon } from "../../assets/icons/footer/Telegram";
import { MailFooterIcon } from "../../assets/icons/footer/Mail";
import { useTranslation } from "../../lib/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation({ namespace: "Footer" });
  const { t: b } = useTranslation({ namespace: "Button" });
  return (
    <>
      {/* //Desktop */}
      <footer className="max-[1280px]:hidden flex flex-col mb-[20px] items-center xl:mx-[20px]">
        <div className="flex justify-between w-full bg-[url(/footer/footer.svg)] relative  max-h-[200px] max-w-[1400px]  bg-no-repeat bg-contain">
          <div className="flex flex-col gap-[36px] justify-between pt-[15px] pl-[15px] pb-[40px]">
            <img className="" src={"logo/LogoMobile.svg"} alt="AutoBrief" />
            <div className="flex flex-col gap-[12px]">
              <a href="tel:+79956554569">
                <PhoneFooterIcon />
              </a>
              <a href="https://t.me/autobriefteam" target="_blank">
                <TelegramFooterIcon />
              </a>
              <a href="mailto:autobrief@yandex.com?subject=Запрос информации&body=Здравствуйте,...">
                <MailFooterIcon />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[20px] max-w-[1200px] py-[30px] pr-[70px] pb-[60px]">
            <div className="text-[24px] leading-[120%] text-[#1E344F] font-[600]">
              {t("title-1")} <br /> {t("title-2")}
            </div>

            <ul className="text-[18px] flex flex-col gap-[10px] leading-[130%] text-[#1E344F] font-[500]">
              <a href="#possibilities">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  {" "}
                  {t("adv")}{" "}
                </li>
              </a>
              <a href="#howWork">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("how")}</li>
                </li>
              </a>
            </ul>

            <ul className="text-[18px] flex flex-col gap-[10px]  leading-[130%] text-[#1E344F] font-[500]">
              <a href="#FAQ">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("faq")}</li>
                </li>
              </a>
              <a href="#FAQ">
                <li className="text-[#1E344F] lining-nums font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("tell")}</li>
                </li>
              </a>
            </ul>
            <ul className="flex flex-col gap-[10px] ">
              <li className="text-[18px]  leading-[130%] text-[#1E344F] font-[500] lining-nums">
                <a href="tel:+79956554569">+7 (995) 655-45-69</a>
              </li>
              <li className="text-[18px]  leading-[130%] text-[#1E344F] font-[500]">
                <a href="mailto:autobrief@yandex.com?subject=Запрос информации&body=Здравствуйте,...">
                  {" "}
                  autobrief@yandex.com
                </a>
              </li>
              <li className="text-[16px]  leading-[130%] text-[#7B7B7B] font-[500]">
                <a target="_blank" href="/files/Politics.pdf">
                  {t("link")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-center mt-[-35px]"> {t("year")} </div>
      </footer>
      {/* //Desktop */}
      <footer className="bg-[#C1D1F7] rounded-t-[32px] px-[40px] py-[20px] max-[860px]:hidden max-[1280px]:block hidden  ">
        <div className="flex flex-row  items-start justify-around">
          <img
            className="lg:block hidden"
            src={"logo/LogoHeader.svg"}
            alt="AutoBrief"
          />
          <img
            className="lg:hidden block"
            src={"logo/LogoMobile.svg"}
            alt="AutoBrief"
          />
          <div className="flex gap-[20px] ">
            <ul className="text-[18px] flex flex-col gap-[10px] leading-[130%] text-[#1E344F] font-[500]">
              <a href="#possibilities">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  {" "}
                  {t("adv")}{" "}
                </li>
              </a>
              <a href="#howWork">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("how")}</li>
                </li>
              </a>
            </ul>

            <ul className="text-[18px] flex flex-col gap-[10px]  leading-[130%] text-[#1E344F] font-[500]">
              <a href="#FAQ">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("faq")}</li>
                </li>
              </a>
              <a href="#FAQ">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("tell")}</li>
                </li>
              </a>
            </ul>
            <ul className="flex flex-col gap-[10px] ">
              <li className="text-[18px]  leading-[130%] text-[#1E344F] font-[500]">
                <a href="tel:+79956554569">+7 (995) 655-45-69</a>
              </li>
              <li className="text-[18px]  leading-[130%] text-[#1E344F] font-[500]">
                <a href="mailto:autobrief@yandex.com?subject=Запрос информации&body=Здравствуйте,...">
                  {" "}
                  autobrief@yandex.com
                </a>
              </li>
            </ul>
            <div>
              <div className="flex flex-row items-center gap-[16px]">
                <a href="tel:+79956554569">
                  <PhoneFooterIcon />
                </a>
                <a href="https://t.me/autobriefteam" target="_blank">
                  <TelegramFooterIcon />
                </a>
                <a href="mailto:autobrief@yandex.com?subject=Запрос информации&body=Здравствуйте,...">
                  <MailFooterIcon />
                </a>
              </div>
              <p className="text-[16px]  leading-[130%] text-[#7B7B7B] font-[500]">
                <a target="_blank" href="/files/Politics.pdf">
                  {t("link-1")}
                  <br /> {t("link-2")}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[16px] text-center  leading-[130%] text-[#7B7B7B] font-[500]">
            {t("year")}
          </p>
        </div>
      </footer>
      {/* //Table */}
      <footer className="bg-[#C1D1F7] rounded-t-[32px] px-[40px] py-[20px] flex-col gap-[10px]  max-[645px]:hidden max-[860px]:flex hidden">
        <div className="flex flex-col items-start gap-[20px]">
          <img src={"logo/LogoHeader.svg"} alt="AutoBrief" />

          <div className="flex gap-[20px] w-full justify-between ">
            <ul className="text-[18px] flex flex-col gap-[10px] leading-[130%] text-[#1E344F] font-[500">
              <a href="#possibilities">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  {" "}
                  {t("adv")}{" "}
                </li>
              </a>
              <a href="#howWork">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("how")}</li>
                </li>
              </a>
            </ul>

            <ul className="text-[18px] flex flex-col gap-[10px]  leading-[130%] text-[#1E344F] font-[500]">
              <a href="#FAQ">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("faq")}</li>
                </li>
              </a>
              <a href="#FAQ">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("tell")}</li>
                </li>
              </a>
            </ul>
            <ul className="flex flex-col gap-[10px] ">
              <li className="text-[18px]  leading-[130%] text-[#1E344F] font-[500]">
                <a href="tel:+79956554569">+7 (995) 655-45-69</a>
              </li>
              <li className="text-[18px]  leading-[130%] text-[#1E344F] font-[500]">
                <a href="mailto:autobrief@yandex.com?subject=Запрос информации&body=Здравствуйте,...">
                  {" "}
                  autobrief@yandex.com
                </a>
              </li>
              <li className="flex flex-row items-center gap-[16px]">
                <a href="tel:+79956554569">
                  <PhoneFooterIcon />
                </a>
                <a href="https://t.me/autobriefteam" target="_blank">
                  <TelegramFooterIcon />
                </a>
                <a href="mailto:autobrief@yandex.com?subject=Запрос информации&body=Здравствуйте,...">
                  <MailFooterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-[16px]  leading-[130%] text-[#7B7B7B] font-[500]">
            <a target="_blank" href="/files/Politics.pdf">
              {" "}
              {t("link")}
            </a>
          </p>
          <p className="text-[16px]  leading-[130%] text-[#7B7B7B] font-[500]">
            {t("year")}
          </p>
        </div>
      </footer>
      {/* //Mobile */}
      <footer className="bg-[#C1D1F7] px-[16px] py-[20px]  flex-col gap-[10px]   max-[645px]:flex hidden ">
        <div className="flex flex-col items-start gap-[20px]">
          <img src={"logo/LogoHeader.svg"} alt="AutoBrief" />
          <div className="flex gap-[20px] w-full justify-between ">
            <ul className="text-[16px] flex flex-col gap-[10px] leading-[130%] text-[#1E344F] font-[500]">
              <a href="#possibilities">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  {" "}
                  {t("adv")}{" "}
                </li>
              </a>
              <a href="#howWork">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("how")}</li>
                </li>
              </a>
              <a href="#FAQ">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("faq")}</li>
                </li>
              </a>
              <a href="#FAQ">
                <li className="text-[#1E344F] font-[500] hover:text-[#2463EB] duration-300 cursor-pointer">
                  <li>{t("tell")}</li>
                </li>
              </a>
            </ul>

            <ul className="flex flex-col gap-[10px] ">
              <li className="text-[16px]  leading-[130%] text-[#1E344F] font-[500]">
                <a href="tel:+79956554569">+7 (995) 655-45-69</a>
              </li>
              <li className="text-[16px]  leading-[130%] text-[#1E344F] font-[500]">
                <a href="mailto:autobrief@yandex.com?subject=Запрос информации&body=Здравствуйте,...">
                  {" "}
                  autobrief@yandex.com
                </a>
              </li>
              <li className="flex flex-row items-center gap-[16px]">
                <a href="tel:+79956554569">
                  <PhoneFooterIcon />
                </a>
                <a href="https://t.me/autobriefteam" target="_blank">
                  <TelegramFooterIcon />
                </a>
                <a href="mailto:autobrief@yandex.com?subject=Запрос информации&body=Здравствуйте,...">
                  <MailFooterIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="text-[14px]  leading-[130%] text-[#7B7B7B] font-[500]">
            <a href="/files/Politics.docx"> {t("link")}</a>
          </p>
          <p className="text-[14px]  leading-[130%] text-[#7B7B7B] font-[500]">
            {t("year")}
          </p>
        </div>
      </footer>
    </>
  );
};
