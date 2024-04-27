import React from 'react'
import Search from '../Search/Search'

const Header = () => {


  return (
    <header className='fixed top-0 left-0 w-full flex justify-between z-[1000] px-[30px] py-[10px] items-center transition duration-[0.5s]'>
      <a href={'/'} className='text-[35px] font-racing-sans-one font-extrabold uppercase tracking-[2px] text-white' >Cinema</a>
      <Search />
    </header>
  )
}

export default Header