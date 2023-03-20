import React from "react";
import Playlist from "./Playlist";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
          alt="logo"
        />
      </div>
      <div className="top-links">
        <ul>
          <li>
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </li>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>Search</span>
          </li>
          <li>
            <i className="fa-solid fa-list"></i> <span>Your Library</span>
          </li>
        </ul>
      </div>

      <Playlist />
    </div>
  );
};

export default Sidebar;
