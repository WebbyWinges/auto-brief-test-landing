"use client";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useTranslation } from "../../lib/hooks/useTranslation";

const questionFormSchema = z.object({
  email: z.string().email("Пожалуйста, введите корректный email"),
  question: z.string().min(10, {
    message: "Вопрос должен содержать минимум 10 символов",
  }),
});

type QuestionFormValues = z.infer<typeof questionFormSchema>;

export const QuestionForm = React.memo(() => {
  const { t } = useTranslation({ namespace: "FAQ" });
  const { t: b } = useTranslation({ namespace: "Button" });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuestionFormValues>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      email: "",
      question: "",
    },
  });

  const [checked, setChecked] = useState(false);

  const handleCheckedChange = useCallback(
    (newChecked: boolean | "indeterminate") => {
      if (newChecked === "indeterminate") return;

      if (!newChecked) {
        toast.error("Вы должны дать согласие на обработку данных");
      }
      setChecked(newChecked);
    },
    []
  );

  const onSubmit = useCallback(
    async (data: QuestionFormValues) => {
      try {
        if (!checked) {
          toast.error("Пожалуйста, дайте согласие на обработку данных");
          return;
        }

        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Ваш вопрос успешно отправлен!");
        reset();
      } catch (error) {
        toast.error("Произошла ошибка при отправке вопроса");
      }
    },
    [checked, reset]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-full lg:max-w-[522px] flex flex-col gap-[20px]"
    >
      {/* Поля формы остаются без изменений */}
      <div className="">
        <label htmlFor="email" className="block mb-[4px] text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-2 border border-[#C1D1F7] rounded-[24px]
             hover:!border-[#2463EB] focus:!border-[#2463EB] active:!border-[#2463EB] duration-200"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="question" className="block mb-2 text-sm font-medium">
          {t("title-2")}
        </label>
        <textarea
          id="question"
          className="w-full p-2 border border-[#C1D1F7] rounded-[24px] min-h-[100px]  hover:!border-[#2463EB] focus:!border-[#2463EB] active:!border-[#2463EB] duration-200"
          {...register("question")}
        />
        {errors.question && (
          <p className="mt-1 text-sm text-red-600">{errors.question.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <Checkbox
          id="consent"
          checked={checked}
          onCheckedChange={handleCheckedChange}
        />
        <label htmlFor="consent" className="text-sm">
          {t("label-1")} <span className="text-[#2463EB]">{t("label-2")}</span>
        </label>
      </div>

      <Button
        variant="ordinary"
        type="submit"
        disabled={isSubmitting}
        className="w-full max-w-[144px] "
      >
        {isSubmitting ? "..." : b("up")}
      </Button>
    </form>
  );
});

QuestionForm.displayName = "QuestionForm";
