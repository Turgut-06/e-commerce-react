import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {

  const navigate=useNavigate()
  return (
    <div onClick={()=> navigate(`products/${product?.id}`)} className='w-[350px] p-2 border rounded-md relative '>
        <div className='absolute top-0 right-2'>{product?.price}  TL </div> 
        <img className='w-[200px] h-[200px] object-cover m-auto py-2' src={product?.image}  alt="" />
        <div className='text-center bg-blue-200 px-4 font-bold mt-2 border-solid border-2 border-slate-700 h-[50px] overflow-auto	'>{product?.title}</div>
        </div>
  )
}

export default Product