import { useState } from "react";
import Swoosh from "../assets/svg/Swoosh";
import HeadingWithLine from "../components/HeadingWithLine";
import Button from "../components/Button";
import CloseButton from "../components/CloseButton";
import NewsletterCard from "../components/NewsletterCard";

//Importerar ikoner
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

//Kontrollerar tillstånd för att se om forumläret har skickats
function NewsletterPage() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	//Om formuläret har skickas visas istället bekräftelsemeddelande
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
	};

	//Återställer allt innehåll då bekräftelsemeddelandet stängs
	const handleCloseSuccessMessage = () => {
		setIsSubmitted(false);
	};

	return (
		<div>
			{/* "container" för själva innehållet med grid-layouten */}
			<div className="grid grid-cols-12 gap-x-4 pt-32">
				{/* Huvudrubrik placerad med grid*/}
				<div className="col-start-2 col-span-3">
					<HeadingWithLine text="Newsletter" />
				</div>
			</div>

			<div className="relative overflow-hidden">
				{/* Swoosh Background */}
				<Swoosh className="w-full h-auto" />

				{/* Text Content */}
				<div className="absolute inset-0 grid grid-cols-12 items-center justify-center">
					<div className="col-start-2 col-span-10 text-left">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
							New Recipes and Fresh Inspiration Every Week!
						</h2>
						<p className="text-gray-700 text-sm md:text-base lg:text-lg">
							Get inspired to cook healthy and delicious meals
							with Cooksy&apos;s weekly newsletter! As a
							subscriber, you&apos;ll receive easy-to-follow
							recipes, tailored to fit a variety of dietary needs
							like gluten-free, low-calorie, and lactose-free
							options—straight to your inbox.
						</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-x-4 py-32">
				{/* Underubrik och huvudtext */}
				<div className="col-start-2 col-span-10">
					<div className="relative z-10">
						<h2 className="text-xl font-medium mb-2">
							New Recipes and Fresh Inspiration Every Week!
						</h2>
						<p className="text-gray-700 text-sm">
							Get inspired to cook healthy and delicious meals
							with Cooksy&apos;s weekly newsletter! As a
							subscriber, you&apos;ll receive easy-to-follow
							recipes, tailored to fit a variety of dietary needs
							like gluten-free, low-calorie, and lactose-free
							options—straight to your inbox.
						</p>
					</div>

					{/* Används för att antingen forumlär eller bekräftelsemeddelande beroende på tillstånd */}
					{!isSubmitted ? (
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<h3 className="text-lg font-medium mb-4 py-6">
									1. Choose the type of recipes and
									inspiration you&apos;d like to receive
								</h3>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4 xl:gap-x-24 md:gap-y-10">
									<NewsletterCard></NewsletterCard>
									<NewsletterCard></NewsletterCard>
									<NewsletterCard></NewsletterCard>
									<NewsletterCard></NewsletterCard>
									<NewsletterCard></NewsletterCard>
									<NewsletterCard></NewsletterCard>
								</div>
							</div>

							<div className="bg-[#ffffff] p-6 rounded-lg shadow-md">
								<h3 className="text-lg font-medium mb-4">
									2. Fill in your contact details
								</h3>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<input
										type="text"
										name="firstName"
										placeholder="First name*"
										className="p-2 border rounded"
										required
									/>
									<input
										type="text"
										name="lastName"
										placeholder="Last name*"
										className="p-2 border rounded"
										required
									/>
								</div>
								<input
									type="email"
									name="email"
									placeholder="Email*"
									className="w-full p-2 border rounded mb-4"
									required
								/>
								<div className="flex justify-end">
									<Button size="medium">Send</Button>
								</div>
							</div>
						</form>
					) : (
						// Bekräftelsemeddelande som visas om formuläret har skickats
						<div className="bg-[#ffffff] mt-8 p-4 rounded relative shadow-md">
							{/* Kryss för att stänga bekräftelsemeddelandet */}
							<div className="flex justify-end">
								<CloseButton
									onClick={handleCloseSuccessMessage}
								>
									{" "}
								</CloseButton>
							</div>
							{/* Bekräftelsemeddelande */}
							<div className=" p-8 rounded-lg max-w-md mx-auto text-center">
								<h3 className="text-2xl font-medium mb-2">
									Congratulations
								</h3>
								<p className="text-gray-600">
									You are now a subscriber for Cooksy`s
									newsletter and will receive inspiration for
									delicious and nutritious recipes weekly.
									Keep on cooking!
								</p>
								<p className="mt-2 text-gray-600">
									Keep on cooking!
								</p>
								<FontAwesomeIcon
									icon={faUtensils}
									className="text-4xl mb-4"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default NewsletterPage;
