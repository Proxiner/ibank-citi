import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  const homeUrl = "1234567890abcdefghijklmnopLMNOPQRSTUVqrstuvwxyzABCklmnopqrstuvwxyz67890aabcdefghijklmnABCFGHIJKLMNOPDEFGHIJKLMNOPQRSghijklmnopnopLMN890abOPQRSTUVqrstuvwxyzABCSTUVqklmnopqrstuvwxyaabcdefghijkz67FGHIJKLMNOP890aabcdefghijklmnABCFGHIJKLMTUVWXYZ";

  return (
    <Router>
      <Routes>
        <Route path={`/${homeUrl}`} element={<Home/>}/>
        <Route path="/" element={<Login homeUrl={homeUrl}/>}/>
      </Routes>
    </Router>
  );
};

export default App;
