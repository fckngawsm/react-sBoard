import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import "./App.css";
import Login from "../Login/Login";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
