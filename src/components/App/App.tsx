import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import "./App.css";
import Login from "../Login/Login";
import MyProfile from "../MyProfile/MyProfile";

import PopupEditAccount from "../PopupEditAccount/PopupEditAccount";
import ProtectedRoute from "../ProtectedRoute";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClosePopup() {
    setIsOpen(!isOpen);
  }
  function handleOpenPopup() {
    setIsOpen(true);
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute>
              <MyProfile onOpen={handleOpenPopup} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <PopupEditAccount isOpen={isOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
