import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ styles, value, rounded = true, label, type = 'bar' }) {
  const circleWidth = 100;
  const radius = circleWidth / 2 - 15 / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * value) / 100;

  return (
    <>
      <div className=" w-[200px] px-2 my-3">
        {label && (
          <div className="mb-[5px] flex justify-center">
            <span className="dark:text-slate-100 text-gray-800  text-xl  uppercase ">
              {label}
            </span>
          </div>
        )}
        {type === 'bar' && (
          <div
            className={
              ` h-10 overflow-hidden border w-full  bg-gray-200` +
              styles +
              (rounded ? ' rounded-md ' : ' ')
            }
          >
            <div
              className={' h-full bg-blue-500 flex items-center '}
              style={{ width: `${value}%` }}
            >
              <span className=" dark:text-slate-100 text-xl pl-2  text-gray-800">
                {value}%
              </span>
            </div>
          </div>
        )}
        {type === 'circle' && (
          <div className=" flex justify-center">
            <svg
              width={circleWidth}
              height={circleWidth}
              viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            >
              <circle
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                strokeWidth={'15px'}
                r={radius}
                className=" fill-none stroke-gray-200"
              />
              <circle
                cx={circleWidth / 2}
                cy={circleWidth / 2}
                strokeWidth={'15px'}
                r={radius}
                className=" fill-none stroke-blue-500 "
                style={{
                  strokeDasharray: dashArray,
                  strokeDashoffset: dashOffset,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                }}
                transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
              />
              <text
                x={'50%'}
                y={'50%'}
                dy={'0.3em'}
                textAnchor="middle"
                className=" dark:fill-slate-100 text-xl fill-gray-800"
              >
                {value}%
              </text>
            </svg>
          </div>
        )}
      </div>
    </>
  );
}

ProgressBar.propTypes = {
  styles: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rounded: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
};
export default ProgressBar;
