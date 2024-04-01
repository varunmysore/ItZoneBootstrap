import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  // createBrowserRouter,
  // RouterProvider,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import About from "./components/About/About";
import Home from "./components/Home/Home";

import "./App.css";
import Navbarfile from "./components/Navbarfile/Navbarfile";
import CCTVServices from "./components/Products/CCTVServices";
import EnterpriseWIFI from "./components/Products/EnterpriseWIFI";
import HardwareAndNetworking from "./components/Products/HardwareAndNetworking";
import LaptopAndComputer from "./components/Products/LaptopAndComputer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbarfile />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cctvservices" element={<CCTVServices />} />
          <Route path="/enterprisewifi" element={<EnterpriseWIFI />} />
          <Route
            path="/hardwareandnetworking"
            element={<HardwareAndNetworking />}
          />
          <Route path="/laptopandcomputer" element={<LaptopAndComputer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
