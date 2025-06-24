"use client";
import React, { useCallback, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { Button } from "../button";
import { useTranslation } from "@/src/app/lib/hooks/useTranslation";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../checkbox";
import toast from "react-hot-toast";
import { PhoneInput } from "./phone";

interface DemoModalProps {
  children: React.ReactNode;
}

const questionFormSchema = z.object({
  email: z.string().email("Пожалуйста, введите корректный email"),
  name: z.string().min(2, {
    message: "Имя должен содержать минимум 2 символов",
  }),
  phone: z
    .string()
    .min(11, "Номер должен содержать 11 цифр")
    .regex(/^7\d{10}$/, "Введите номер в формате +7 999 999 99 99"),
});

type QuestionFormValues = z.infer<typeof questionFormSchema>;

export const DemoModal = ({ children }: DemoModalProps) => {
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
      name: "",
      phone: "",
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
    <Dialog>
      <DialogTrigger asChild>{children || <button>open</button>}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-[32px] text-[#1E344F] leading-[120%] mb-[15px]">
            {t("main")}
          </DialogTitle>
          <DialogDescription>
            <label className="block text-[18px] font-medium  text-[#1E344F] mb-[20px]">
              {t("main-2")}
            </label>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-full lg:max-w-[522px] flex flex-col gap-[20px]"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-1 text-[18px]  text-[#1E344F] font-medium"
                >
                  {t("title-4")}
                </label>
                <input
                  id="name"
                  className="w-full p-2 border border-[#C1D1F7] rounded-[24px]          hover:!border-[#2463EB] focus:!border-[#2463EB] active:!border-[#2463EB] duration-200"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 text-[18px] text-[#1E344F]  font-medium"
                >
                  {t("title-5")}
                </label>
                <PhoneInput
                  {...register("phone", {
                    onChange: (e) => {
                      const numbers = e.target.value.replace(/\D/g, "");
                      e.target.value = numbers; // Сохраняем только цифры
                      return numbers;
                    },
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="email"
                  className="block mb-1 text-[18px] text-[#1E344F]  font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-[#C1D1F7] rounded-[24px]          hover:!border-[#2463EB] focus:!border-[#2463EB] active:!border-[#2463EB] duration-200"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  checked={checked}
                  onCheckedChange={handleCheckedChange}
                />
                <label htmlFor="consent" className="text-sm">
                  {t("label-1")}{" "}
                  <span className="text-[#2463EB]">{t("label-2")}</span>
                </label>
              </div>
              <div className="flex flex-row items-center w-full gap-[20px] justify-between">
                <Button
                  variant="ordinary"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full max-w-[240px] "
                >
                  {isSubmitting ? "..." : b("up-2")}
                </Button>
                <Button
                  variant="ordinary"
                  disabled={isSubmitting}
                  className="w-full max-w-[240px] "
                >
                  {isSubmitting ? "..." : b("up-2")}
                </Button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
