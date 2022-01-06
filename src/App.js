import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Homepage,
} from "./Components";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
            </Routes>
            <Routes>
              <Route exact path="/exchanges" element={<Exchanges />} />
            </Routes>
            <Routes>
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
            </Routes>
            <Routes>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
            <Routes>
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
