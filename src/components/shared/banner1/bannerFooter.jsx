import React from 'react';
import "./bannerFooter.scss";
import banner from "../../../assets/banner.gif";

const BannerFooter = () => {
  return (
    <>
   
      <a className='bannerSponsor text-center bg-gray-900' href='https://screen-film.vercel.app/'>
        <img src={banner} alt='screenfilm.com'/>
      </a>
    </>
  )
}

export default BannerFooter;