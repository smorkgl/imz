import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback, useRef } from "react";
import { selectIsAuth } from "../redux/slices/auth.js";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import "easymde/dist/easymde.min.css";
import axios from "../axios.js";
import { InputMask } from "primereact/inputmask";
// import { Editor as ClassicEditor } from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/ru';

export default function Cabinet() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  useEffect(() => {
    if (id) {
      axios
        .get(`/posts/${id}`)
        .then((response) => {
          const postData = response.data;
          setTitle(postData.title);
          setDescription(postData.description);
          setMiniTitle(postData.mini_title);
          setIsNewImageUploaded(true);
          setImageUrl(postData.imageUrl);
          setDate(postData.date);
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }, []);

  const isAuth = useSelector(selectIsAuth);
  const inputFileRef = useRef(null);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  const defaultImageUrl = "no_image.png";

  const NowDate = new Date().toLocaleDateString();

  const [title, setTitle] = useState("");
  const [mini_title, setMiniTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://storage.yandexcloud.net/imz/files/no_image.png"
  );
  const [isNewImageUploaded, setIsNewImageUploaded] = useState(false);
  const [date, setDate] = useState(NowDate);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
      setIsNewImageUploaded(true);
    } catch (err) {
      console.warn(err);
      alert("Ошибка при загрузке файла!");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
    setIsNewImageUploaded(false);
  };

  const onClickCreateNews = async () => {
    if (window.confirm("Вы действительно готовы опубликовать?")) {
      if (description.length >= 10 && title.length >= 10)
        try {
          setIsLoading(true);
          const fields = {
            title,
            imageUrl,
            description,
            date,
            mini_title,
          };

          const { data } = isEditing
            ? await axios.patch(`/posts/${id}`, fields)
            : await axios.post("/posts", fields);
          {
            isEditing ? navigate(`/news/${id}`) : navigate(`/news/${data.id}`);
          }
        } catch (err) {
          console.warn(err);
          alert("Ошибка при публикации новости!");
        }
      else {
        alert("Заголовок или описание новости меньше чем 10 символов");
      }
    }
  };

  return (
    <div className="md:px-5 px-20 bg-blue-900 h-full bg-no-repeat bg-center bg-cover flex place-items-center h-100">
      <Link to={`/cabinet`}>
        <button className="absolute top-5 left-5 bg-white text-red-800 hover:text-red-700 transition-all">
          ВЕРНУТЬСЯ НАЗАД
        </button>
      </Link>
      <div className="md:pt-3 container my-12 mx-auto  bg-white pt-10 mt-28 relative">
        <section className="text-center md:text-left">
          <div className="flex flex-wrap relative">
            <div className="md:block mb-6 w-full shrink-0 grow-0 basis-auto px-3 md:mb-0  flex">
              <img
                className="md:w-full w-1/3 grid bg-gray-300 rounded-lg place-items-center news__img-container"
                alt="Louvre"
                src={
                  isNewImageUploaded
                    ? `${imageUrl}`
                    : `https://storage.yandexcloud.net/imz/files/${defaultImageUrl}`
                }
              />
              <div className="md:ml-0 ml-5">
                <p className="text-gray-800 text-sm">
                  *Это превью будет
                  <br />
                  использовано по умолчанию,
                  <br />
                  если вы не укажите своё
                </p>
                {isNewImageUploaded && (
                  <button
                    class
                    onClick={onClickRemoveImage}
                    className="mt-5 bg-red-700 text-white hover:text-gray-300 transition-all mb-5 text-sm"
                  >
                    УДАЛИТЬ ПРЕВЬЮ
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="md:px-2 px-5 text-left">
            <button
              onClick={() => inputFileRef.current.click()}
              className="bg-red-700 text-white hover:text-gray-300 transition-all mb-5 text-sm"
              ref={inputFileRef}
            >
              ЗАГРУЗИТЬ ПРЕВЬЮ
            </button>
            <input
              ref={inputFileRef}
              type="file"
              onChange={handleChangeFile}
              hidden
            />

            <div className="mb-5">
              <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Дата публикации
              </p>
              <InputMask
                value={date}
                onChange={(e) => setDate(e.target.value)}
                mask="99.99.9999"
                placeholder={NowDate}
                className="block pl-2 p-1 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Заголовок (максимум 50 символов)
              </label>
              <input
                type="text"
                id="large-input"
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Мини-заголовок (максимум 50 символов)
              </label>
              <input
                maxLength={125}
                type="text"
                id="large-input"
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                value={mini_title}
                onChange={(e) => setMiniTitle(e.target.value)}
              />
            </div>
            <p className="block mb-2 text-sm font-medium text-gray-900 cursor-default dark:text-white">
              Описание
            </p>
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(event, editor) => {
                const data = editor.getData();
                setDescription(data);
              }}
              config={{
                ckfinder: { uploadUrl: "https://imz-server.vercel.app/upload" },
                language: 'ru',

              }}
            />

            <button
              onClick={onClickCreateNews}
              className="bg-red-700 text-white hover:text-gray-300 transition-all mb-5 mt-5 text-sm"
            >
              {isEditing ? "СОХРАНИТЬ" : "ОПУБЛИКОВАТЬ"}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
