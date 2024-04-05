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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe } from "./redux/slices/auth";
import { useMediaQuery } from "react-responsive";

function App() {
  // Проверка на авторизацию
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
      {/* <Preloader /> */}
      <div className="font-['Ubuntu'] relative">
        <Header />
        <Nav />
        <Carousel />
        <TopMain />
        <Main />
        {isTabletOrMobile ? (
          <div className="mt-20">
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
  );
}

export default App;
