import React from "react";
import HeadingWithLine from "../HeadingWithLine";

function TermsAndConditions() {
	return (
		<div className="relative bg-white min-h-screen p-4 sm:p-6 md:p-8 lg:p-12">
			{/* Innehållet placerat i grid col-start-2 */}
			<div className="relative grid grid-cols-12 gap-4">
				{/* Rubriken */}
				<div className="col-start-2 col-span-3">
					<HeadingWithLine text="Terms and Conditions" />
				</div>

				{/* Textinnehållet */}
				<div className="col-start-2 col-span-10 bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
					{/* Sektion 1 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							1. Acceptance of Terms
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							By accessing and using Cooksy, you agree to comply
							with these Terms and Conditions. If you do not
							agree, you may not use the Site.
						</p>
					</section>

					{/* Sektion 2 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							2. Eligibility
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							You must be at least 13 years old to use Cooksy. By
							using the Site, you confirm that you meet this age
							requirement.
						</p>
					</section>

					{/* Sektion 3 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							3. Account Registration
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							To access certain features, you may need to create
							an account. You agree to provide accurate
							information during registration and keep your
							account updated.
						</p>
					</section>

					{/* Sektion 4 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							4. User Conduct
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							You agree not to post offensive or unlawful content,
							engage in disruptive behavior, or use the Site for
							unauthorized purposes.
						</p>
					</section>

					{/* Sektion 5 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							5. Content Ownership and License
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							By uploading content, you grant Cooksy a
							non-exclusive, royalty-free license to use and
							distribute your content.
						</p>
					</section>

					{/* Sektion 6 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							6. Recipe Sharing and Comments
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							You agree to provide accurate information and
							understand Cooksy may remove inappropriate content.
						</p>
					</section>

					{/* Sektion 7 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							7. Privacy Policy
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							Your use of Cooksy is subject to our Privacy Policy,
							which explains how we collect, use, and protect your
							information.
						</p>
					</section>

					{/* Sektion 8 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							8. Disclaimer of Warranties
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							Cooksy is provided "as-is" and without warranties of
							any kind.
						</p>
					</section>

					{/* Sektion 9 */}
					<section className="mb-6">
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							9. Limitation of Liability
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							Cooksy is not liable for any damages arising from
							your use of the Site.
						</p>
					</section>

					{/* Sektion 10 */}
					<section>
						<h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-black">
							10. Termination
						</h2>
						<p className="text-black text-sm sm:text-base md:text-lg">
							Cooksy may terminate your access to the Site for
							violating these Terms.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}

export default TermsAndConditions;
