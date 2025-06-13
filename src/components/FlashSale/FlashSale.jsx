import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

const FlashSale = () => {

    const [productSales, setProductSales] = useState([])
    const getData = async() => {
        try{
            const data = await axios.get("https://fakestoreapi.in/api/products")
            const res = data?.data
            console.log(res);
            setProductSales(res)
        }
        catch(error){
            console.log(error);
            
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };
      return (
        <div>
          <div>
            <h1 className="m-5 p-5 font-medium text-3xl gap-10">
              Flash Sales
            </h1>
            <div className=" p-5 m-5">
                {/* <Slider {...settings}> */}
              {productSales.map((item, index) => (
                  <div
                    className="h-[200px] w-[200px]  m-10 justify-center items-start flex flex-col p-5"
                    key={index}
                  >
                    <img className="h-[150px] w-[150px] " src={item.image} alt={item.title} />
                    <h1>{item.title}</h1>
                    <h2>{item.price}</h2>
                  </div>
                
              ))}
              {/* </Slider> */}
            </div>
          </div>
          <div>
            <img className='rounded-xl' src="../images/bannerCollection.webp" alt="" />
          </div>
        </div>
      );
}

export default FlashSale