import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";

const border = "border-2 border-black p-2";

export default function Products() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Продукция</h1>

        <div className="my-6 text-justify">
          <table border="1px" cellpadding="4" cellspacing="0" width="100%">
            <tbody>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">№ п/п</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Наименование</p>
                </td>
                <td className={border} width="97">
                  <p align="center">ГОСТ</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Марка
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">Длина</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table border="1px" cellpadding="4" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td className={border} valign="top" width="629">
                  <p align="center" lang="ru-RU">
                    <strong>Труба электросварная круглого сечения</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>* - позиция под заказ</p>
          <table border="1px" cellpadding="4" cellspacing="0" width="100%">
            <tbody>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">1</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 48х3 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">2</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 48х3,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">3</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 48х4 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">4</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 50х3 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">5</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 50х3,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">6</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 50х4 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">7</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 57х2 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">8</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 57х3 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">9</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 57х3,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">10</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 63х3 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">11</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 63х3,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">12</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 63х4 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">13</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 76х2 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">14</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 76х3 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">15</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 76х3,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">16</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 76х4 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">17</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 76х4,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">18</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 89х2,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">19</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 89х3,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">20</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 89х3,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">21</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 89х4,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">22</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 89х4,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">23</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 102х3,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">24</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 102х3,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">25</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 102х4,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">26</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 102х4,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">27</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 102х5,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">28</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 102х5,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">29</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 159х3,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">30</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 159х3,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">31</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 159х4,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">32</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 159х4,5 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">33</p>
                </td>
                <td className={border} width="158">
                  <p lang="ru-RU">Труба ЭЛСВ 159х5,0 *</p>
                </td>
                <td className={border} width="97">
                  <p align="center">10704-91</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table cellpadding="4" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td className={border} valign="top" width="100%">
                  <p align="center" lang="ru-RU">
                    <strong>Трубы стальные квадратные</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table border="1px" cellpadding="4" cellspacing="0" width="100%">
            <tbody>
              <tr valign="top">
                <td className={border} height="12" width="33">
                  <p align="center">1</p>
                </td>
                <td className={border} width="158">
                  <p align="center">15*15*1,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} height="11" width="33">
                  <p align="center">2</p>
                </td>
                <td className={border} width="158">
                  <p align="center">20*20*1,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">3</p>
                </td>
                <td className={border} width="158">
                  <p align="center">20*20*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">4</p>
                </td>
                <td className={border} width="158">
                  <p align="center">20*20*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">5</p>
                </td>
                <td className={border} width="158">
                  <p align="center">25*25*1,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">6</p>
                </td>
                <td className={border} width="158">
                  <p align="center">25*25*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">7</p>
                </td>
                <td className={border} width="158">
                  <p align="center">25*25*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">8</p>
                </td>
                <td className={border} width="158">
                  <p align="center">30*30*1,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">9</p>
                </td>
                <td className={border} width="158">
                  <p align="center">30*30*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">10</p>
                </td>
                <td className={border} width="158">
                  <p align="center">30*30*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">11</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*40*1,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">12</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*40*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">13</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*40*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">14</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*40*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">15</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*40*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">16</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*40*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">17</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*50*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">18</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*50*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">19</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*50*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">20</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*50*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">21</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*50*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">22</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*50*3,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">23</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*60*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">24</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*60*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">25</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*60*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">26</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*60*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">27</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*60*3,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">28</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*60*4,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">29</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*80*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">30</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*80*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">31</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*80*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">32</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*80*3,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">33</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*80*4,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">34</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*80*4,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">35</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*80*5,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">36</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*80*6,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">37</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*100*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">38</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*100*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">39</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*100*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">40</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*100*4,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">41</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*100*5,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">42</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*100*6,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">43</p>
                </td>
                <td className={border} width="158">
                  <p align="center">120*120*4,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">44</p>
                </td>
                <td className={border} width="158">
                  <p align="center">120*120*5,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">45</p>
                </td>
                <td className={border} width="158">
                  <p align="center">120*120*6,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table border="1px" cellpadding="4" cellspacing="0" width="100%">
            <tbody>
              <tr>
                <td className={border} valign="top" width="100%">
                  <p align="center" lang="ru-RU">
                    <strong>Трубы стальные прямоугольные</strong>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table border="1px" cellpadding="4" cellspacing="0" width="100%">
            <tbody>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">1</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*20*1,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">2</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*20*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center" lang="ru-RU">
                    6м
                  </p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">3</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*20*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">4</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*25*1,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">8645-68</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">5</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*25*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">8645-68</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">6</p>
                </td>
                <td className={border} width="158">
                  <p align="center">40*25*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">8645-68</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">7</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*25*1,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">8</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*25*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">9</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*25*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">10</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*25*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">11</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*30*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">12</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*30*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">13</p>
                </td>
                <td className={border} width="158">
                  <p align="center">50*30*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">14</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*30*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">15</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*30*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">16</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*30*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">17</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*30*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">18</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*40*1,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">19</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*40*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">20</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*40*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">21</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*40*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">22</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*40*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">23</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*40*3,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">24</p>
                </td>
                <td className={border} width="158">
                  <p align="center">60*40*4,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">25</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*40*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">26</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*40*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">27</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*40*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">28</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*40*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">29</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*40*3,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">30</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*40*4,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">31</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*60*2,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">32</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*60*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">33</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*60*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">34</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*60*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">35</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*60*3,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">36</p>
                </td>
                <td className={border} width="158">
                  <p align="center">80*60*4,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">37</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*50*2,5</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">6-12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">38</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*50*2,8</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">39</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*50*3,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">40</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*50*4,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">41</p>
                </td>
                <td className={border} width="158">
                  <p align="center">100*50*5,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr valign="top">
                <td className={border} width="33">
                  <p align="center">42</p>
                </td>
                <td className={border} width="158">
                  <p align="center">150*100*5,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
                </td>
              </tr>
              <tr className={border} valign="top">
                <td className={border} width="33">
                  <p align="center">43</p>
                </td>
                <td className={border} width="158">
                  <p align="center">150*100*6,0</p>
                </td>
                <td className={border} width="97">
                  <p align="center">30245-2003</p>
                </td>
                <td className={border} width="86">
                  <p align="center" lang="ru-RU">
                    Ст2-3сп
                  </p>
                </td>
                <td className={border} width="104">
                  <p align="center">12м</p>
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
