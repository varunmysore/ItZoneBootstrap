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
import DataSafety from "./components/service/DataSafety";
import DownloadSoftware from "./components/service/DownloadSoftware";
import CctvInstallation from "./components/service/CctvInstallation";
import LaptopSpare from "./components/service/LaptopSpare";

import "./App.css";
import Navbarfile from "./components/Navbarfile/Navbarfile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbarfile />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/datasafety" element={<DataSafety />} />
          <Route path="/downloadsoftware" element={<DownloadSoftware />} />
          <Route path="/cctvinstallation" element={<CctvInstallation />} />
          <Route path="/laptopspare" element={<LaptopSpare />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
