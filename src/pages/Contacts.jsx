import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useMediaQuery } from "react-responsive";

export default function Contacts() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Контакты</h1>
      </div>
      <div className="relative">
        {isTabletOrMobile && (
          <div className="xl:px-2 md:w-full   z-10 h-full h bg-white text-black w-2/4 grid place-items-center pb-5">
            <div className="">
              <p>
                <b>ООО «Исаевский Машиностроительный Завод»</b>
                <br />
                <b>
                  Limited Liability Company «Isaevskiy Machine-Building Plant»
                </b>
                <br />
                <b>Наш адрес:</b> Российская Федерация, 346312, Ростовская
                область, Красносулинский район, п. Молодежный, территория «ДСК»
                <br /> <b>ОГРН</b> 1066148014415
                <br /> <b>ИНН </b>6148557002
                <br /> <b>КПП</b> 615250001
              </p>
              <p className="pt-5">
                <b>Контактные телефоны:</b> <br />
                <br />
                <b>Приёмная: </b>+7 (863) 333-31-34 доб. 101 <br />
                <b>Бухгалтерия: </b>+7 (863) 333-31-34 доб. 169, 176 <br />
                <b>Отдел кадров: </b>+7 (863) 333-31-34 доб. 221, 222
                <br /> <b>Отдел снабжения: </b>+7 (863) 333-31-34 доб. 157
                <br />
                <b>Начальник отдела кадров: </b>+7 (863) 333-31-34 доб. 128{" "}
                <br /> <b>Главный механик: </b>+7 (863) 333-31-34 доб. 115
                <br /> <b>Отдел закупок: </b>+7 (863) 333-31-34​​​​​​​ доб. 180{" "}
                <br />
                <b>Главный энергетик: </b>+7 (863) 333-31-34 доб. 153
              </p>
              <p className="pt-5">
                <b>E-mail:</b> imz@i-m-z.ru
              </p>
              <p className="pt-5">
                <b>График работы:</b> Понедельник-Пятница с 8:00 до 17:00 обед с
                12:00 до 13:00. Праздничные дни - Выходной.
              </p>
            </div>
          </div>
        )}
        {!isTabletOrMobile && (
          <div className="wherewe__before absolute bg-white z-10 h-full"></div>
        )}
        <div className="max-w-7xl width-full mx-auto container relative">
          {!isTabletOrMobile && (
            <div className="xl:pl-5 absolute z-10 h-full h bg-white text-black w-2/4 grid place-items-center pr-10">
              <div className="">
                <p>
                  <b>ООО «Исаевский Машиностроительный Завод»</b>
                  <br />
                  <b>
                    Limited Liability Company «Isaevskiy Machine-Building Plant»
                  </b>
                  <br />
                  <b>Наш адрес:</b> Российская Федерация, 346312, Ростовская
                  область, Красносулинский район, п. Молодежный, территория
                  «ДСК»
                  <br /> <b>ОГРН</b> 1066148014415
                  <br /> <b>ИНН </b>6148557002
                  <br /> <b>КПП</b> 615250001
                </p>
                <p className="pt-5">
                  <b>Контактные телефоны:</b> <br />
                  <br />
                  <b>Приёмная: </b>+7 (863) 333-31-34 доб. 101 <br />
                  <b>Бухгалтерия: </b>+7 (863) 333-31-34 доб. 169, 176 <br />
                  <b>Отдел кадров: </b>+7 (863) 333-31-34 доб. 221, 222
                  <br /> <b>Отдел снабжения: </b>+7 (863) 333-31-34 доб. 157
                  <br />
                  <b>Начальник отдела кадров: </b>+7 (863) 333-31-34 доб. 128{" "}
                  <br /> <b>Главный механик: </b>+7 (863) 333-31-34 доб. 115
                  <br /> <b>Отдел закупок: </b>+7 (863) 333-31-34​​​​​​​ доб.
                  180 <br />
                  <b>Главный энергетик: </b>+7 (863) 333-31-34 доб. 153
                </p>
                <p className="pt-5">
                  <b>E-mail:</b> imz@i-m-z.ru
                </p>
                <p className="pt-5">
                  <b>График работы:</b> Понедельник-Пятница с 8:00 до 17:00 обед
                  с 12:00 до 13:00. Праздничные дни - Выходной.
                </p>
              </div>
            </div>
          )}
          <div class="full-width">
            {isTabletOrMobile && (
              <YMaps>
                <Map
                  width="100vw"
                  height="40vh"
                  defaultState={{
                    center: [48.04806331746245, 40.26570622452088],
                    zoom: 14.5,
                  }}
                ></Map>
              </YMaps>
            )}
            {!isTabletOrMobile && (
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
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
