import { Outlet, Link, NavLink, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import calendar from "../img/calendar.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { fetchPosts } from "../redux/slices/posts.js";

export default function NewsElement() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  // По id найдите соответствующую новость в массиве NewsList
  const selectedNews = posts.items.find((news) => news.id === parseInt(id));

  return (
    <div>
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div>
        <div className="xl:px-5 py-3 2xl max-w-6xl width-full mx-auto container">
          {selectedNews && (
            <div className="mb-10">
              <h1 className="font-bold text-2xl mt-5">{selectedNews.title}</h1>
              <div className="flex gap-1 mt-5">
                <img src={calendar} className="w-6" />
                <p>{selectedNews.date}</p>
              </div>
              <img
                className="md:w-full w-1/3 mt-5"
                src={`http://localhost:3131/${selectedNews.imageUrl}`}
                alt="News"
              />
              <p className="mt-5">
                <Markdown rehypePlugins={[rehypeRaw]}>
                  {selectedNews.description}
                </Markdown>
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
