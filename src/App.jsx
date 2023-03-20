import React, { useEffect } from "react";
import Login from "./components/Login";
import Spotify from "./components/Spotify";
import "./App.css";
import { useStateProvider } from "./utils/StateProvider";
import reducer from "./utils/reducer";
import { reducerCases } from "./utils/Constants";
const App = () => {
  const [{ token }, dispatch] = useStateProvider();
  console.log(token, "before use effect");
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const tokens = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, tokens });
    }
  }, [token, dispatch]);
  console.log(token, "after use effect");

  return <div>{token ? <Spotify /> : <Login />}</div>;
};

export default App;
