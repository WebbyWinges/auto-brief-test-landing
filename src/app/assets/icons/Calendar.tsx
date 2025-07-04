import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const CalendarIcon = ({
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
        d="M2.5 9.5H21.5M2.5 9.5V20.5C2.5 20.7652 2.60536 21.0196 2.79289 21.2071C2.98043 21.3946 3.23478 21.5 3.5 21.5H20.5C20.7652 21.5 21.0196 21.3946 21.2071 21.2071C21.3946 21.0196 21.5 20.7652 21.5 20.5V9.5M2.5 9.5V5C2.5 4.73478 2.60536 4.48043 2.79289 4.29289C2.98043 4.10536 3.23478 4 3.5 4H20.5C20.7652 4 21.0196 4.10536 21.2071 4.29289C21.3946 4.48043 21.5 4.73478 21.5 5V9.5"
        stroke="#2463EB"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M8 15.5L11 18.5L17 12.5"
        stroke="#2463EB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 2.5V6.5M16 2.5V6.5"
        stroke="#2463EB"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
