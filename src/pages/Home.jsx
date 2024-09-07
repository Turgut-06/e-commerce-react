import React, { useState } from 'react'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

const Home = () => {

  const[sort,setSort] = useState("");
  const[category,setCategory] = useState("");
  
  //category e setCategory i props olarak geçip her kategoriye tıklandığında category ismini setCategory e attım gelen değerleri de products a geçtim  
  return (
    <div>
      <SliderComp/>
      <Sorting setSort={setSort}/>
      <div className='flex'>   
        <Category setCategory={setCategory}/>  
        <Products category={category} sort={sort}/>

      </div>
    </div>
  )
}

export default Home