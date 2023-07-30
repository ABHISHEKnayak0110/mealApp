import FilterComponent from '@/components/filterComponent/FilterComponent'
import AllRecipes from '@/screen/allRecipes/AllRecipes'
import Image from 'next/image'

 const data =[
   {
    name : "hello",
    quantity : 1
   },
   {
    name : "hello",
    quantity : 1
   },
   {
    name : "hello",
    quantity : 1
   },{
    name : "hello",
    quantity : 1
   }
 ]


export default function Home() {
  return (
    <div>
      <div >
     <AllRecipes/>
      </div>

    </div>
  )
}
