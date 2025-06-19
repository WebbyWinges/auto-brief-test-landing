"use client";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
}

export const PhoneInput = ({ register, ...props }: PhoneInputProps) => {
  const formatPhone = (value: string) => {
    if (!value) return "";

    const numbers = value.replace(/\D/g, "");
    const length = numbers.length;

    if (length === 0) return "";
    if (length <= 1) return `+7 ${numbers}`;
    if (length <= 4) return `+7 ${numbers.slice(1, 4)}`;
    if (length <= 7) return `+7 ${numbers.slice(1, 4)} ${numbers.slice(4, 7)}`;
    if (length <= 9)
      return `+7 ${numbers.slice(1, 4)} ${numbers.slice(4, 7)} ${numbers.slice(
        7,
        9
      )}`;
    return `+7 ${numbers.slice(1, 4)} ${numbers.slice(4, 7)} ${numbers.slice(
      7,
      9
    )} ${numbers.slice(9, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    const rawValue = formatted.replace(/\D/g, "");

    // Обновляем значение для react-hook-form
    if (register?.onChange) {
      register.onChange({
        target: {
          name: register.name,
          value: rawValue,
        },
      });
    }

    // Обновляем отображаемое значение
    e.target.value = formatted;
  };

  return (
    <input
      type="tel"
      {...props}
      {...register}
      onChange={handleChange}
      placeholder="+7 ___ ___ __ __"
      className="w-full p-2 border border-[#C1D1F7] rounded-[24px]"
    />
  );
};
