"use client"
import React, { useState } from 'react'
import style from "./Header.module.scss"
import { FaRegBookmark } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Search from '../search/Search';
import ShowCartModal from '../showCart/ShowCartModal';
import { toast } from 'react-toastify';
import {removeToCart} from "../../redux/dataSlice/dataSlice"
import { useDispatch, useSelector } from 'react-redux'


function Header() {
    const [openCart , setOpenCart] = useState(false)

    //redux
     const dispatch = useDispatch()
    const storeData = useSelector((store :any) => {
        return store.cartData.cartData
       })

//handle changes
   const handleClickCart =() => {
       setOpenCart(!openCart)
   }
   const handleclose =() => {
    setOpenCart(false)
   }
   const handleRemove = (data :any) => {
    const newRemovedData = storeData?.filter((item :any)=> item.id !== data.id)
    dispatch(removeToCart(newRemovedData))
    toast.success("Cart has been removed !")

   }
  return (
    <>
     <div className={style.headerWrapper}>
        <div className={`${style.logoContainer}`}>
                <p className='italic'>Recipy</p>
                <p className={style.logoName} >EASYMEALS</p>
        </div>
        <div className={style.otherContainer}>
        <div className={style.searchContainer}>
          <Search placeholderName='Search recipes....' buttonColor='#eab308'/>
        </div>
        <div className='flex items-center cursor-pointer'>
         <span><FaRegBookmark size={16} /></span>
         <span className={style.cartName}>Favourites</span>
        </div>
         <div className={style.line}></div>
        <div className='flex items-center cursor-pointer' 
         onClick={handleClickCart}
        >
        <span><AiOutlineShoppingCart size={16}/></span>
        <span className={style.cartName}>Cart {` (${storeData?.length})`}</span>
        </div>
        </div> 
    </div>
    {
       openCart && <ShowCartModal 
       handleclose={handleclose}
       handleRemoveCard ={handleRemove}
        /> 
    }
    </>
  )
}

export default Header