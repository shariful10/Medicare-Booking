import BtnSubmit from "../../components/BtnSubmit/BtnSubmit";

const Contact = () => {
	return (
		<section>
			<div className="px-4 mx-auto max-w-screen-md">
				<h2 className="heading text-center">Contact Us</h2>
				<p className="text__para mb-8 lg:mb-16 font-light text-center">
					Got a technical issue? Want to send feedback about a beta feaure? Let us know.
				</p>
				<form action="#" className="space-y-8">
					<div>
						<label htmlFor="email" className="form__label">
							Your Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="example@gmail.com"
							className="form__input mt-1"
						/>
					</div>
					<div>
						<label htmlFor="subject" className="form__label">
							Subject
						</label>
						<input
							type="text"
							name="subject"
							id="subject"
							placeholder="Let us know how we can help you"
							className="form__input mt-1"
						/>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="message" className="form__label">
							Your Message
						</label>
						<textarea
							rows="6"
							type="text"
							name="message"
							id="message"
							placeholder="Leave a comment..."
							className="form__input mt-1"
						/>
					</div>
					<button
						type="submit"
						className="bg-primaryColor px-5 md:px-10 py-2 md:py-3 rounded md:font-semibold primary__btn text-white mt-5"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
