import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import shop1 from "../img/shop1.jpg";
import shop2 from "../img/shop2.jpg";
import shop3 from "../img/shop3.jpg";
import shop4 from "../img/shop4.jpg";
import shop5 from "../img/shop5.jpg";

export default function Shop() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-2 py-3  2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Магазин</h1>
        <div className="my-6 text-justify">
          <p className="indent-10">
            Универсальный магазин, расположенный в комплексе «ИМЗ», предлагает:
            продукты питания; напитки; алкоголь; закуски; десерты и мороженое;
            товары для автопутешественников; хозяйственные товары.
          </p>

          <div className="mx-auto mt-5">
            <div className="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
              <img src={shop1} className="w-1/2" />
              <img src={shop5} className="w-1/2" />
            </div>
            <div className="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
              <img src={shop3} className="w-1/2" />
              <img src={shop4} className="w-1/2" />
            </div>
            <img src={shop2} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
