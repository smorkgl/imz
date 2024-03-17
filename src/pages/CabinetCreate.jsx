import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback, useRef } from "react";
import { fetchPosts } from "../redux/slices/posts.js";
import { selectIsAuth } from "../redux/slices/auth.js";
import { useNavigate, Navigate } from "react-router-dom";
import "easymde/dist/easymde.min.css";
import SimpleMdeReact from "react-simplemde-editor";
import axios from "../axios.js";
import no_image from "../img/no_image.png";

export default function Cabinet() {
  const isAuth = useSelector(selectIsAuth);
  const inputFileRef = useRef(null);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = useCallback((description) => {
    setDescription(description);
  }, []);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };

  const onClickCreateNews = async () => {
    if (window.confirm("Вы действительно готовы опубликовать??")) {
      try {
        setIsLoading(true);
        const fields = {
          title,
          imageUrl,
          description,
        };
        const { data } = await axios.post("/posts", fields);
        const id = data._id;
        console.log(id);
        navigate(`/posts/${id}`);
      } catch (err) {
        console.warn(err);
        alert("Ошибка при публикации новости!");
      }
    }
  };

  return (
    <div className="bg-[url('/src/img/test3.png')] bg-blue-800 h-full bg-no-repeat bg-center bg-cover flex place-items-center h-100">
      <Link to={`/cabinet`}>
        <button className="absolute top-5 left-5 bg-white text-blue-800 hover:text-blue-700 transition-all">
          ВЕРНУТЬСЯ НАЗАД
        </button>
      </Link>
      <div class="container my-12 mx-auto md:px-6 bg-white pt-10 mt-28 relative">
        <section class="text-center md:text-left">
          <button
            onClick={() => inputFileRef.current.click()}
            className="bg-blue-800 text-white hover:text-gray-300 transition-all mb-5 text-sm"
            ref={inputFileRef}
          >
            ЗАГРУЗИТЬ ПРЕВЬЮ
          </button>
          <div className="flex mb-5">
            <img
              class="cabinet__create-img"
              alt="Louvre"
              src={
                imageUrl
                  ? `http://localhost:3131/${imageUrl}`
                  : `http://localhost:3131/uploads/no_image.png`
              }
            />
            <div className="mt-5 ml-3">
              <p className="text-sm text-gray-700">
                *Это превью идёт по <br />
                умолчанию, если вы не
                <br /> указываете своё изображение.
              </p>
              {imageUrl && (
                <button
                  class
                  onClick={onClickRemoveImage}
                  className="mt-5 bg-red-800 text-white hover:text-gray-300 transition-all mb-5 text-sm"
                >
                  УДАЛИТЬ ПРЕВЬЮ
                </button>
              )}
            </div>
          </div>
          <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            hidden
          />
          <div class="mb-5">
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Дата публикации
            </label>
            <input
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div class="mb-5">
            <label
              for="large-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Заголовок
            </label>
            <input
              type="text"
              id="large-input"
              class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <p className="block mb-2 text-sm font-medium text-gray-900 cursor-default dark:text-white">
            Описание
          </p>
          <SimpleMdeReact value={description} onChange={onChange} />
          <button
            onClick={onClickCreateNews}
            className="bg-blue-800 text-white hover:text-gray-300 transition-all mb-5 text-sm"
          >
            ОПУБЛИКОВАТЬ
          </button>
        </section>
      </div>
    </div>
  );
}
