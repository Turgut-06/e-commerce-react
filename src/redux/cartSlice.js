import { createSlice } from "@reduxjs/toolkit";

 
const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem("cart")

    if(cart)
    {
        return JSON.parse(localStorage.getItem("cart"))

    }
    else {
        return []
    }
}

const storeInLocalStorage = (data) => {

    localStorage.setItem("cart", JSON.stringify(data))
}
 
 const initialState = {
    carts : fetchFromLocalStorage(),
    itemCount : 0,
    totalAmount : 0
 }


 const cartSlice= createSlice({
    name: "cart",
    initialState,
    reducers : { // api üzerinden dışardan işlem değilde içerden işlem olduğundan extraReducer yerine reducer kullanıyoruz 
      addToCart : (state,action) => {

        if (Array.isArray(state.carts)) {

        const isItemCart = state.carts.find(item => item.id === action.payload.id) // içerdeki ürünle dışardan eklenmeye çalışılan ürün aynı mı aynıysa hesap yapıp return ediyoruz
        if(isItemCart)
        {
            const tempCart = state.carts.map (item => {
                if(item.id === action.payload.id ) {
                    let tempQuantity = item.quantity + action.payload.quantity
                    let tempTotalPrice = tempQuantity * item.price

                    return{
                        ...item , quantity : tempQuantity , totalPrice : tempTotalPrice
                    }
                }
                else {
                    return item 
                }

        })

        state.carts = tempCart
        storeInLocalStorage(state.carts)


      }
    
      else{
        state.carts.push(action.payload)
        storeInLocalStorage(state.carts)

      }
    }
 
    },
    removeFromCart : (state,action) => {
        const tempCart= state.carts.filter(item => item.id !== action.payload) // silinmek istenen veriyi almıyor diğerlerini alıyor 
        state.carts = tempCart
        storeInLocalStorage(state.carts)

    },
    clearCart : (state) => {
        state.carts = []
        storeInLocalStorage(state.carts)


    },

    getCartTotal : (state) => {
        if (Array.isArray(state.carts)) {

        state.totalAmount = state.carts.reduce((cartTotal,cartItem) => { //reduce toplama fonksiyonum 
            return cartTotal += cartItem.price * cartItem.quantity
        },0)

        state.itemCount = state.carts.length
    }
}

}})


export const {addToCart,removeFromCart,clearCart,getCartTotal} = cartSlice.actions //reducer içindeki actionları ayrı export ediyoruz rahatlıkla kullanmak için 
export default cartSlice.reducer