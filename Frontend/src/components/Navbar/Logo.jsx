import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/CooksyLogo.png";

function Logo() {
    return (
		<NavLink to="/">
			<img src={logo} alt="Cooksy Logo" className="text-2xl font-bold" />
		</NavLink>
	);
} 

export default Logo;
