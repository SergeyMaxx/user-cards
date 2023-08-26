import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ styles, value, rounded = true, label }) {
  const circleWidth = 200;
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * value) / 100;
  return (
    <>
      <div className=" w-[200px] px-2">
        {label && (
          <div className=" ">
            <span className=" text-[#151515] pl-1 ">{label}</span>
          </div>
        )}
        <div
          className={
            ` h-5 overflow-hidden border w-full ` +
            styles +
            (rounded ? " rounded-md " : " ")
          }
        >
          <div
            className={" h-full bg-blue-500 flex items-center "}
            style={{ width: `${value}%` }}
          >
            <span className=" text-black text-xs pl-2">{value}%</span>
          </div>
        </div>
      </div>
      <div>
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={"15px"}
            r={radius}
            className=" fill-none stroke-slate-400"
          />
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={"15px"}
            r={radius}
            className=" fill-none stroke-blue-500 line"
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          />
          <text
            x={"50%"}
            y={"50%"}
            dy={"0.3em"}
            textAnchor="middle"
            className=" text-3xl font-bold"
          >
            {value}%
          </text>
        </svg>
      </div>
    </>
  );
}

ProgressBar.propTypes = {
  styles: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rounded: PropTypes.bool,
  label: PropTypes.string,
};
export default ProgressBar;
