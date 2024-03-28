import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import { YMaps, Map } from "@pbe/react-yandex-maps";

export default function Contacts() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="pt-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Контакты</h1>

        <div class="full-width mt-10">
          <div className="bg-white h-full w-1/2 absolute top-0 z-50 text-black">
            <div className="my-6"></div>
          </div>
          <YMaps>
            <Map
              width="100vw"
              height="80vh"
              defaultState={{
                center: [48.04806331746245, 40.24870622452088],
                zoom: 14.5,
              }}
            ></Map>
          </YMaps>
        </div>
      </div>
      <Footer />
    </div>
  );
}
