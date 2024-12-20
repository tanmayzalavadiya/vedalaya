import React from 'react';
import Products from './Products';
import Consultation from './Consultation';
import Carousel from './Carousel';
import Science from './Science';
import Expert from '../About Us/Expert';
import Achievement from './Achievement';
import Members from '../About Us/Members';
import Footer from '../Footer/Footer';
import HomeCarousel from './HomeCarousel';

const Home = () => {
  return (
      <main>
        <HomeCarousel/>
        <Carousel/>
        <Products/>
        <Consultation/>
        <Science/>
        <Expert/>
        <Achievement/>
        <Members/>
        <Footer/>
      </main>
  );
};

export default Home;
