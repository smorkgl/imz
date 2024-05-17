import newsicon from "../img/newsicon.svg";
import video from "../img/video.svg";
import qr from "../img/qr.gif";
import tube from "../img/tube.svg";
import next from "../img/next.svg";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { Link } from "react-router-dom";
import { useState, Fragment, useRef } from "react";
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
import email from "../img/email.svg";
import phone from "../img/phone.svg";
import { Dialog, Transition } from "@headlessui/react";
import close from "../img/close.svg";
import XMLParser from "react-xml-parser";
import emailjs from "@emailjs/browser";

export default function Main() {
  const [photoLinks, setPhotoLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_a6z0367", "template_63iyekb", form.current, {
        publicKey: "kifTa7VFekqtXUeFz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleImageGallery = () => {
    setIsLoading(true);
    fetch("https://storage.yandexcloud.net/imz/?prefix=files/images")
      .then((res) => res.text())
      .then((data) => {
        var xml = new XMLParser().parseFromString(data);
        const photoContents = xml.children.filter((item) => {
          return (
            item.name === "Contents" &&
            item.children.some((child) => {
              return (
                child.name === "Key" && child.value.startsWith("files/images/")
              );
            })
          );
        });
        const photoLinks = photoContents.map((item) => {
          const keyElement = item.children.find(
            (child) => child.name === "Key"
          );
          return keyElement.value;
        });
        const photoLinksNew = photoLinks.slice(1);
        setPhotoLinks(photoLinksNew);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const [isDropdownVisibleNews, setDropdownVisibleNews] = useState({});

  const [isOpen, setIsOpen] = useState(false);

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

  const newsToShow = posts.items.slice().reverse();
  const reverseNewsToShow = newsToShow.slice(0, 4);

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
                      className="flex max-w-sm bg-white border border-gray-200 rounded-lg shadow animate-pulse"
                    >
                      <div className="relative">
                        <div className="relative">
                          <img className="md:min-h-40 rounded-t-lg min-h-72 w-screen bg-gray-300" />
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
                      <div className="md:w-11/12 p-5">
                        <div className="md:hidden block w-56 h-3 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
                          &nbsp;
                        </div>
                        <div className="md:hidden block w-56 h-3 mb-2 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
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
                      </div>
                    </div>
                  ))
                : reverseNewsToShow.map((news) => (
                    <div key={news.id}>
                      <div className="md:flex justify-between gap-5 place-items-center max-w-sm bg-white relative">
                        <Link to={`/news/${news.id}`} className="w-2/3">
                          <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnterNews(news.id)}
                            onMouseLeave={() => handleMouseLeaveNews(news.id)}
                          >
                            <img
                              className="rounded-lg"
                              src={`${news.imageUrl}`}
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

                        <div className="w-full flex flex-col">
                          <p className="text-xs">{news.date}</p>
                          <h5 className="text-sm font-medium tracking-tight text-gray-900">
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
                : reverseNewsToShow.map((news) => (
                    <div key={news.id} className="news__card-item">
                      <div className="md:flex card__news_item max-w-sm bg-white border border-gray-200 rounded-lg shadow relative">
                        <Link to={`/news/${news.id}`}>
                          <div
                            className="relative"
                            onMouseEnter={() => handleMouseEnterNews(news.id)}
                            onMouseLeave={() => handleMouseLeaveNews(news.id)}
                          >
                            <img
                              className="rounded-t-lg min-h-72"
                              src={`${news.imageUrl}`}
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
                        <div className="p-5">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {news.title}
                          </h5>
                          <p className="mb-3 font-normal text-gray-700">
                            {news.mini_title}
                          </p>
                          {!isTabletOrMobile && (
                            <Link
                              to={`/news/${news.id}`}
                              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
                            >
                              Продолжение
                              <svg
                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
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
              className="md:!p-2 md:text-sm inline-flex items-center p-3 text-lg font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 -mt-10"
            >
              Предыдущие записи
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          {!isTabletOrMobile && (
            <div className="p-2 pt-10">
              <form
                ref={form}
                className=" shadow-2xl p-10 w-1/2 mt-10 rounded-lg "
                onSubmit={sendEmail}
                id="contact-form"
              >
                <div className="mb-10">
                  <h1 className="text-lg font-medium">Связаться с нами</h1>
                  <p className="pt-2">Заполните форму, и мы свяжемся с вами!</p>
                  <p>Контакты для связи:</p>
                  <div className="pt-4 flex gap-1 cursor-pointer hover:underline hover:text-red-800 contact-hover transition-all">
                    <img
                      src={phone}
                      className="contact-img w-5 transition-transform"
                    />
                    <p>+7(863)-333-31-34</p>
                  </div>
                  <div className="pt-1 flex gap-1 cursor-pointer hover:underline hover:text-red-800 contact2-hover transition-all">
                    <img
                      src={email}
                      className="contact2-img w-5 transition-transform"
                    />
                    <p>imz@i-m-z.ru</p>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="text-black block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    Ваше имя *
                  </label>
                  <input
                    id="name"
                    className="!border-2 border-black shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dbg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-red-500 focus:border-red-500 shadow-sm-light"
                    required
                    type="text"
                    name="user_name"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="text-black  block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    Ваш E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-black focus:ring-red-500 focus:border-red-500 shadow-sm-light"
                    placeholder="name@i-m-z.ru"
                    required
                    name="email"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="text-black block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    Ваш номер телефона *
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-black focus:ring-red-500 focus:border-red-500 shadow-sm-light"
                    required
                  />
                </div>
                <label
                  htmlFor="message"
                  className="text-black block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Ваше сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 border-gray-600 placeholder-gray-400 text-black focus:ring-red-500 :focus:border-red-500"
                  placeholder="Оставьте сообщение..."
                ></textarea>
                <button
                  type="submit"
                  value="Send"
                  className="mt-5 text-white   bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-700 hover:bg-red-700 focus:ring-red-800"
                >
                  Отправить
                </button>
              </form>
            </div>
          )}
        </div>
        <div className="md:-m-2.5 md:mt-5  md:flex-col md:flex md:gap-5 md:p-0 md:pt-5 xl:pr-5">
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
                    <div className="video-box w-full">
                      <LiteYouTubeEmbed id="7YzIpIORxOY" />
                    </div>
                  </Slide>
                  <Slide index={1}>
                    {" "}
                    <div className="video-box w-full">
                      <LiteYouTubeEmbed id="8hb_LDeW-_0" />
                    </div>
                  </Slide>
                  <Slide index={2}>
                    {" "}
                    <div className="video-box w-full">
                      <LiteYouTubeEmbed id="nGbtapJ6E6A" />
                    </div>
                  </Slide>
                </Slider>
                <DotGroup className=" text-center mt-2 transition-all" />
              </CarouselProvider>
            </div>
          )}
          {isTabletOrMobile && (
            <div className="mt-5 relative">
              <div className=" mx-auto flex md:gap-1 gap-2 cursor-pointer w-max place-items-center">
                <p className="text-lg font-medium">Фотогалерея:</p>
                <p
                  onClick={() => {
                    handleImageGallery();
                    setIsOpen(true);
                  }}
                  className="text-xs absolute font-medium right-3 -bottom-12 bg-red-700 text-white rounded-lg p-2"
                >
                  просмотреть все:
                </p>
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
            <div className=" md:mt-0">
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
              <div
                className="main__hover_container flex gap-3 place-items-center cursor-pointer mt-8 justify-end"
                onClick={() => {
                  handleImageGallery();
                  setIsOpen(true);
                }}
              >
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
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className=" fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-black/60  z-50">
                  <Dialog.Panel className="overflow-y-scroll md:m-2 md:mt-20 bg-white fixed top-0 left-0 right-0 bottom-0 m-5  rounded-lg">
                    <div>
                      {isLoading ? (
                        <div className="m-10">
                          <h1 className="text-5xl">Загрузка...</h1>
                        </div>
                      ) : (
                        <div className="">
                          <div className="md:pt-10 md:p-2 md:grid-cols-1 md: grid grid-cols-4 gap-8 p-10  ">
                            <img
                              src={close}
                              className="md:top-0 md:m-1 absolute w-5 right-0 top-0 z-50 cursor-pointer m-3 z-50 transition-all"
                              onClick={() => setIsOpen(false)}
                            />
                            {photoLinks.map((link, index) => (
                              <img
                                key={index}
                                src={`https://storage.yandexcloud.net/imz/${link}`}
                                alt={`Photo ${index + 1}`}
                                className="h-full w-full hover:scale-110 transition duration-500 rounded-xl object-contain "
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition>
          {!isTabletOrMobile && (
            <div className="mt-5">
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
            <div className="mt-16">
              <div className="flex gap-2 w-max cursor-pointer">
                <img src={tube} className="w-6" />
                <p className="text-2xl ">Продукция:</p>
              </div>
              <div className="work__line2 mt-2" />
              <p className="text-xs w-1/2 mt-2">
                Отсканируйте QR-код для просмотра каталога продукции
              </p>
              <div className="production-box mt-8 rounded-lg overflow-hidden">
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
