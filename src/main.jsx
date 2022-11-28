import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import "./styles/index.scss";
import Menu from "./pages/Menu";
import Service from "./pages/Service";
import Shop from "./pages/Shop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/service" element={<Service />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
