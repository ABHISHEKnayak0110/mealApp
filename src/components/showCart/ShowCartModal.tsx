import React from 'react'
import style from "./showCartModal.module.scss"
import Card from '../card/Card'
import { filterOption , allRecipy } from '@/dummyData/filterOption'
import { useSelector } from 'react-redux'

interface props{
    handleclose : CallableFunction
    handleRemoveCard :CallableFunction
}

function ShowCartModal(props : props) {
    const storeData = useSelector((store :any) => {
        return store.cartData.cartData
       })
  return (
    <div className={style.showCartModalWrapper}>
      <div className={style.popUpOuterDiv}>
                   <div className={style.close} onClick={() =>props.handleclose()}>X</div>
                   <div className={style.headingCart}>Cart Item {`(${storeData?.length})`}</div>
               { storeData?.length >0 ?
                <div className={style.formContainer}>
                {
                storeData?.map((e:any , i :number) => {
                    return(
                        <div key={i}>
                        <Card imgUrl={""} description={e?.description} />
                         <button className={style.buttonRemove}
                          onClick={() => props.handleRemoveCard(e)}
                         >Remove</button>
                        </div>
                    )
                })
                
            }
                 </div>
                 :
                  <div className={style.nofood}><h2>No Food Added in Cart</h2> </div>
}
               </div>
    </div>
  )
}

export default ShowCartModal