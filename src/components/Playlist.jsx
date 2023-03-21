import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import "./playlist.css";
const Playlist = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      //   console.log(playlists);

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    console.log(selectedPlaylistId, "these is the id ");
  };
  return (
    <div className="playlist">
      <ul>
        {playlists?.map((playlist) => {
          return (
            <li
              key={playlist.id}
              onClick={() => changeCurrentPlaylist(playlist.id)}
            >
              {playlist?.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Playlist;
