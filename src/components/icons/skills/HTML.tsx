import { SVGProps } from "react";

export default function HTMLIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <path
        d="M1.25 0.625L1.93156 8.35563L4.99031 9.375L8.06844 8.35563L8.75 0.625H1.25ZM7.26937 3.12313H3.67938L3.75937 4.08812H7.18906L6.92344 6.98656L5.01125 7.51406V7.52H4.98969L3.06188 6.98687L2.94469 5.50625H3.87625L3.94469 6.25031L4.98969 6.53344L6.03844 6.25031L6.15562 5.03563H2.89594L2.64594 2.19187H7.355L7.26937 3.12313Z"
        fill="currentColor"
      />
    </svg>
  );
}
