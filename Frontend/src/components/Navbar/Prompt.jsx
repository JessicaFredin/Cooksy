/* eslint-disable react/prop-types */
import TopCurve from "../../assets/svg/TopCurve";
import BottomCurve from "../../assets/svg/BottomCurve";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button";
import { Icon } from "@iconify/react";


function Prompt({ setView }) {
	return (
		<div className="relative bg-white rounded-lg shadow-lg p-6 overflow-hidden w-[600px]">
			{/* component for log in popup*/}
			<div className="absolute top-[0px] left-[0px]">
				<TopCurve />
			</div>
			<div className="absolute bottom-[0px] left-[0px]">
				<BottomCurve />
			</div>
			{/* Information of want you get if you are loggd in*/}
			<div className="flex items-center justify-center flex-col py-6">
				<div className="flex items-center justify-center h-full w-full my-6">
					<div className="text-left">
						<h2 className="text-2xl font-extrabold text-black leading-tight">
							Save your favorite recipes
						</h2>
						<span className="text-lg text-black block mt-1">
							– create a free account
						</span>
					</div>
				</div>

				<ul className="space-y-4 mb-6 w-[400px]">
					<li className="flex items-start space-x-4">
						<span className="bg-red-100 text-red-500 rounded-full flex items-center justify-center w-10 h-10 flex-shrink-0">
							<FontAwesomeIcon
								icon={faHeart}
								className="w-5 h-5"
							/>
						</span>

						{/* Information of want you get if you are loggd in */}
						<span className="text-left">
							Easily keep track of your recipes by having them all
							in one place.
						</span>
					</li>

					<li className="flex items-start space-x-4">
						<span className="bg-green-100 text-green-500 rounded-full flex items-center justify-center w-10 h-10 flex-shrink-0">
							<FontAwesomeIcon
								icon={faFolder}
								className="w-5 h-5"
							/>
						</span>
						{/* Information of want you get if you are loggd in */}
						<span className="text-left">
							Save your favorites in practical folders! Why not
							create your own weekly menus?
						</span>
					</li>

					<li className="flex items-center space-x-4">
						<span className="bg-blue-100 text-blue-500 rounded-full flex items-center justify-center w-10 h-10 flex-shrink-0">
							<Icon
								icon="feather:book-open"
								className="w-5 h-5"
							/>
						</span>
						{/* Information of want you get if you are loggd in */}
						<span className="text-left">
							Save articles with tips, tests, and interviews you
							want to revisit!
						</span>
					</li>
				</ul>
				{/* Knappar för att logga in eller skapa konto */}
				<div className="flex space-x-4 pb-8">
					<Button size="medium" onClick={() => setView("LogIn")}>
						Log in
					</Button>
					<Button size="medium" onClick={() => setView("SignUp")}>
						Create account
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Prompt;
