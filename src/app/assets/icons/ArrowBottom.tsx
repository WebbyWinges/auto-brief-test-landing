import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const ArrowBottom = ({
  className,
  ...props
}: IPopsIcons): JSX.Element => {
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
        d="M4 8L12 16L20 8"
        stroke="#2463EB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
