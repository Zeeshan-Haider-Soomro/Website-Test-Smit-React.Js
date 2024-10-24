import React from 'react'
import Slider from "react-slick";


const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className=''>
        <Slider className='p-5 m-10' {...settings}>
      <div>
        <h3>
        <img className='rounded-xl' src="../images/banner01.webp" alt="" />

        </h3>
      </div>
      <div>
        <h3>
        <img className='rounded-xl' src="../images/banner02.webp" alt="" />

        </h3>
      </div>
      <div>
        <h3>
        <img className='rounded-xl' src="../images/banner03.webp" alt="" />

        </h3>
      </div>
    </Slider>

    <div className='flex justify-center items-start flex-wrap` gap-10 m-5'>
        <div className=''>
            <img className='h-[300px] w-[550px] rounded-xl' src="../images/centercard01.webp" alt="" />
        </div>
        <div className=''>
            <img className='h-[300px] w-[550px] rounded-xl' src="../images/centercard02.webp" alt="" />
        </div>
    </div>
      
    </div>
  );
}

export default Banner