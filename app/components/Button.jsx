"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Button({
	onClick,
	text,
	bgColor,
	textColor,
	hoverColor,
	hoverText,
	className,
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
		className: PropTypes.string,
	};

	Button.defaultProps = {
		text: "See Product",
		bgColor: "#554ad8",
		textColor: "white",
		hoverColor: "#A4A4FF",
		hoverText: "white",
		className: "",
	};

	const buttonStyle = {
		backgroundColor: isHovered ? hoverColor : bgColor,
		color: isHovered ? hoverText : textColor,
	};

	const buttonClasses = `uppercase font-[700] text-[13px] w-[160px] h-[48px] ${className}`

	return (
		<div>
			<button
				className={buttonClasses}
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
