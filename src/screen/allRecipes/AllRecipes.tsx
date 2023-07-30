"use client"

import React, { useEffect, useState } from 'react'
import style from "./AllRecipes.module.scss"
import FilterComponent from '@/components/filterComponent/FilterComponent'
import Card from '@/components/card/Card'
import Search from '@/components/search/Search'
import { filterOption , allRecipy } from '@/dummyData/filterOption'
import { toast } from 'react-toastify'
import {addToCart} from "../../redux/dataSlice/dataSlice"
import { useDispatch, useSelector } from 'react-redux'
  
function AllRecipes() {
    const [filter, setFilter] = useState<any>({})
    const [allCardData , setAllCardData] = useState(allRecipy)
   const dispatch = useDispatch()
   const storeData = useSelector((store :any) => {
    return store.cartData.cartData
   })
 
//handle change 

    const handleFiltername = (filterType :string, name :string) => {
        console.log("jaiho " ,filterType , name)
        if(filter[filterType]){
            let obj :any = {...filter}
            delete obj[filterType]
            if(filter[filterType] !== name){
             obj = {...obj , [filterType] :name} 
            }
           setFilter(obj)
        }else{
            setFilter({...filter , [filterType] :name})
        }
     }

     const handleClickCard = (data :any) => {
        const AddCartData = [...storeData]
           const check = AddCartData?.find((item) => item.id === data.id)
           if(check){
            toast.error(" Cart Already added")
           }
           else{
             AddCartData.push(data)
            dispatch(addToCart(AddCartData))
            toast.success("Cart Added Successfully !")
           }
      
     }


    //useEffect

    useEffect(
        () => {
            const mainData = allRecipy
      if(filter && Object.keys(filter)?.length){
        let newArray = mainData?.filter(
            (item :any) => {
                return Object.entries(filter).every(([key, value]) => {
                    return item.hasOwnProperty(key) && item[key] === value;
                  });
            
            }
        )

        setAllCardData(newArray)
      }
      else{
        setAllCardData(allRecipy)
      }
        },[filter]
    )



console.log("jaiho state", filter )
  return (
    <div className={style.allRecipesWrapper} >
     <div className={style.sideSection}>
      <div>
        <h1 className={style.headingtext}>Filter Recipes:</h1>
        <p className={style.paraText}>Check multiple boxes below to narrow recipe search results:</p>
      </div>
      {
        filterOption?.map((data :any , i : number) => {
            return (
                <div key={i}>
                <FilterComponent 
                 headingName ={data?.filterName} 
                 data ={data?.options} 
                 handleChangeFilter ={handleFiltername}
                /> 
                </div>
            )
        })
      }
        <div className={style.searchComp}>
        <p className={style.searchname}>Search Recipe Titles: </p>
         <Search placeholderName='Enter keyword..' buttonColor='black'/>
        </div>

        </div>
        {
            allCardData?.length > 0 ?
            <div className={`${style.cardContainer} `}>
            {
                allCardData?.map((e:any , i :number) => {
                    return(
                        <div key={i}  onClick={() => handleClickCard(e)}>
                        <Card imgUrl={e?.imgUrl} description={e?.description} />
                        </div>
                    )
                })
                
            }
        
        </div> :
          <div className={style.nofood}><h2>No food found as per applied filter</h2> </div>
        }
       
    </div>
  )
}

export default AllRecipes