"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  UseFormRegisterReturn,
  useWatch,
  useFormContext,
} from "react-hook-form";

interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  register?: UseFormRegisterReturn;
  hasSubmitted: boolean;
}

export const PhoneInput = ({
  hasSubmitted,
  register,
  ...props
}: PhoneInputProps) => {
  const [displayValue, setDisplayValue] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    const trimmed = numbers.startsWith("7") ? numbers.slice(1) : numbers;
    const length = trimmed.length;

    let result = "+7";
    if (length > 0) result += ` ${trimmed.slice(0, 3)}`;
    if (length > 3) result += ` ${trimmed.slice(3, 6)}`;
    if (length > 6) result += ` ${trimmed.slice(6, 8)}`;
    if (length > 8) result += ` ${trimmed.slice(8, 10)}`;

    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 11);
    const formatted = formatPhone(raw);

    setDisplayValue(formatted);

    if (register?.onChange) {
      register.onChange({
        target: {
          name: register.name,
          value: raw,
        },
      });
    }
  };

  // 🔄 Обновление displayValue при reset()
  useEffect(() => {
    if (hasSubmitted == true) {
      const formatted = formatPhone("");
      setDisplayValue(formatted);
    }
  }, [hasSubmitted]);

  return (
    <input
      type="tel"
      inputMode="tel"
      placeholder="+7 999 999 99 99"
      {...props}
      name={register?.name}
      ref={(el) => {
        inputRef.current = el;
        if (register?.ref) register.ref(el);
      }}
      onBlur={register?.onBlur}
      value={displayValue}
      onChange={handleChange}
      className="w-full p-2 border lining-nums border-[#C1D1F7] rounded-[24px] hover:!border-[#2463EB] focus:!border-[#2463EB] active:!border-[#2463EB] duration-200"
    />
  );
};
