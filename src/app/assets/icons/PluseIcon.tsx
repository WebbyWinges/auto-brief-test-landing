import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const PluseIcon = ({ className, ...props }: IPopsIcons): JSX.Element => {
  return (
    <svg
      {...props}
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.3335 8H12.6668"
        stroke="#1E344F"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M8 3.33325V12.6666V3.33325Z" fill="#1E344F" />
      <path
        d="M8 3.33325V12.6666"
        stroke="#1E344F"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
