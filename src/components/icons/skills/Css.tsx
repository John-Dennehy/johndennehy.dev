import { SVGProps } from "react";

export default function CssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      {...props}
    >
      <path
        d="M1.25 0.625L1.93156 8.35563L5 9.375L8.06844 8.35563L8.75 0.625H1.25ZM7.36531 2.1875L7.27156 3.11125L5.01375 4.07594H7.19156L6.94156 6.93937L5.02375 7.5L3.09406 6.92969L2.96906 5.48625H3.92406L3.98656 6.23438L5.01375 6.49406L6.08219 6.19344L6.15438 4.99031L2.9025 4.98062L2.83219 4.07625L5.14875 3.11156H2.74844L2.635 2.18781L7.36531 2.1875Z"
        fill="currentColor"
      />
    </svg>
  );
}
