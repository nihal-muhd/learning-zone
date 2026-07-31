import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../store/slices/uiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="header-main">
      <button onClick={handleSidebar} style={{ cursor: "pointer" }}>
        ☰
      </button>
    </div>
  );
};

export default Header;
