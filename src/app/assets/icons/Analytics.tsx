import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const AnalyticsIcon = ({
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
        d="M27 7.5H7V13.5H27V7.5Z"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <path
        d="M7 25.515L13.088 19.365L16.3775 22.515L20.399 18.5L22.639 20.684"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27 13.086V26.086M7 13.086V20.086M11.508 26.5H27M13.5 10.5H24M10 10.4985H10.5"
        stroke="#2463EB"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
