import React from 'react'
// import './badge.css'

const Badge = ({ color, text }) => {
  // const myFunction = () => {
  //   badgeElement.animate(
  //     [
  //       // keyframes
  //       { boxShadow: `0px 0px 10px 0px ${color}` },
  //       { boxShadow: `0px 0px 0px 0px ${color}` },
  //       { boxShadow: `0px 0px 10px 0px ${color}` }
  //     ],
  //     {
  //       // timing options
  //       duration: 1000,
  //       iterations: Infinity,
  //     }
  //   )
  // }

  return (
    <div
      style={{boxShadow: `0px 0px 10px 0px ${color}`}}
      className='py-[7px] px-[15px] m-[7px] rounded-lg'
    >
      {text}
    </div>
  )
}

export default Badge
