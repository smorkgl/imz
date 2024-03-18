import { Outlet, Link, NavLink } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth } from "../redux/slices/auth";
import dots from "../img/dots.svg";
import close from "../img/close.svg";
import logo from "../img/logoNEW2.svg";
import { logout, selectIsAuth } from "../redux/slices/auth";

export default function Nav() {
  const [isDropdownVisibleAbout, setDropdownVisibleAbout] = useState(false);
  const [isDropdownVisibleManuf, setDropdownVisibleManuf] = useState(false);
  const [isDropdownVisibleProd, setDropdownVisibleProd] = useState(false);
  const [isDropdownVisibleCont, setDropdownVisibleCont] = useState(false);
  const [isDropdownVisibleFaq, setDropdownVisibleFaq] = useState(false);

  const handleMouseEnterAbout = () => {
    setDropdownVisibleAbout(true);
  };
  const handleMouseLeaveAbout = () => {
    setDropdownVisibleAbout(false);
  };

  const handleMouseEnterManuf = () => {
    setDropdownVisibleManuf(true);
  };
  const handleMouseLeaveManuf = () => {
    setDropdownVisibleManuf(false);
  };

  const handleMouseEnterProd = () => {
    setDropdownVisibleProd(true);
  };
  const handleMouseLeaveProd = () => {
    setDropdownVisibleProd(false);
  };

  const handleMouseEnterCont = () => {
    setDropdownVisibleCont(true);
  };
  const handleMouseLeaveCont = () => {
    setDropdownVisibleCont(false);
  };

  const handleMouseEnterFaq = () => {
    setDropdownVisibleFaq(true);
  };
  const handleMouseLeaveFaq = () => {
    setDropdownVisibleFaq(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 124);
    });
  }, []);

  return (
    <nav
      className={
        scroll
          ? "sticky z-50 top-0 bg-blue-800 py-2 border-b-2 border-blue-950 shadow-2xl transition-all"
          : "bg-blue-800  "
      }
    >
      <div>
        {scroll && (
          <Link to={"/"}>
            <img
              src={logo}
              className="absolute h-12 left-28 cursor-pointer animate-flip-down animate-duration-800"
            />
          </Link>
        )}
        <div className="max-w-5xl width-full mx-auto container flex justify-between cursor-pointer text-white font-bold relative">
          <div
            className="dots__container absolute h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4 transition-all"
            onClick={() => setIsOpen(true)}
          >
            <img src={dots} className="dots w-7" />
          </div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className={
                    scroll
                      ? "fixed top-0 h-full w-screen bg-white/100 p-10 z-50"
                      : ""
                  }
                >
                  <Dialog.Panel>
                    <div className="flex flex-wrap text-2xl gap-16">
                      <div className="font-semibold w-60">
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          ГЛАВНАЯ
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-60">
                        <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3">
                          О ИМЗ
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Новости
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          О нас
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Проекты
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Гостиница
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Стоянка
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-60">
                        <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3 ">
                          ПРОИЗВОДСТВО
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Производственные мощности
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Сертификаты
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-60">
                        <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3">
                          ПРОДУКЦИЯ
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Труба профильная
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Балки
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Металлоконструкции
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Продукция
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Заказ продукции
                        </div>
                      </div>
                      <div className="font-semibold w-60">
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          ПОСТАВЩИКАМ
                        </div>
                      </div>
                      <div className="font-semibold w-60">
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          ВАКАНСИИ
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-60">
                        <div className="font-semibold w-60 cursor-pointer hover:bg-gray-100 p-3">
                          КОНТАКТЫ
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Офис продаж
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Написать письмо
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Заказ продукции
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-60">
                        <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3">
                          FAQ
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          ГОСТ продукции
                        </div>
                        <div className="cursor-pointer hover:bg-gray-100 p-3">
                          Калькулятор металлопроката
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-60">
                        <Link to={`/login`}>
                          <div className="font-semibold cursor-pointer hover:bg-gray-100 p-3">
                            ВХОД
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Dialog.Panel>
                  <img
                    src={close}
                    className="absolute cursor-pointer top-5 right-5 w-5"
                  />
                </div>
              </Transition.Child>
            </Dialog>
          </Transition>
          <Link to={`/`}>
            <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4 transition-all">
              <p>ГЛАВНАЯ</p>
            </div>
          </Link>
          <div
            className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4 transition-all"
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
          >
            <p>О ИМЗ</p>
            {isDropdownVisibleAbout && (
              <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                <ul>
                  <Link to={`/news`}>
                    <li className="li-blue__hover">Новости</li>
                  </Link>
                  <Link to={`/about`}>
                    <li className="li-blue__hover">О нас</li>
                  </Link>
                  <Link to={`projects`}>
                    <li className="li-blue__hover">Проекты</li>
                  </Link>
                  <Link to={`/hotel`}>
                    <li className="li-blue__hover">Гостиница</li>
                  </Link>
                  <Link to={`/parking`}>
                    <li className="li-blue__hover">Стоянка</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
          <div
            className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4 transition-all"
            onMouseEnter={handleMouseEnterManuf}
            onMouseLeave={handleMouseLeaveManuf}
          >
            <p>ПРОИЗВОДСТВО</p>
            {isDropdownVisibleManuf && (
              <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                <ul>
                  <li className="li-blue__hover">Производственные мощности</li>
                  <li className="li-blue__hover">Сертификаты</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4 transition-all"
            onMouseEnter={handleMouseEnterProd}
            onMouseLeave={handleMouseLeaveProd}
          >
            <p>ПРОДУКЦИЯ</p>
            {isDropdownVisibleProd && (
              <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                <ul>
                  <li className="li-blue__hover">Труба профильная</li>
                  <li className="li-blue__hover">Балки</li>
                  <li className="li-blue__hover">Металлоконструкции</li>
                  <li className="li-blue__hover">Продукция</li>
                  <li className="li-blue__hover">Заказ продукции</li>
                </ul>
              </div>
            )}
          </div>
          <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4 transition-all">
            <p>ПОСТАВЩИКАМ</p>
          </div>
          <Link to={`/job`} style={{ textDecoration: "none" }}>
            <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4 transition-all">
              <p>ВАКАНСИИ</p>
            </div>
          </Link>
          <div
            className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4 transition-all"
            onMouseEnter={handleMouseEnterCont}
            onMouseLeave={handleMouseLeaveCont}
          >
            <p>КОНТАКТЫ</p>
            {isDropdownVisibleCont && (
              <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                <ul>
                  <li className="li-blue__hover">Офис продаж</li>
                  <li className="li-blue__hover">Написать письмо</li>
                  <li className="li-blue__hover">Заказ продукции</li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4 transition-all"
            onMouseEnter={handleMouseEnterFaq}
            onMouseLeave={handleMouseLeaveFaq}
          >
            <p>FAQ</p>
            {isDropdownVisibleFaq && (
              <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                <ul>
                  <li className="li-blue__hover">ГОСТ продукции</li>
                  <li className="li-blue__hover">Калькулятор металлопроката</li>
                </ul>
              </div>
            )}
          </div>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
