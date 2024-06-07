import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";

export default function MetalEquipment() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />

      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container ">
        <h1 className="font-bold ">Металлическое оборудование</h1>
        <div className="my-6 text-justify">
          <h1>Тут пока пусто</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}
