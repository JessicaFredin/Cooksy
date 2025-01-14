import { useState } from "react";
import Button from "../Button";
import ContactPostSubmit from "./ContactPostSubmit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeadingWithLine from "../HeadingWithLine";

function Contact() {
	// Formulärdata och state för att hantera inputvärden
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		subject: "",
		message: "",
		privacyPolicy: false,
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	// Hanterar ändringar i formulärfälten
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	// Hanterar formulärskick med validering av input
	const handleSubmit = (e) => {
		e.preventDefault();
		const { firstName, lastName, email, subject, message, privacyPolicy } =
			formData;

		if (
			firstName &&
			lastName &&
			email &&
			subject &&
			message &&
			privacyPolicy
		) {
			setIsSubmitted(true);
		} else {
			alert("Please fill in all fields and accept the privacy policy.");
		}
	};

	// Om formuläret skickats, rendera bekräftelsekomponenten
	if (isSubmitted) {
		return <ContactPostSubmit />;
	}

	return (
		<div className="bg-white min-h-screen sm:p-6 md:p-8 lg:p-12 grid grid-cols-12 gap-4">
			{/* Rubrik och introduktion placerat i kolumn 2 */}
			<div className="col-start-2 col-span-10">
				<div className="col-start-2 col-span-10">
					<HeadingWithLine text="Contact" />
				</div>
				<p className="text-black text-sm sm:text-base md:text-lg mb-6 mt-4">
					Need assistance with your account or have questions you
					can&apos;t find an answer to? Reach out to us through the
					contact form or by email. We&apos;re here to help and ensure
					your experience with Cooksy is as smooth and enjoyable as
					possible!
				</p>
			</div>

			{/* Formulär container centrerat med mx-auto */}
			<div className="col-start-2 col-span-10 flex justify-center">
				<div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-md sm:max-w-lg">
					<form onSubmit={handleSubmit} className="space-y-6">
						{/* Namnfält i grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<label className="block text-black text-sm sm:text-base font-semibold mb-1">
									First name{" "}
									<span className="text-pink-400">*</span>
								</label>
								<input
									type="text"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									className="w-full border border-black rounded-md p-2"
								/>
							</div>
							<div>
								<label className="block text-black text-sm sm:text-base font-semibold mb-1">
									Last name{" "}
									<span className="text-pink-400">*</span>
								</label>
								<input
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									className="w-full border border-black rounded-md p-2"
								/>
							</div>
						</div>

						{/* Email */}
						<div>
							<label className="block text-black text-sm sm:text-base font-semibold mb-1">
								Email <span className="text-pink-400">*</span>
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full border border-black rounded-md p-2"
							/>
						</div>

						{/* Subject */}
						<div>
							<label className="block text-black text-sm sm:text-base font-semibold mb-1">
								Subject <span className="text-pink-400">*</span>
							</label>
							<input
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								className="w-full border border-black rounded-md p-2"
							/>
						</div>

						{/* Meddelande */}
						<div>
							<label className="block text-black text-sm sm:text-base font-semibold mb-1">
								Message <span className="text-pink-400">*</span>
							</label>
							<textarea
								name="message"
								rows="5"
								value={formData.message}
								onChange={handleChange}
								className="w-full border border-black rounded-md p-2"
							></textarea>
						</div>
						<div className="flex items-center">
							<input
								type="checkbox"
								name="privacyPolicy"
								checked={formData.privacyPolicy}
								onChange={handleChange}
								className="h-4 w-4 text-black border-black rounded"
							/>
							<label className="ml-2 text-black text-sm sm:text-base">
								I agree to Cooksy&apos;s privacy policy
							</label>
						</div>

						{/* Submit Button */}
						<div className="flex justify-end">
							<Button size="medium" type="submit">
								Send
							</Button>
						</div>
					</form>
				</div>
			</div>
			<div className="col-start-2 col-span-10 text-center mt-8">
				<p className="text-black text-sm sm:text-base">
					If your inquiry is urgent, please feel free to reach us by
					email anytime
				</p>
				<div className="flex items-center justify-center mt-2">
					<FontAwesomeIcon
						icon={faEnvelope}
						className="text-pink-400 text-2xl mr-2"
					/>
					<span className="text-black font-semibold">
						info@cooksy.com
					</span>
				</div>
			</div>
		</div>
	);
}

export default Contact;
