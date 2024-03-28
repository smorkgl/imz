import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import stoyanka from "../img/stoyanka.png";

export default function MetalBeams() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Балки</h1>
        <div className="my-6">
          <p className="indent-10">
            На предприятии запущен стан для производства двутавровых балок
            ZHJ18DC-1000, позволяющий производить электросварную балку по ГОСТ
            26020-83, ТУ У 01412851.001-95 сечением от 200х200 до 1500х800 мм, с
            толщинами полок 8÷40 мм и стенок 6÷30 мм.{" "}
          </p>
          <p className="indent-10">
            Сварочные выпрямители IDEALARC DC-1000, входящие в комплект стана, а
            также технология сварки, аттестованы на соответствие требованиям РД
            03-614-03 в Национальном агентстве контроля сварки, что является
            подтверждением высокого качества сварочных швов при производстве
            двутавровой балки.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
