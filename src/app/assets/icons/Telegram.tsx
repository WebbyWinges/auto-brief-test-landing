import type { JSX, SVGAttributes } from "react";

type IPopsIcons = SVGAttributes<SVGSVGElement>;

export const TelegramIcon = ({
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.09024 12.4193L6.72076 11.6299C4.2406 10.8035 3 10.3903 3 9.63033C3 8.87142 4.2406 8.45718 6.72076 7.63081L15.6938 4.63944C17.4393 4.05761 18.312 3.7667 18.7726 4.22731C19.2333 4.68793 18.9423 5.56068 18.3616 7.30512L15.3692 16.2792C14.5428 18.7594 14.1296 20 13.3696 20C12.6107 20 12.1965 18.7594 11.3701 16.2792L10.5796 13.9108L15.1689 9.3215C15.3609 9.1227 15.4671 8.85645 15.4647 8.58008C15.4623 8.30372 15.3515 8.03935 15.156 7.84392C14.9606 7.64849 14.6963 7.53764 14.4199 7.53524C14.1435 7.53284 13.8773 7.63908 13.6785 7.83108L9.09024 12.4193Z"
        fill="#2463EB"
      />
    </svg>
  );
};
