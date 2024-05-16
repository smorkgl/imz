import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import TopMain from "../components/TopMain";
import Breadcrumb from "../components/Breadcrumb";
import email from "../img/email.svg";
import phone from "../img/phone.svg";
import isaev_ramzan from "../img/isaev_ramzan.png";
import isaev_ibragim from "../img/isaev_ibragim.png";

export default function Management() {
  const cards = [
    {
      name: "Исаев Рамзан Мусаевич",
      job: "Учредитель",
      number: "(доб. 101)",
      email: "isaev_rm@i-m-z.ru",
      photo: isaev_ramzan,
    },
    {
      name: "Исаев Ибрагим Рамзанович",
      job: "Генеральный директор",
      number: "(доб. 101)",
      email: "isaev_ir@i-m-z.ru",
      photo: isaev_ibragim,
    },
    {
      name: "Писаренко Андрей Николаевич",
      job: "Директор по развитию",
      number: "(доб. 108)",
      email: "pisarenko_an@i-m-z.ru",
      photo: null,
    },
    {
      name: "Грибов Юрий Анатольевич",
      job: "Коммерческий директор",
      number: "(доб. 103)",
      email: "gribov_ya@i-m-z.ru",
      photo: null,
    },
    {
      name: "Яшонков Владимир Васильевич",
      job: "Директор по правовым и общим вопросам",
      number: "(доб. 127)",
      email: "yashonkov_vv@i-m-z.ru",
      photo: null,
    },
    {
      name: "Запорожцев Сергей Борисович",
      job: "Директор по производству",
      number: "(доб. 150)",
      email: "zaporozhcev_sb@i-m-z.ru",
      photo: null,
    },
    {
      name: "Данилов Дмитрий Евгеньевич",
      job: "Технический директор",
      number: "(доб. 104)",
      email: "danilov_de@i-m-z.ru",
      photo: null,
    },
    {
      name: "Порошина Альбина Юрьевна",
      job: "Директор по персоналу",
      number: "(доб. 128)",
      email: "poroshina_ayu@i-m-z.ru",
      photo: null,
    },
    {
      name: "Головинов Юрий Юрьевич",
      job: "Директор по безопасности",
      number: "(доб. 109)",
      email: "golovinov_uu@i-m-z.ru",
      photo: null,
    },
    {
      name: "Брынза Валентина Евгеньевна",
      job: "Директор по внутреннему контролю и аудиту",
      number: "(доб. 106)",
      email: "brinza_ve@i-m-z.ru",
      photo: null,
    },
  ];
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = (index) => {
    // если уже выбрана увеличенная картинка и нажатие сделано на неё, вернуть к исходному размеру
    if (index === selectedCardIndex && expanded) {
      setExpanded(false);
    } else {
      setSelectedCardIndex(index);
      setExpanded(true);
    }
  };

  return (
    <div className="font-['Ubuntu']">
      <Header />
      <Nav />
      <Carousel />
      <TopMain />
      <Breadcrumb />
      <div className="xl:px-2 py-3 2xl max-w-6xl width-full mx-auto container ">
        <h1 className="font-bold ">Руководство</h1>
        <div className="my-6 text-justify">
          <div className="grid-test pt-10 grid grid-cols-2 gap-10 ">
            {cards.map((card, index) => (
              <div
                key={index}
                className={
                  expanded && index === selectedCardIndex
                    ? "selectedcard grid-test-col mb-10 rounded-2xl flex border-2 border-gray-600 h-96 z-30 relative hover:bg-blue-600/70 hover:rounded-2xl hover:text-white hover:border-0 transition-all"
                    : "mb-10 rounded-2xl flex border-2 border-gray-600 h-96 z-30 relative hover:bg-blue-600/70 hover:rounded-2xl hover:text-white hover:border-0 transition-all"
                }
                onClick={() => handleCardClick(index)}
              >
                <div>
                  <div className="h-full p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-2xl">
                        <p className="name-break">{card.name}</p>
                      </div>
                      <p className=" text-sm pt-3">{card.job}</p>
                    </div>
                    <div>
                      <div className="text-sm text-gray-800">
                        <div className="flex gap-1 cursor-pointer hover:underline hover:text-black contact-hover transition-all">
                          <img
                            src={phone}
                            className="contact-img w-4 transition-transform"
                          />
                          <div className="flex gap-1 place-items-center">
                            <p>+7(863)-333-31-34</p>
                            <p className="text-xs font-medium">{card.number}</p>
                          </div>
                        </div>
                        <div className="pt-2 flex gap-1 cursor-pointer hover:underline hover:text-black contact2-hover transition-all">
                          <img
                            src={email}
                            className="contact2-img w-4 transition-transform"
                          />
                          <p>{card.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className={
                        expanded && index === selectedCardIndex
                          ? "absolute right-0 management__photo2 pr-5"
                          : "absolute right-0 management__photo pr-5"
                      }
                      src={card.photo}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
