import React from 'react'
import { SearchIcons } from '../../../../assets/icons/search'

export const Search = () => {
  return (
    <div className="flex justify-between items-center w-[630px] px-[20px] py-[15px] border border-black ">
      <input type="text" placeholder='Поиск' className='h-full w-[400px]' />
      <div>
      <SearchIcons /> 
      </div>
    </div>
  )
}
