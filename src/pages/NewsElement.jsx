import { Outlet, Link, NavLink, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import { ReverseNewsList } from "./News";
import calendar from "../img/calendar.svg";

export default function NewsElement() {
  const { id } = useParams();

  // По id найдите соответствующую новость в массиве NewsList
  const selectedNews = ReverseNewsList.find((news) => news.id === parseInt(id));
  return (
    <div>
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div>
        <div className="py-3 2xl max-w-6xl width-full mx-auto container">
          {selectedNews && (
            <div className="mb-10">
              <h1 className="font-bold text-2xl mt-5">{selectedNews.title}</h1>
              <div className="flex gap-1 mt-5">
                <img src={calendar} className="w-6" />
                <p>{selectedNews.date}</p>
              </div>
              <img className="w-1/3 mt-5" src={selectedNews.img} alt="News" />
              <p className="mt-5">{selectedNews.full_description}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
