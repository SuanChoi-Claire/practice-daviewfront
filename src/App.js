import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import FacilityList from "./pages/FacilityList";
// import FacilityDetail from "./pages/FacilityDetail";

function App() {
  return (
    //<Router>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/facilities" element={<FacilityList />} />
        <Route path="/facilities/:id" element={<FacilityDetail />} /> */}
      </Routes>
      <Footer />
    </div>
    //</Router>
  );
}

export default App;
