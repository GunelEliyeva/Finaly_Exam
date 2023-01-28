import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AddProducts from '../pages/add-product';
import ContactPage from '../pages/contact-page';
import Details from '../pages/details';
import HomePages from '../pages/home-page';

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePages/>}/>
            <Route path='/' element={<ContactPage/>}/>
            <Route path='/add-page' element={<AddProducts/>}/>
            <Route path='/details/:_id' element={<Details/>}/>

        </Routes>
    </div>
  )
}

export default Routing