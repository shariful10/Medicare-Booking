import TestimonialList from "./TestimonialList";

const Testimonials = () => {
	return (
		<section>
			<div className="container">
				<div className="xl:w-[490px] mx-auto">
					<h2 className="heading text-center">What Our Patients Say</h2>
					<p className="text__para text-center">
						World-class care for everyone. Our health system offers unmatched, expert
						health care.
					</p>
				</div>
				<TestimonialList />
			</div>
		</section>
	);
};

export default Testimonials;
