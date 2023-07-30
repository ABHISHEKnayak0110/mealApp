"use client"
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-200 border-2 px-4 py-1 flex items-center text-xs/[5px]"
        onClick={toggleDropdown}
      >
        All Categories
        <FaChevronDown className={`ml-2 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-1 w-40 bg-lightGray rounded-lg shadow-lg z-auto">
          {/* Dropdown content */}
          <ul className="py-2 shadow-md">
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;