import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import certificates1 from "../img/certificates1.jpg";
import certificates2 from "../img/certificates2.jpg";
import certificates3 from "../img/certificates3.jpg";
import certificates4 from "../img/certificates4.jpg";
import certificates5 from "../img/certificates5.jpg";
import certificates6 from "../img/certificates6.jpg";
import certificates7 from "../img/certificates7.jpg";

export default function Certificates() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Сертификаты</h1>
        <div className="my-6 text-justify">
          <h2 className="indent-10 font-bold text-2xl">ISO:</h2>
          <div className="ml-10 work__line2 mt-2" />
          <p className="indent-10 mt-5">
            Продукция предприятия регулярно проходит добровольную сертификацию
            на соответствие требованиям нормативных документов в органах
            сертификации Федерального агентства по техническому регулированию и
            метрологии. В 2014 году на предприятии, в области действия
            «Производство и продажа стальных электросварных труб, профильных,
            круглых и водогазопроводных», внедрена и применяется система
            менеджмента качества, согласно международному стандарту ISO
            9001:2008.
          </p>
          <p className="indent-10">
            Внедрение подтверждено органом по сертификации общества TÜV SÜD
            Management Service Gmbh.
          </p>
          <img src={certificates1} className="mx-auto my-5" />
        </div>
        <div className="my-6">
          <h2 className="indent-10 font-bold text-2xl">ПРОЧИЕ СЕРТИФИКАТЫ:</h2>
          <div className="ml-10 work__line2 mt-2" />
          <div className="md:gap-2 flex mb-8 gap-10 mt-5">
            <img src={certificates2} className="w-1/2" />
            <img src={certificates3} className="w-1/2" />
          </div>
          <div className="md:gap-2 flex mb-8 gap-10 mt-5">
            <img src={certificates4} className="w-1/2" />
            <img src={certificates5} className="w-1/2" />
          </div>
          <div className="md:gap-2 flex mb-8 gap-10 mt-5">
            <img src={certificates6} className="w-1/2" />
            <img src={certificates7} className="w-1/2" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
