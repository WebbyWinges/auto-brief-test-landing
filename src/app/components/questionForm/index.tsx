"use client";
import React from "react";
import { QuestionForm } from "./form";
import { AccordionComponent } from "./accordion";
import { useTranslation } from "../../lib/hooks/useTranslation";

export const AccordionForm = React.memo(() => {
  const { t } = useTranslation({ namespace: "FAQ" });
  const { t: b } = useTranslation({ namespace: "Button" });

  const DataQuestion = [
    {
      question: t("FAQFirst.title"),
      answer: t("FAQFirst.desc"),
    },
    {
      question: t("FAQTwo.title"),
      answer: t("FAQTwo.desc"),
    },
    {
      question: t("FAQThree.title"),
      answer: t("FAQThree.desc"),
    },
    {
      question: t("FAQFour.title"),
      answer: t("FAQFour.desc"),
    },
    {
      question: t("FAQFive.title"),
      answer: t("FAQFive.desc"),
    },
  ];
  return (
    <section className=" mx-auto px-[16px] sm:px-[40px] lg:px-[60px] py-[60px] sm:py-[80px] lg:py-[120px] flex flex-col lg:flex-row w-full gap-[40px] xl:gap-[128px]">
      <div>
        <h2 className="text-[48px] font-[400] leading-[120%] mb-6">
          {t("title")}
        </h2>
        <QuestionForm />
      </div>
      <div className="max-w-full lg:max-w-[630px]  w-full flex flex-col">
        {DataQuestion.map((el, index) => (
          <AccordionComponent
            key={index}
            question={el.question}
            answer={el.answer}
          />
        ))}
      </div>
    </section>
  );
});
