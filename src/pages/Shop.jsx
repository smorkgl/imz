import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import hotel1 from "../img/hotel1.jpg";
import hotel2 from "../img/hotel2.jpg";
import hotel3 from "../img/hotel3.jpg";
import hotel4 from "../img/hotel4.jpg";
import hotel5 from "../img/hotel5.jpg";
import hotel6 from "../img/hotel6.jpg";
import hotel7 from "../img/hotel7.jpg";
import hotel8 from "../img/hotel8.jpg";
import hotel9 from "../img/hotel9.jpg";
import hotel10 from "../img/hotel10.jpg";
import hotel11 from "../img/hotel11.jpg";

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

          <div className="mx-auto">
            <div class="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
              <img src={hotel2} />
              <img src={hotel3} />
            </div>
            <div class="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
              <img src={hotel4} />
              <img src={hotel5} />
            </div>
            <div class="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
              <img src={hotel6} />
              <img src={hotel7} />
            </div>
            <div class="xl:grid xl:place-items-center xl:flex-wrap flex mb-8 gap-10">
              <img src={hotel8} />
              <img src={hotel9} />
            </div>
            <div class="xl:grid xl:place-items-center xl:flex-wrap flex mb-10 gap-10">
              <img src={hotel10} />
              <img src={hotel11} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
