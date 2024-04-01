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

function App() {
  // Проверка на авторизацию
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div>
      <Preloader />
      <div className="font-['Ubuntu'] animate-fade-up relative">
        <Header />
        <Nav />
        <Carousel />
        <TopMain />
        <Main />
        <Wherewe />
        <Job />
        <Footer />
      </div>
    </div>
  );
}

export default App;
