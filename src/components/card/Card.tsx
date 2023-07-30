import React from 'react'
import style from "./Card.module.scss"
import { FaRegClock , FaRegThumbsUp} from 'react-icons/fa';

interface cardProps {
    imgUrl : string
    description : string
    tag ?: string
}

function Card(props : cardProps) {
  return (
    <div className={style.cardWrapper} >
    <div className="w-full transition-transform hover:scale-105">
      <img src = {props.imgUrl ? props.imgUrl :"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"} alt="Card Image" className="w-full h-52 object-cover mb-2 " />
       <div className='flex'>
       <span className= {`text-gray-600 mr-2 flex items-center  ${style.timethumpColor}`}> <FaRegClock size={12}/> <p className='ml-0.5' >{`10 Minutes`}</p></span>
       <span className={`text-gray-600 mr-2 flex items-center ${style.timethumpColor}`}> <FaRegThumbsUp size={12} /> <p className='ml-0.5'>{"Super Easy"}</p></span>
       </div>
      <p className={`text-gray-800 ${style.describtion} `}>{ props.description ? props.description :"Overnight oatmeal and fig for breakfast weight loss"}</p>
    </div>
    </div>
  )
}

export default Card