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
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold text-5xl ">ГОСТ ПРОДУКЦИИ</h1>
        <div className="my-20 flex flex-wrap gap-y-20">
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">АРМАТУРА: </p>
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
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">КРУГ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost8510_86.pdf"
              className="mt-5"
            >
              ГОСТ 8510-86
            </a>
            <a
              href="http://localhost:3131/uploads/gost535_88.pdf"
              className="mt-2"
            >
              ГОСТ 2590-88
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">УГОЛОК: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost_8509_93.pdf"
              className="mt-5"
            >
              ГОСТ 8509-93
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ШВЕЛЛЕР: </p>

            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost_8278_83.pdf"
              className="mt-5"
            >
              ГОСТ 8278-83
            </a>
            <a
              href="http://localhost:3131/uploads/gost_8240_89.pdf"
              className="mt-2"
            >
              ГОСТ 8240-89
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ПОЛОСА: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost_19265_73.pdf"
              className="mt-5"
            >
              ГОСТ 19265-73
            </a>
            <a
              href="http://localhost:3131/uploads/gost1435_99.pdf"
              className="mt-2"
            >
              ГОСТ 1435-99
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">КАТАНКА: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/tu14_1_5283_94.pdf"
              className="mt-5"
            >
              ТУ 14-1-5283-94
            </a>
            <a
              href="http://localhost:3131/uploads/tu14_1_5282_94.pdf"
              className="mt-2"
            >
              ТУ 14-1-5282-94
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">БАЛКА: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost_26020_83.pdf"
              className="mt-5"
            >
              ГОСТ 26020-83
            </a>
            <a
              href="http://localhost:3131/uploads/gost_8239_89.pdf"
              className="mt-2"
            >
              ГОСТ 8239-89
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ШЕСТИГРАННИК: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost8560_78.pdf"
              className="mt-5"
            >
              ГОСТ 8560-78
            </a>
            <a
              href="http://localhost:3131/uploads/gost2879_88.pdf"
              className="mt-2"
            >
              ГОСТ 2879-88
            </a>
          </div>

          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">КВАДРАТ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost2591_88.pdf"
              className="mt-5"
            >
              ГОСТ 2591-88
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ПРОКАТ ОЦИНКОВАННЫЙ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost14918_80.pdf"
              className="mt-5"
            >
              ГОСТ 14918-80
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ПРОКАТ С ПОЛИМЕРНЫМ ПОКРЫТИЕМ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost_p_52146_03.pdf"
              className="mt-5"
            >
              ГОСТ Р52416-03
            </a>
            <a
              href="http://localhost:3131/uploads/gost30246_94.pdf"
              className="mt-2"
            >
              ГОСТ 30246-94
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ТРУБЫ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost10706_76.pdf"
              className="mt-2"
            >
              ГОСТ 10706-76
            </a>
            <a
              href="http://localhost:3131/uploads/gost10704_91.pdf"
              className="mt-2"
            >
              ГОСТ 10704-91
            </a>
            <a
              href="http://localhost:3131/uploads/gost10705_80.pdf"
              className="mt-2"
            >
              ГОСТ 10705-80
            </a>
          </div>

          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ЛИСТОВОЙ ПРОКАТ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost19903_74.pdf"
              className="mt-2"
            >
              ГОСТ 19903-74
            </a>
            <a
              href="http://localhost:3131/uploads/gost7350_77.pdf"
              className="mt-2"
            >
              ГОСТ 7350-77
            </a>
            <a
              href="http://localhost:3131/uploads/gost5582_75.pdf"
              className="mt-2"
            >
              ГОСТ 5582-75
            </a>
            <a
              href="http://localhost:3131/uploads/gost4041_71.pdf"
              className="mt-2"
            >
              ГОСТ 4041-71
            </a>
            <a
              href="http://localhost:3131/uploads/gost_380_94.pdf"
              className="mt-2"
            >
              ГОСТ 380-94
            </a>

            <a
              href="http://localhost:3131/uploads/gost16523_97.pdf"
              className="mt-2"
            >
              ГОСТ 16523-97
            </a>
            <a
              href="http://localhost:3131/uploads/gost1577_93.pdf"
              className="mt-2"
            >
              ГОСТ 1577-93
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ГНУТЫЙ ПРОФИЛЬ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost_25577_83.pdf"
              className="mt-5"
            >
              ГОСТ 25577-83
            </a>
            <a
              href="http://localhost:3131/uploads/30245_03.pdf"
              className="mt-2"
            >
              ГОСТ 30245-03
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ТРУБА ПРОФИЛЬНАЯ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost13663_86.pdf"
              className="mt-5"
            >
              ГОСТ 13663-86
            </a>
            <a
              href="http://localhost:3131/uploads/gost8645_68.pdf"
              className="mt-2"
            >
              ГОСТ 8645-68
            </a>
            <a
              href="http://localhost:3131/uploads/gost8642_68.pdf"
              className="mt-2"
            >
              ГОСТ 8642-68
            </a>
            <a
              href="http://localhost:3131/uploads/gost8639_82.pdf"
              className="mt-2"
            >
              ГОСТ 8639-82
            </a>
          </div>
          <div className="flex flex-col md:w-1/2 w-1/3">
            <p className="font-bold text-lg">ТРУБЫ БЕСШОВНЫЕ: </p>
            <div className="work__line2" />
            <a
              href="http://localhost:3131/uploads/gost9941_81.pdf"
              className="mt-5"
            >
              ГОСТ 9941-81
            </a>
            <a
              href="http://localhost:3131/uploads/gost9940_81.pdf"
              className="mt-2"
            >
              ГОСТ 9940-81
            </a>
            <a
              href="http://localhost:3131/uploads/gost8733_74.pdf"
              className="mt-2"
            >
              ГОСТ 8733-74
            </a>
            <a
              href="http://localhost:3131/uploads/gost8732_78.pdf"
              className="mt-2"
            >
              ГОСТ 8732-78
            </a>
            <a
              href="http://localhost:3131/uploads/gost8731_87.pdf"
              className="mt-2"
            >
              ГОСТ 8731-87
            </a>
            <a
              href="http://localhost:3131/uploads/gost550_75.pdf"
              className="mt-2"
            >
              ГОСТ 550-75
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
