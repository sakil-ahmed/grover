import React from "react";

function CartIcon({ fill = "#3C3737", stroke = "#3C3737" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M1.014 10.084a.464.464 0 01.45-.576h21.072c.302 0 .523.283.45.576L20.059 21.79a.927.927 0 01-.9.703H4.84a.927.927 0 01-.9-.703L1.015 10.084zm11.736 3.541a.75.75 0 00-1.5 0v4.75a.75.75 0 001.5 0v-4.75zm4.319-.561a.75.75 0 01.448.961l-1.624 4.464a.75.75 0 11-1.41-.513l1.625-4.464a.75.75 0 01.96-.448zm-9.177.448a.75.75 0 10-1.41.513l1.625 4.464a.75.75 0 101.41-.513l-1.625-4.464z"
        clipRule="evenodd"
      ></path>
      <path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M18.5 10.5l-4.911-6.422a2 2 0 00-3.178 0L5.5 10.5"
      ></path>
    </svg>
  );
}

export default CartIcon;
