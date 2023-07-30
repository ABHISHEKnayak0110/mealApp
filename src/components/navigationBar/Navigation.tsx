
import React from 'react'
import Link from 'next/link';
function Navigation() {
  return (
    <nav className="bg-neutral-950 h-10 flex items-center navbar justify-between w-full">
          <div className="flex space-x-8 text-sm font-light  ">
            <Link href="/">
              <p className="text-white">Forum</p>
            </Link>
            <Link href="/">
              <p className="text-white">Dessert</p>
            </Link>
            <Link href="/">
              <p className="text-white">Books</p>
            </Link>
            <Link href="/">
              <p className="text-white">All Recipes</p>
            </Link>
            <Link href="/">
              <p className="text-white">Popular</p>
            </Link>
          </div>
          <div className='text-white flex text-sm space-x-8 font-light  ' >
              <div className='cursor-pointer'>Register</div>
              <div className='cursor-pointer'>LogIn</div>
          </div>
    </nav>
  )
}

export default Navigation