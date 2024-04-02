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

export default function News() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  const isPostsLoading = posts.status === "loading";
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const reverseNewsToShow = posts.items.slice().reverse();

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-5 py-3 2xl max-w-6xl width-full mx-auto container">
        <h1 className="font-bold">Новости</h1>
      </div>
      <div class="container my-12 mx-auto md:px-6">
        <section class="mb-32 text-center md:text-left">
          {isPostsLoading
            ? items.map((item, index) => (
                <div key={index} class="mb-12 flex flex-wrap animate-pulse">
                  <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12 ">
                    <div class="grid bg-gray-300 rounded-lg h-36 w-36 place-items-center news__img-container w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-12 h-12 text-gray-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                    <div>
                      <div class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-20 mt-5">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72 mt-5">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                      <div class="block h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit w-72">
                        &nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : reverseNewsToShow.map((news) => (
                <div key={news.id} class="mb-12 flex flex-wrap">
                  <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12">
                    <Link to={`/news/${news.id}`}>
                      <div
                        class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        <img
                          src={`http://localhost:3131/${news.imageUrl}`}
                          class="news__img-container w-full"
                          alt="Louvre"
                        />
                        <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
                      </div>
                    </Link>
                  </div>

                  <div class="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
                    <Link to={`/news/${news.id}`}>
                      <h5 class="mb-3 text-lg font-bold">{news.title}</h5>
                    </Link>
                    <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                      <small>
                        Опубликовано <u>{news.date}</u>
                      </small>
                    </p>
                    <p class="text-neutral-500 dark:text-neutral-300">
                      {news.mini_title}
                    </p>
                  </div>
                </div>
              ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}
