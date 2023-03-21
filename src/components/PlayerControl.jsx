import axios from "axios";
import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import "./playercontrol.css";

const PlayerControl = () => {
  const [{ token, playerState }, dispatch] = useStateProvider();

  return (
    <div className="song_toggle_option">
      <ul>
        <li>
          <i className="fa-solid fa-shuffle"></i>
        </li>
        <li>
          <i className="fa-solid fa-backward-step"></i>
        </li>
        <li>
          {playerState ? (
            <i className="fa-solid fa-circle-pause"></i>
          ) : (
            <i className="fa-solid fa-circle-play"></i>
          )}
        </li>
        <li>
          <i className="fa-solid fa-forward-step"></i>
        </li>
        <li>
          <i className="fa-solid fa-repeat"></i>
        </li>
      </ul>
    </div>
  );
};

export default PlayerControl;
