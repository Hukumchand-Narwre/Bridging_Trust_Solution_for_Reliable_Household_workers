import Home from "../assets/Home4.jpeg";
import Home1 from "../assets/home1.png";
import Home6 from "../assets/home6.png";
import BabySitter from "../assets/BabySitter.png";
import cook from "../assets/Cook.png";
import { NavLink } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const HomeScreen = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Home})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "concoverain",
          backgroundPosition: "bottom top",
          backgroundBlendMode: "multiply, screen",
          backgroundAttachment: "fixed",
        }}
        className="flex h-[100vh] bg-cover  bg-no-repeat items-center justify-center"
      >
        <div className="flex-1 ">
          <div style={{ width: 295.5, marginLeft: "18rem" }}>
            <Slide left>
              <h2 style={{ lineHeight: "1.2" }} className="font-extrabold text-6xl justify-start   ">
                A Helping Hand For Your Domestic Hand
              </h2>
            </Slide>
            <Slide right>
              <p className="mt-2 mb-6">Domestic help offers the service of professionaly trained helpers</p>
            </Slide>
            <Fade up>
              <button className="button">
                <NavLink to="/Login">Log In</NavLink>
              </button>
            </Fade>
          </div>
        </div>
      </div>
      <div>
        <Fade down>
          <h2 className="text-center text-6xl font-semibold my-12">Our Services</h2>
        </Fade>
        <Slide left>
          <div style={{ width: 1000 }} className="flex mx-auto justify-center">
            <div className="flex flex-col items-center ">
              <img src={Home1} className="w-2/4 h-full object-cover" alt="Cover Image" />
              <h4 className="text-3xl font-bold my-4"> House Kepping</h4>
              <p className="text-2xl text-center" style={{ width: 400 }}>
                Housekeeping ensures a clean, organized living space, promoting comfort and well-being. It involves
                tasks like cleaning, tidying, and maintaining a hygienic environment.
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <img src={Home6} className="w-2/4 h-full object-cover" alt="Cover Image" />
              <h4 className="text-3xl font-bold my-4">Home Assistant</h4>
              <p className="text-2xl text-center" style={{ width: 400 }}>
                As a work from home assistant, your job is to help an organization or client with various scheduling and
                administrative needs
              </p>
            </div>
          </div>
        </Slide>
        <Slide right>
          <div style={{ width: 1000 }} className="flex mx-auto mt-8 justify-center">
            <div className="flex flex-col items-center ">
              <img src={BabySitter} className="w-2/4  h-full object-cover" alt="Cover Image" />
              <h4 className="text-3xl font-bold my-4">BabySitter</h4>
              <p className="text-2xl text-center" style={{ width: 400 }}>
                A babysitter cares for kids in their parents' absence, ensuring their safety and following parental
                guidelines.
              </p>
            </div>
            <div className="flex flex-col items-center ml-32">
              <img src={cook} className="w-2/4 h-full object-cover" alt="Cover Image" />
              <h4 className="text-3xl font-bold my-4">Cooks</h4>
              <p className="text-2xl text-center" style={{ width: 400 }}>
                As a work from home assistant, your job is to help an organization or client with various scheduling and
                administrative needs
              </p>
            </div>
          </div>
        </Slide>
      </div>
      <div className="text-center mt-24 text-cyan-50 py-2" style={{ backgroundColor: "#333333" }}>
        {" "}
        &#169; 2023
      </div>
    </>
  );
};

export default HomeScreen;
