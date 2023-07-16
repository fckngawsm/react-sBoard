import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import "./App.css";
import Login from "../Login/Login";
import MyProfile from "../MyProfile/MyProfile";
import { useAppDispatch } from "../../redux-hooks";
import { checkAuth } from "../../features/auth/auth-slice";
import PopupEditAccount from "../PopupEditAccount/PopupEditAccount";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      dispatch(checkAuth(jwt));
    }
  }, [dispatch]);
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
          element={<MyProfile onOpen={handleOpenPopup} />}
        />
      </Routes>
      <PopupEditAccount isOpen={isOpen} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
