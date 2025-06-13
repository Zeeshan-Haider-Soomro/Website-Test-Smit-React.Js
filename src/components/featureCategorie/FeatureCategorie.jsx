import React, { useEffect, useState } from "react";
// import { FeatureCard } from "../../utils/constant/featureCategories";
import Slider from "react-slick";
import axios from "axios";

const FeatureCategorie = () => {

    const [categorie, setCategorie] = useState([])
    const getData = async()=>{
        try{
            const data = await axios.get("https://api.escuelajs.co/api/v1/categories");
            const res = data?.data;
            console.log(res);
            setCategorie(res);
        } catch(error){
            console.log(error); 
        }
        }

    useEffect(()=>{
        getData()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplaySpeed: 1500,
      };
  return (
    <div>
      <div>
        <h1 className="m-5 p-5 font-medium text-3xl gap-10">
          Featured Categories
        </h1>
        <div className=" p-5 m-5">
            <Slider {...settings}>
          {categorie.slice(0,12).map((item, index) => (
              <div
                className="h-[200px] w-[200px]  m-10 justify-center items-start flex flex-col p-5"
                key={index}
              >
                <img className="h-[150px] w-[150px] " src={item.image} alt={item.name} />
                <h1>{item.name}</h1>
              </div>
            
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FeatureCategorie;
