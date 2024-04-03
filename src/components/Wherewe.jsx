import { YMaps, Map } from "@pbe/react-yandex-maps";
import { useMediaQuery } from "react-responsive";

export default function Wherewe() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="relative mt-20">
      {!isTabletOrMobile && (
        <div className="wherewe__before absolute bg-blue-800 z-10 h-full"></div>
      )}
      {isTabletOrMobile && (
        <div className="xl:px-5  ">
          <p className="font-bold text-2xl ">
            Исаевский машиностроительный завод
          </p>
          <p>
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
          </p>
        </div>
      )}
      <div className="max-w-7xl width-full mx-auto container relative">
        {!isTabletOrMobile && (
          <div className="lg:text-xs xl:px-5 xl:text-sm absolute z-10 h-full h bg-blue-800 text-white w-2/4 grid place-items-center pr-10">
            <div className="mr-10">
              <h1 className="font-bold">Исаевский машиностроительный завод</h1>
              <p>
                <br />
                <p>
                  имеет выгодное логистическое расположение находясь рядом с
                  трассой М4 "Дон", а также к площадке завода подведены
                  железнодорожные пути.
                </p>
                <br />
                На территории завода расположены магазин, столовая, гостинница,
                кафе.
                <br />
                <br />
                Для сотрудников предприятия предусмотрен корпоративный
                транспорт, а также компенсация питания 25%.
              </p>
            </div>
          </div>
        )}
        <div class="full-width">
          <YMaps>
            <Map
              width="100vw"
              height="80vh"
              defaultState={{
                center: [48.04806331746245, 40.24870622452088],
                zoom: 14.5,
              }}
            ></Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
}
