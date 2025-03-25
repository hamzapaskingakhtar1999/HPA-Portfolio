import React from "react";

import style from "./GuestBook.module.css";
import GlowingTexts from "../../components/Designed Texts/GlowingTexts/GlowingTexts";

const GuestBook = () => {
  return (
    <div className={style.guestBook}>
      {/* Top Texts */}
      <div className={style.topTexts}>
        <h3 className={style.title}>THE GUESTBOOK</h3>
        <h2 className={style.mainMessage}>
          <GlowingTexts text={`Got a Message?  `} /> I'd love to hear from you!
        </h2>
        <p className={style.message}>
          Sign my guestbook and share your idea. You can tell me anything here!
        </p>
      </div>
    </div>
  );
};

export default GuestBook;
