import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./index.scss";

const InputSearch = ({setProduct}) => {
    const [searchName, setSearchName] = useState([]);


    useEffect(() => {
     getData()

    }, [])
    const getData=async()=>{
        let response= await axios.get("http://localhost:8080/product")
        setSearchName( await response.data)
    }


    const handleSearch=async(e)=>{
        let res=searchName.filter((el)=>el.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setProduct( res)
    }


  return (
    <div className='container'>
<div className='search'><input onChange={(e)=>handleSearch(e)} type="text" placeholder='Seacrch By Name'/></div>
    </div>
  )
}

export default InputSearch