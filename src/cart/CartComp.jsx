import React, { useEffect } from 'react'
import { removeFromCart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {

   const dispatch= useDispatch()

   
  return (
    <div className='flex items-center justify-between'>
        <img src={cart.image} alt="" />
        <div>
            <div>{cart.title}</div>
            <div>{cart.description}</div>

        </div>
        <div>{cart.price} TL ({cart.quantity})</div>
        <div onClick={()=>  dispatch(removeFromCart(cart.id))} className='cursor pointer'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp