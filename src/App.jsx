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
import ScrollContext from "./ScrollContext";

function App() {
  const myRef = useRef(null);

  const scrolltoWherewe = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Проверка на авторизацию
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <ScrollContext.Provider value={scrolltoWherewe}>
      <div>
        {/* <Preloader /> */}
        <div className="font-['Ubuntu'] relative">
          <Header handleScroll={scrolltoWherewe} />
          <Nav />

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
            <div>
              <Wherewe />
              <Job />
            </div>
          )}

          <Footer />
        </div>
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
