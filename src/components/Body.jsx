import axios from "axios";
import React, { useEffect } from "react";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";
import "./body.css";
const Body = () => {
  const [{ token, selectedPlaylistId, selectedPlaylist, userInfo }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => {
          return {
            id: track.id,
            name: track.name,
            artists: track.artists.map((artist) => artist.name),
            image: track.album.images[2].url,
            duration: track.duration_ms,
            album: track.album.name,
            context_uri: track.album.name,
            track_number: track.track_number,
          };
        }),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);
  const mstoMinutes = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  const changeCurrentSong = (id, name, artists, image) => {
    const currentlyPlaying = {
      id: id,
      name: name,
      artists: artists,
      image: image,
    };

    dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
  };
  return (
    <div className="body">
      {selectedPlaylist && (
        <div className="playlist">
          <div className="playlist_title">
            <img src={selectedPlaylist.image} alt="playlist image" />
            <div className="playlist_title_name">
              <span>Playlist</span>
              <h2>{selectedPlaylist.name}</h2>
              <div className="playlist_title_name_userinfo">
                <span>{userInfo.userName}</span>
                <span>.</span>
                <span>{selectedPlaylist.tracks.length} songs</span>
              </div>
            </div>
          </div>
          <div className="playlist_song_list">
            <ol className="orderlist_of_song">
              {selectedPlaylist.tracks.map((song, index) => {
                return (
                  <li
                    key={index}
                    onClick={() =>
                      changeCurrentSong(
                        song.id,
                        song.name,
                        song.artists,
                        song.image
                      )
                    }
                  >
                    <div className="playlist_song_list_info">
                      <div className="song_index">
                        <h4>{index + 1}</h4>
                      </div>
                      <div className="song_info">
                        <img src={song.image} alt="song_image" />
                        <div className="song_name">
                          <h4>{song.name}</h4>
                          <h5>{song.artists}</h5>
                        </div>
                      </div>
                      <div className="song_album">
                        <h5>{song.album}</h5>
                      </div>
                      <div className="song_duration">
                        <h5>{mstoMinutes(song.duration)}</h5>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
