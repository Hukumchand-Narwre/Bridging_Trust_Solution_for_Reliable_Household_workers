import React from "react";
import classes from "./Card.module.css";
const Card = () => {
  return (
    <div className={classes.box}>
      <div className={classes.rectangle}>
        <h3 className={classes.h3}>महाराज प्रतिष्ठान ढोल ताशा पथक</h3>
        <div className={classes.ellipse}>
          <img className={classes.image} alt="Ellipse" src="./assets/images (4).jpeg" />
        </div>
        <div className={classes.innerRectangle}></div>
      </div>
    </div>
  );
};

export default Card;
