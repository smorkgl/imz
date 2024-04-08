import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import stoyanka from "../img/stoyanka.png";

export default function Parking() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold w-1/2">Стоянка</h1>
        <div className="my-6">
          <p className="indent-10">
            Рядом с цехами ИМЗ и трассой М4 расположена охраняемая стоянка и
            TIR-паркинг.
          </p>
          <p className="indent-10">
            Здесь есть все необходимое, чтобы сделать приятную паузу в
            путешествии могли и водители-дальнобойщики, командировочные и
            партнеры, туристы и местные жители с ближних городов. Стоянка и
            ТIR-паркинг «ИМЗ» находится на очень оживленном участке трассы, как
            раз на середине пути Между Москвой и черноморским побережьем.
          </p>
          <img src={stoyanka} className="w-1/2 mx-auto my-5" />
          <p className="indent-10">
            Покой и порядок на территории стоянки и ТIR-паркинга обеспечивает
            круглосуточная охрана сотрудниками службы безопасности и
            видеонаблюдение. Постоянные посетители уже называют его «островком»
            - как оазис в пустыне, он весьма отличается от напряженной атмосферы
            трассы, настоящий островок безопасности и отдыха.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
