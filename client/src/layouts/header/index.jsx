import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import BlogPage from '../../pages/blog-page';
import Pages from '../../pages/pages-page';
import ShopPage from '../../pages/shop-page';
import "./index.scss";


const Header = () => {
  return (
    <div id='header'>
<div className='headers'>
<div className='logo'><Link to="/"><img src='https://preview.colorlib.com/theme/aroma/img/logo.png'/></Link></div>
<div className='pages'>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><ShopPage/></li>
        <li><BlogPage/></li>
        <li><Pages/></li>
        <li><NavLink to="/">Contact</NavLink></li>
        <li><NavLink to="/add-page">Add Products</NavLink></li>
    </ul>
</div>
<div className='header-icon-shop'><div className='header-icon'><i className="fa-solid fa-magnifying-glass"></i>  <i className="fa-solid fa-cart-shopping"></i></div>
<div className='header-btn'><button>Buy Now</button></div></div>
</div>
    </div>
  )
}

export default Header