import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
