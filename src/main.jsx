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
import Certificates from "./pages/Certificates.jsx";
import ProfilePipe from "./pages/ProfilePipe.jsx";
import Products from "./pages/Products.jsx";
import ProductsOrder from "./pages/ProductsOrder.jsx";
import Suppliers from "./pages/Suppliers.jsx";
import Contacts from "./pages/Contacts.jsx";
import GOST from "./pages/GOST.jsx";
import Calculator from "./pages/Calculator.jsx";
import CabinetUpload from "./pages/CabinetUpload.jsx";
import Shop from "./pages/Shop.jsx";
import Kitchen from "./pages/Kitchen.jsx";
import Cafe from "./pages/Cafe.jsx";
import MetalEquipment from "./pages/MetalEquipment.jsx";
import Management from "./pages/Management.jsx";

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
  {
    path: "certificates",
    element: <Certificates />,
  },
  {
    path: "profile_pipe",
    element: <ProfilePipe />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "products_order",
    element: <ProductsOrder />,
  },
  {
    path: "suppliers",
    element: <Suppliers />,
  },
  {
    path: "contacts",
    element: <Contacts />,
  },
  {
    path: "gost",
    element: <GOST />,
  },
  {
    path: "calculator",
    element: <Calculator />,
  },
  {
    path: "cabinet/upload",
    element: <CabinetUpload />,
  },
  {
    path: "cafe",
    element: <Cafe />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "kitchen",
    element: <Kitchen />,
  },
  {
    path: "metal_equipment",
    element: <MetalEquipment />,
  },
  {
    path: "management",
    element: <Management />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
