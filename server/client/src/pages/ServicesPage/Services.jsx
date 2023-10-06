import { service } from "../../assets/data/services";
import ServiceCard from './../HomePage/Services/ServiceCard';

const Services = () => {
	return (
		<section>
			<div className="container">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]">
					{service.map((service, i) => (
						<ServiceCard key={i} index={i} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
