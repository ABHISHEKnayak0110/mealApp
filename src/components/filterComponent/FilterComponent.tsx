"use client"
import React, { useState } from 'react'
import style from "./FilterComponent.module.scss"

interface propsFilter {
 headingName : string
 data : Array<Record<string , any>>
 handleChangeFilter : CallableFunction
}

function FilterComponent(props : propsFilter) {
    const [checkedvalue , setCheckedValue] = useState<string>()
    const handleCheckbox =(name :string , headingName ?:string) => {
        name === checkedvalue ? setCheckedValue("") : setCheckedValue(name)
        props.handleChangeFilter(headingName , name) 
    }

  return (
    <div className={style.filterComponentWrapper}>
      <p className={style.headingFilter}>{props.headingName}:</p>
      <div className={style.container}>
       {
        props.data?.map((e:any , i :number) => {
            return (
                <div className={style.checkboxContainer} key={i}>
                <input 
                  className={style.checkBox}
                 type="checkbox" 
                 checked ={checkedvalue === e?.name ? true : false}
                 onChange={() => handleCheckbox(e?.name , props.headingName) }
                />
                <p className={style.filterName}>{e?.name}{` (${e?.quantity})`}</p>
              </div>
            )
        })
       }
       </div>
    </div>
  )
}

export default FilterComponent