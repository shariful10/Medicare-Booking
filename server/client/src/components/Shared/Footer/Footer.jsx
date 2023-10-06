import React from "react";
import logo from "../../../assets/images/logo.png";
import { quickLink01, quickLink02, quickLink03, socialLinks } from "../../../assets/data/footer";
import { Link } from "react-router-dom";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="pb-16 pt-10">
			<div className="container">
				<div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
					<div>
						<img src={logo} alt="" />
						<p className="text-[16px] leading-7 font-normal text-textColor mt-4">
							Copright &copy; {year} | Developed by Shariful Islam all rights
							reserved.
						</p>
						<div className="flex items-center gap-3 mt-4">
							{socialLinks.map(({ id, path, icon: Icon }) => (
								<Link
									key={id}
									to={path}
									className="w-10 h-10 border border-primaryColor rounded-full flex items-center justify-center group hover:text-white text-primaryColor hover:bg-irisBlueColor hover:border-none"
								>
									<Icon className="w-5 h-5" />
								</Link>
							))}
						</div>
					</div>
					<div>
						<h2 className="text-[20px] leading-[30px] font-bold mb-6 text-headingsColor">
							Quick Links
						</h2>
						{quickLink01.map(({ id, path, display }) => (
							<li key={id} className="list-none">
								<Link to={path} className="text-[16px] leading-7 font-normal text-textColor">{display}</Link>
							</li>
						))}
					</div>
					<div>
						<h2 className="text-[20px] leading-[30px] font-bold mb-6 text-headingsColor">
							I Want to:
						</h2>
						{quickLink02.map(({ id, path, display }) => (
							<li key={id} className="list-none">
								<Link to={path} className="text-[16px] leading-7 font-normal text-textColor">{display}</Link>
							</li>
						))}
					</div>
					<div>
						<h2 className="text-[20px] leading-[30px] font-bold mb-6 text-headingsColor">
							Support
						</h2>
						{quickLink03.map(({ id, path, display }) => (
							<li key={id} className="list-none">
								<Link to={path} className="text-[16px] leading-7 font-normal text-textColor">{display}</Link>
							</li>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
