import React from 'react'
import './Button.scss'
export const Button = (props) => {
  return (
    <div className={`button ${props.type}`}>{props.title}</div>
  )
}
