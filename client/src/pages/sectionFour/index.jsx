import React, { useEffect, useState } from "react";
import "./index.scss";
import axios from "axios";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SectionFour = () => {
  const [carucel, setCarucel] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let response = await axios.get("http://localhost:8080/product");
    setCarucel(await response.data);
  };

  return (
    <div className="container">
      <div className="slider">
        <div className="sliders-text">
        <p>Popular Item in the market</p>
                    <h1>Best Sellers</h1>
                    <p className='xett'></p>
        </div>

        <div className="sliders-card">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
            {carucel?.map((elem,i)=>{
                return(
          <SwiperSlide>
            <div className="slider-img">
              <img src={elem.img} />
            </div>
            <div className="slider-text">
              <p>{elem.marca}</p>
              <h4>{elem.name}</h4>
              <h3>${elem.price}</h3>
            </div>
          </SwiperSlide>

                )
            })}
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
