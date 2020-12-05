import React from "react";
import { Button } from "./styles";
import propTypes from "prop-types";
import Logo from "../../assets/rc.png";

const ServerButton = ({ selected, isHome, hasNotifications, mentions }) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      className={selected ? "active" : ""}
      mentions={mentions}
    >
      {isHome && <img src={Logo} alt="Logo RC - RCARRENHO"></img>}
    </Button>
  );
};

ServerButton.propTypes = {
  selected: propTypes.bool,
  isHome: propTypes.bool,
  hasNotifications: propTypes.bool,
  mentions: propTypes.number,
};

export default ServerButton;
