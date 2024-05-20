import react, { useState, useEffect } from "react";
import BreadCrumbTriangle from "../img/breadcrumbtriangle.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Breadcumb() {
  const location = useLocation();
  const { pathname } = location;

  let path = "";
  let pathLink = "";
  switch (true) {
    case pathname === "/news" || pathname.startsWith("/news/"):
      path = "Новости";
      pathLink = "/news";
      break;
    case pathname === "/job":
      path = "Вакансии";
      pathLink = "/job";
      break;
    case pathname === "/about":
      path = "О нас";
      pathLink = "/about";
      break;
    case pathname === "/projects":
      path = "Проекты";
      pathLink = "/projects";
      break;
    case pathname === "/management":
      path = "Руководство";
      pathLink = "/management";
      break;
    case pathname === "/hotel":
      path = "Гостиница";
      pathLink = "/hotel";
      break;
    case pathname === "/cafe":
      path = "Кафе";
      pathLink = "/cafe";
      break;
    case pathname === "/shop":
      path = "Магазин";
      pathLink = "/shop";
      break;
    case pathname === "/kitchen":
      path = "Столовая";
      pathLink = "/kitchen";
      break;
    case pathname === "/parking":
      path = "Стоянка";
      pathLink = "/parking";
      break;
    case pathname === "/capacity":
      path = "Производственные мощности";
      pathLink = "/capacity";
      break;
    case pathname === "/certificates":
      path = "Сертификаты";
      pathLink = "/certificates";
      break;
    case pathname === "/profile_pipe":
      path = "Труба профильная";
      pathLink = "/profile_pipe";
      break;
    case pathname === "/metal_equipment":
      path = "Металлическое оборудование";
      pathLink = "/metal_equipment";
      break;
    case pathname === "/products":
      path = "Продукция";
      pathLink = "/products";
      break;
    case pathname === "/products_order":
      path = "Заказ продукции";
      pathLink = "/products_order";
      break;
    case pathname === "/suppliers":
      path = "Поставщикам";
      pathLink = "/suppliers";
      break;
    case pathname === "/contacts":
      path = "Контакты";
      pathLink = "/contacts";
      break;
    case pathname === "/gost":
      path = "ГОСТ продукции";
      pathLink = "/gost";
      break;
    case pathname === "/calculator":
      path = "Калькулятор металлпроката";
      pathLink = "/calculator";
      break;
    default:
      break;
  }

  return (
    <div className="space-x-4 py-3 2xl max-w-6xl width-full mx-auto container">
      <nav aria-label="breadcrumb">
        <ol className="flex">
          <li>
            <Link
              className="text-gray-600 hover:text-red-800 transition-all"
              to={`/`}
            >
              Главная
            </Link>
          </li>
          <img src={BreadCrumbTriangle} className="w-5" />
          <li>
            <Link
              className="text-gray-600 hover:text-red-800 transition-all"
              to={`${pathLink}`}
            >
              {path}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
