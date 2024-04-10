import newsicon from "../img/newsicon.svg";
import video from "../img/video.svg";
import qr from "../img/qr.gif";
import tube from "../img/tube.svg";
import next from "../img/next.svg";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import camera from "../img/camera.svg";
import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/photo3.jpg";
import photo4 from "../img/photo4.jpg";
import photo6 from "../img/photo6.jpg";
import photo7 from "../img/photo7.jpg";
import photo8 from "../img/photo8.jpg";
import photo10 from "../img/photo10.jpg";
import photo11 from "../img/photo11.jpg";
import photo12 from "../img/photo12.jpeg";
import right_arrow from "../img/right_arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slices/posts.js";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Main() {
  const [isDropdownVisibleNews, setDropdownVisibleNews] = useState({});

  const handleMouseEnterNews = (newsId) => {
    setDropdownVisibleNews((prevState) => ({
      ...prevState,
      [newsId]: true,
    }));
  };

  const handleMouseLeaveNews = (newsId) => {
    setDropdownVisibleNews((prevState) => ({
      ...prevState,
      [newsId]: false,
    }));
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const newsToShow = posts.items.slice(0, 4);
  const reverseNewsToShow = newsToShow.slice().reverse();

  const isPostsLoading = posts.status === "loading";

  const items = [1, 2, 3, 4];

  return (
    <div className="md:p-2 lg:pl-5 space-x-4 py-3 2xl max-w-7xl width-full mx-auto container mt-5 relative">
      <div className="md:block flex justify-between">
        <div>
          <div className="flex justify-between place-items-center">
            <div className="flex md:gap-1 gap-2 cursor-pointer">
              <img src={newsicon} className="md:w-4 w-5" />
              <p className="md:text-sm md:font-normal text-2xl">
                Последние новости:
              </p>
            </div>
            {!isTabletOrMobile && (
              <Link to={"/news"}>
                <div className="md:mr-0 main__hover_container flex mr-20 gap-3 place-items-center">
                  <p className="main__hover_container_title mr-2 text-xs font-medium tracking-widest transition-all">
                    СМОТРЕТЬ ВСЕ
                  </p>
                  <img
                    src={right_arrow}
                    className="main__hover_container_img w-4 transition-all"
                  />
                </div>
              </Link>
            )}
          </div>
          <div className="md:h-1 work__line2 mt-2" />

          {isTabletOrMobile && (
            <div className="flex-col lg:justify-normal xl:gap-5 xl:justify-around flex flex-wrap gap-20 mt-5">
              {isPostsLoading
                ? items.map((item, index) => (
                    <div
                      key={index}
                      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow animate-pulse"
                    >
                      <div className="relative">
                        <div className="relative">
                          <img class="rounded-t-lg min-h-72 w-screen bg-gray-300" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            class="w-12 h-12 text-gray-500 svg__in-image "
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="p-5">
                        <div class="block w-56 h-3 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-3 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block h-10 mt-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-lg text-inherit w-40">
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  ))
                : reverseNewsToShow.map((news) => (
                    <div key={news.id}>
                      <div class="md:flex justify-between gap-5 place-items-center max-w-sm bg-white relative">
                        <Link to={`/news/${news.id}`} className="w-2/3">
                          <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnterNews(news.id)}
                            onMouseLeave={() => handleMouseLeaveNews(news.id)}
                          >
                            <img
                              class="rounded-lg"
                              src={`https://imz-server.vercel.app/${news.imageUrl}`}
                              alt={news.title}
                            />

                            {isDropdownVisibleNews[news.id] && (
                              <div className="absolute top-0 bg-black/50 h-full w-full flex items-center justify-center rounded-lg">
                                <img
                                  src={next}
                                  className="img__next w-20 animate-jump-in"
                                />
                              </div>
                            )}
                          </div>
                        </Link>

                        <div class="w-full flex flex-col">
                          <p className="text-xs">{news.date}</p>
                          <h5 class="text-sm font-medium tracking-tight text-gray-900">
                            {news.title}
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          )}
          {!isTabletOrMobile && (
            <div className="lg:justify-normal xl:gap-5 xl:justify-around flex flex-wrap gap-20 mt-5">
              {isPostsLoading
                ? items.map((item, index) => (
                    <div
                      key={index}
                      class="max-w-sm bg-white border border-gray-200 rounded-lg shadow animate-pulse"
                    >
                      <div className="relative">
                        <div className="relative">
                          <img class="rounded-t-lg min-h-72 w-screen bg-gray-300" />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            class="w-12 h-12 text-gray-500 svg__in-image "
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div class="p-5">
                        <div class="block w-56 h-3 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-3 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block w-56 h-2 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div class="block h-10 mt-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-lg text-inherit w-40">
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  ))
                : reverseNewsToShow.map((news) => (
                    <div key={news.id}>
                      <div class="md:flex max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
                        <Link to={`/news/${news.id}`}>
                          <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnterNews(news.id)}
                            onMouseLeave={() => handleMouseLeaveNews(news.id)}
                          >
                            <img
                              class="rounded-t-lg min-h-72"
                              src={`https://imz-server.vercel.app/${news.imageUrl}`}
                              alt={news.title}
                            />
                            <div className="absolute top-0 right-0 m-2 bg-white px-4 py-2 rounded-md font-bold text-blue-800">
                              {news.date}
                            </div>
                            {isDropdownVisibleNews[news.id] && (
                              <div className="absolute top-0 bg-black/50 h-full w-full flex items-center justify-center rounded-lg">
                                <img
                                  src={next}
                                  className="img__next w-20 animate-jump-in"
                                />
                              </div>
                            )}
                          </div>
                        </Link>
                        <div class="p-5">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {news.title}
                          </h5>
                          <p class="mb-3 font-normal text-gray-700">
                            {news.mini_title}
                          </p>
                          {!isTabletOrMobile && (
                            <Link
                              to={`/news/${news.id}`}
                              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            >
                              Продолжение
                              <svg
                                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                              >
                                <path
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                              </svg>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          )}
          <div className="pt-10">
            <Link
              to={`/news`}
              class="md:!p-2 md:text-sm inline-flex items-center p-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 -mt-10"
            >
              Предыдущие записи
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="video__container_mobile md:mt-5  test md:flex-col md:flex md:gap-5 md:p-0 md:pt-5 xl:pr-5">
          {isTabletOrMobile && (
            <div>
              <div className="mx-auto flex md:gap-1 gap-2 cursor-pointer w-max">
                <p className="text-lg font-medium">Видео:</p>
              </div>
              <CarouselProvider
                className="pt-5"
                naturalSlideWidth={100}
                naturalSlideHeight={55}
                totalSlides={3}
              >
                <Slider>
                  <Slide index={0}>
                    {" "}
                    <div className="video-box">
                      <LiteYouTubeEmbed id="7YzIpIORxOY" />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    {" "}
                    <div className="video-box">
                      <LiteYouTubeEmbed id="8hb_LDeW-_0" />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    {" "}
                    <div className="video-box">
                      <LiteYouTubeEmbed id="nGbtapJ6E6A" />
                    </div>
                  </Slide>
                </Slider>
                <DotGroup className=" text-center mt-2 transition-all" />
              </CarouselProvider>
            </div>
          )}
          {isTabletOrMobile && (
            <div className="mt-5">
              <div className="mx-auto flex md:gap-1 gap-2 cursor-pointer w-max">
                <p className="text-lg font-medium">Фотогалерея:</p>
              </div>
              <CarouselProvider
                className="pt-5"
                naturalSlideWidth={100}
                naturalSlideHeight={55}
                totalSlides={10}
              >
                <Slider>
                  <Slide index={0}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo1}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo2}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo6}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={3}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo3}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={4}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo4}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={5}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo7}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={6}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo8}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={7}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo10}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={8}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo11}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                  <Slide index={9}>
                    {" "}
                    <div className="overflow-hidden video-box">
                      <img
                        src={photo12}
                        className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                      />
                    </div>
                  </Slide>
                </Slider>
                <DotGroup className=" text-center mt-2 transition-all" />
              </CarouselProvider>
            </div>
          )}

          {!isTabletOrMobile && (
            <div>
              <div className="flex md:gap-1 gap-2 cursor-pointer w-max">
                <img src={video} className="md:w-4 w-6" />
                <p className="md:text-sm md:font-normal text-2xl">Видео:</p>
              </div>
              <div className="md:h-1 work__line2 mt-2" />
              <div className="md:gap-5 iframe-video flex flex-col gap-12 mt-5">
                <div className="video-box">
                  <LiteYouTubeEmbed id="7YzIpIORxOY" />
                </div>
                <div className="video-box">
                  <LiteYouTubeEmbed id="8hb_LDeW-_0" />
                </div>
                <div className="video-box">
                  <LiteYouTubeEmbed id="nGbtapJ6E6A" />
                </div>
              </div>
            </div>
          )}
          {!isTabletOrMobile && (
            <div className=" md:mt-0 mt-16">
              <div className="flex md:gap-1 gap-2 w-max cursor-pointer">
                <img src={camera} className="md:w-4 w-6" />
                <p className="md:text-sm md:font-normal text-2xl ">
                  Фотогалерея:
                </p>
              </div>
              <div className="md:h-1 work__line2 mt-2" />
              <div className="md:gap-5 md:w-full photo-container flex flex-col gap-12 mt-5">
                <div className="overflow-hidden video-box">
                  <img
                    src={photo1}
                    className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  />
                </div>
                <div className="overflow-hidden video-box">
                  <img
                    src={photo2}
                    className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  />
                </div>
                <div className="overflow-hidden video-box">
                  <img
                    src={photo6}
                    className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  />
                </div>
              </div>
              <div className="main__hover_container flex gap-3 place-items-center cursor-pointer mt-16 justify-end">
                <p className="main__hover_container_title mr-2 text-xs font-medium tracking-widest transition-all">
                  СМОТРЕТЬ ВСЕ
                </p>
                <img
                  src={right_arrow}
                  className="main__hover_container_img w-4 transition-all"
                />
              </div>
            </div>
          )}
          {!isTabletOrMobile && (
            <div className="mt-16">
              <div className="flex gap-2 w-max cursor-pointer">
                <img src={tube} className="w-6" />
                <p className="text-2xl ">Продукция:</p>
              </div>
              <div className="work__line2 mt-2" />
              <div className="production-box mt-10 rounded-lg overflow-hidden">
                <img
                  src={qr}
                  className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}
