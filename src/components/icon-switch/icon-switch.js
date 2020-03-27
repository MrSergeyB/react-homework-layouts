import React from "react";
import "./icon-switch.css";
import PropTypes from "prop-types";

const IconSwitch = props => {
  const {icon, onSwitch} = props;

  return (
    <div onClick={onSwitch} className="icon-switch">
      {icon === "view_list" ? (
        <span className="material-icons md-36">view_list</span>
      ) : (
        <span className="material-icons md-36">view_module</span>
      )}
    </div>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
};

export default IconSwitch;
