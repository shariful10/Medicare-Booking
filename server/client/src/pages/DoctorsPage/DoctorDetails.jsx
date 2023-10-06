import { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
	const [tab, setTab] = useState("about");

	return (
		<section>
			<div className="max-w-[1170px] px-5 mx-auto">
				<div className="grid md:grid-cols-3 gap-[50px]">
					<div className="md:col-span-2">
						{/* <======<<======= First Column =======>>======> */}
						<div className="flex items-center gap-5 mb-5">
							<figure className="max-w-[200px] max-h-[200px]">
								<img src={doctorImg} className="w-full" alt="Doctor Image" />
							</figure>
							<div>
								<span className="bg-[#CCF0FC] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
									Neurologist
								</span>
								<h3 className="text-headingsColor text-[18px] leading-6 md:text-[22px] md:leading-9 mt-3 font-bold">
									Dr. Edward Geltman
								</h3>
								<div className="flex items-center gap-[6px] mt-3 md:mt-0">
									<span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingsColor">
										<img src={starIcon} alt="" /> 4.8
									</span>
									<span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-normal text-textColor">
										(272)
									</span>
								</div>
								<p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px] hidden md:block">
									Dr. Edward Geltman: Renowned neurologist, 20+ years of expertise, known for compassionate care and groundbreaking research.
								</p>
							</div>
						</div>
						<p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] md:hidden">
							Dr. Edward Geltman: Renowned neurologist, 20+ years of expertise, known for compassionate care and groundbreaking research.
						</p>
						{/* <======<<======= Second Column (Tab) =======>>======> */}
						<div className="mt-[50px] border-b border-irisBlueColor">
							<button
								onClick={() => setTab("about")}
								className={`${
									tab === "about" &&
									"border-b border-primaryColor text-primaryColor"
								} py-2 px-5 mr-5 text-[16px] leading-7 text-irisBlueColor font-semibold`}
							>
								About
							</button>
							<button
								onClick={() => setTab("feedback")}
								className={`${
									tab === "feedback" &&
									"border-b border-primaryColor text-primaryColor"
								} py-2 px-5 mr-5 text-[16px] leading-7 text-irisBlueColor font-semibold`}
							>
								Feedback
							</button>
						</div>
                        {/* <-------<<-------- Tab Data ------->>-------> */}
						<div className="mt-[50px]">
							{tab === "about" && <DoctorAbout />}{" "}
							{tab === "feedback" && <Feedback />}
						</div>
					</div>
					{/* <-------<<-------- Side Panel ------->>-------> */}
					<div>
						<SidePanel />
					</div>
				</div>
			</div>
		</section>
	);
};

export default DoctorDetails;
