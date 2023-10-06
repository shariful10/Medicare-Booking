import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
	return (
		<div>
            {/* <======<<======= About Of =======>>======> */}
			<div>
				<h3 className="text-[20px] leading-[30px] text-headingsColor font-semibold flex items-center gap-2">
					About Of
					<span className="text-irisBlueColor font-bold text-2xl leading-9">
						Dr. Edward Geltman
					</span>
				</h3>
				<p className="text__para">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quibusdam
					voluptatem accusantium nostrum magnam sapiente rerum consectetur asperiores modi
					repellendus quos labore voluptatum fuga odit fugit perferendis eveniet quaerat
					exercitationem, quis laborum neque dolorum accusamus quod ut! Exercitationem,
					nisi. Temporibus.
				</p>
			</div>
            {/* <======<<======= Education Part =======>>======> */}
			<div className="mt-12">
				<h3 className="text-xl leading-[30px] text-headingsColor font-semibold">
					Education
				</h3>
				<ul className="pt-4 md:p-5">
					<li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
						<div>
							<span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
								{formateDate("09-23-2014")} - {formateDate("09-23-2016")}
							</span>
							<p className="text-[15px] leading-6 font-medium text-textColor">
								PSD in Neurologist
							</p>
						</div>
						<p className="text-[14px] leading-5 font-medium text-textColor">
							Massachusetts General Hospital, Boston.
						</p>
					</li>
					<li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
						<div>
							<span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
								{formateDate("07-4-2010")} - {formateDate("09-23-2016")}
							</span>
							<p className="text-[15px] leading-6 font-medium text-textColor">
								PSD in Neurologist
							</p>
						</div>
						<p className="text-[14px] leading-5 font-medium text-textColor">
							Massachusetts General Hospital, Boston.
						</p>
					</li>
				</ul>
			</div>
            {/* <======<<======= Experience Part =======>>======> */}
			<div className="mt-12">
				<h3 className="text-xl leading-[30px] text-headingsColor font-semibold">
					Experience
				</h3>
				<ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
					<li className="p-4 rounded bg-[#FFF9EA]">
						<span className="text-yellowColor text-[15px] leading-6 font-semibold">
							{formateDate("07-4-2010")} - {formateDate("09-23-2016")}
						</span>
						<p className="text-[16px] leading-6 font-medium text-textColor">
							Sr. Neurologist
						</p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
							Massachusetts General Hospital, Boston.
						</p>
					</li>
					<li className="p-4 rounded bg-[#FFF9EA]">
						<span className="text-yellowColor text-[15px] leading-6 font-semibold">
							{formateDate("07-4-2010")} - {formateDate("09-23-2016")}
						</span>
						<p className="text-[16px] leading-6 font-medium text-textColor">
							Sr. Neurologist
						</p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
							Massachusetts General Hospital, Boston.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default DoctorAbout;
