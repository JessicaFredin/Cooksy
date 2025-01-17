import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/CooksyLogo.png";

function Logo() {
	return (
		<NavLink to="/">
		    {/* logan i navigationen så att den är klickbar */}
			<img src={logo} alt="Cooksy Logo" className="h-12"/>
		</NavLink>
	);
}

export default Logo;
