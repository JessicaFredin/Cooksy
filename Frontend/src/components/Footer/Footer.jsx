import Logo from "../Navbar/Logo";
import FooterLinks from "./FooterLinks"; // Import the FooterLinks component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const exploreLinks = [
	{ label: "Home", to: "/" },
	{ label: "Recipes", to: "/recipes" },
	{ label: "Articles", to: "/articles" },
	{ label: "Categories", to: "/categories" },
	{ label: "Log in", to: "/login" },
	{ label: "Sign up", to: "/signup" },
];

const aboutLinks = [
	{ label: "About Cooksy", to: "/about" },
	{ label: "Contact", to: "/contact" },
	{ label: "Newsletter", to: "/newsletter" },
];

const preferencesLinks = [
	{ label: "Cookies", to: "/cookies" },
	{ label: "Privacy Policy", to: "/privacy-policy" },
	{ label: "Terms & Conditions", to: "/terms-and-conditions" },
	{ label: "Faq", to: "/faq" },
];

function Footer() {
	return (
		<footer className="bg-white text-black w-full border-t border-black/10 py-12">
			<div className="grid grid-cols-12 gap-y-14 gap-x-4 pt-6 ">
				{/* Links Section */}
				<div className="col-span-10 md:col-span-5 md:col-start-2 grid grid-cols-3 col-start-2 md:row-start-1 ">
					<FooterLinks title="Explore" links={exploreLinks} />
					<FooterLinks title="About" links={aboutLinks} />
					<FooterLinks title="Preferences" links={preferencesLinks} />
				</div>

				{/* Logo Section */}
				<div className="col-start-2 col-span-10 md:col-span-4 md:col-start-10 flex items-center">
					<Logo />
				</div>

				{/* Follow Us Section */}
				<div className="col-start-2 col-span-10 row-start-3 md:row-start-1 md:col-span-3 md:col-start-7 text-left">
					<p className="text-sm text-black leading-relaxed mb-6">
						Cooksy offers recipes with detailed nutritional
						information. You can easily search and filter recipes by
						ingredients, nutritional values, or cooking time.
					</p>
					<div className="mb-2">
						<h3 className="font-semibold text-base mb-2">
							Follow us
						</h3>
						<div className="flex items-center space-x-2">
							{/* Instagram Icon */}
							<FontAwesomeIcon
								icon={faInstagram}
								className="text-black w-5 h-5"
							/>
							{/* Instagram Handle */}
							<p className="text-sm font-medium text-black">
								CooksyInstagram
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
