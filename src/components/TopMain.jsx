import { useMediaQuery } from "react-responsive";

export default function TopMain() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <div className="bottom-0 bg-red-700 py-3 text-white select-none">
      <div className="md:block text-center md:md:px-5 lg:px-20 container max-w-5xl width-full mx-auto flex justify-between text-center">
        <p className="md:text-xs text-sm">
          Лидер производства на Дону профильных труб с 2009г.
        </p>
        {!isTabletOrMobile && (
          <p className="text-sm">Международный сертификат: ISO 9001:2008</p>
        )}
      </div>
    </div>
  );
}
