import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Image from "../../assets/Logo.jpeg";
const Header = () => {
  return (
    <header>
      <div className=" flex justify-between items-center p-4 px-6 bg-gray-500/10 rounded-b-2xl ">
        <div className="flex items-center  ">
          <img src={Image} className="h-16 mr-4 " style={{ mixBlendMode: "darken" }} />
          <p className=" font-semibold ">A.P.Trading</p>
        </div>
        <div className="flex font-semibold">
          <Link to="/" className="mr-6 ">
            Home
          </Link>

          <Link to="/Login">SignIN</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
