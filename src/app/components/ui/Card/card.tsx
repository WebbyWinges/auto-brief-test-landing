import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/app/lib/utils/utils";

const cardVariants = cva("  ", {
  variants: {
    variant: {
      default: "bg-[#C1D1F7]",
      border: " bg-[#C1D1F7] ",
      shadow: "!bg-[#f5f6fc] shadow-sm",
    },
    size: {
      default: "rounded-3xl  ",
      xs: "p-[12px] rounded-[16px] ",
      xxs: "p-[8px]",
      sm: "p-4 rounded-5",
      ssm: "p-8",
      md: "p-[50px]",
      lg: "px-[120px] py-[50px]",
      error: "p-4 rounded-[16px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card = ({
  asChild = false,
  children,
  className,
  variant,
  size,
  ...props
}: CardProps) => {
  return (
    <div className={cn(cardVariants({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
};
