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
    Try
    <Footer />
    </div>
  );
}
