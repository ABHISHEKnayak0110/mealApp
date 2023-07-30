import React from 'react'
import style from "./Search.module.scss"
import { FaSearch } from 'react-icons/fa';
import Dropdown from '../dropdown/Dropdown';


interface propsSearch {
    placeholderName : string
    buttonColor : string
}

function SearchWithDropdown(props : propsSearch) {
    const bgColor ={
        backgroundColor : props.buttonColor
     }
  return (
    <div className="w-full flex items-center border  overflow-hidden">
    <Dropdown/>
    <input
      type="text"
      placeholder={props.placeholderName}
      className="p-2 flex-grow outline-none"
    />
    <button className={`p-4 hover:opacity-2 text-white`} style={bgColor}>
      <FaSearch size={14} />
    </button>
  </div>
  )
}

export default SearchWithDropdown