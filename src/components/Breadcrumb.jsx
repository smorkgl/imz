import react, { useState, useEffect } from "react";
import BreadCrumbTriangle from "../img/breadcrumbtriangle.svg";
import { Link } from "react-router-dom";

export default function Breadcumb() {
  const [path, setPath] = useState("");
  const [pathLink, setPathLink] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/news") {
      setPath("Новости");
      setPathLink("/news");
    }
    if (currentPath === "/job") {
      setPath("Вакансии");
      setPathLink("/job");
    }
    if (currentPath.startsWith("/news/")) {
      setPath("Новости");
      setPathLink("/news");
    }
    if (currentPath === "/about") {
      setPath("О заводе");
      setPathLink("/about");
    }
    if (currentPath === "/projects") {
      setPath("Проекты");
      setPathLink("/projects");
    }
    if (currentPath === "/hotel") {
      setPath("Гостиница");
      setPathLink("/hotel");
    }
    if (currentPath === "/parking") {
      setPath("Стоянка");
      setPathLink("/parking");
    }
    if (currentPath === "/capacity") {
      setPath("Производственные мощности");
      setPathLink("/capacity");
    }
    if (currentPath === "/certificates") {
      setPath("Сертификаты");
      setPathLink("/certificates");
    }
    if (currentPath === "/profile_pipe") {
      setPath("Труба профильная");
      setPathLink("/profile_pipe");
    }
    if (currentPath === "/metal_beams") {
      setPath("Балки");
      setPathLink("/metal_beams");
    }
    if (currentPath === "/metal_structure") {
      setPath("Металлоконструкции");
      setPathLink("/metal_structure");
    }
    if (currentPath === "/products") {
      setPath("Продукция");
      setPathLink("/products  ");
    }
    if (currentPath === "/products_order") {
      setPath("Заказать продукцию");
      setPathLink("/products_order");
    }
    if (currentPath === "/suppliers") {
      setPath("Поставщикам");
      setPathLink("/suppliers");
    }
    if (currentPath === "/contacts") {
      setPath("Контакты");
      setPathLink("/contacts");
    }
    if (currentPath === "/gost") {
      setPath("ГОСТ ПРОДУКЦИИ");
      setPathLink("/gost");
    }
    if (currentPath === "/calculator") {
      setPath("Калькулятор металлопроката");
      setPathLink("/calculator");
    }
  }, []);
  return (
    <div className="space-x-4 py-3 2xl max-w-6xl width-full mx-auto container">
      <nav aria-label="breadcrumb">
        <ol class="flex">
          <li>
            <Link to={`/`}>
              <a
                href="#"
                class="text-gray-600 hover:text-blue-800 transition-all"
              >
                Главная
              </a>
            </Link>
          </li>
          <img src={BreadCrumbTriangle} className="w-5" />
          <li>
            <Link to={`${pathLink}`}>
              <a
                href="#"
                class="text-gray-600 hover:text-blue-800 transition-all"
              >
                {path}
              </a>
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
}
