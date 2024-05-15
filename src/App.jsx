import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Nav from "./components/Nav";
import TopMain from "./components/TopMain";
import Main from "./components/Main";
import Job from "./components/Job";
import Wherewe from "./components/Wherewe";
import Preloader from "./components/Preloader";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "./redux/slices/auth";
import { useMediaQuery } from "react-responsive";
import ContactUsMobile from "./components/ContactUsMobile.jsx";

function App() {
  // Проверка на авторизацию
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const whereweRef = useRef(null);

  const handleScrollToWherewe = () => {
    whereweRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* <Preloader /> */}
      <div className="font-['Ubuntu'] relative">
        <Header />
        <Nav />
        <div></div>
        <Carousel />
        <TopMain />
        <Main />
        {isTabletOrMobile && <ContactUsMobile />}
        {isTabletOrMobile ? (
          <div>
            <Job />
            <Wherewe />
          </div>
        ) : (
          <div ref={whereweRef}>
            <Wherewe />
            <Job />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
