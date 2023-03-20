import axios from "axios";
import React, { useEffect } from "react";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";
import Body from "./Body";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./spotify.css";

const Spotify = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getuserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      // console.log(userInfo, "dsfldsafjdslajfldaskjflsdkafjlsdkajf");
      // console.log({ data });
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };

    getuserInfo();
  }, [dispatch, token]);
  return (
    <div className="hero_page">
      <div className="topsection">
        <div className="top_leftsection">
          <Sidebar />
        </div>
        <div className="top_rightsection">
          <Navbar />
          <Body />
        </div>
      </div>
      <div className="bottomsection">
        <Footer />
      </div>
    </div>
  );
};

export default Spotify;
