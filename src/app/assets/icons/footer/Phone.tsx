import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const PhoneFooterIcon = ({
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
        d="M19.23 15.2598L16.69 14.9698C16.3914 14.9347 16.0886 14.9678 15.8046 15.0665C15.5206 15.1652 15.2626 15.327 15.05 15.5398L13.21 17.3798C10.3714 15.9357 8.0641 13.6284 6.62004 10.7898L8.47004 8.93977C8.90004 8.50977 9.11004 7.90977 9.04004 7.29977L8.75004 4.77977C8.69356 4.29186 8.45951 3.84179 8.0925 3.51536C7.7255 3.18893 7.25121 3.00897 6.76004 3.00977H5.03004C3.90004 3.00977 2.96004 3.94977 3.03004 5.07977C3.56004 13.6198 10.39 20.4398 18.92 20.9698C20.05 21.0398 20.99 20.0998 20.99 18.9698V17.2398C21 16.2298 20.24 15.3798 19.23 15.2598Z"
        fill="#1E344F"
      />
    </svg>
  );
};
