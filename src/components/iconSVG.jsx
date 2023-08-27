import React from 'react'
import PropTypes from 'prop-types'
import { RotatingTriangles } from 'react-loader-spinner'
import style from './loader.module.css'

const IconSVG = ({ id }) => {
  switch (id) {
    case 'dark':
      return (
        null
      )
    case 'light':
      return (
        null
      )
    default:
      return null
  }
}

IconSVG.propTypes = {
  id: PropTypes.string,
  log: PropTypes.array
}

export default IconSVG
