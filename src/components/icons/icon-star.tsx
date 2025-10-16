import * as React from "react";

const IconStar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#FFC633"
      stroke="#FFC633"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.683 1.53a.353.353 0 0 1 .634 0l1.54 3.12a1.416 1.416 0 0 0 1.063.773l3.444.504a.353.353 0 0 1 .196.602l-2.49 2.426a1.416 1.416 0 0 0-.408 1.252l.588 3.426a.354.354 0 0 1-.514.374l-3.079-1.619a1.415 1.415 0 0 0-1.315 0l-3.078 1.619a.354.354 0 0 1-.513-.374l.587-3.426a1.414 1.414 0 0 0-.407-1.252L1.44 6.53a.353.353 0 0 1 .196-.604l3.443-.503a1.415 1.415 0 0 0 1.065-.774l1.54-3.119Z"
    />
  </svg>
);
export default IconStar;
