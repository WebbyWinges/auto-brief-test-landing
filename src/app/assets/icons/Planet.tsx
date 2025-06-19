import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const Planet = ({ className, ...props }: IPopsIcons): JSX.Element => {
  return (
    <svg
      {...props}
      className={className}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9966 21.0009C16.5194 21.0009 20.9966 16.5238 20.9966 11.0009C20.9966 5.47807 16.5194 1.00092 10.9966 1.00092C5.47373 1.00092 0.996582 5.47807 0.996582 11.0009C0.996582 16.5238 5.47373 21.0009 10.9966 21.0009Z"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.996582 11.0005H20.9966"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9966 21.0009C13.2057 21.0009 14.9966 16.5238 14.9966 11.0009C14.9966 5.47807 13.2057 1.00092 10.9966 1.00092C8.78743 1.00092 6.99658 5.47807 6.99658 11.0009C6.99658 16.5238 8.78743 21.0009 10.9966 21.0009Z"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.9248 4.07261C5.73445 5.88226 8.23445 7.00156 10.9958 7.00156C13.7573 7.00156 16.2573 5.88226 18.0669 4.07261"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.0669 17.9303C16.2573 16.1207 13.7573 15.0014 10.9958 15.0014C8.23445 15.0014 5.73445 16.1207 3.9248 17.9303"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
