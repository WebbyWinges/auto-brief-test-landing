import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const MinusIcon = ({ className, ...props }: IPopsIcons): JSX.Element => {
  return (
    <svg
      {...props}
      className={className}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.3335 8.5H12.6668"
        stroke="#2463EB"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
