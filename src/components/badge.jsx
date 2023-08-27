import React, { useState } from 'react'
import './badge.css'

const Badge = ({ color, text }) => {
  // чтобы не менялся цвет при нажатии на кнопки на странице
  const [colorState, setColorState] = useState()

  if (!colorState) {
    setColorState(color)
  }

  return (
    <div style={{ color: colorState }}>
      <div
        style={{ boxShadow: '0px 0px 10px 0px inherit' }}
        className='badge py-[7px] px-[15px] m-[9px] rounded-lg'
      >
        {text}
      </div>
    </div>
  )
}

export default Badge
