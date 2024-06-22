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

  const isPostsLoading = posts.status === "loading";
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const items = [1];

  return (
    <div>
      <Header />
      <Nav />
      
      
      <Breadcrumb />
      <div>
        <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
          {isPostsLoading
            ? items.map((item, index) => (
                <div
                  key={index}
                  className="max-w-sm bg-white border border-gray-200 rounded-lg shadow animate-pulse"
                >
                  <div className="relative">
                    <div className="relative">
                      <img className="rounded-t-lg min-h-72 w-screen bg-gray-300" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-500 svg__in-image "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="block w-56 h-3 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                      &nbsp;
                    </div>
                    <div className="block w-56 h-3 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                      &nbsp;
                    </div>
                    <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                      &nbsp;
                    </div>
                    <div className="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                      &nbsp;
                    </div>
                    <div className="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                      &nbsp;
                    </div>
                    <div className="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                      &nbsp;
                    </div>
                    <div className="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                      &nbsp;
                    </div>
                    <div className="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                      &nbsp;
                    </div>
                    <div className="block h-10 mt-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-lg text-inherit w-40">
                      &nbsp;
                    </div>
                  </div>
                </div>
              ))
            : selectedNews && (
                <div className="mb-10">
                  <h1 className="font-bold text-2xl mt-5">
                    {selectedNews.title}
                  </h1>
                  <div className="flex gap-1 mt-5">
                    <img src={calendar} className="w-6" />
                    <p>{selectedNews.date}</p>
                  </div>
                  <img
                    className="md:w-full w-1/3 mt-5"
                    src={`${selectedNews.imageUrl}`}
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
