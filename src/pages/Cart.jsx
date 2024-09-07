import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import cartComp from '../cart/CartComp'

const Cart = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

    useEffect(() => {
        getCartTotal()

    }, [dispatch])
    return (
        <div>
            {
                carts.length > 0 ?
                    <div>
                        {
                            carts.map((cart, i) => (

                                <cartComp key={i} cart={cart} />

                            ))
                        }
                        <div>TOPLAM TUTAR : <span>{totalAmount} TL</span></div>

                    </div>

                    : <div>Sepetiniz boş</div>
            }

        </div>
    )
}

export default Cart