import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import stoyanka from "../img/stoyanka.png";

export default function ProfilePipe() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />

      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container ">
        <h1 className="font-bold ">Труба профильная</h1>
        <div className="my-6 text-justify">
          <p className="indent-10">
            Первую продукцию предприятие выпустило 31.08.2009 года.{" "}
          </p>

          <p className="indent-10">
            Производство электросварной трубы и раскрой рулонной стали на штрипс
            осуществляется на оборудовании европейского производства,
            поставленного швейцарской фирмой SYTCO AG. Оборудование оснащено
            системами автоматического контроля основных параметров продукции в
            потоке производства, что гарантирует высокое качество нашей трубы.
            Один из основных принципов нашей работы с клиентами – рациональная
            ценовая политика, позволяющая поддерживать высококонкурентный
            уровень цен на весь сортамент металлопроката (гибкие цены, рассрочка
            платежа, индивидуальный подход к каждому клиенту).
          </p>
          <p className="indent-10">
            Мы можем предоставить нашим клиентам полный ассортимент продукции,
            удовлетворяющий их потребностям:
          </p>
          <p className="indent-10">
            - изготовление сортамента труб под заказ покупателей;
          </p>
          <p className="indent-10">
            - быстрая отгрузка со склада готовой продукции (круглосуточно);
          </p>
          <p className="indent-10">
            - сопровождение отгрузки персональным менеджером;
          </p>
          <p className="indent-10">
            - осуществляем доставку готовой продукции как автомобильным, так и
            железнодорожным транспортом по желанию заказчика;
          </p>
          <p className="indent-10">
            - на предприятии имеется гостиница, круглосуточная столовая и
            охраняемая стоянка, для заказчиков, прибывающих из других регионов.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
