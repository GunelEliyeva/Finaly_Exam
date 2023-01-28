import React from 'react';
import { Formik, Form, Field } from 'formik';
import {AddProductSchema} from '../add-product/schema/index';
import axios from 'axios';
import {Helmet} from "react-helmet";
import "./index.scss";

const AddProducts = () => {
  return (
    <div className='add'>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Add Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<div className='container'>
<div className='add-box'>
<h1>Add Products</h1>
     <Formik
       initialValues={{
        img:"",
        marca: "",
        name: "",
        price: "",
       }}
       validationSchema={AddProductSchema}
       onSubmit={(values, {resetForm}) => {
        axios.post("http://localhost:8080/product", values)
         console.log(values);
         resetForm();
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field className="input" name="img" placeholder="Enter your image..."/>
           {errors.img && touched.img ? (
             <div className='err'>{errors.img}</div>
           ) : null}<br></br><br></br>
           <Field className="input" name="marca" placeholder="Enter your marca..." />
           {errors.marca && touched.marca ? (
             <div className='err'>{errors.marca}</div>
           ) : null}<br></br><br></br>
           <Field className="input" name="name" placeholder="Enter your name..."/>
           {errors.name && touched.name ? (
             <div className='err'>{errors.name}</div>
           ) : null}<br></br><br></br>
           <Field className="input" name="price" placeholder="Enter your price..."/>
           {errors.price && touched.price ? (
             <div className='err'>{errors.price}</div>
           ) : null}<br></br><br></br>
          
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
</div>
</div>
    </div>
  )
}

export default AddProducts