"use client";

import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useTranslation } from "@/src/app/lib/hooks/useTranslation";
import { LocaleSwitcher } from "../../localeSwitch";

interface SidepanelProps {
  trigger: React.ReactNode;
}

export const Sidepanel: React.FC<SidepanelProps> = ({ trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = useCallback(() => setIsOpen(false), []);

  const { t } = useTranslation({ namespace: "Header" });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div onClick={open} className="cursor-pointer w-fit h-fit">
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="absolute left-0 inset-0 z-40 h-[100vh] bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />

            <motion.div
              className="fixed top-0 left-0 z-50 h-[100vh] max-w-[320px] w-full bg-[#f5f6fc] shadow-xl flex flex-col"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
                <img
                  className="block"
                  src={"logo/LogoHeader.svg"}
                  alt="AutoBrief"
                />
                <button onClick={close} aria-label="Close">
                  <X
                    size={24}
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  />
                </button>
              </div>
              <div className="flex flex-col h-full items-start">
                <div className="flex-1 overflow-y-auto pl-[20px] py-[30px]">
                  <ul className="flex flex-col gap-[30px]  items-start">
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
                </div>
                <div className="pl-[20px] pb-[30px]">
                  <LocaleSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
