import icon01 from "../../../assets/images/icon01.png"
import icon02 from "../../../assets/images/icon02.png";
import icon03 from "../../../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";

const MedicalService = () => {
	return (
		<section>
			<div className="container">
				<div className="md:w-[470px] mx-auto">
					<h1 className="heading text-center">Providing The Best Medical Services</h1>
					<p className="text__para text-center">
						World-class care for everyone. Our health system offers unmatched, expert
						health care.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
					<div className="py-[30px] px-5">
						<div className="flex items-center justify-center">
							<img src={icon01} alt="" />
						</div>
						<div className="mt-[30px]">
							<h2 className="text-[26px] leading-9 text-headingsColor font-bold text-center">
								Find a Doctor
							</h2>
							<p className="text-[16px] leading-7 text-textColor font-normal mt-4 text-center">
								World-class care for everyone. Our health system offers unmatched,
								expert health care. From the lab to the clinic.
							</p>
							<Link
								to="/doctors"
								className="w-[44px] h-[44px] rounded-full mt-[30px] mx-auto flex items-center justify-center group bg-primaryColor hover:bg-irisBlueColor hover:border-none"
							>
								<BsArrowUp className="text-white h-5 w-6 duration-300 group-hover:rotate-90" />
							</Link>
						</div>
					</div>
					<div className="py-[30px] px-5">
						<div className="flex items-center justify-center">
							<img src={icon02} alt="" />
						</div>
						<div className="mt-[30px]">
							<h2 className="text-[26px] leading-9 text-headingsColor font-bold text-center">
								Find a Location
							</h2>
							<p className="text-[16px] leading-7 text-textColor font-normal mt-4 text-center">
								World-class care for everyone. Our health system offers unmatched,
								expert health care. From the lab to the clinic
							</p>
							<Link
								to="/doctors"
								className="w-[44px] h-[44px] rounded-full mt-[30px] mx-auto flex items-center justify-center group bg-primaryColor hover:bg-irisBlueColor hover:border-none"
							>
								<BsArrowUp className="text-white h-5 w-6 duration-300 group-hover:rotate-90" />
							</Link>
						</div>
					</div>
					<div className="py-[30px] px-5">
						<div className="flex items-center justify-center">
							<img src={icon03} alt="" />
						</div>
						<div className="mt-[30px]">
							<h2 className="text-[26px] leading-9 text-headingsColor font-bold text-center">
								Book Appoinment
							</h2>
							<p className="text-[16px] leading-7 text-textColor font-normal mt-4 text-center">
								World-class care for everyone. Our health system offers unmatched,
								expert health care. From the lab to the clinic
							</p>
							<Link
								to="/doctors"
								className="w-[44px] h-[44px] rounded-full mt-[30px] mx-auto flex items-center justify-center group bg-primaryColor hover:bg-irisBlueColor hover:border-none"
							>
								<BsArrowUp className="text-white h-5 w-6 duration-300 group-hover:rotate-90" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MedicalService;
