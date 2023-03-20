import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import "./navbar.css";
const Navbar = () => {
  const [{ userInfo }] = useStateProvider();
  // console.log({ userInfo }, "give ,edfaklsehdjfk");

  return (
    <div className="navbar">
      <div className="searchbar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="What do you want to listem to?" />
      </div>
      <div className="userinfo">
        <i className="fa-solid fa-user"></i>
        <a href="">{userInfo?.userName}</a>
      </div>
    </div>
  );
};

export default Navbar;
