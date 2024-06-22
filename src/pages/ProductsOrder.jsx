import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import stoyanka from "../img/stoyanka.png";
import emailjs from "@emailjs/browser";

export default function ProductsOrder() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a6z0367", "template_63iyekb", form.current, {
        publicKey: "kifTa7VFekqtXUeFz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      
      
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold ">Заказать продукцию</h1>
        <div className="my-12 text-justify">
          <div className="md:w-full bg-white shadow-md rounded rounded-lg p-5 w-2/4">
            <form
              onSubmit={sendEmail}
              ref={form}
              id="contactForm"
              action="#"
              method="POST"
              className="md:flex md:flex-col md:gap-5 grid grid-cols-1 sm:grid-cols-2 gap-10"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  ФИО
                </label>
                <input
                  name="user_name"
                  type="text"
                  id="name"
                  placeholder="Введите своё имя"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
                <div
                  id="nameValidation"
                  className="hidden text-red-600 text-sm"
                >
                  Пожалуйста введите своё ФИО
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Введите свой E-mail"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
                <div
                  id="emailValidation"
                  className="hidden text-red-600 text-sm"
                >
                  Пожалуйста введите свой ящик электронной почты.
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Номер телефона
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="Введите свой номер телефона"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
                <div
                  id="emailValidation"
                  className="hidden text-red-600 text-sm"
                >
                  Пожалуйста введите свой ящик электронной почты.
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Сообщение
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Введите своё сообщение"
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                ></textarea>
                <div
                  id="messageValidation"
                  className="hidden text-red-600 text-sm"
                >
                  Пожалуйста введите своё сообщение
                </div>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  value="Send"
                  className="w-full bg-red-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-red-900 transition duration-300"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
