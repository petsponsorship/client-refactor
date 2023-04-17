import React from "react";

interface ProgressBarProps {
  value: number;
}

function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full bg-[#d9d9d9] rounded-lg">
      <div
        className={`rounded-lg h-[15px] leading-4 bg-[#fba7a7]`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
