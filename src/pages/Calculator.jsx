import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import stoyanka from "../img/stoyanka.png";

export default function Calculator() {
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//metal-calculator.ru/assets/widget.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "metal-calculator-widget-script");

  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Калькулятор металлопроката</h1>
        <div
          name="metal-calculator-widget"
          data-siteid="G2Z4N4WD3CGPYDNZAAQH"
          className="!my-10"
        ></div>
      </div>
      <Footer />
    </div>
  );
}
