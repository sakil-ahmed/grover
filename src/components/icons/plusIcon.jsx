import React from "react";

function PlusIcon({ color = "#fff" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill={color}
        d="M7.737.737a.737.737 0 10-1.474 0v5.526H.737a.737.737 0 100 1.474h5.526v5.526a.737.737 0 001.474 0V7.737h5.526a.737.737 0 000-1.474H7.737V.737z"
      ></path>
    </svg>
  );
}

export default PlusIcon;
