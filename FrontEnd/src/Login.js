import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import kala from "./Footer";
import noticedata from "./dummyDataforNotice";
import placementdata from "./dummyDataforPlacement"
import placementresultdata from "./dummyDataforPlacementResult";
import externalcirculardata from "./dummyDataforexternalcircualr";
import internalcirculardata from "./dummyDataforinternalcircular";
import { LoginTopBar } from "./LoginTopBar";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });

  const senddata = async () => {
    const x = await axios.post("", {});
  };

  const senduser = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <LoginTopBar />
      <div className="container">
        <div className="text">Admin Login Form</div>
        <form>
          <div className="data">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => senduser(e)}
              required
            />
          </div>
          <div className="data">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => senduser(e)}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password ?</a>
          </div>
        </form>
        <div className="btn">
          <button type="submit" className="adminLogin">
            {" "}
            <Link to="/Homepage">Login</Link>{" "}
          </button>
        </div>
        <div className="data">
          <button className="studentlogin">
            {/*<p onClick={() => navigate("/Addnotices")}> View as Student</p>             this is the method 1 to connect the pages */}
            <a href="">
              {" "}
              <Link to="/StudentHomepage">View as Student</Link>{" "}
            </a>{" "}
            {/* This is the second Method to link the pages */}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
