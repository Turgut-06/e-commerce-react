import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
    var settings = {
        // dots: true, // resim sayılarını belirten noktalar
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true
      };
  return (
    <div className='bg-blue-100'>
      <Slider{...settings}>
      <div className='!flex items-center mt-8'>
        <div>
            <div className='text-5xl font-bold'>En kaliteli ayakkabılar burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rem voluptates repudiandae, dolore perspiciatis similique placeat, explicabo cumque sint officia inventore laborum eum dolores fugiat doloremque alias, officiis repellat id.
            </div>
            <div className='text-2xl border rounded-full ml-6 cursor-pointer w-[200px] flex items-center justify-center bg-orange-200  '>İncele</div>
        </div>
        <img className="mb-5"  src="https://resim.epey.com/423054/m_adidas-superstar-fu7712-1.jpg" alt="" />
      </div>
      <div className='!flex items-center mt-8'>
      <div >
            <div className='text-5xl font-bold'>En kaliteli ayakkabılar burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rem voluptates repudiandae, dolore perspiciatis similique placeat, explicabo cumque sint officia inventore laborum eum dolores fugiat doloremque alias, officiis repellat id.
            </div>
            <div className='text-2xl border rounded-full cursor-pointer w-[200px] flex items-center justify-center bg-orange-100  '>İncele</div>
        </div>
        <img className='mb-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1s-uTcDYqNgjPKRmdwJX5BjV0Cp5EvN8G-g&s" alt="" />
      </div>
      
    </Slider>
    </div>
  )
}

export default SliderComp