import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, index }) => {
	const { name, desc, bgColor, textColor } = service;
	return (
		<div className="py-[30px]">
			<h2 className="text-[26px] leading-9 text-headingsColor font-bold">{name}</h2>
			<p className="text-[16px] leading-7 font-normal text-textColor mt-4">{desc}</p>
			<div className="flex items-center justify-between mt-[30px]">
				<Link
					to="/doctors"
					className="w-[44px] h-[44px] rounded-full flex items-center justify-center group bg-primaryColor hover:bg-irisBlueColor hover:border-none"
				>
					<BsArrowUp className="text-white h-5 w-6 duration-300 group-hover:rotate-90" />
				</Link>
				<span
					className="w-11 h-11 flex items-center justify-center text-[18px] leading-[30px] font-semibold"
					style={{
						background: `${bgColor}`,
						color: `${textColor}`,
						borderRadius: "10px 0 10px 0",
					}}
				>
					{index + 1}
				</span>
			</div>
		</div>
	);
};

export default ServiceCard;
