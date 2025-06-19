import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const TelegramFooterIcon = ({
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
      <g clip-path="url(#clip0_311_956)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.7771 4.42997C19.0243 4.32596 19.2947 4.29008 19.5604 4.32608C19.8261 4.36208 20.0773 4.46863 20.2878 4.63465C20.4984 4.80067 20.6606 5.02008 20.7575 5.27005C20.8545 5.52002 20.8827 5.79141 20.8391 6.05597L18.5711 19.813C18.3511 21.14 16.8951 21.901 15.6781 21.24C14.6601 20.687 13.1481 19.835 11.7881 18.946C11.1081 18.501 9.02514 17.076 9.28114 16.062C9.50114 15.195 13.0011 11.937 15.0011 9.99997C15.7861 9.23897 15.4281 8.79997 14.5011 9.49997C12.1991 11.238 8.50314 13.881 7.28114 14.625C6.20314 15.281 5.64114 15.393 4.96914 15.281C3.74314 15.077 2.60614 14.761 1.67814 14.376C0.424142 13.856 0.485142 12.132 1.67714 11.63L18.7771 4.42997Z"
          fill="#1E344F"
        />
      </g>
      <defs>
        <clipPath id="clip0_311_956">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
