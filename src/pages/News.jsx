import React, {useEffect, useState} from 'react';

import Header from '../components/Header'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import TopMain from '../components/TopMain'
import Breadcrumb from '../components/Breadcrumb'

export default function News() {
    return (
    <div className="font-['Ubuntu']">
    <Header/>
    <Nav />
    <Carousel />
    <TopMain />
    <Breadcrumb/>
    <div className="py-3 2xl max-w-5xl width-full mx-auto container">
      <h1 className='font-bold'>Новости</h1>
      </div>
      <div className='2xl max-w-6xl width-full mx-auto container mb-10'>
        </div>
    <Footer />
    </div>
  );
}
