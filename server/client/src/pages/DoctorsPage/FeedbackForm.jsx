import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Buttons from "../../components/Buttons/Buttons";

const FeedbackForm = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const [reviewText, setReviewText] = useState("");

	const handleSubmitReview = async (e) => {
		e.preventDefault();
	};

	return (
		<form>
			{/* <---------<<-------- Patients Data --------->>---------> */}
			<div>
				<h3 className="text-headingsColor text-[16px] leading-6 font-semibold mb-4 mt-0">
					Would you rate the overall experience?*
				</h3>
				<div>
					{[...Array(5).keys()].map((key, i) => {
						i += 1;
						return (
							<button
								key={i}
								type="button"
								className={`${
									i <= ((rating && hover) || hover)
										? "text-yellowColor"
										: "text-gray-400"
								} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
								onClick={() => setRating(i)}
								onMouseEnter={() => setHover(i)}
								onMouseLeave={() => setHover(rating)}
								onDoubleClick={() => {
									setHover(0);
									setRating(0);
								}}
							>
								<span>
									<AiFillStar />
								</span>
							</button>
						);
					})}
				</div>
			</div>
			{/* <---------<<-------- Feedback --------->>---------> */}
			<div className="mt-[30px]">
				<h3 className="text-headingsColor text-[16px] leading-6 font-semibold mb-4 mt-0">
					Shere your feedback or suggestions*
				</h3>
				<textarea
					rows="5"
					onChange={(e) => setReviewText(e.target.value)}
					className="border border-primaryColor focus:outline-irisBlueColor w-full px-4 py-3 rounded-md"
					placeholder="Write your feedback here"
				></textarea>
			</div>
			<div onClick={handleSubmitReview} className="mt-5">
				<Buttons type="submit" title="Submit Feedback" />
			</div>
		</form>
	);
};

export default FeedbackForm;
