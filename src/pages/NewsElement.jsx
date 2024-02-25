import { Outlet, Link, NavLink, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import { ReverseNewsList } from "../pages/News";

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
        {selectedNews && (
          <>
            <h3>{selectedNews.title}</h3>
            <p>{selectedNews.description}</p>
            <p>Дата публикации: {selectedNews.date}</p>
            <img src={selectedNews.img} alt="News" />
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
