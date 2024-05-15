import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import email from "../img/email.svg";
import phone from "../img/phone.svg";
import isaev_ramzan from "../img/isaev_ramzan.png";

export default function Management() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container ">
        <h1 className="font-bold ">Руководство</h1>
        <div className="my-6 text-justify">
          <div className="pt-10 grid grid-cols-2 gap-10 ">
            <div className="mb-10 rounded-2xl flex border-2 border-gray-600 h-96 z-30 relative hover:bg-blue-600/70 hover:rounded-2xl hover:text-white hover:border-0 transition-all">
              <div className="h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="text-2xl flex-col flex">
                    <p>Исаев</p>
                    <p>Рамзан</p>
                    <p>Мусаевич</p>
                  </div>
                  <p className=" text-sm pt-3">Учредитель</p>
                </div>
                <div>
                  <div className="text-sm">
                    <div className="flex gap-1 cursor-pointer hover:underline hover:text-black contact-hover transition-all">
                      <img
                        src={phone}
                        className="contact-img w-4 transition-transform"
                      />
                      <div className="flex gap-1 place-items-center">
                        <p>+7(863)-333-31-34</p>
                        <p className="text-xs font-medium">(доб. 101)</p>
                      </div>
                    </div>
                    <div className="pt-2 flex gap-1 cursor-pointer hover:underline hover:text-black contact2-hover transition-all">
                      <img
                        src={email}
                        className="contact2-img w-4 transition-transform"
                      />
                      <p>imz@i-m-z.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="absolute right-0 management__photo pr-5"
                  src={isaev_ramzan}
                />
              </div>
            </div>
            <div className="rounded-2xl flex border-2 border-gray-600 h-96 z-53 relative hover:bg-blue-700/70 hover:rounded-2xl hover:text-white hover:border-0 transition-all">
              <div className="h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="text-2xl flex-col flex">
                    <p>Исаев</p>
                    <p>Ибрагим</p>
                    <p>Рамзанович</p>
                  </div>
                  <p className=" text-sm pt-3">Генеральный директор</p>
                </div>
                <div>
                  <div className="text-sm">
                    <div className="flex gap-1 cursor-pointer hover:underline hover:text-black contact-hover transition-all">
                      <img
                        src={phone}
                        className="contact-img w-4 transition-transform"
                      />
                      <div className="flex gap-1 place-items-center">
                        <p>+7(863)-333-31-34</p>
                        <p className="text-xs font-medium">(доб. 101)</p>
                      </div>
                    </div>
                    <div className="pt-2 flex gap-1 cursor-pointer hover:underline hover:text-black contact2-hover transition-all">
                      <img
                        src={email}
                        className="contact2-img w-4 transition-transform"
                      />
                      <p>imz@i-m-z.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="absolute right-0 management__photo pr-5" />
              </div>
            </div>
            <div className="rounded-2xl flex border-2 border-gray-600 h-96 z-53 relative hover:bg-blue-700/70 hover:rounded-2xl hover:text-white hover:border-0 transition-all">
              <div className="h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="text-2xl flex-col flex">
                    <p>Писаренко</p>
                    <p>Андрей</p>
                    <p>Николаевич</p>
                  </div>
                  <p className=" text-sm pt-3">Директор по развитию</p>
                </div>
                <div>
                  <div className="text-sm">
                    <div className="flex gap-1 cursor-pointer hover:underline hover:text-black contact-hover transition-all">
                      <img
                        src={phone}
                        className="contact-img w-4 transition-transform"
                      />
                      <div className="flex gap-1 place-items-center">
                        <p>+7(863)-333-31-34</p>
                        <p className="text-xs font-medium">(доб. 101)</p>
                      </div>
                    </div>
                    <div className="pt-2 flex gap-1 cursor-pointer hover:underline hover:text-black contact2-hover transition-all">
                      <img
                        src={email}
                        className="contact2-img w-4 transition-transform"
                      />
                      <p>imz@i-m-z.ru</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img className="absolute right-0 management__photo pr-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
