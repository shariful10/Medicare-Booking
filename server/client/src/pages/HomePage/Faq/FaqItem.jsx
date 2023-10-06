import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ faq }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="p-3 lg:p-5 rounded-xl border border-[#D9DCE2] mb-5 cursor-pointer">
			<div
				onClick={() => setIsOpen(!isOpen)}
				className="flex item-center justify-between gap-5"
			>
				<h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingsColor">
					{faq.question}
				</h4>
				<div
					className={`${
						isOpen ? "bg-irisBlueColor" : "bg-primaryColor"
					} w-7 h-7 lg:w-8 lg:h-8 text-white rounded flex items-center justify-center `}
				>
					{isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</div>
			</div>
			{/* <===========<<======== Toggle According =========>>=========>  */}
			{isOpen && (
				<div className="mt-4 transition duration-1000">
					<p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-normal text-textColor">
						{faq.content}
					</p>
				</div>
			)}
		</div>
	);
};

export default FaqItem;
