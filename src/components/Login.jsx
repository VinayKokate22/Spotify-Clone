import React from "react";
import "./login.css";
const Login = () => {
  const handleClick = () => {
    // console.log("hdsjf");
    const client_id = "8a8f809ba3b64f429246a57f5bbd8394";
    const redirect_uri = "http://localhost:5173/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-library-modify",
      "user-library-read",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-read-currently-playing",
      "user-read-playback-position",
      "user-top-read",
      "user-read-recently-played",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify logo"
      />
      <button onClick={handleClick}>Connet spotify</button>
    </div>
  );
};

export default Login;
