import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";

export default function Suppliers() {
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Поставщикам</h1>
        <div className="my-6">
          <h2 className="indent-10 font-bold text-2xl">ОТДЕЛ СНАБЖЕНИЯ</h2>
          <div className="ml-10 work__line2 mt-2" />
          <p className="indent-10 mt-5 font-bold">Начальник отдела снабжения</p>
          <p className="indent-10">
            Подколзин Михаил Михайлович тел: +7(863)-333-31-34 доб. 161
          </p>
          <p className="indent-10 mt-5 font-bold">Специалисты отдела</p>
          <p className="indent-10">
            Челомбиев Николай Владимирович тел: +7(863)-333-31-34 доб. 180
          </p>
          <p className="indent-10">
            Михайлюк Александр Михайлович тел: +7(863)-333-31-34 доб. 155
          </p>
        </div>
        <div className="my-6">
          <h2 className="indent-10 font-bold text-2xl">
            СВЯЗАТЬСЯ С ОТДЕЛОМ СНАБЖЕНИЯ:
          </h2>
          <div className="ml-10 work__line2 mt-2" />
          <div className="my-6 ml-10">
            <div class="bg-white shadow-md rounded rounded-lg p-5  w-3/4">
              <form
                id="contactForm"
                action="#"
                method="POST"
                class="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div>
                  <label
                    for="name"
                    class="block text-gray-700 font-semibold mb-2"
                  >
                    ФИО
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Введите своё имя"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div id="nameValidation" class="hidden text-red-600 text-sm">
                    Пожалуйста введите своё ФИО
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-gray-700 font-semibold mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введите свой E-mail"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div id="emailValidation" class="hidden text-red-600 text-sm">
                    Пожалуйста введите свой ящик электронной почты.
                  </div>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-gray-700 font-semibold mb-2"
                  >
                    Номер телефона
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введите свой номер телефона"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div id="emailValidation" class="hidden text-red-600 text-sm">
                    Пожалуйста введите свой ящик электронной почты.
                  </div>
                </div>

                <div class="sm:col-span-2">
                  <label
                    for="subject"
                    class="block text-gray-700 font-semibold mb-2"
                  >
                    Тема обращения
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Введите свою тему обращения"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div
                    id="subjectValidation"
                    class="hidden text-red-600 text-sm"
                  >
                    Please enter the subject.
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block text-gray-700 font-semibold mb-2"
                  >
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Введите своё сообщение"
                    rows="5"
                    class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                  <div
                    id="messageValidation"
                    class="hidden text-red-600 text-sm"
                  >
                    Пожалуйста введите своё сообщение
                  </div>
                </div>
                <div class="sm:col-span-2">
                  <button
                    type="submit"
                    class="w-full bg-blue-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-900 transition duration-300"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
