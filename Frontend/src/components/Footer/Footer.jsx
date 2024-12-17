import { Link } from "react-router-dom";
import Logo from "../Navbar/Logo"; // Importerar logotypkomponenten

function Footer() {
	return (
		<footer className="bg-white text-black w-full">
			<div className="grid grid-cols-12 grid-rows-auto gap-y-14 gap-x-4 pt-6">
				{/* Explore Section - justera kolumner för små skärmar */}
				<div className="col-span-10  md:col-span-5 md:col-start-2 grid grid-cols-3 grid-rows-auto col-start-2 md:row-start-1">
					{/* Explore Section - Första div */}
					<div className="col-start-1 col-span-1">
						<h3 className="font-semibold mb-4">Explore</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/" className="text-black hover:text-pink-500 no-underline">
									Home
								</Link>
							</li>
							<li>
								<Link to="/recipes" className="text-black hover:text-pink-500 no-underline">
									Recipes
								</Link>
							</li>
							<li>
								<Link
									to="/articles"
									className="text-black hover:text-pink-500 no-underline"
								>
									Articles
								</Link>
							</li>
							<li>
								<Link
									to="/categories"
									className="text-black hover:text-pink-500 no-underline"
								>
									Categories
								</Link>
							</li>
							<li>
								<Link to="/login" className="text-black hover:text-pink-500 no-underline">
									Log in
								</Link>
							</li>
							<li>
								<Link to="/signup" className="text-black hover:text-pink-500 no-underline">
									Sign up
								</Link>
							</li>
						</ul>
					</div>

					{/* About Section */}
					<div className="col-start-2 col-span-1">
						<h3 className="font-semibold mb-4">About</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/about" className="text-black hover:text-pink-500 no-underline">
									About Cooksy
								</Link>
							</li>
							<li>
								<Link to="/contact" className="text-black hover:text-pink-500 no-underline">
									Contact
								</Link>
							</li>
							<li>
								<Link
									to="/newsletter"
									className="text-black hover:text-pink-500 no-underline"
								>
									Newsletter
								</Link>
							</li>
						</ul>
					</div>

					{/* Preferences Section */}
					<div className="col-start-3 col-span-1">
						<h3 className="font-semibold mb-4">Preferences</h3>
						<ul className="space-y-2">
							<li>
								<Link to="/cookies" className="text-black hover:text-pink-500 no-underline">
									Cookies
								</Link>
							</li>
							<li>
								<Link to="/privacy-policy" className="text-black hover:text-pink-500 no-underline">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link to="/terms-and-conditions" className="text-black hover:text-pink-500 no-underline">
									Terms & Conditions
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Logo Section */}
				<div className="col-start-2 col-span-10 row-start-2 md:row-start-1 md:col-span-4 md:col-start-10">
						<Logo />
				</div>

				{/* Follow Us Section */}
				<div className="col-start-2 col-span-10 row-start-3 md:row-start-1 md:col-span-3 md:col-start-7">
					<p className="text-sm text-black">
						Cooksy offers recipes with detailed nutritional
						information. You can easily search and filter recipes by
						ingredients, nutritional values, or cooking time.
					</p>
					<h3 className="font-semibold mb-4">Follow us</h3>
					<p className="text-pink-500 mb-2">@cooksy.official</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
