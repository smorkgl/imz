import React, { useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import { fetchPosts } from "../redux/slices/posts.js";
import { useMediaQuery } from "react-responsive";

import ReactPaginate from "react-paginate";

export default function News() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const isPostsLoading = posts.status === "loading";
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const reverseNewsToShow = posts.items.slice().reverse();

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const itemsPerPage = 10;
  const pageCount = Math.ceil(reverseNewsToShow.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold">Новости</h1>
      </div>
      <div className="xl:px-2 pt-10 2xl max-w-7xl w idth-full mx-auto container">
        <section className="mb-32 text-center !text-left">
          {isPostsLoading
            ? items.map((item, index) => (
                <div
                  key={index}
                  className="md:gap-3 mb-12 flex flex-wrap md:flex-col animate-pulse"
                >
                  <div className="md:ml-0 md:!w-full !px-0 mb-6 ml-auto w-full shrink-0 grow-0 basis-auto  px-3 !mb-0 !w-3/12">
                    <div className="grid bg-gray-300 rounded-lg h-36 w-36 place-items-center news__img-container w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-12 h-12 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 !mb-0 !w-9/12 !w-7/12">
                    <div>
                      <div className="md:hidden block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-20 mt-5">
                        &nbsp;
                      </div>
                      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72 mt-5">
                        &nbsp;
                      </div>
                      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div className="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : reverseNewsToShow
                .slice(
                  currentPage * itemsPerPage,
                  (currentPage + 1) * itemsPerPage
                )
                .map((news) => (
                  <div
                    key={news.id}
                    className="md:flex md:flex-col mb-12 flex flex-wrap"
                  >
                    <div className="!px-0 md:w-full mb-6 mx-auto shrink-0 grow-0 basis-auto px-3 !mb-0  w-3/12">
                      <Link to={`/news/${news.id}`}>
                        <div
                          className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                        >
                          <img
                            src={`${news.imageUrl}`}
                            className="news__img-container w-full"
                            alt="Louvre"
                          />
                          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                        </div>
                      </Link>
                    </div>

                    <div className="md:w-100 md:px-0 md:mr-0 md:!w-full mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-10 !mb-0 !w-9/12 !w-7/12">
                      <Link to={`/news/${news.id}`}>
                        <h5 className="mb-3 text-lg font-bold">{news.title}</h5>
                      </Link>
                      <p className="mb-6 text-neutral-500">
                        <small>
                          Опубликовано <u>{news.date}</u>
                        </small>
                      </p>
                      <p className="text-neutral-500">{news.mini_title}</p>
                    </div>
                  </div>
                ))}
          {isTabletOrMobile && (
            <ReactPaginate
              previousLabel={"Назад"}
              nextLabel={"Вперёд"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"navigationButtons__mobile"}
              previousLinkClassName={"previousButton_mobile"}
              nextLinkClassName={"nextButton_mobile"}
              disabledClassName={"navigationDisabled_mobile"}
              activeClassName={"navigationActive_mobile"}
            />
          )}

          {!isTabletOrMobile && (
            <ReactPaginate
              previousLabel={"Назад"}
              nextLabel={"Вперёд"}
              pageCount={pageCount}
              onPageChange={handlePageClick}
              containerClassName={"navigationButtons"}
              previousLinkClassName={"previousButton"}
              nextLinkClassName={"nextButton"}
              disabledClassName={"navigationDisabled"}
              activeClassName={"navigationActive"}
              breakLabel={"..."}
            />
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}
