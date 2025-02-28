import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { LuFlower } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

import { RiHome3Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { BsBucket } from "react-icons/bs";

const menuItemData = [
  {
    icon: RiHome3Line,
    title: "Home",
    subTitle: "Welcome to my forever work-in-progress",
  },
  {
    icon: GoProjectSymlink,
    title: "Projects",
    subTitle: "Showcase of my projects",
  },
  {
    icon: RxAvatar,
    title: "About",
    subTitle: "Learn more about me",
  },
  {
    icon: IoBookOutline,
    title: "Guest Book",
    subTitle: "Leave a message for me",
  },
  {
    icon: BsBucket,
    title: "Bucket List",
    subTitle: "Things to do atleast once in my life",
  },
];

const Navbar = () => {
  const navigate = useNavigate();

  /* Active Burger */

  const [active, setActive] = useState(false);

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

  const openBurgerMode = () => {
    setActive(!active);
  };

  return (
    <nav className={style.navbar}>
      {/* Left */}
      <div className={style.left}>
        <img
          src={logo}
          className={style.logo}
          onClick={() => {
            navigate("/");
            scrollTo({
              top: 0,
              behavior: "smooth",
            });
            handleItemClick("Home", "/");
          }}
        />
      </div>
      {/* Middle */}
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
          /* onClick={() => handleItemClick("More", "#")} */
        >
          <p className={style.itemName}>More</p>
        </div>

        <div className={`${style.navbarItem} ${style.navbarCTA}`}>
          <p className={style.itemName}>Book a Call</p>
        </div>
      </div>
      {/* Right */}
      <div className={style.right}>
        <LuFlower size={25} />
      </div>

      {/* Hamburger - Small Screen */}
      <div className={style.smallScreenMenu} onClick={(e) => openBurgerMode()}>
        <div className={style.burgerContainer}>
          <div
            className={`${style.topBurger} ${style.burgerLine} ${
              active ? style.active : ""
            }`}
          ></div>
          <div
            className={`${style.middleBurger} ${style.burgerLine} ${
              active ? style.active : ""
            }`}
          ></div>
          <div
            className={`${style.bottomBurger} ${style.burgerLine} ${
              active ? style.active : ""
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`${style.burgerItems} ${
          active ? style.burgerItemsActive : ""
        }`}
      >
        {menuItemData.map((item, index) => {
          return (
            <div className={style.burgerItem} key={index}>
              <div className={style.burgerItemLeft}>
                {<item.icon color="whitesmoke" size={25} />}
              </div>
              <div className={style.burgerItemRight}>
                <h2 className={style.burgerItemRightTitle}>{item.title}</h2>
                <p className={style.burgerItemRightSubtitle}>{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
