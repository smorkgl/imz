import { Outlet, Link, NavLink } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import dots from "../img/dots.svg";
import close from "../img/close.svg";
import logo from "../img/logo.svg";
import { useMediaQuery } from "react-responsive";
import { Sidebar } from "primereact/sidebar";

export default function Nav() {
  const [isDropdownVisibleAbout, setDropdownVisibleAbout] = useState(false);
  const [isDropdownVisibleManuf, setDropdownVisibleManuf] = useState(false);
  const [isDropdownVisibleProd, setDropdownVisibleProd] = useState(false);
  const [isDropdownVisibleFaq, setDropdownVisibleFaq] = useState(false);
  const [isDropdownVisibleDosug, setDropdownVisibleDosug] = useState(false);

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

  const handleMouseEnterFaq = () => {
    setDropdownVisibleFaq(true);
  };
  const handleMouseLeaveFaq = () => {
    setDropdownVisibleFaq(false);
  };

  const handleMouseEnterDosug = () => {
    setDropdownVisibleDosug(true);
  };
  const handleMouseLeaveDosug = () => {
    setDropdownVisibleDosug(false);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [opacity, setOpacity] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 124 && !isTabletOrMobile) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOpacity = () => {
      const scrollY = window.scrollY;
      if (scrollY >= 70) {
        setOpacity(false);
      } else {
        setOpacity(true);
      }
    };

    window.addEventListener("scroll", handleOpacity);

    return () => {
      window.removeEventListener("scroll", handleOpacity);
    };
  }, []);

  return (
    <nav
      className={
        scroll
          ? "sticky z-50 top-0 bg-red-700 py-2 border-b-2 border-red-950 shadow-2xl transition-all"
          : isTabletOrMobile
            ? opacity
              ? "shadow-2xl header__mobile fixed right-0 top-0 left-0 z-50 bg-red-700 transition-all "
              : "shadow-2xl header__mobile fixed right-0 top-0 left-0 z-50 bg-red-700/50 transition-all "
            : "bg-red-700"
      }
    >
      {isTabletOrMobile && (
        <div className="flex place-items-center justify-between px-5">
          <Link to={"/"}>
            <img src={logo} className="h-16 p-2" />
          </Link>
          {!visible ? (
            <img
              src={dots}
              className="dots h-8 z-50 transition-all"
              onClick={() => {
                setVisible(!visible);
                setOpacity(true);
              }}
            />
          ) : (
            <img
              src={close}
              className="dots pr-1 h-6 z-50 transition-all"
              onClick={() => {
                setVisible(!visible);
              }}
            />
          )}

          <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <div className="bg-red-700 text-white" id="nav">
              <div className="nav-links bg-red-700">
                <ul className="pt-20 pb-10 flex flex-col gap-8  row align-items-center ">
                  <Link to={"/"}>
                    <p className="font-bold pl-5">ГЛАВНАЯ</p>
                  </Link>
                  <div className="pl-12 gap-5 flex flex-col">
                    <Link to={"/news"}>
                      <p className="">Новости</p>
                    </Link>
                    <Link to={"/about"}>
                      <p>О нас</p>
                    </Link>
                    <Link to={"/projects"}>
                      <p>Проекты</p>
                    </Link>
                    <Link to={"/management"}>
                      <p>Руководство</p>
                    </Link>
                    <Link to={"/hotel"}>
                      <p>Гостиница</p>
                    </Link>
                    <Link to={"/cafe"}>
                      <p>Кафе</p>
                    </Link>
                    <Link to={"/shop"}>
                      <p>Магазин</p>
                    </Link>
                    <Link to={"/kitchen"}>
                      <p>Столовая</p>
                    </Link>
                    <Link to={"/parking"}>
                      <p>Стоянка</p>
                    </Link>
                    <Link to={"/capacity"}>
                      <p>Производственные мощности</p>
                    </Link>
                    <Link to={"/certificates"}>
                      <p>Сертификаты</p>
                    </Link>
                    <Link to={"/profile_pipe"}>
                      <p>Труба профильная</p>
                    </Link>

                    <Link to={"/products"}>
                      <p>Продукция</p>
                    </Link>
                    <Link to={"/products_order"}>
                      <p>Заказ продукции</p>
                    </Link>
                  </div>
                  <Link to={"/suppliers"}>
                    <p className="font-bold pl-5">ПОСТАВЩИКАМ</p>
                  </Link>
                  <Link to={"/job"}>
                    <p className="font-bold pl-5">ВАКАНСИИ</p>
                  </Link>
                  <Link to={"/contacts"}>
                    <p className="font-bold pl-5">КОНТАКТЫ</p>
                  </Link>
                  <div className="pl-12 flex flex-col gap-5">
                    <Link to={"/gost"}>
                      <p>ГОСТ продукции</p>
                    </Link>
                    <Link to={"/calculator"}>
                      <p>Калькулятор металлопроката</p>
                    </Link>
                  </div>
                  <Link to={`/login`}>
                    <p className="pl-5 font-bold">ВХОД</p>
                  </Link>
                </ul>{" "}
              </div>
            </div>
          </Sidebar>
        </div>
      )}
      {!isTabletOrMobile && (
        <div>
          {scroll && (
            <Link to={"/"}>
              <img
                src={logo}
                className="absolute h-12 left-14 cursor-pointer"
              />
            </Link>
          )}
          <div className="lg:mx-20 xl:justify-around xl:text-sm max-w-5xl width-full mx-auto container flex justify-between cursor-pointer text-white font-bold relative">
            <div
              className="xl:-left-10 dots__container absolute h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-red-600 hover:rounded px-4 transition-all"
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
                      isOpen
                        ? "fixed top-0 h-full w-screen bg-white/100 p-10 z-50"
                        : ""
                    }
                  >
                    <Dialog.Panel>
                      <div className="xl:gap-4 text-lg flex flex-wrap text-2xl gap-16">
                        <div className="font-semibold w-60">
                          <Link to={`/`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              ГЛАВНАЯ
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
                          <div className="font-semibold cursor-pointer hover:bg-gray-100 p-2">
                            О ИМЗ
                          </div>
                          <Link to={`/news`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Новости
                            </div>
                          </Link>
                          <Link to={`/about`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              О нас
                            </div>
                          </Link>
                          <Link to={`/projects`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Проекты
                            </div>
                          </Link>
                          <Link to={`/management`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Руководство
                            </div>
                          </Link>
                          <Link to={`/hotel`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Гостиница
                            </div>
                          </Link>
                          <Link to={`/cafe`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Кафе
                            </div>
                          </Link>
                          <Link to={`/shop`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Магазин
                            </div>
                          </Link>
                          <Link to={`/kitchen`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Столовая
                            </div>
                          </Link>
                          <Link to={`/parking`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Стоянка
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
                          <div className="font-semibold cursor-pointer hover:bg-gray-100 p-2 ">
                            ПРОИЗВОДСТВО
                          </div>
                          <Link to={`/capacity`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Производственные мощности
                            </div>
                          </Link>
                          <Link to={`/cerificates`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Сертификаты
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
                          <div className="font-semibold cursor-pointer hover:bg-gray-100 p-2">
                            ПРОДУКЦИЯ
                          </div>

                          <Link to={`/profile_pipe`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Труба профильная
                            </div>
                          </Link>
                          <Link to={`/products`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Продукция
                            </div>
                          </Link>
                          <Link to={`/products_order`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Заказ продукции
                            </div>
                          </Link>
                        </div>
                        <div className="font-semibold w-60">
                          <Link to={`/suppliers`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              ПОСТАВЩИКАМ
                            </div>
                          </Link>
                        </div>
                        <div className="font-semibold w-60">
                          <Link to={`/job`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              ВАКАНСИИ
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
                          <Link to={`/contacts`}>
                            <div className="font-semibold w-60 cursor-pointer hover:bg-gray-100 p-2">
                              КОНТАКТЫ
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
                          <div className="font-semibold cursor-pointer hover:bg-gray-100 p-2">
                            FAQ
                          </div>
                          <Link to={`/GOST`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              ГОСТ продукции
                            </div>
                          </Link>
                          <Link to={`/calculator`}>
                            <div className="cursor-pointer hover:bg-gray-100 p-2">
                              Калькулятор металлопроката
                            </div>
                          </Link>
                        </div>
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
                          <Link to={`/login`}>
                            <div className="font-semibold cursor-pointer hover:bg-gray-100 p-2">
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
              <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-red-600 hover:rounded px-4 transition-all">
                <p>ГЛАВНАЯ</p>
              </div>
            </Link>
            <div
              className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-red-600 hover:rounded px-4 transition-all"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
            >
              <p>О ИМЗ</p>
              {isDropdownVisibleAbout && (
                <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                  <ul>
                    <Link to={`/news`}>
                      <li className="li-blue__hover_nav">Новости</li>
                    </Link>
                    <Link to={`/about`}>
                      <li className="li-blue__hover_nav">О нас</li>
                    </Link>
                    <Link to={`/projects`}>
                      <li className="li-blue__hover_nav">Проекты</li>
                    </Link>
                    <Link to={`/management`}>
                      <li className="li-blue__hover_nav">Руководство</li>
                    </Link>

                    <li
                      className="li-blue__hover_nav"
                      onMouseEnter={handleMouseEnterDosug}
                      onMouseLeave={handleMouseLeaveDosug}
                    >
                      Досуг
                    </li>
                  </ul>
                </div>
              )}
              {isDropdownVisibleDosug && (
                <div
                  onMouseEnter={handleMouseEnterDosug}
                  onMouseLeave={handleMouseLeaveDosug}
                  className="dropdown-menu ml-32 animate-fade-up animate-duration-[300ms] absolute z-50 text-black"
                >
                  <ul>
                    <Link to={`/hotel`}>
                      <li className="li-blue__hover_nav">Гостиница</li>
                    </Link>
                    <Link to={`/cafe`}>
                      <li className="li-blue__hover_nav">Кафе</li>
                    </Link>
                    <Link to={`/shop`}>
                      <li className="li-blue__hover_nav">Магазин</li>
                    </Link>
                    <Link to={`/kitchen`}>
                      <li className="li-blue__hover_nav">Столовая</li>
                    </Link>
                    <Link to={`/parking`}>
                      <li className="li-blue__hover_nav">Стоянка</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-red-600 hover:rounded px-4 transition-all"
              onMouseEnter={handleMouseEnterManuf}
              onMouseLeave={handleMouseLeaveManuf}
            >
              <p>ПРОИЗВОДСТВО</p>

              {isDropdownVisibleManuf && (
                <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                  <ul>
                    <Link to={`/capacity`}>
                      <li className="li-blue__hover_nav">
                        Производственные мощности
                      </li>
                    </Link>
                    <Link to={`/certificates`}>
                      <li className="li-blue__hover_nav">Сертификаты</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-red-600 hover:rounded px-4 transition-all"
              onMouseEnter={handleMouseEnterProd}
              onMouseLeave={handleMouseLeaveProd}
            >
              <p>ПРОДУКЦИЯ</p>
              {isDropdownVisibleProd && (
                <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                  <ul>
                    <Link to={`/profile_pipe`}>
                      <li className="li-blue__hover_nav">Труба профильная</li>
                    </Link>
                    <Link to={`/metal_equipment`}>
                      <li className="li-blue__hover_nav">
                        Металлическое оборудование
                      </li>
                    </Link>

                    <Link to={`/products`}>
                      <li className="li-blue__hover_nav">Продукция</li>
                    </Link>
                    <Link to={`/products_order`}>
                      <li className="li-blue__hover_nav">Заказ продукции</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-red-600 hover:rounded px-4 transition-all">
              <Link to={`/suppliers`}>
                <p>ПОСТАВЩИКАМ</p>
              </Link>
            </div>
            <Link to={`/job`} style={{ textDecoration: "none" }}>
              <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-red-600 hover:rounded px-4 transition-all">
                <p>ВАКАНСИИ</p>
              </div>
            </Link>
            <Link to={`/contacts`} style={{ textDecoration: "none" }}>
              <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-red-600 hover:rounded px-4 transition-all">
                <p>КОНТАКТЫ</p>
              </div>
            </Link>
            <div
              className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-red-600 hover:rounded px-4 transition-all"
              onMouseEnter={handleMouseEnterFaq}
              onMouseLeave={handleMouseLeaveFaq}
            >
              <p>FAQ</p>
              {isDropdownVisibleFaq && (
                <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                  <ul>
                    <Link to={`/gost`} style={{ textDecoration: "none" }}>
                      <li className="li-blue__hover_nav">ГОСТ продукции</li>
                    </Link>
                    <Link to={`/calculator`} style={{ textDecoration: "none" }}>
                      <li className="li-blue__hover_nav">
                        Калькулятор металлопроката
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <span></span>
          </div>
        </div>
      )}
    </nav>
  );
}
