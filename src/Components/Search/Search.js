import React, { useState } from 'react'
import { Search as SearchIcon } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { FindMovie } from '../../store/reducer'

const Search = () => {

  const dispatch = useDispatch()

  const [value, setValue] = useState('')

  return (
    <div className='relative w-[300px] h-[40px]'>
      <input value={value} onKeyUp={(e) => e.key === 'Enter' && dispatch(FindMovie(value))} onChange={(e) => setValue(e.target.value)} type='text' name='Search' placeholder='Search' className='absolute top-0 left-0 w-full h-full text-white bg-transparent border outline-none rounded-[4px] pl-[45px] pr-[10px] backdrop-blur-[10px]' />
      <SearchIcon onClick={() => dispatch(FindMovie(value))} size={25} name='Search-Icon' className='absolute cursor-pointer top-1/2 left-[10px] -translate-y-1/2 pr-[10px] text-white border-r-[1px] border-white' />
    </div>
  )
}

export default Search