import aboutImg from "../../../assets/images/about.png";
import aboutCardImg from "../../../assets/images/about-card.png";
import { Link } from "react-router-dom";
import Buttons from "../../../components/Buttons/Buttons";

const AboutSection = () => {
	return (
		<section>
			<div className="container">
				<div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
					{/* <============>>======== About Image =======>>======> */}
					<div className="relatve w-full lg:w-1/2 xl:w-[770px] z-10">
						<img src={aboutImg} alt="" />
						<div className="absolute z-20 bottom-[-2350px] md:bottom-[-1925px] lg:bottom-[-1580px] xl:bottom-[-1510px] 2xl:xl:bottom-[-1270px] w-[200px] md:w-[300px] right-[4%] md:right-[22%] lg:right-[38%] xl:right-[50%] 2xl:right-[55%]">
							<img src={aboutCardImg} alt="" />
						</div>
					</div>

					<div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
						<h2 className="heading">Proud to be one of the nations best</h2>
						<p className="text__para">
							For 30 years in a row, U.S. News & World Report has recognized us as one
							of the best public hospitals in the nation an#1 in the Texas.
						</p>
						<p className="text__para">
							Our best is something we strive for each day, caring for our patients
							not looking back at what accomplished but towards what we can do
							tomorrow. Providing the best.
						</p>
						<div className="mt-8">
							<Link to="/">
								<Buttons title="Learn More" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
