import { Fragment, useState, useEffect, useRef, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo3 from "../img/logo3.png";
import russia from "../img/russia.svg";
import email from "../img/email.svg";
import phone from "../img/phone.svg";
import geo from "../img/geo.svg";
import sun from "../img/sun.svg";
import moon from "../img/moon.svg";
import close from "../img/close.svg";
import emailjs from "@emailjs/browser";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleDark, setToogleDark] = useState(false);
  const [isDropdownVisibleLang, setDropdownVisibleLang] = useState(false);

  const handleMouseEnterLang = () => {
    setDropdownVisibleLang(true);
  };
  const handleMouseLeaveLang = () => {
    setDropdownVisibleLang(false);
  };

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
    <header className="md:hidden">
      <div className="space-x-4 py-3 2xl max-w-7xl width-full mx-auto container">
        <div className="xl:justify-around flex justify-between">
          <div className="flex">
            <div className="cursor-pointer">
              <Link to={"/"}>
                <img src={logo3} className="logo2" />
              </Link>
            </div>
          </div>
          <div className="xl:gap-10 flex gap-20 text-sm font-medium">
            <div className="xl:gap-10 flex gap-20">
              <div className="grid place-items-center">
                <div className="flex gap-3 cursor-default address-hover">
                  <img src={geo} className="w-8 geo-img transition-transform" />
                  <p>
                    Ростовская Область, <br />
                    м.р-н Красносулинский, <br />
                    с.п. Михайловское, <br />п Молодежный, ул. Степная, зд. 3
                  </p>
                </div>
              </div>
              <div className="grid place-items-center justify-items-start">
                <div className="flex gap-1 cursor-pointer hover:underline hover:text-red-800 contact-hover transition-all">
                  <img
                    src={phone}
                    className="contact-img w-5 transition-transform"
                  />
                  <p>+7(863)-333-31-34</p>
                </div>
                <div className="flex gap-1 cursor-pointer hover:underline hover:text-red-800 contact2-hover transition-all">
                  <img
                    src={email}
                    className="contact2-img w-5 transition-transform"
                  />
                  <p>imz@i-m-z.ru</p>
                </div>
                <p
                  className="cursor-pointer hover:underline hover:text-red-800"
                  onClick={() => setIsOpen(true)}
                >
                  Связаться с нами
                </p>
                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog
                    as="div"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                  >
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="fixed left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center bg-black/60">
                        <Dialog.Panel className="bg-white/100 py-10 px-16 rounded-xl box-shadow relative">
                          <img
                            src={close}
                            className="absolute w-5 right-3 top-3 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                          />
                          <form
                            className="max-w-sm mx-auto"
                            onSubmit={sendEmail}
                            id="contact-form"
                            ref={form}
                          >
                            <div className="mb-5">
                              <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-900 text-black"
                              >
                                Ваше имя *
                              </label>
                              <input
                                type="name"
                                id="name"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dbg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-red-500 focus:border-red-500 shadow-sm-light"
                                required
                                name="user_name"
                              />
                            </div>
                            <div className="mb-5">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 text-black"
                              >
                                Ваш E-mail *
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-black focus:ring-red-500 focus:border-red-500 shadow-sm-light"
                                placeholder="name@i-m-z.ru"
                                required
                              />
                            </div>
                            <div className="mb-5">
                              <label
                                htmlFor="phone"
                                className="block mb-2 text-sm font-medium text-gray-900 text-black"
                              >
                                Ваш номер телефона *
                              </label>
                              <input
                                type="phone"
                                id="phone"
                                name="phone"
                                className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-red-500 focus:border-red-500 shadow-sm-light"
                                required
                              />
                            </div>
                            <label
                              htmlFor="message"
                              className="block mb-2 text-sm font-medium text-gray-900 text-black"
                            >
                              Ваше сообщение *
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows="4"
                              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 border-gray-600 placeholder-gray-400 text-black focus:ring-red-500 :focus:border-red-500"
                              placeholder="Оставьте сообщение..."
                            ></textarea>
                            <button
                              type="submit"
                              value="Send"
                              className="mt-5 text-white   bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-700 hover:bg-red-700 focus:ring-red-800"
                            >
                              Отправить
                            </button>
                          </form>
                        </Dialog.Panel>
                      </div>
                    </Transition.Child>
                  </Dialog>
                </Transition>
              </div>
            </div>
            <div className="grid place-items-center hover: shadow-red-800">
              {toggleDark ? (
                <img
                  src={moon}
                  className="bounce-hover transition-transform w-8 cursor-pointer"
                  onClick={() => setToogleDark(false)}
                />
              ) : (
                <img
                  src={sun}
                  className="bounce-hover transition-transform w-8 cursor-pointer"
                  onClick={() => setToogleDark(true)}
                />
              )}
            </div>
            <div
              className="flex grid place-items-center text-sm relative"
              onMouseEnter={handleMouseEnterLang}
              onMouseLeave={handleMouseLeaveLang}
            >
              <button
                type="button"
                className="inline-flex items-center font-medium justify-center p-0 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer"
              >
                <img src={russia} className="w-5 mr-2" />
                Russian (RU)
              </button>
              {isDropdownVisibleLang && (
                <div
                  className="language-open absolute z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 transition animate-fade animate-duration-[200ms] cursor-pointer hover:bg-red-700 hover:text-white"
                  id="language-dropdown-menu"
                >
                  <ul className="py-2 font-medium">
                    <li className="p-1">
                      <div className="inline-flex items-center">
                        <svg
                          aria-hidden="true"
                          className="h-3.5 w-3.5 rounded-full me-2"
                          xmlns="http://www.w3.org/2000/svg"
                          id="flag-icon-css-us"
                          viewBox="0 0 512 512"
                        >
                          <g fillRule="evenodd">
                            <g strokeWidth="1pt">
                              <path
                                fill="#bd3d44"
                                d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                              <path
                                fill="#fff"
                                d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                transform="scale(3.9385)"
                              />
                            </g>
                            <path
                              fill="#192f5d"
                              d="M0 0h98.8v70H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                              transform="scale(3.9385)"
                            />
                          </g>
                        </svg>
                        <p className="text-sm">English (US) </p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
