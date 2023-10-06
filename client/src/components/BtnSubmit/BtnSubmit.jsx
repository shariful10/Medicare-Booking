const BtnSubmit = ({title}) => {
	return (
		<button
			type="submit"
			className="bg-primaryColor w-full px-5 md:px-10 py-2 md:py-3 rounded-lg md:font-semibold primary__btn text-white"
		>
			{title}
		</button>
	);
};

export default BtnSubmit;
