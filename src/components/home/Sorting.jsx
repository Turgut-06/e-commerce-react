import React from 'react'

const Sorting = ({setSort}) => {
  return (
    //  e.target.value çalışınca bana inc veya dec olarak veriyi verecek
    <div className='bg-white-100 my-5 p-5  flex items-center justify-end '>
        <select onChange={(e)=> setSort(e.target.value) } className='bg-gray-400 py-3 px-5' name="" id="">  
            <option disabled value="">Seçiniz</option> 
            <option value="inc">Artan</option>
            <option value="dec">Azalan</option>
        </select>
    </div>
  )
}

export default Sorting