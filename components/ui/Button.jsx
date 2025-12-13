import React from 'react'

export default function Button({children, ...props}) {
  return (
    <button {...props} className='bg-amber-500 text-black rounded-3xl p-2.5 font-semibold text-lg hover:bg-transparent hover:border-orange-500 hover:border-2 cursor-pointer'>
        {children}
    </button>
  )
}
