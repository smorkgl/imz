import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import News from "./pages/News.jsx";
import NewsElement from "./pages/NewsElement.jsx";
import Job from "./pages/Job.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error-page.jsx";
import Login from "./pages/Login.jsx";
import store from "./redux/store.js";
import Cabinet from "./pages/Cabinet";
import CabinetCreate from "./pages/CabinetCreate.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Hotel from "./pages/Hotel.jsx";
import Parking from "./pages/Parking.jsx";
import Capacity from "./pages/Capacity.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "job",
    element: <Job />,
  },
  {
    path: "news/:id",
    element: <NewsElement />,
  },
  {
    path: "cabinet/:id/edit",
    element: <CabinetCreate />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "cabinet",
    element: <Cabinet />,
  },
  {
    path: "cabinet/create",
    element: <CabinetCreate />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "hotel",
    element: <Hotel />,
  },
  {
    path: "parking",
    element: <Parking />,
  },
  {
    path: "capacity",
    element: <Capacity />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
