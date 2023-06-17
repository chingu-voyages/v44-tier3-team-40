"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Button({
  onClick,
  text = "See Product",
  bgColor = "#554ad8",
  textColor = "white",
  hoverColor = "#A4A4FF",
  hoverText = "white",
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  Button.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    hoverColor: PropTypes.string,
    hoverText: PropTypes.string,
  };

  const buttonStyle = {
    backgroundColor: isHovered ? hoverColor : bgColor,
    color: isHovered ? hoverText : textColor,
  };

  return (
    <div>
      <button
        className="uppercase font-[700] text-[13px] w-[160px] h-[48px] border-1 border-solid border-gray-600 border"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          backgroundColor: buttonStyle.backgroundColor,
          color: buttonStyle.color,
        }}
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </div>
  );
}
