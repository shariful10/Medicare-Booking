import React from "react";

const Buttons = ({ title }) => {
	return (
		<button className="bg-primaryColor px-5 md:px-10 py-2 md:py-3 rounded-full md:font-semibold primary__btn text-white">
			{title}
		</button>
	);
};

export default Buttons;
