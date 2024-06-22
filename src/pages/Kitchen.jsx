import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import kitchen1 from "../img/kitchen.jpeg";

export default function Kitchen() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      
      
      <Breadcrumb />
      <div className="xl:px-2 py-3  2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Столовая</h1>
        <div className="my-6 text-justify">
          <p className="indent-10">
            На территории завода ИМЗ расположена столовая. Зал приема пищи
            рассчитан на одновременное обслуживание 50 человек. Пользуются
            столовой и зоной отдыха работники предприятия.
            <img src={kitchen1} className="mt-5" />
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
