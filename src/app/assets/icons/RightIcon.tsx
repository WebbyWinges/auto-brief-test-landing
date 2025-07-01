import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;
export const RightIcon = ({ className, ...props }: IPopsIcons): JSX.Element => {
  return (
    <svg
      {...props}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12L18 12M18 12L12.3333 6.33332M18 12L12.3333 17.6667"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
