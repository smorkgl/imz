import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import arrow from "../img/arrow1.svg";
import { useMediaQuery } from "react-responsive";
import bg1 from "../img/bg1.png";
import bg2 from "../img/bg2.png";
import bg3 from "../img/bg3.png";
import bg4 from "../img/bg4.png";

export default function Carousel() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className=" md:h-60 md:mt-16 h-96 select-none cursor-default">
      {isTabletOrMobile && (
        <div>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={4}
            className="relative"
            infinite="true"
          >
            <ButtonNext className="md:p-0 absolute z-40 carousel-button1-mobile bg-red-700/70 transition-all cursor-pointer">
              <img src={arrow} className="md:w-8 w-10 arrow2" />
            </ButtonNext>
            <ButtonBack className="md:p-0  absolute z-40 carousel-button2-mobile bg-red-700/70 transition-all cursor-pointer">
              <img src={arrow} className="md:w-8 w-10 arrow1" />
            </ButtonBack>
            <Slider className="h-60">
              <Slide index={0}>
                <p className="slide-text__mobile">
                  {" "}
                  Исаевский машиностроительный завод - завод по производству
                  стальных электросварных труб, с высоким уровнем автоматизации
                  технологических процессов, выпускающий высококачественную
                  продукцию на базе современных металлургических технологий.
                  Ассортимент выпускаемой трубной продукции - более 90
                  наименований.
                </p>
                <img src={bg1} className="carousel__1_img__mobile" />
              </Slide>
              <Slide index={1}>
                <p className="slide-text__mobile">
                  {" "}
                  В 2014 году была внедрена в производство система менеджмента
                  качества согласно международному стандарту ISO 9001:2008.
                  Внедрение подтверждено сертификационным органом TUV SUD
                  Management Service GmbH. ООО "Исаевский машиностроительный
                  завод" стал инициатором и основным инвестором проекта
                  строительства "Красносулинского металлургического комбината"
                  на территории Красносулинского района Ростовской области.
                </p>
                <img src={bg2} className="carousel__1_img__mobile" />
              </Slide>
              <Slide index={2}>
                <p className="slide-text__mobile">
                  {" "}
                  На базе ООО "Исаевский машиностроительный завод" был открыт
                  первый исправительный центр ИК-1.
                </p>
                <img src={bg3} className="carousel__1_img__mobile" />
              </Slide>
              <Slide index={3} className="relative">
                <img src={bg4} className="carousel__1_img__mobile" />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      )}
      {!isTabletOrMobile && (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={4}
          isPlaying={true}
          className="relative"
        >
          <ButtonNext className="md:p-0 absolute z-40 carousel-button1 bg-red-700/70 transition-all cursor-pointer">
            <img src={arrow} className="md:w-8 w-10 arrow2" />
          </ButtonNext>
          <ButtonBack className="md:p-0  absolute z-40 carousel-button2 bg-red-700/70 transition-all cursor-pointer">
            <img src={arrow} className="md:w-8 w-10 arrow1" />
          </ButtonBack>
          <Slider className="h-96">
            <Slide index={0} className="relative overflow-hidden">
              <p className="slide-text">
                {" "}
                Исаевский машиностроительный завод - завод по производству
                стальных электросварных труб, с высоким уровнем автоматизации
                технологических процессов, выпускающий высококачественную
                продукцию на базе современных металлургических технологий.
                Ассортимент выпускаемой трубной продукции - более 120
                наименований.
              </p>
              <img src={bg1} className="carousel__1_img" />
            </Slide>
            <Slide index={1}>
              <p className="slide-text">
                {" "}
                В 2014 году была внедрена в производство система менеджмента
                качества согласно международному стандарту ISO 9001:2008.
                Внедрение подтверждено сертификационным органом TUV SUD
                Management Service GmbH. ООО "Исаевский машиностроительный
                завод" стал инициатором и основным инвестором проекта
                строительства "Красносулинского металлургического комбината" на
                территории Красносулинского района Ростовской области.
              </p>

              <img src={bg2} className="carousel__1_img" />
            </Slide>
            <Slide index={2}>
              <p className="slide-text">
                {" "}
                На базе ООО "Исаевский машиностроительный завод" в 2022 году был
                открыт первый исправительный центр ИК-1. В настоящее время было
                построено 2 модульных здания на территории завода и введены в
                эксплуатацию. Планируется постройка 3 модульного здания. В
                данный момент на завод трудоустроены больше 150 заключенных.
              </p>

              <img src={bg3} className="carousel__1_img" />
            </Slide>
            <Slide index={3}>
              <img src={bg4} className="carousel__1_img" />
            </Slide>
          </Slider>
        </CarouselProvider>
      )}
    </div>
  );
}
