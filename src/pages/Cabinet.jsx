import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "../redux/slices/posts.js";
import { selectIsAuth } from "../redux/slices/auth.js";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { logout } from "../redux/slices/auth.js";
import { fetchRemovePost } from "../redux/slices/posts.js";
import ReactPaginate from "react-paginate";

export default function Cabinet() {
  const isAuth = useSelector(selectIsAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === "loading";
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  const onClickDeleteNews = (id) => {
    if (window.confirm("Вы действительно хотите удалить эту новость?")) {
      dispatch(fetchRemovePost(id)).then(() => {
        dispatch(fetchPosts());
      });
    }
  };

  const onClickEditNews = (id) => {
    navigate(`/cabinet/${id}/edit`);
  };

  const newPosts = posts.items.slice().reverse();

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const itemsPerPage = 10;
  const pageCount = Math.ceil(newPosts.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="md:px-5 px-20 bg-[url('/src/img/test3.png')] h-full bg-no-repeat bg-center bg-cover flex place-items-center h-100 flex-col">
      <div className="flex justify-between gap-5 top-0">
        <Link to={`/`}>
          <button className="absolute left-0 m-5 md:text-xs bg-white text-red-800 hover:text-red-700 transition-all">
            ВЕРНУТЬСЯ НАЗАД
          </button>
        </Link>
        <button
          onClick={onClickLogout}
          className="absolute right-0 m-5 md:text-xs bg-white text-red-800 hover:text-red-700 transition-all"
        >
          ВЫЙТИ ИЗ АККАУНТА
        </button>
      </div>
      <div className="md:mt-20 gap-5 pt-5 -mb-20 flex">
        <Link to={`/cabinet/create`}>
          <button className="bg-green-500 text-white font-bold">
            СОЗДАТЬ НОВОСТЬ
          </button>
        </Link>
        <Link to={`/cabinet/upload`}>
          <button className="bg-red-700 text-white font-bold">
            ЗАГРУЗИТЬ ФОТО В ФОТОГАЛЕРЕЮ
          </button>
        </Link>
      </div>
      <div className="md:mt-0 md:mt-32   container my-12 mx-auto md:px-2 bg-white pt-10 relative mt-28 min-h-screen">
        <div className="pt-10 2xl max-w-7xl width-full mx-auto container">
          <section className="p-2 mb-32 text-center !text-left">
            {isPostsLoading
              ? items.map((item, index) => (
                  <div
                    key={index}
                    className="mb-12 flex flex-wrap animate-pulse relative"
                  >
                    <div className="md:!w-full mb-6 ml-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-3/12 ">
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
                    <div className="md:mt-3 mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3">
                      <div>
                        <div className="block w-56 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit w-full">
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
              : newPosts
                  .slice(
                    currentPage * itemsPerPage,
                    (currentPage + 1) * itemsPerPage
                  )
                  .map((news) => (
                    <div
                      key={news.id}
                      className="md:flex-col md:flex gap-10 mb-12 flex relative"
                    >
                      <div className=" md:mx-auto flex flex-col my-auto gap-5">
                        <button
                          onClick={() => onClickEditNews(news.id)}
                          className="bg-blue-700 text-white "
                        >
                          РЕДАКТИРОВАТЬ
                        </button>
                        <button
                          onClick={() => onClickDeleteNews(news.id)}
                          className="bg-red-700 text-white"
                        >
                          УДАЛИТЬ
                        </button>
                      </div>
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

                      <div className="md:pl-0 md:!w-full mb-6 mr-auto w-full  grow-0 basis-auto pl-5 !mb-0 !w-9/12 !w-7/12">
                        <Link to={`/news/${news.id}`}>
                          <h5 className="mb-3 text-lg font-bold">
                            {news.title}
                          </h5>
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
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              previousLabel={"Назад"}
              nextLabel={"Следующий"}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
