import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({productDetail}) => {
   const [quantity,setQuantity] = useState(0)
   const dispatch= useDispatch();

   const addBasket = () => {

     
      dispatch(addToCart({id: productDetail.id,title: productDetail.title,image:productDetail.image,price:productDetail.price,quantity:productDetail.quantity}))

   }

   const decrement  = () => {
      if(quantity>0)
      {
        setQuantity(quantity-1)
      }
   }

   const increment = () => {
    if(quantity < productDetail?.rating?.count){
        setQuantity(quantity+1)
    }
   }
  return (
    <div className='flex gap-10'>
        <img className='w-[700px] h-[700px] object-cover' src={productDetail?.image} alt="" />

        <div>
            <div>{productDetail?.title}</div>
            <div>{productDetail?.description}</div>
            <div> Rating : {productDetail?.rating?.rate}</div>
            <div> Count {productDetail?.rating?.count}</div>
            <div>{productDetail?.price}</div>
            <div className='flex'>
                <div onClick={decrement} className='cursor-pointer'>-</div>
                <div> {quantity}  </div>
                <div onClick={increment} className='cursor-pointer'>+</div>
            </div>
            <button onClick={addBasket}>Sepete Ekle</button>




        </div>
    </div>
  )
}

export default DetailComp