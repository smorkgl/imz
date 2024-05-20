import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useMediaQuery } from "react-responsive";
import React, { useRef } from "react";

export default function Wherewe() {
  const whereweRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div ref={whereweRef} className="md:mt-0 relative mt-20">
      {!isTabletOrMobile && (
        <div className="wherewe__before absolute bg-blue-800 z-10 h-full"></div>
      )}
      {isTabletOrMobile && (
        <div className="xl:px-5 py-10 bg-white text-black">
          <p className="font-bold text-2xl ">
            Исаевский машиностроительный завод
          </p>
          <div>
            <br />
            <p>
              имеет выгодное логистическое расположение находясь рядом с трассой
              М4 "Дон", а также к площадке завода подведены железнодорожные
              пути.
            </p>
            <br />
            На территории завода расположены магазин, столовая, гостинница,
            кафе.
            <br />
            <br />
            Для сотрудников предприятия предусмотрен корпоративный транспорт, а
            также компенсация питания 25%.
          </div>
        </div>
      )}
      <div className="max-w-7xl width-full mx-auto container relative">
        {!isTabletOrMobile && (
          <div className="lg:text-xs xl:px-5 xl:text-sm absolute z-10 h-full bg-blue-800 text-white w-2/4 grid place-items-center pr-10">
            <div className="mr-10">
              <h1 className="font-bold">Исаевский машиностроительный завод</h1>
              <div>
                <br />
                <p>
                  имеет выгодное логистическое расположение находясь рядом с
                  трассой М4 "Дон", а также к площадке завода подведены
                  железнодорожные пути.
                </p>
                <br />
                На территории завода расположены магазин, столовая, гостиница,
                кафе.
                <br />
                <br />
                Для сотрудников предприятия предусмотрен корпоративный
                транспорт, а также компенсация питания 25%.
              </div>
            </div>
          </div>
        )}
        <div className="full-width">
          <YMaps query={{ apikey: "0613fc9e-402b-4321-82e2-62f96150cb92" }}>
            {isTabletOrMobile && (
              <Map
                width="100vw"
                height="40vh"
                defaultState={{
                  center: [48.04806331746245, 40.26570622452088],
                  zoom: 14.5,
                }}
              ></Map>
            )}
            {!isTabletOrMobile && (
              <Map
                width="100vw"
                height="80vh"
                defaultState={{
                  center: [48.04806331746245, 40.24870622452088],
                  zoom: 14.5,
                }}
              ></Map>
            )}
          </YMaps>
        </div>
      </div>
    </div>
  );
}
