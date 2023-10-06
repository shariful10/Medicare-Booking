import BtnAppoinment from "../../components/BtnAppoinment/BtnAppoinment";

const SidePanel = () => {
	return (
		<div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
			<div className="flex items-center justify-between">
				<p className="text__para mt-0 font-semibold">Ticket Price</p>
				<span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingsColor font-bold">
					80 USD
				</span>
			</div>
			<div className="mt-[30px]">
				<p className="text__para mt-0 font-semibold">Available Time Slots:</p>
				<ul className="mt-3">
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							4:00 PM - 9:30PM
						</p>
					</li>
				</ul>
				<ul className="mt-3">
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							Tuesday
						</p>
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							4:00 PM - 9:30PM
						</p>
					</li>
				</ul>
				<ul className="mt-3">
					<li className="flex items-center justify-between mb-2">
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							Wednesday
						</p>
						<p className="text-[15px] leading-6 text-textColor font-semibold">
							4:00 PM - 9:30PM
						</p>
					</li>
				</ul>
			</div>
			<div className="mt-5">
				<BtnAppoinment title="Book Appoinment" />
			</div>
		</div>
	);
};

export default SidePanel;
