import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const AnalysIcon = ({
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
        d="M1.2002 8.40002H22.8002V10.8H1.2002V8.40002ZM1.2002 13.2H18.0002V15.6H1.2002V13.2Z"
        fill="#2463EB"
      />
    </svg>
  );
};
