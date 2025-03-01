import style from "./bookacall.module.css";

import { useEffect } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";
import AboutMe from "../../components/AboutMe/AboutMe";

import { CiMail } from "react-icons/ci";
import AbstractCTA from "../../components/AbstractCTA/AbstractCTA";
import { useLocation } from "react-router-dom";

export default function BookACall() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  useEffect(() => {
    (async function () {
      const Cal = await getCalApi();
      Cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#6F61C0",
            "cal-text": "#6F61C0",
            "cal-text-emphasis": "#4D408D",
            "cal-border-emphasis": "#4D408D",
            "cal-text-error": "pink",
            "cal-border": "#A090E0",
            "cal-border-default": "#A090E0",
            "cal-border-subtle": "#A090E0",
            "cal-border-booker": "#A090E0",
            "cal-text-muted": "#C0B8FF",
            "cal-bg-emphasis": "#E1DFFF",
            "cal-border-booker-width": "3px",
            // More CSS variables are defined here
            // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
          },
          dark: {
            // Set the similar variables as in light theme but for dark mode.
          },
        },
      });
    })();
  }, []);
  return (
    <div className={style.bookacall}>
      <h1 className={style.title}>Book a 15 Minute Call</h1>
      <p className={style.subTitle}>
        If any of the times don't work for you, just shoot me an email!
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          margin: "1rem 0 2rem 0",
        }}
      >
        <CiMail color="white" size={25} />
        <a
          href="mailto:hamzapaskinakhtar@gmail.com"
          style={{ fontSize: "1.3rem" }}
        >
          hamzapaskingakhtar@gmail.com
        </a>
      </div>

      <Cal
        namespace="15min"
        calLink="hamza-pasking-akhtar/15min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
      <AbstractCTA />
    </div>
  );
}
