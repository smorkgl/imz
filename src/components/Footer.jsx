import industrial from "../img/industrial.png";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Footer() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <section class="flex flex-col font-poppins">
      <div class="w-full bg-[url('/src/img/test2.png')] bg-cover bg-no-repeat bg-center pt-11 dark:bg-gray-900 ">
        <div class="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto  space-x-4 py-3 2xl max-w-7xl width-full mx-auto container mt-5 relative">
          <div class="flex flex-wrap items-center justify-between pb-4 border-b border-gray-500 dark:border-gray-700 ">
            <h2 class="mb-4 text-2xl font-semibold tracking-wider text-gray-300  dark:text-gray-400">
              Исаевский машиностроительный завод
            </h2>
          </div>
          <div class="md:flex-col flex flex-nowrap py-10 -mx-3">
            <div class="w-full px-4 mb-11  ">
              <img src={industrial} className="w-30" />
              <p class="footer-info text-base font-normal leading-5 text-gray-300 dark:text-gray-400 mt-3">
                Качество выпускаемых труб ООО "Исаевского машиностроительного
                завода" отвечает всем современным стандартам и требованиям. На
                производстве задействованы передовые технологии производства и
                контроля качества.
              </p>
            </div>
            <div class="w-full px-3 ">
              <h2 class="mb-4 text-xl font-bold text-gray-200 dark:text-gray-400">
                Наша продукция{" "}
              </h2>
              <ul className="flex flex-col">
                <Link
                  to={`/profile_pipe`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Труба профильная
                  </li>
                </Link>
                <Link
                  to={`/metal_beams`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Балки
                  </li>
                </Link>
                <Link
                  to={`/metal_structure`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Металлоконструкции
                  </li>
                </Link>
                <Link
                  to={`/products`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Продукция
                  </li>
                </Link>
                <Link
                  to={`/products_order`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Заказ продукции
                  </li>
                </Link>
              </ul>
            </div>
            <div class="w-full px-4 mb-11 ">
              <h2 class="mb-4 text-xl font-bold text-gray-200 dark:text-gray-400">
                Быстрые ссылки
              </h2>
              <ul className="flex flex-col">
                <Link
                  to={`/`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Главная
                  </li>
                </Link>
                <Link
                  to={`/news`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Новости
                  </li>
                </Link>
                <Link
                  to={`/about`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    О нас
                  </li>
                </Link>
                <Link
                  to={`/projects`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Проекты
                  </li>
                </Link>
                <Link
                  to={`/hotel`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Гостиница
                  </li>
                </Link>
                <Link
                  to={`/parking`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Стоянка
                  </li>
                </Link>
                <Link
                  to={`/job`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Вакансии
                  </li>
                </Link>
                <Link
                  to={`/contacts`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Контакты
                  </li>
                </Link>
                <Link
                  to={`/gost`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    ГОСТ продукции
                  </li>
                </Link>
                <Link
                  to={`/calculator`}
                  class="inline-block text-base font-normal text-gray-300 dark:text-gray-400"
                >
                  <li class="flex items-center mb-1 p-0 li-blue__hover transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="w-3 h-3 mr-1 text-white dark:text-gray-400 bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      ></path>
                    </svg>
                    Калькулятор металлопроката
                  </li>
                </Link>
              </ul>
            </div>
            <div class="w-full px-4 mb-2 ">
              <h2 class="mb-4 text-lg font-bold text-gray-200 dark:text-gray-400">
                Связаться с нами
              </h2>
              <p class="flex items-center mb-4 footer__block_address">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="footer__block_address_svg transition-all w-4 h-4 mr-2 text-gray-300 dark:text-gray-400 bi bi-geo-alt "
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                </svg>
                <span class="text-gray-300 dark:text-gray-400 cursor-default">
                  Ростовская Область, <br />
                  м.р-н Красносулинский, <br />
                  с.п. Михайловское, <br />п Молодежный, ул. Степная, зд. 3
                </span>
              </p>
              <p class="flex items-center mb-4  footer__block_email cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="footer__block_email_svg transition-all w-4 h-4 mr-2 text-gray-300 dark:text-gray-400 bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                </svg>
                <span class="text-gray-300 dark:text-gray-400">
                  imz@i-m-z.ru
                </span>
              </p>
              <p class="flex items-center mb-4 footer__block_tel cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="footer__block_tel_svg transition-all w-4 h-4 mr-2 text-gray-300 dark:text-gray-400 bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                </svg>
                <span class="text-gray-300 dark:text-gray-400">
                  +7(863)-333-31-342
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="md:px-3 bottom-0 bg-blue-900 py-3 text-white">
          <div className="md:block container max-w-5xl width-full mx-auto flex justify-between">
            {!isTabletOrMobile && (
              <p className="text-sm">Создание сайта - ИТ отдел ИМЗ</p>
            )}
            <p className="md:text-center  text-sm">
              © 2014—2024. ИМЗ. {isTabletOrMobile && <br />}
              Исаевский машиностроительный завод
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
