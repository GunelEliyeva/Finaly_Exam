import React from 'react'
import SectionTwo from '../sectionTwo'
import SectionOne from '../shop-is-fun';
import {Helmet} from "react-helmet";
import SectionThree from '../sectionThree';
import SectionFour from '../sectionFour';
import SectionFive from '../sectionFive';

const HomePages = () => {
  return (
    <div >
 <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
    </div>
  )
}

export default HomePages