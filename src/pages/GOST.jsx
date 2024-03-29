import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import { Link } from "react-router-dom";

export default function GOST() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">ГОСТ ПРОДУКЦИИ</h1>
        <div className="my-20">
          <div class="flex mb-10 gap-10 justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-2xl">АРМАТУРА: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">КРУГ: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">УГОЛОК: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ШВЕЛЛЕР: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
          </div>
          <div class="flex mb-10 gap-10 justify-between mt-20">
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ПОЛОСА: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">КАТАНКА: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">БАЛКА: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ШЕСТИГРАННИК: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
          </div>
          <div class="flex mb-10 gap-10 justify-between mt-20">
            <div className="flex flex-col">
              <p className="font-bold text-2xl">КВВАДРАТ: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ПРОКАТ ОЦИНКОВАННЫЙ: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">
                ПРОКАТ С ПОЛИМЕРНЫМ ПОКРЫТИЕМ:{" "}
              </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ТРУБЫ: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
          </div>
          <div class="flex mb-10 gap-10 justify-between mt-20">
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ЛИСТОВОЙ ПРОКАТ: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ГНУТЫЙ ПРОФИЛЬ: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ТРУБА ПРОФИЛЬНАЯ: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-2xl">ТРУБЫ БЕСШОВНЫЕ: </p>
              <div className="work__line2" />
              <a
                href="http://localhost:3131/uploads/tu14_1_5596.pdf"
                className="mt-5"
              >
                ТУ14-1-5596
              </a>
              <a
                href="http://localhost:3131/uploads/sto_aschm_7_93.pdf"
                className="mt-2"
              >
                СТО АЧСМ 7-93
              </a>
              <a
                href="http://localhost:3131/uploads/gost_r_52544_2006.pdf"
                className="mt-2"
              >
                ГОСТ Р52544-2006
              </a>
              <a
                href="http://localhost:3131/uploads/gost5781_82.pdf"
                className="mt-2"
              >
                ГОСТ 5781-82
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
