import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { LuFlower } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [activeItem, setActiveItem] = useState(() => {
    return localStorage.getItem("activeItem") || "Home";
  });

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  const handleItemClick = (title, path) => {
    setActiveItem(title);
    navigate(path);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.left}>
        <img src={logo} className={style.logo} />
      </div>
      <div className={style.middle}>
        <div
          className={`${activeItem === "Home" ? style.active : ""} ${
            style.navbarItem
          }`}
          onClick={() => handleItemClick("Home", "/")}
        >
          <p className={style.itemName}>Home</p>
        </div>
        <div
          className={`${activeItem === "Work" ? style.active : ""} ${
            style.navbarItem
          }`}
          onClick={() => handleItemClick("Work", "/work")}
        >
          <p className={style.itemName}>Work</p>
        </div>
        <div
          className={`${activeItem === "About" ? style.active : ""} ${
            style.navbarItem
          }`}
          onClick={() => handleItemClick("About", "/about")}
        >
          <p className={style.itemName}>About</p>
        </div>
        <div
          className={`${activeItem === "More" ? style.active : ""} ${
            style.navbarItem
          }`}
          onClick={() => handleItemClick("More", "#")}
        >
          <p className={style.itemName}>More</p>
        </div>

        <div className={`${style.navbarItem} ${style.navbarCTA}`}>
          <p className={style.itemName}>Book a Call</p>
        </div>
      </div>
      <div className={style.right}>
        <LuFlower size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
