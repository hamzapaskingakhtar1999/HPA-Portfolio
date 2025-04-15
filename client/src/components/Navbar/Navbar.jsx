import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import { LuFlower } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

import { RiHome3Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { IoBookOutline } from "react-icons/io5";
import { BsBucket } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNavbar } from "../../store/navbarSlice";

import { motion, stagger } from "framer-motion";

import { useParams } from "react-router";
import { path } from "framer-motion/client";

const menuItemData = [
  {
    icon: RiHome3Line,
    title: "Home",
    subTitle: "Welcome to my forever work-in-progress",
    path: "/",
  },
  {
    icon: GoProjectSymlink,
    title: "Project",
    subTitle: "Showcase of my projects",
    path: "/project",
  },
  {
    icon: RxAvatar,
    title: "About",
    subTitle: "Learn more about me",
    path: "/about",
  },
  {
    icon: IoBookOutline,
    title: "Guest Book",
    subTitle: "Leave a message for me",
    path: "/",
  },
  {
    icon: BsBucket,
    title: "Bucket List",
    subTitle: "Things to do atleast once in my life",
    path: "/",
  },
];

const Navbar = () => {
  let params = useParams();


  const navigate = useNavigate();

  const currentNavbarItem = useSelector((state) => state.navbar.active);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);


  /* Active Burger */

  const [active, setActive] = useState(false);

  const [activeItem, setActiveItem] = useState(() => {
    return sessionStorage.getItem("activeItem") ?? "Home";
  });

  useEffect(() => {
    sessionStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  const handleItemClick = (title, path) => {
    setActiveItem(title);
    navigate(path);
    dispatch(setActiveNavbar(title));
  };

  const openBurgerMode = () => {
    setActive(!active);
  };

  /* FRAMER MOTION ANIMATION*/

  const navbarContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const navbarItem = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };


  return (
    <nav className={`${style.navbar} compress`}>
      {/* Left */}
      <motion.div
        className={style.left}
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.3,
          },
        }}
      >
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
      </motion.div>
      {/* Middle */}
      <motion.div
        className={style.middle}
        variants={navbarContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className={`${activeItem === "Home" ? style.active : ""} ${
            style.navbarItem
          }`}
          onClick={() => {
            handleItemClick("Home", "/");
          }}
          variants={navbarItem}
        >
          <p className={style.itemName}>Home</p>
        </motion.div>
        <motion.div
          className={`${activeItem === "Project" ? style.active : ""} ${
            style.navbarItem
          }`}
          onClick={() => handleItemClick("Project", "/project")}
          variants={navbarItem}
        >
          <p className={style.itemName}>Project</p>
        </motion.div>
        <motion.div
          className={`${activeItem === "About" ? style.active : ""} ${
            style.navbarItem
          }`}
          onClick={() => handleItemClick("About", "/about")}
          variants={navbarItem}
        >
          <p className={style.itemName}>About</p>
        </motion.div>
        <motion.div
          onMouseEnter={() => showMore()}
          className={`${activeItem === "More" ? style.active : ""} ${
            style.navbarItem
          }`}
          /* onClick={() => handleItemClick("More", "#")} */
          variants={navbarItem}
        >
          <p className={style.itemName}>More</p>
        </motion.div>

        <motion.div
          className={`${style.navbarItem} ${style.navbarCTA}`}
          onClick={() => {
            handleItemClick("Book a call", "/bookacall");
          }}
          variants={navbarItem}
        >
          <p className={style.itemName}>Book a Call</p>
        </motion.div>
      </motion.div>
      {/* Right */}
      <motion.div
        className={style.right}
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.3,
          },
        }}
      >
        <LuFlower size={25} />
      </motion.div>

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
            <div
              className={style.burgerItem}
              key={index}
              onClick={() => {
                navigate(`${item.path}`);
                setActive(!active);
                handleItemClick(item.title, item.path);
              }}
            >
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
