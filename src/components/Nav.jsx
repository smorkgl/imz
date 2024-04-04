import { Outlet, Link, NavLink } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import dots from "../img/dots.svg";
import close from "../img/close.svg";
import logo from "../img/logoNEW2.svg";
import { useMediaQuery } from "react-responsive";
import { Sidebar } from "primereact/sidebar";

export default function Nav() {
  const [isDropdownVisibleAbout, setDropdownVisibleAbout] = useState(false);
  const [isDropdownVisibleManuf, setDropdownVisibleManuf] = useState(false);
  const [isDropdownVisibleProd, setDropdownVisibleProd] = useState(false);
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

  const handleMouseEnterFaq = () => {
    setDropdownVisibleFaq(true);
  };
  const handleMouseLeaveFaq = () => {
    setDropdownVisibleFaq(false);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (window.screen.width >= 767 && !isTabletOrMobile) {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 124);
      });
    }
  }, []);

  return (
    <nav
      className={
        scroll
          ? "sticky z-50 top-0 bg-blue-800 py-2 border-b-2 border-blue-950 shadow-2xl transition-all"
          : isTabletOrMobile
            ? "header__mobile fixed right-0 top-0 left-0 z-50 bg-blue-800/60"
            : "bg-blue-800"
      }
    >
      {isTabletOrMobile && (
        <div className="flex place-items-center justify-between px-5">
          <Link to={"/"}>
            <img src={logo} className="h-16 p-2" />
          </Link>
          <img
            src={dots}
            className="dots h-10 z-50"
            onClick={() => setVisible(!visible)}
          />

          <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <div class="bg-blue-800 text-white" id="nav">
              <div class="nav-links bg-blue-900">
                <ul class="pt-20 pb-10 flex flex-col gap-8  row align-items-center ">
                  <Link to={"/"}>
                    <p className="font-bold pl-5">ГЛАВНАЯ</p>
                  </Link>
                  <div className="pl-20 gap-5 flex flex-col bg-blue-900">
                    <Link to={"/news"}>
                      <p className="">Новости</p>
                    </Link>
                    <Link to={"/about"}>
                      <p>О нас</p>
                    </Link>
                    <Link to={"/projects"}>
                      <p>Проекты</p>
                    </Link>
                    <Link to={"/hotel"}>
                      <p>Гостиница</p>
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
                    <Link to={"/metal_beams"}>
                      <p>Балки</p>
                    </Link>
                    <Link to={"/metal_structure"}>
                      <p>Металлоконструкции</p>
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
                  <div className="pl-20 flex flex-col gap-5">
                    <Link to={"/gost"}>
                      <p>ГОСТ продукции</p>
                    </Link>
                    <Link to={"/calculator"}>
                      <p>Калькулятор металлопроката</p>
                    </Link>
                  </div>
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
                className="absolute h-12 left-14 cursor-pointer animate-flip-down animate-duration-800"
              />
            </Link>
          )}
          <div className="lg:mx-20 xl:justify-around xl:text-sm max-w-5xl width-full mx-auto container flex justify-between cursor-pointer text-white font-bold relative">
            <div
              className="xl:-left-10 dots__container absolute h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4 transition-all"
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
                          <div className="cursor-pointer hover:bg-gray-100 p-3">
                            ГЛАВНАЯ
                          </div>
                        </div>
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
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
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
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
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
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
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
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
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
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
                        <div className="flex flex-col xl:gap-2 gap-3 w-60">
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
                    <Link to={`/projects`}>
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
                    <Link to={`/capacity`}>
                      <li className="li-blue__hover">
                        Производственные мощности
                      </li>
                    </Link>
                    <Link to={`/certificates`}>
                      <li className="li-blue__hover">Сертификаты</li>
                    </Link>
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
                    <Link to={`/profile_pipe`}>
                      <li className="li-blue__hover">Труба профильная</li>
                    </Link>
                    <Link to={`/metal_beams`}>
                      <li className="li-blue__hover">Балки</li>
                    </Link>
                    <Link to={`/metal_structure`}>
                      <li className="li-blue__hover">Металлоконструкции</li>
                    </Link>
                    <Link to={`/products`}>
                      <li className="li-blue__hover">Продукция</li>
                    </Link>
                    <Link to={`/products_order`}>
                      <li className="li-blue__hover">Заказ продукции</li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
            <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4 transition-all">
              <Link to={`/suppliers`}>
                <p>ПОСТАВЩИКАМ</p>
              </Link>
            </div>
            <Link to={`/job`} style={{ textDecoration: "none" }}>
              <div className="h-12 leading-12 flex justify-center items-center cursor-pointer hover:bg-blue-700 hover:rounded px-4 transition-all">
                <p>ВАКАНСИИ</p>
              </div>
            </Link>
            <Link to={`/contacts`} style={{ textDecoration: "none" }}>
              <div className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4 transition-all">
                <p>КОНТАКТЫ</p>
              </div>
            </Link>
            <div
              className="h-12 leading-12 flex justify-center items-center cursor-pointer relative hover:bg-blue-700 hover:rounded px-4 transition-all"
              onMouseEnter={handleMouseEnterFaq}
              onMouseLeave={handleMouseLeaveFaq}
            >
              <p>FAQ</p>
              {isDropdownVisibleFaq && (
                <div className="dropdown-menu animate-fade-up animate-duration-[300ms] absolute z-50 text-black">
                  <ul>
                    <Link to={`/gost`} style={{ textDecoration: "none" }}>
                      <li className="li-blue__hover">ГОСТ продукции</li>
                    </Link>
                    <Link to={`/calculator`} style={{ textDecoration: "none" }}>
                      <li className="li-blue__hover">
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
