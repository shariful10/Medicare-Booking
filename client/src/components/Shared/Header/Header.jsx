import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import BtnLogin from "../../BtnLogin/BtnLogin";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import React, { useState } from "react";
import { navlinks } from "../../../assets/data/navlinks";
import useAuth from "./../../Hooks/useAuth";

const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { user, role, token } = useAuth();

	return (
		<header className="header flex items-center sticky__header">
			<div className="container">
				<div className="flex items-center justify-between">
					{/* <=====<<===== Logo =====>>=====> */}
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
					{/* <=====<<===== Menu =====>>=====> */}
					<div className="hidden lg:block">
						<ul className="menu flex items-center gap-[2.7rem] text-center">
							{navlinks.map(({ id, path, display }) => (
								<li className="" key={id}>
									<NavLink
										to={path}
										className={(navClass) =>
											navClass.isActive
												? "text-primaryColor text-[16px] leading-7 font-semibold"
												: "text-textColor text-[16px] leading-7 font-semibold hover:text-primaryColor"
										}
									>
										{display}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					{/* <=====<<===== Nav Right =====>>=====> */}
					<div className="flex items-center gap-4">
						{/* <=====<<======<>=====>>=====> */}
						{/* <> Profile Pic & Login Btn <> */}
						{/* <=====<<======<>=====>>=====> */}
						{token && user ? (
							<div>
								<Link
									to={`${
										role === "doctor"
											? "/doctor/profile/me"
											: "/users/profile/me"
									}`}
								>
									<img
										src={user?.photo}
										className="w-[40px] h-[40px] rounded-full cursor-pointer"
										alt=""
									/>
								</Link>
							</div>
						) : (
							<div className="hidden lg:block">
								<Link to="/login">
									<BtnLogin title="Login" />
								</Link>
							</div>
						)}
					</div>
					{/* <=====<<===== Dropdown Icon =====>>=====> */}
					<div className="dropdown lg:hidden">
						<span
							onClick={() => {
								setShowMenu(!showMenu);
							}}
						>
							{showMenu ? (
								<MdClose className="h-6 w-6 cursor-pointer" />
							) : (
								<BiMenu className="h-6 w-6 cursor-pointer" />
							)}
						</span>
						{/* <=====<<===== Mobile Menu =====>>=====> */}
						<div
							className={`${
								showMenu
									? "top-0 left-0 lg:hidden text-black"
									: "top-0 -left-[500px] lg:hidden"
							} bg-[#0066ff00] rounded shadow-2xl border text-lg absolute z-10 transition-all duration-500 min-h-screen w-[15rem]`}
						>
							<ul className="menu bg-white">
								{/* <=====<<===== Logo =====>>=====> */}
								<div className="py-8">
									<img
										src={logo}
										className="mx-auto"
										alt=""
									/>
								</div>
								<div className="min-h-[calc(100vh-66px)] flex-col items-center">
									{navlinks.map(({ id, path, display }) => (
										<li key={id}>
											<NavLink
												to={path}
												onClick={() => {
													setShowMenu(false);
												}}
												className={(navClass) =>
													navClass.isActive
														? "text-primaryColor text-[16px] leading-7 font-semibold py-3 w-[15rem] block bg-[#0066ff6b] my-5 text-center"
														: "text-textColor text-[16px] leading-7 font-semibold hover:text-primaryColor  py-3 w-[15rem] block my-5 hover:bg-[#0066ff82] text-center"
												}
											>
												{display}
											</NavLink>
										</li>
									))}
									<div className="w-fit mx-auto">
										<Link
											to="/login"
											onClick={() => {
												setShowMenu(false);
											}}
										>
											<BtnLogin title="Login" />
										</Link>
									</div>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
