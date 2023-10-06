import ServiceList from "./ServiceList";

const Services = () => {
	return (
		<section>
			<div className="container">
				<div className="xl:w-[470px] mx-auto">
					<h2 className="heading text-center">Our Medical Services</h2>
					<p className="text__para text-center">
						World-class care for everyone. Our health system offers unmatched, expert
						health care.
					</p>
				</div>
				<ServiceList />
			</div>
		</section>
	);
};

export default Services;
