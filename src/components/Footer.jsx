import React from "react";
import CurrentTract from "./CurrentTract";
import PlayerControl from "./PlayerControl";

const Footer = () => {
  return (
    <div className="currenttrack">
      <CurrentTract />
      <PlayerControl />
    </div>
  );
};

export default Footer;
