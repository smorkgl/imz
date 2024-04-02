import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import capacity1 from "../img/capacity1.png";
import capacity2 from "../img/capacity2.png";

export default function Capacity() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-5 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Производственные мощности</h1>
        <div className="my-6">
          <p className="indent-10">
            Производственный комплекс ООО «ИСАЕВСКИЙ МАШИНОСТРОИТЕЛЬНЫЙ ЗАВОД»
            является динамично развивающейся компанией.
          </p>
          <p className="indent-10">
            Основными видами деятельности компании являются:
          </p>
          <p className="indent-10">
            I. Производство прямошовной электросварной трубы круглого,
            прямоугольного и квадратного сечения;
          </p>
          <p className="indent-10">
            II. Производство двутавровых сварных балок;
          </p>
          <p className="indent-10">
            III. Производство сварных металлоконструкций;
          </p>
          <p className="indent-10">
            IV. Металлообработка резаньем и термическая обработка деталей.
          </p>
          <img src={capacity1} className="mx-auto my-10" />
          <p className="indent-10 font-bold">
            I. Производство прямошовной электросварной трубы круглого,
            прямоугольного и квадратного сечения
          </p>
          <p className="indent-10">
            Первую продукцию предприятие выпустило 31.08.2009 года. Производство
            электросварной трубы и раскрой рулонной стали на штрипс
            осуществляется на оборудовании европейского производства,
            поставленного швейцарской фирмой SYTCO AG. Оборудование оснащено
            системами автоматического контроля основных параметров продукции в
            потоке производства, что гарантирует высокое качество нашей трубы.
            Один из основных принципов нашей работы с клиентами – рациональная
            ценовая политика, позволяющая поддерживать высококонкурентный
            уровень цен на весь сортамент металлопроката (гибкие цены, рассрочка
            платежа, индивидуальный подход к каждому клиенту). Мы можем
            предоставить нашим клиентам полный ассортимент продукции,
            удовлетворяющий их потребностям:
            <p className="indent-10">
              — изготовление сортамента труб под заказ покупателей;{" "}
            </p>
            <p className="indent-10">
              — быстрая отгрузка со склада готовой продукции (круглосуточно);
            </p>
            <p className="indent-10">
              {" "}
              — сопровождение отгрузки персональным менеджером;
            </p>
            <p className="indent-10">
              — осуществляем доставку готовой продукции как автомобильным, так и
              железнодорожным транспортом по желанию заказчика;{" "}
            </p>
            <p className="indent-10">
              — на предприятии имеется гостиница, круглосуточная столовая и
              охраняемая стоянка, для заказчиков, прибывающих из других
              регионов.
            </p>
          </p>
          <p className="indent-10 font-bold mt-10">
            II. Производство двутавровых сварных балок
          </p>
          <p className="indent-10">
            С июля 2012 г. ООО «ИМЗ» начал развивать на своих свободных
            производственных площадях производство электросварных двутавровых
            балок. На предприятии запущен стан для производства двутавровых
            балок ZHJ18DC-1000, позволяющий производить электросварную балку по
            ГОСТ 26020-83, ТУ У 01412851.001-95 сечением от 200х200 до 1500х800
            мм, с толщинами полок 8÷40 мм и стенок 6÷30 мм. Сварочные
            выпрямители IDEALARC DC-1000, входящие в комплект стана, а также
            технология сварки, аттестованы на соответствие требованиям РД
            03-614-03 в Национальном агентстве контроля сварки, что является
            подтверждением высокого качества сварочных швов при производстве
            двутавровой балки. Производственные мощности стана составляют от 500
            до 1150 тонн в месяц.
          </p>
          <p className="indent-10 font-bold mt-10">
            III. Производство сварных металлоконструкций
          </p>
          <p className="indent-10">
            Под производство металлоконструкций организована производственная
            база, площадь которой составляет 5200 м², оснащённая грузоподъёмными
            механизмами грузоподъёмностью 10 и 16 тн. Техническое оснащение базы
            позволяет изготавливать строительные металлоконструкции любой
            конфигурации и сложности. База оснащена оборудованием, позволяющим
            выполнять работы по изготовлению металлоконструкций с применением
            автоматической и полуавтоматической сварки, фигурного раскроя метала
            толщиной до 100 мм. Оборудование базы позволяет производить
            пескоструйную обработку поверхности металлов и наносить
            антикоррозийные покрытия воздушными и безвоздушными аппаратами.
            Производственная мощность участка металлоконструкций – 500 тонн в
            месяц.
          </p>
          <p className="indent-10 font-bold mt-10">
            IV. Металлообработка резаньем и термическая обработка деталей
          </p>
          <p className="indent-10">
            ООО «Исаевский машиностроительный завод» располагает широким парком
            металлообрабатывающего оборудования, в том числе современным
            оборудованием для выполнения всех видов термообработки. Участок
            металлообработки оснащен зубофрезерными, зубодолбежными станками для
            нарезки прямозубых и косозубых шестерен как наружных так и
            внутренних, токарными станками, в том числе с ЧПУ немецкого
            производства, для изготовления особо сложных профилей, фрезерными,
            долбежными,круглошлифовальными и сверлильными станками. Для порезки
            металла на заготовки имеется заготовочный участок, оснащенный пилами
            различных конструкций. На участке производится аргоно-дуговая сварка
            как черных, так и цветных металлов. Выполняются заказы на
            изготовление нестандартного оборудования для строительной и других
            отраслей, его восстановление и ремонт. Участок металлообработки
            имеет отделение термической обработки металлов, который располагает
            печами и закалочными ваннами для закалки деталей в масляных и
            водяных ваннах, а так же печами для отпуска деталей.
          </p>
          <img src={capacity2} className="mx-auto my-10" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
