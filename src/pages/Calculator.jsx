import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import stoyanka from "../img/stoyanka.png";
import { useMediaQuery } from "react-responsive";

export default function Calculator() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.id = "metal-calculator-widget-script";
      script.src = "//metal-calculator.ru/assets/widget.js";
      script.onload = () => {
        setScriptLoaded(true);
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [scriptLoaded]);
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />

      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="md:text-4xl font-bold ">Калькулятор металлопроката</h1>
        {isTabletOrMobile && (
          <div
            name="metal-calculator-widget"
            data-compactwidget
            data-siteid="G2Z4N4WD3CGPYDNZAAQH"
            className="!my-5"
          ></div>
        )}
        {!isTabletOrMobile && (
          <div
            name="metal-calculator-widget"
            data-siteid="G2Z4N4WD3CGPYDNZAAQH"
            className="!my-10"
          ></div>
        )}
      </div>
      <Footer />
    </div>
  );
}
