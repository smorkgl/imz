import React, {useEffect, useState} from 'react';
import { Outlet, Link, NavLink, useParams } from "react-router-dom";

import Header from '../components/Header'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import TopMain from '../components/TopMain'
import Breadcumb from '../components/Breadcrumb'

export default function JobVacancy() {
  
    const {id, name} = useParams();

  return (
    <div className="font-['Ubuntu']">
    <Header/>
    <Nav />
    <Carousel />
    <TopMain />
    <Breadcumb />
    <div className="py-3 2xl max-w-6xl width-full mx-auto container">
    <div>
        <h2>Детали вакансии {id}</h2>
        <h2>Детали вакансии {name}</h2>
    </div>
        </div>
    <Footer />
    </div>
  );
}
