import heroImg01 from "../../../assets/images/hero-img01.png";
import heroImg02 from "../../../assets/images/hero-img02.png";
import heroImg03 from "../../../assets/images/hero-img03.png";
import { Link } from "react-router-dom";
import Buttons from './../../../components/Buttons/Buttons';

const HeroSection = () => {
	return (
		<section className="hero__section pt-[60px] 2xl:h-[800px]">
			<div className="container">
				{/* <============= Hero Content =============> */}
				<div className="grid md:grid-cols-2 justify-between gap-6">
					<div className="order-2 md:order-1">
						<div>
							<h1 className="text-[36px] leading-[46px] text-headingsColor font-extrabold md:text-[60px] md:leading-[70px] lg:w-[570px]">
								We help patients live to healthy, longer life.
							</h1>
							<p className="text__para lg:w-[570px]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
								adipisci est, incidunt eaque esse voluptatibus. Eaque eligendi rerum
								fugiat vel, labore eum, ipsa amet minus voluptatum asperiores a
								deserunt adipisci.
							</p>
							<div className="mt-8">
								<Link to="/">
									<Buttons title="Request an Appoinment" />
								</Link>
							</div>
						</div>
						{/* <============= Hero Counter =============> */}
						<div className="mt-[30px] lg:mt-[70px] flex lg:flow-row lg:items-center gap-5 lg:gap-[30px]">
							<div>
								<h2 className="thirty">30+</h2>
								<span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
								<p className="text__para">Years of Experience</p>
							</div>
							<div>
								<h2 className="thirty">15+</h2>
								<span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
								<p className="text__para">Clinic Location</p>
							</div>
							<div>
								<h2 className="thirty">100%</h2>
								<span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
								<p className="text__para">Patient Satisfaction</p>
							</div>
						</div>
					</div>
					{/* <============= Hero Content =============> */}
					<div className="flex gap-[30px] justify-end order-1 md:order-2">
						<div>
							<img className="w-full" src={heroImg01} alt="" />
						</div>
						<div className="mt-[30px]">
							<img className="w-full mb-[30px]" src={heroImg02} alt="" />
							<img className="w-full" src={heroImg03} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
