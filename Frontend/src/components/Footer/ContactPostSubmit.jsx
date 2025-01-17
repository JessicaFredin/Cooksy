import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeadingWithLine from "../HeadingWithLine";

function ContactPostSubmit() {
	return (
		<div className="bg-white min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 grid grid-cols-12 gap-4">
			{/* Rubrik och intro från Contact (placerat i grid col-start-2) */}
			<div className="col-start-2 col-span-10">
				<div className="col-start-2 col-span-3 mb-6">
					<HeadingWithLine text="Contact" />
				</div>
				<p className="text-black text-base sm:text-lg md:text-xl mb-6">
					Need assistance with your account or have questions you
					can't find an answer to? Reach out to us through the contact
					form or by email. We're here to help and ensure your
					experience with Cooksy is as smooth and enjoyable as
					possible!
				</p>
			</div>

			{/* Post Submit Meddelande i box*/}
			<div className="col-start-2 col-span-10 flex justify-center">
				<div className="bg-whiteFull shadow-md rounded-lg p-6 md:p-12 w-full max-w-md sm:max-w-lg">
					<h2 className="text-black font-semibold text-lg sm:text-xl md:text-2xl mb-4 text-center">
						Thank you for reaching out to us!
					</h2>
					<p className="text-black text-sm sm:text-base mb-6 text-center">
						Your email has been successfully sent. We appreciate
						your message and will get back to you as soon as
						possible.
					</p>
					<div className="flex justify-center mb-4">
						<span className="text-green-600 text-6xl">✓</span>
					</div>
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
		</div>
	);
}

export default ContactPostSubmit;
