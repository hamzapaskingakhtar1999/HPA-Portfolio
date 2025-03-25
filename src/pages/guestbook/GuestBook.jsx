import React, { useState } from "react";

import style from "./GuestBook.module.css";
import GlowingTexts from "../../components/Designed Texts/GlowingTexts/GlowingTexts";

/* Icons */
import { TiPinOutline } from "react-icons/ti";
import { CiEraser } from "react-icons/ci";
import { TiLocationArrowOutline } from "react-icons/ti";

/* Data */

import feedbackData from "./feedbackData";

const GuestBook = () => {
  const [charInput, setCharInput] = useState("");
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
      {/* Gradient Pineed Box */}
      <div className={style.pinnedBox}>
        <div className={style.iconText}>
          <TiPinOutline size={25} />
          <p>Pinned</p>
        </div>
        <p>
          Hey there! Thanks for visiting my website. If you have a moment, I'd
          love to hear your thoughts on my work. Please log in with your account
          to leave a comment. Thanks!
        </p>
      </div>
      {/* Input when Login */}
      <div className={style.feedbackInput}>
        <div className={style.userTop}>
          <img
            src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg"
            alt="Avatar"
            className={style.userImage}
          />
          <div className={style.userDetail}>
            <h3 className={style.userName}>John Doe</h3>
            <p className={style.signOut}>Sign Out</p>
          </div>
        </div>
        <textarea
          className={style.textArea}
          placeholder="Share your thoughts..."
          onChange={(e) => setCharInput(e.target.value)}
          value={charInput}
          maxLength={80}
        />
        <div className={style.textAreaBottom}>
          <p className={style.charInput}>{charInput.length} / 80 Characters </p>
          {charInput.length < 5 && charInput.length >= 1 ? (
            <p>Message must be at least 5 characters long</p>
          ) : (
            ""
          )}
        </div>
        <div className={style.bottomButtons}>
          <button
            className={`${style.clearButton} ${
              charInput.length > 0 ? style.active : ""
            }`}
            disabled={charInput.length === 0}
            onClick={() => setCharInput("")}
          >
            <CiEraser /> Clear
          </button>
          <button className={style.submitButton}>
            <TiLocationArrowOutline size={25} />
            Submit
          </button>
        </div>
      </div>
      {/* Display Feedbacks */}
      <div className={style.feedbacks}>
        {feedbackData.map((item, index) => {
          return (
            <div className={style.feedback} key={index}>
              <div className={style.userTop}>
                <img
                  src={item.avatar}
                  alt="Avatar"
                  className={style.userImage}
                />
                <div className={style.userDetail}>
                  <h3 className={style.userName}>{item.name}</h3>
                  <p className={style.signOut}>{item.date}</p>
                </div>
              </div>
              <p className={style.userFeedback}>{item.feedback}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuestBook;
