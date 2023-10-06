import ServiceCard from "./ServiceCard";
import { service } from './../../../assets/data/services';

const ServiceList = () => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
			{service.map((service, i) => (
				<ServiceCard key={i} index={i} service={service} />
			))}
		</div>
	);
};

export default ServiceList;
