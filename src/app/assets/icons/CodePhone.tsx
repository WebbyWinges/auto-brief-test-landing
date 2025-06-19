import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const CodePhoneIcon = ({
  className,
  ...props
}: IPopsIcons): JSX.Element => {
  return (
    <svg
      {...props}
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 8C0 3.58172 3.58172 0 8 0H26C30.4183 0 34 3.58172 34 8V26C34 30.4183 30.4183 34 26 34H8C3.58172 34 0 30.4183 0 26V8Z"
        fill="#DCE4F9"
      />
      <path
        d="M10 13C10.01 10.356 10.108 8.941 11.024 8.025C12.049 7 13.699 7 16.999 7C20.299 7 21.949 7 22.974 8.025C23.89 8.941 23.987 10.355 23.997 13M10 21C10.01 23.644 10.108 25.059 11.024 25.975C12.049 27 13.699 27 16.999 27C20.299 27 21.949 27 22.974 25.975C23.89 25.059 23.987 23.645 23.997 21M16 24H18M21 15L22.227 16.057C22.742 16.502 23 16.724 23 17C23 17.276 22.742 17.498 22.227 17.943L21 19M13 15L11.773 16.057C11.258 16.502 11 16.724 11 17C11 17.276 11.258 17.498 11.773 17.943L13 19M18 14L16 20"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
