import axios from "axios";
import React, { useEffect } from "react";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";
import "./currenttrack.css";
const CurrentTract = () => {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.data !== "") {
        const currentlyPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
      } else {
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null });
      }
    };
    getCurrentTrack();
  }, [token, dispatch]);
  return (
    <div className="currenttrack_info">
      <img src={currentlyPlaying?.image} alt="song_image" />
      <div className="currentsong_name">
        <h4>{currentlyPlaying?.name}</h4>
        <h5>{currentlyPlaying?.artists}</h5>
      </div>
    </div>
  );
};

export default CurrentTract;
