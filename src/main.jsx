import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import News from "./pages/News.jsx";
import NewsElement from "./pages/NewsElement.jsx";
import Job from "./pages/Job.jsx";
import "./index.css";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
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
import ScrollToTop from "./components/ScrollToTop.jsx";

const router = (
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="/news" element={<News />} />
      <Route path="/job" element={<Job />} />
      <Route path="/news/:id" element={<NewsElement />} />
      <Route path="/cabinet/:id/edit" element={<CabinetCreate />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cabinet" element={<Cabinet />} />
      <Route path="/cabinet/create" element={<CabinetCreate />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/hotel" element={<Hotel />} />
      <Route path="/parking" element={<Parking />} />
      <Route path="/capacity" element={<Capacity />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/profile_pipe" element={<ProfilePipe />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products_order" element={<ProductsOrder />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/gost" element={<GOST />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/cabinet/upload" element={<CabinetUpload />} />
      <Route path="/cafe" element={<Cafe />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/kitchen" element={<Kitchen />} />
      <Route path="/metal_equipment" element={<MetalEquipment />} />
      <Route path="/management" element={<Management />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </HashRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>{router}</Provider>
  </>
);
