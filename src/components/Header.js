import React from 'react'

function Header({ category, title}) {
  return (
    <div className='mb-10'>
      <p className='text-gray-400 dark:text-gray-300 capitalize'>
      {category}
      </p>
      <p className='text-slate-900 dark:text-gray-200 font-extrabold text-2xl mt-2 capitalize'>
      {title}
      </p>
    </div>
  )
}

export default Header;