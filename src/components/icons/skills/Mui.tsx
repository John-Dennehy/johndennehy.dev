import { SVGProps } from "react";

export default function MuiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <path
        d="M0 2.001V12.391L3 14.124V7.196L9 10.661L15 7.196V10.661L9 14.124V17.588L15 21.051L24 15.856V8.928L21 10.661V14.124L15 17.588L12 15.856L18 12.391V2.001L9 7.196L0 2.001ZM24 2.001L21 3.731V7.196L24 5.464V2V2.001Z"
        fill="currentColor"
      />
    </svg>
  );
}
