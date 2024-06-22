import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";

const border = "border-2 border-black p-2";

export default function Projects() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      
      
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Проекты</h1>
        <div className="my-6 text-justify">
          <p className="indent-10">
            Предприятие реализует проект расширения сортамента и значительного
            увеличения объемов выпускаемой продукции за счет освоения
            производства принципиально новых видов трубной продукции на новом
            оборудовании.{" "}
          </p>
          <p className="indent-10">
            {" "}
            Реализация проекта позволит приступить к производству прямошовных
            электросварных труб круглого сечения до диаметра 219 мм из
            качественных марок сталей, в том числе по стандарту API-5L, для
            работы в условиях низких температур и агрессивных сред, для
            среднемагистральных нефтегазопроводов, с гарантией прочности
            сварного шва, которая достигается термической обработкой и
            гидравлическими испытаниями трубы.{" "}
          </p>{" "}
          <p className="indent-10">
            Проект позволит расширить сортамент выпускаемых профильных труб,
            качество которых увеличит области применения нашей продукции за счет
            возможности ее применения в машиностроении, изготовлении
            металлоконструкций повышенной ответственности, работающих при низких
            температурах и в условиях агрессивных сред.
          </p>
          <table className="w-full mt-5">
            <tbody>
              <tr className={border}>
                <td className={border}>%</td>
                <td className={border}>Наименование</td>
                <td className={border}>Гост</td>
                <td className={border}>Марка стали, ГОСТ</td>
              </tr>
              <tr className={border}>
                <td colspan="10" className="py-2 px-8">
                  <strong>Труба круглая газоводнопроводная</strong>
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>1</td>
                <td className={border}>Труба круглая Ø219,1*4,0</td>
                <td className={border}>10705-80</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05&nbsp;
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>2</td>
                <td className={border}>Труба круглая Ø219,1*5,0</td>
                <td className={border}>10705-80</td>
                <td className={border}>Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05</td>
              </tr>
              <tr className={border}>
                <td className={border}>3</td>
                <td className={border}>Труба круглая Ø219,1*5,5</td>
                <td className={border}>10705-80</td>
                <td className={border}>Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05</td>
              </tr>
              <tr className={border}>
                <td className={border}>4</td>
                <td className={border}>Труба круглая Ø219,1*6,0</td>
                <td className={border}>10705-80</td>
                <td className={border}>Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05</td>
              </tr>
              <tr className={border}>
                <td className={border}>5</td>
                <td className={border}>Труба круглая Ø219,1*7,0</td>
                <td className={border}>10705-80</td>
                <td className={border}>Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05</td>
              </tr>
              <tr className={border}>
                <td className={border}>6</td>
                <td className={border}>Труба круглая Ø219,1*8,0</td>
                <td className={border}>10705-80</td>
                <td className={border}>Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05</td>
              </tr>
              <tr className={border}>
                <td className={border}>7</td>
                <td className={border}>Труба круглая Ø219,1*10,0</td>
                <td className={border}>10705-80</td>
                <td className={border}>Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05</td>
              </tr>
              <tr className={border}>
                <td className={border}>8</td>
                <td className={border}>Труба круглая Ø219,1*12,7</td>
                <td className={border}>10705-80</td>
                <td className={border}>Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05</td>
              </tr>
              <tr className={border}>
                <td colspan="4" className="py-2 px-8">
                  <strong>Труба профильная прямоугольная</strong>
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>9</td>
                <td className={border}>Труба проф.180*140*4,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>10</td>
                <td className={border}>Труба проф.180*140*5,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>11</td>
                <td className={border}>Труба проф.180*140*5,5</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>12</td>
                <td className={border}>Труба проф.180*140*6,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>13</td>
                <td className={border}>Труба проф.180*140*7,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>14</td>
                <td className={border}>Труба проф.180*140*8,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>15</td>
                <td className={border}> Труба проф.180*140*10,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>16</td>
                <td className={border}>Труба проф.180*140*12,7</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>17</td>
                <td className={border}>Труба проф.200*120*4,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>18</td>
                <td className={border}>Труба проф.200*120*5,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>19</td>
                <td className={border}>Труба проф.200*120*5,5</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>20</td>
                <td className={border}>Труба проф.200*120*6,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>21</td>
                <td className={border}>Труба проф.200*120*7,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>22</td>
                <td className={border}>Труба проф.200*120*8,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>23</td>
                <td className={border}>Труба проф.200*120*10,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>24</td>
                <td className={border}>Труба проф.200*120*12,7</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td colspan="4" className="py-2 px-8">
                  <strong>Труба профильная квадратная</strong>
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>25</td>
                <td className={border}>Труба проф.160*160*4,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>26</td>
                <td className={border}>Труба проф.160*160*5,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>27</td>
                <td className={border}>Труба проф.160*160*5,5</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>28</td>
                <td className={border}>Труба проф.160*160*6,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>29</td>
                <td className={border}>Труба проф.160*160*7,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05 Гост 1050-88; Гост
                  19281-89.;
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>30</td>
                <td className={border}>Труба проф.160*160*8,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>31</td>
                <td className={border}>Труба проф.160*160*10,0</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>32</td>
                <td className={border}>Труба проф.160*160*12,7</td>
                <td className={border}>8639-82 (30245-2003)</td>
                <td className={border}>
                  Ст 2 пс,сп; Ст3пс, сп. ГОСТ 380-05; Гост 1050-88; Гост
                  19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td colspan="4" height="14">
                  <br />
                  <strong>Труба нефтегазопроводная среднемагистральная</strong>
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>33</td>
                <td className={border}>Труба круглая Ø219,1*4,0</td>
                <td className={border}>Р 52079-2003</td>
                <td className={border}>
                  Гост 380-05; Гост 1050-88; Гост 19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>34</td>
                <td className={border}>Труба круглая Ø219,1*5,0</td>
                <td className={border}>Р 52079-2003</td>
                <td className={border}>
                  Гост 380-05; Гост 1050-88; Гост 19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>35</td>
                <td className={border}>Труба круглая Ø219,1*5,5</td>
                <td className={border}>Р 52079-2003</td>
                <td className={border}>
                  Гост 380-05; Гост 1050-88; Гост 19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>36</td>
                <td className={border}>Труба круглая Ø219,1*6,0</td>
                <td className={border}>Р 52079-2003</td>
                <td className={border}>
                  Гост 380-05; Гост 1050-88; Гост 19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>37</td>
                <td className={border}>Труба круглая Ø219,1*7,0</td>
                <td className={border}>Р 52079-2003</td>
                <td className={border}>
                  Гост 380-05; Гост 1050-88; Гост 19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>38</td>
                <td className={border}>Труба круглая Ø219,1*8,0</td>
                <td className={border}>Р 52079-2003</td>
                <td className={border}>
                  Гост 380-05; Гост 1050-88; Гост 19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>39</td>
                <td className={border}>Труба круглая Ø219,1*10,0</td>
                <td className={border}>Р 52079-2003</td>
                <td className={border}>
                  Гост 380-05; Гост 1050-88; Гост 19281-89.
                </td>
              </tr>
              <tr className={border}>
                <td className={border}>40</td>
                <td className={border}>Труба круглая Ø219,1*12,7</td>
                <td className={border}>Р 52079-2003</td>
                <td className={border}>
                  Гост 380-05; Гост 1050-88; Гост 19281-89.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
