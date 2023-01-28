import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from "react-router-dom"
import InputSearch from '../../components/input-search';
import "./index.scss";

const SectionTwo = () => {

    const [product, setProduct] = useState([]);
    const [toggle, setToggle] = useState(true);

    const {_id}=useParams();
    useEffect(() => {
     getData()

    }, [])
    const getData=async()=>{
        let response= await axios.get("http://localhost:8080/product")
        setProduct( await response.data)

    }

    const handleSort=()=>{
        setToggle(!toggle)
        if(toggle){
            let sorted=product.sort((a,b)=>a.price-b.price)
            setProduct([...sorted])
        }
        else{
            getData();
        }
    }


    const handleDelete=async(_id)=>{
        axios.delete(`http://localhost:8080/product/${_id}`).then(()=>axios.get("http://localhost:8080/product").then((data)=>setProduct(data.data)))
    }



    
  return (
    <div className='section-2'>
        <div className='container'>
            <div className='product'>
                <div className='product-text'>
                    <p>Popular Item in the market</p>
                    <h1>Trending Product</h1>
                    <p className='xett'></p>
                </div>
                <div className='sort'><button onClick={()=>handleSort()}>Sort</button></div>
                    <div className='input'><InputSearch setProduct={setProduct}/></div>
                

                <div className='cards'>
                    {product?.map((element,i)=>{
                        return(
                            <div className='card' key={i}>
                                <div className='card-img'><Link to={`/details/${element._id}`}><img src={element.img}/></Link></div>
                                <div className='card-text'>
                                    <p>{element.marca}</p>
                                    <h4>{element.name}</h4>
                                    <h3>${element.price}</h3>
                                    <button onClick={()=>{handleDelete(element._id)}}>Delete</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionTwo