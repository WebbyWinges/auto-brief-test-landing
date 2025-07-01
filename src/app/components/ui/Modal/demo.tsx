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
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../checkbox";
import toast from "react-hot-toast";
import { PhoneInput } from "./phone";
import { DownloadedIcon } from "@/src/app/assets/icons/DownLoaded";

interface DemoModalProps {
  children: React.ReactNode;
}

const questionFormSchema = z.object({
  email: z.string().email("Пожалуйста, введите корректный email"),
  name: z.string().min(2, {
    message: "Имя должен содержать минимум 2 символов",
  }),
  phone: z.string().min(11, "Номер должен содержать 11 цифр"),
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

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleCheckedChange = useCallback(
    (newChecked: boolean | "indeterminate") => {
      if (newChecked === "indeterminate") return;

      setChecked(newChecked);
    },
    []
  );

  const onSubmit = useCallback(
    async (data: QuestionFormValues) => {
      if (!hasSubmitted && !checked) {
        toast.error("Пожалуйста, дайте согласие на обработку данных");
        return;
      }

      const cleanedData = {
        ...data,
        phone: data.phone.replace(/\D/g, ""),
      };

      try {
        const response = await fetch("/api/sheet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cleanedData),
        });

        const result = await response.json();

        if (result.status === "success") {
          toast.success("Ваш вопрос успешно отправлен!");
          setHasSubmitted(true);
          reset();
        } else {
          console.error("Ошибка при отправке данных:", result.message);
          toast.error("Ошибка при отправке данных");
        }
      } catch (error) {
        console.error("Произошла ошибка при отправке:", error);
        toast.error("Произошла ошибка при отправке вопроса");
      }
    },
    [checked, reset, hasSubmitted]
  );

  const form = useForm();

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
            <FormProvider {...form}>
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
                    hasSubmitted={hasSubmitted}
                    autoComplete="tel"
                    register={register("phone")}
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
                    <a target="_blank" href="/files/Politics.pdf">
                      {t("label-1")}{" "}
                      <span className="text-[#2463EB]">{t("label-2")}</span>
                    </a>
                  </label>
                </div>
                <div className="flex flex-col md:flex-row items-center w-full gap-[12px] sm:gap-[20px] justify-between">
                  <Button
                    variant="ordinary"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:max-w-[240px] "
                  >
                    {isSubmitting ? "..." : b("up-2")}
                  </Button>
                  <a
                    target="_blank"
                    className="w-full sm:max-w-[240px] "
                    href="/files/pres.pdf"
                  >
                    <Button
                      type="button"
                      variant="ordinary-ghost"
                      className="w-full sm:max-w-[240px] "
                    >
                      {b("up-3")} <DownloadedIcon />
                    </Button>
                  </a>
                </div>
              </form>
            </FormProvider>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
