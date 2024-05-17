import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth.js";
import { Navigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "easymde/dist/easymde.min.css";
import XMLParser from "react-xml-parser";
import axios from "../axios.js";
import delete_img from "../img/delete.svg";

export default function CabinetUpload() {
  const isAuth = useSelector(selectIsAuth);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  const [photoLinks, setPhotoLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const inputFileRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    axios
      .post("/uploadFile", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        // Получаем ссылку на загруженное изображение
        const linkSplit = response.data.url.split("/").pop(); // Получаем конечную часть ссылки
        const newPhotoLink = `files/images/${linkSplit}`; // Собираем правильную ссылку
        setPhotoLinks((prevLinks) => [...prevLinks, newPhotoLink]);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const handleDeleteImage = async (index) => {
    try {
      const updatedPhotoLinks = [...photoLinks]; // Создаем копию массива
      const deletedKey = updatedPhotoLinks[index];

      updatedPhotoLinks.splice(index, 1);
      setPhotoLinks(updatedPhotoLinks);

      setPhotoLinks((prevState) => [...prevState]); // Обновляем состояние, чтобы принудительно перерисовать компонент

      await axios.post("/deleteFile", { key: deletedKey });
      console.log(deletedKey);
    } catch (error) {
      console.error("Ошибка при удалении изображения", error);
    }
  };

  useEffect(() => {
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
  }, []);

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="md:px-5 px-20 bg-[url('/src/img/test3.png')] bg-red-700 h-full bg-no-repeat bg-center bg-cover flex place-items-center h-100 flex-col">
      <Link to={`/cabinet`}>
        <button className="absolute left-0 m-5 md:text-xs bg-white text-red-800 hover:text-red-700 transition-all">
          ВЕРНУТЬСЯ НАЗАД
        </button>
      </Link>
      <div className="md:mt-20 gap-5 pt-5 -mb-20 flex">
        <Link to={`/cabinet/create`}></Link>
        <button
          onClick={() => inputFileRef.current.click()}
          className="bg-red-700 text-white font-bold"
          ref={inputFileRef}
        >
          ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ
        </button>
        <input
          ref={inputFileRef}
          type="file"
          onChange={handleFileChange}
          hidden
        />
      </div>
      <div className="md:pt-3 container my-12 mx-auto  bg-white mt-28 relative h-full min-h-screen">
        <section className="text-center md:text-left h-full">
          {isLoading ? (
            <div className="md:grid-cols-2 grid grid-cols-4 gap-3 p-5">
              {items.map((item, index) => (
                <div
                  key={index}
                  role="status"
                  className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 relative"
                >
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="md:grid-cols-2 grid grid-cols-4 gap-3 p-5">
              {photoLinks.map((link, index) => (
                <div className="relative">
                  <img
                    src={delete_img}
                    className="absolute right-0 p-3 cursor-pointer"
                    onClick={() => handleDeleteImage(index)}
                  />
                  <img
                    key={index}
                    src={`https://storage.yandexcloud.net/imz/${link}`}
                    alt={`Photo ${index + 1}`}
                    className="test h-full w-full transition duration-500 rounded-xl object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
