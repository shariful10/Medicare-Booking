import React from "react";

const BtnLogin = ({ title }) => {
	return (
		<button className="bg-primaryColor py-2 px-2 md:px-6 text-white hover:text-irisBlueColor font-semibold h-[44px] flex items-center justify-center rounded-[50px] secondary__btn w-[150px] md:font-semibold">
			{title}
		</button>
	);
};

export default BtnLogin;
