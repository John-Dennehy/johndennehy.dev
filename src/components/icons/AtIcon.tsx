import { SVGProps } from "react";

export default function AtIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.182 2.817a4.5 4.5 0 1 0-.74 6.963.75.75 0 1 1 .816 1.258A6 6 0 1 1 12 6a2.25 2.25 0 0 1-3.6 1.8A3 3 0 1 1 9 6a.75.75 0 1 0 1.5 0c0-1.153-.44-2.302-1.318-3.182ZM7.5 5.999a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
