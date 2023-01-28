import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

import "./index.scss"
const Details = () => {
    const [detail, setDetail] = useState([]);
    const navigate =useNavigate();

    const {_id}=useParams();

    useEffect(() => {
     getData()

    }, [])

    const getData=async()=>{
        let respon= await axios.get(`http://localhost:8080/product/${_id}`)
        setDetail( await respon.data)

    }

  return (
    <div className='detail'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Details Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<div className='container'>
    <div className='detail-box'>
        <div className='detail-img'><img src={detail.img}/></div>
        <div className='detail-text'>
            <h2>Name:  <span>{detail.marca}</span></h2>
            <h2>Marca: <span> {detail.name}</span></h2>
            <h2>Price:  <span>${detail.price}</span></h2>
            <button onClick={()=>navigate("/")}>Go Back</button>
        </div>
    </div>
</div>
    </div>
  )
}

export default Details