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
import Edit from './pages/Edit'

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
    path: "login",
    element: <Login />,
  },
  {
    path: "login/edit",
    element: <Edit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
