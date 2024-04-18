import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../redux/slices/auth.js";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "easymde/dist/easymde.min.css";
import XMLParser from "react-xml-parser";

export default function CabinetUpload() {
  const isAuth = useSelector(selectIsAuth);

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }

  const [photoLinks, setPhotoLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="md:px-5 px-20 bg-[url('/src/img/test3.png')] bg-blue-800 h-full bg-no-repeat bg-center bg-cover flex place-items-center h-100 flex-col">
      <Link to={`/cabinet`}>
        <button className="absolute left-0 m-5 md:text-xs bg-white text-blue-800 hover:text-blue-700 transition-all">
          ВЕРНУТЬСЯ НАЗАД
        </button>
      </Link>
      <div className="md:mt-20 gap-5 pt-5 -mb-20 flex">
        <Link to={`/cabinet/create`}></Link>
        <Link to={`/cabinet/upload`}>
          <button className="bg-blue-600 text-white font-bold">
            ЗАГРУЗИТЬ ФОТО В ФОТОГАЛЕРЕЮ
          </button>
        </Link>
      </div>
      <div class="md:pt-3 container my-12 mx-auto  bg-white mt-28 relative h-full">
        <section class="text-center md:text-left h-full">
          {isLoading ? (
            <div className="md:grid-cols-2 grid grid-cols-4 gap-3 p-5">
              {items.map((item, index) => (
                <div
                  key={index}
                  role="status"
                  class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
                >
                  <svg
                    class="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="md:grid-cols-2 grid grid-cols-4 md:grid-cols-3 gap-3 p-5">
              {photoLinks.map((link, index) => (
                <img
                  key={index}
                  src={`https://storage.yandexcloud.net/imz/${link}`}
                  alt={`Photo ${index + 1}`}
                  className="h-full w-full hover:scale-110 transition duration-500 rounded-xl "
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
