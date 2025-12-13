

import React from 'react'

export default function MenuIcon(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"
    />
  </svg>
  )
}
