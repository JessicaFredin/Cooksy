/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function FooterLinks({ title, links }) {
	return (
		<div>
			<h3 className="font-semibold mb-4">{title}</h3>
			<ul className="space-y-2">
				{links.map((link) => (
					<li key={link.to}>
						<Link
							to={link.to}
							className="text-black hover:text-pink-500 no-underline"
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default FooterLinks;
