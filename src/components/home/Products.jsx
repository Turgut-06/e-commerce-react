import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryProducts, getProducts } from '../../redux/productSlice'
import Loading from "../../Loading"
import Product from "./Product"
import ReactPaginate from 'react-paginate';


const Products = ({category,sort}) => {

  const dispatch = useDispatch()
  const { products, productsStatus } = useSelector(state => state.products) // products adı store da kaydettiğimiz isim

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage=6 // bir sayfada kaç tane görüneceği
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset); // currentItems içine atıyor 
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if(category) //category nin içi dolu geliyorsa tıklanmışsa 
    {
      dispatch(getCategoryProducts(category))

    }
    else{
      dispatch(getProducts())

    }
  }, [dispatch,category]) //api dan veri getirme işlemi category e bağlı olarak da değişecek

  console.log(products)
  return (
    <div>
      {
        //sıralama işlemini front end tarafta yapıyoruz 
        productsStatus === "LOADING" ? <Loading /> :
        <>
          <div className='flex flex-wrap'>
            {
              currentItems?.sort((a,b) => sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : "").map((product, i) => ( //pagination sonucunu currentItems a attığımız için bunu map yapıyoruz 
                <Product key={i} product={product} />
              ))
            }
          </div>
          <ReactPaginate  //bunun css ini index.css de yazdık
         className='paginate'
         breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
        </>

          
      }
    </div>

  )
}

export default Products