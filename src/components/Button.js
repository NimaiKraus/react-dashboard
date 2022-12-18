import React from 'react'

function Button({ size, color, bgColor, text, borderRadius }) {
  return (
    <button
    style={{ 
      color, backgroundColor: bgColor, borderRadius, marginTop:"12px"
    }}
    className={`text-${size}, p-2`}
    type="button"
    >
      {text}
    </button>
  )
}

export default Button