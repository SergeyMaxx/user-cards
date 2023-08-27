import React from 'react'
import './badge.css'

const Badge = ({ color, text }) => {
  return (
    <div
      style={{ boxShadow: `0px 0px 0px 0px ${color}`, color: color }}
      className='badge py-[7px] px-[15px] m-[7px] rounded-lg'
    >
      <div
        style={{ boxShadow: '0px 0px 10px 0px inherit' }}
      >
        {text}
      </div>
    </div>
  )
}

export default Badge
