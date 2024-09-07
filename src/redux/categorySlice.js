import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    categories : []
}

//createAsyncThunk redux toolkit den gelen asenkron işlemleri yönetmeyi kolaylaştırır
export const getCategories = createAsyncThunk( 'category',async() => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    const data = response.json()
    return data
})



//reducer fonksiyonu genelde içerden olan statik işlemler için extraReducer ise dışarıdan olan işlemlerde api çağrısı gibi kullanılır 
export const categorySlice = createSlice({

    name : "categories",
    initialState,
    reducers : {} , // backend e istek atmadığım yerde burası çalışacak 
    extraReducers : (builder) => {
        builder.addCase (getCategories.fulfilled, (state,action) => {
            state.categories = action.payload; // action.payload getCategories işleminin sonucu  , state ise initialState e erişmemi sağlar 
        })
    }

})

export default categorySlice.reducer
