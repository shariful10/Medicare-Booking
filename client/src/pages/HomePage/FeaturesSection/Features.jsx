import Buttons from "../../../components/Buttons/Buttons";
import featureImg from "../../../assets/images/feature-img.png";
import videoIcon from "../../../assets/images/video-icon.png";
import avatarIcon from "../../../assets/images/avatar-icon.png";

const Features = () => {
	return (
		<section>
			<div className="container">
				<div className="grid md:grid-cols-2 items-center justify-between flex-col lg:flex-row">
					{/* <============= Feature Content =============> */}
					<div className="xl:w-[670px] order-2 md:order-1 mt-[50px] md:mt-0">
						<h2 className="heading">
							Ger virtual treatment <br /> anytime.
						</h2>
						<ul className="pl-4">
							<li className="text__para">1. Schedule the appoinment directly.</li>
							<li className="text__para">
								2. Search for your physican here, and contact their office.
							</li>
							<li className="text__para">
								3. View our physicans who are accepting new patients, use the online
								scheduling tool to select an appoinment time.
							</li>
						</ul>
						<div className="mt-8">
							<Buttons title={"Learn More"} />
						</div>
					</div>
					{/* <============= Feature Image =============> */}
					<div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 order-1 md:order-2">
						<img src={featureImg} className="md:w-3/4" alt="" />
						<div className="dateTimeVdo">
							<div className="flex item-center justify-between">
								<div className="flex items-center gap-[6px] lg:gap-3">
									<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingsColor font-semibold">
										Tue, 24
									</p>
									<p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingsColor font-normal">
										10:00 AM
									</p>
								</div>
								<span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
									<img src={videoIcon} alt="" />
								</span>
							</div>
							<div className="w-[65px] lg:w-24 bg-[#CCF0F3] py-1 lg:py-[6px] px-2 lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-medium mt-2 lg:mt-4 rounded-full">
								Consultation
							</div>
							<div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
								<img src={avatarIcon} alt="" />
								<h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-bold text-headingsColor">
									Wayne Collins
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
