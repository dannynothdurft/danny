"use client";

function Launch({ width = "24px", height = "24px" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 6.5H5.5V19.5H18.5V11M20.5 4.5L10.5 14.5"
        stroke="currentColor"
        stroke-width="1.2"
      />
      <path d="M16 4.5H20.5V9" stroke="curentColor" strokeWidth="1.2" />
    </svg>
  );
}

export default Launch;
