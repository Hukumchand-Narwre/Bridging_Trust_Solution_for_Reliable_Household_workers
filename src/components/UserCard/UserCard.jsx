import React from "react";
import classes from "./UserCard.module.css";
const UserCard = () => {
  return (
    <div className="m-20">
      <div className={classes.flex}>
        <div className={`bg-white/50  ${classes.card1}`}>
          <div className={classes.img}>
            <img src="/Logo.jpeg" alt="Logo" className={classes.border} />
          </div>
          <h2>Hukumchand Narwre</h2>
          <a href="#" className={classes.mybutton}>
            View Details
          </a>
        </div>
        <div className={`bg-white/50  ${classes.card1}`}>
          <div className={classes.img}>
            <img src="/Logo.jpeg" alt="Logo" className={classes.border} />
          </div>
          <h2>Akanksha Adase</h2>
          <a href="#" className={classes.mybutton}>
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
