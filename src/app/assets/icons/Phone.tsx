import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const PhoneIcon = ({ className, ...props }: IPopsIcons): JSX.Element => {
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
        d="M19.23 15.26L16.69 14.97C16.3914 14.9349 16.0886 14.968 15.8046 15.0667C15.5206 15.1654 15.2626 15.3273 15.05 15.54L13.21 17.38C10.3714 15.9359 8.0641 13.6286 6.62004 10.79L8.47004 8.94001C8.90004 8.51001 9.11004 7.91001 9.04004 7.30001L8.75004 4.78001C8.69356 4.2921 8.45951 3.84204 8.0925 3.51561C7.7255 3.18918 7.25121 3.00921 6.76004 3.01001H5.03004C3.90004 3.01001 2.96004 3.95001 3.03004 5.08001C3.56004 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z"
        fill="#2463EB"
      />
    </svg>
  );
};
