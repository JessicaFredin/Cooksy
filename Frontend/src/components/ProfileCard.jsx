// import PropTypes from "prop-types";
// import Button from "./Button";
// import { HatIcon } from "../assets/icons/HatIcon";
// import { PeopleIcon } from "../assets/icons/PeopleIcon";
// import Profile1 from "../assets/images/profile1.jpg"
// import { TopContributorOne } from "../assets/icons/topContributorOne";
// import { TopContributorTwo } from "../assets/icons/TopContributorTwo";

// function ProfileCard({ size = "medium", name, recipes, followers, following }) {
// 	// Definiera storleksklasser
// 	const sizeClasses = {
// 		medium: {
// 			container: "w-64 h-96", // 16rem x 24rem
// 			profileImage: "w-52 h-52", // 13rem x 13rem
// 			nameBox: "w-52 h-9 text-base", // 13rem x 2.25rem
// 			iconText: "text-sm", // Ikontextstorlek
// 			buttonSize: "small", // Button size
// 		},
// 		large: {
// 			container: "w-80 h-128", // 20rem x 32rem
// 			profileImage: "w-64 h-64", // 16rem x 16rem
// 			nameBox: "w-64 h-10 text-lg", // 16rem x 2.5rem
// 			iconText: "text-base", // Ikontextstorlek
// 			buttonSize: "medium", // Button size
// 		},
// 		xl: {
// 			container: "w-96 h-160", // 24rem x 40rem
// 			profileImage: "w-72 h-72", // 18rem x 18rem
// 			nameBox: "w-72 h-12 text-xl", // 18rem x 3rem
// 			iconText: "text-lg", // Ikontextstorlek
// 			buttonSize: "large", // Button size
// 		},
// 	};

	
// 	const sizeClass = sizeClasses[size] || sizeClasses.medium;

// 	return (
// 		<div className="grid col-start-2">
// 			{/* Container för korten*/}
// 			<div
// 				className={`bg-white rounded-lg flex flex-col items-center p-5 relative shadow-lg ${sizeClass.container}`}
// 			>
// 				{/* Rendera TopContributorOne SVG för endast xl */}
// 				{size === "xl" && (
// 					<div className="absolute -top-6 right-2 z-10">
// 						{" "}
// 						{/* Ännu större justering */}
// 						<TopContributorOne />
// 					</div>
// 				)}

// 				{/* Rendera TopContributorTwo SVG för large */}
// 				{size === "large" && (
// 					<div className="absolute -top-4 -right-2 z-10">
// 						{" "}
// 						{/* Ännu större justering */}
// 						<TopContributorTwo />
// 					</div>
// 				)}

// 				{/* Profilbild - just nu cirkel som placeholder */}
// 				<div className={`rounded-full overflow-hidden mb-4 z-10 ${sizeClass.profileImage}`}>
// 					<img
// 						src={Profile1}
// 						className="w-full h-full rounded-full bg-black flex items-center justify-center"
// 					/>
// 				</div>

// 				{/* Namn-del */}
// 				<div
// 					className={`bg-green-300 rounded-lg flex items-center justify-center absolute z-10 transform ${sizeClass.nameBox}`}
// 				>
// 					<p>{name}</p>
// 				</div>

// 				{/* Recipes/followers */}
// 				<div className="space-y-2 mb-4 w-full px-4 mt-2">
// 					<div
// 						className={`flex items-center gap-2 ${sizeClass.iconText}`}
// 					>
// 						<HatIcon />
// 						{recipes} recipes
// 					</div>

// 					<div
// 						className={`flex items-center gap-2 ${sizeClass.iconText}`}
// 					>
// 						<PeopleIcon />
// 						{followers} followers
// 					</div>
// 				</div>

// 				{/* Ny text med grön bakgrund för endast XL-kort */}
// 				{size === "xl" && (
// 					<div className="bg-green-100 text-black  p-4 w-full rounded-lg mb-4 max-h-[100px] min-h-[100px]">
// 						Exploring new recipes is always an adventure, and I love
// 						both trying them out and sharing my own creations!
// 					</div>
// 				)}

// 				{/* Follow Button */}
// 				<div className="flex justify-end w-full mt-auto">
// 					<Button size={sizeClass.buttonSize}>Follow</Button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// // Prop type validation for better usability
// ProfileCard.propTypes = {
// 	size: PropTypes.oneOf(["medium", "large", "xl"]), // Storlekar
// };

// export default ProfileCard;









// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import Button from "./Button";
// import { HatIcon } from "../assets/icons/HatIcon";
// import { PeopleIcon } from "../assets/icons/PeopleIcon";
// import Profile1 from "../assets/images/profile1.jpg";
// import { TopContributorOne } from "../assets/icons/TopContributorOne";
// import { TopContributorTwo } from "../assets/icons/TopContributorTwo";

// function ProfileCard({ size = "medium", name, recipes, followers, following }) {
//   const [isFollowing, setIsFollowing] = useState(false);

//   const handleFollowClick = () => {
//     setIsFollowing((prev) => !prev);
//   };

//   const sizeClasses = {
//     medium: {
//       container: "w-64 h-96",
//       profileImage: "w-52 h-52",
//       nameBox: "w-52 h-9 text-base",
//       iconText: "text-sm",
//       buttonSize: "small",
//     },
//     large: {
//       container: "w-80 h-128",
//       profileImage: "w-64 h-64",
//       nameBox: "w-64 h-10 text-lg",
//       iconText: "text-base",
//       buttonSize: "medium",
//     },
//     xl: {
//       container: "w-96 h-160",
//       profileImage: "w-72 h-72",
//       nameBox: "w-72 h-12 text-xl",
//       iconText: "text-lg",
//       buttonSize: "large",
//     },
//   };

//   const sizeClass = sizeClasses[size] || sizeClasses.medium;

//   return (
//     <div className="grid col-start-2">
//       <div
//         className={`bg-white rounded-lg flex flex-col items-center p-5 relative shadow-lg ${sizeClass.container}`}
//       >
//         {size === "xl" && (
//           <div className="absolute -top-6 right-2 z-10">
//             <TopContributorOne />
//           </div>
//         )}
//         {size === "large" && (
//           <div className="absolute -top-4 -right-2 z-10">
//             <TopContributorTwo />
//           </div>
//         )}

//         <div className={`rounded-full overflow-hidden mb-4 z-10 ${sizeClass.profileImage}`}>
//           <img
//             src={Profile1}
//             className="w-full h-full rounded-full bg-black flex items-center justify-center"
//           />
//         </div>

//         <div
//           className={`bg-green-300 rounded-lg flex items-center justify-center absolute z-10 transform ${sizeClass.nameBox}`}
//         >
//           <p>{name}</p>
//         </div>

//         <div className="space-y-2 mb-4 w-full px-4 mt-2">
//           <div className={`flex items-center gap-2 ${sizeClass.iconText}`}>
//             <HatIcon />
//             {recipes} recipes
//           </div>
//           <div className={`flex items-center gap-2 ${sizeClass.iconText}`}>
//             <PeopleIcon />
//             {followers} followers
//           </div>
//         </div>

//         {size === "xl" && (
//           <div className="bg-green-100 text-black p-4 w-full rounded-lg mb-4 max-h-[100px] min-h-[100px]">
//             Exploring new recipes is always an adventure, and I love both trying
//             them out and sharing my own creations!
//           </div>
//         )}

//         <div className="flex justify-end w-full mt-auto">
//           <Button
//             size={sizeClass.buttonSize}
//             variant={isFollowing ? "green" : "default"} // Använder variant
//             onClick={handleFollowClick}
//           >
//             {isFollowing ? "Following" : "Follow"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// ProfileCard.propTypes = {
//   size: PropTypes.oneOf(["medium", "large", "xl"]),
// };

// export default ProfileCard;



import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { HatIcon } from "../assets/icons/HatIcon";
import { PeopleIcon } from "../assets/icons/PeopleIcon";
import Profile1 from "../assets/images/profile1.jpg";
import { TopContributorOne } from "../assets/icons/TopContributorOne";
import { TopContributorTwo } from "../assets/icons/TopContributorTwo";

function ProfileCard({ size = "medium", name, recipes, followers, following }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing((prev) => !prev);
  };

  const sizeClasses = {
    medium: {
      container: "w-64 h-96",
      profileImage: "w-52 h-52",
      nameBox: "w-52 h-9 text-base",
      iconText: "text-sm",
      buttonSize: "small",
    },
    large: {
      container: "w-80 h-128",
      profileImage: "w-64 h-64",
      nameBox: "w-64 h-10 text-lg",
      iconText: "text-base",
      buttonSize: "medium",
    },
    xl: {
      container: "w-96 h-160",
      profileImage: "w-72 h-72",
      nameBox: "w-72 h-12 text-xl",
      iconText: "text-lg",
      buttonSize: "large",
    },
  };

  const sizeClass = sizeClasses[size] || sizeClasses.medium;

  return (
    <div className="grid col-start-2">
      <div
        className={`bg-white rounded-lg flex flex-col items-center p-5 relative shadow-lg ${sizeClass.container}`}
      >
        {size === "xl" && (
          <div className="absolute -top-6 right-2 z-10">
            <TopContributorOne />
          </div>
        )}
        {size === "large" && (
          <div className="absolute -top-4 -right-2 z-10">
            <TopContributorTwo />
          </div>
        )}

        <div className={`rounded-full overflow-hidden mb-4 z-10 ${sizeClass.profileImage}`}>
          <img
            src={Profile1}
            className="w-full h-full rounded-full bg-black flex items-center justify-center"
          />
        </div>

        <div
          className={`bg-green-300 rounded-lg flex items-center justify-center absolute z-10 transform ${sizeClass.nameBox}`}
        >
          <p>{name}</p>
        </div>

        <div className="space-y-2 mb-4 w-full px-4 mt-2">
          <div className={`flex items-center gap-2 ${sizeClass.iconText}`}>
            <HatIcon />
            {recipes} recipes
          </div>
          <div className={`flex items-center gap-2 ${sizeClass.iconText}`}>
            <PeopleIcon />
            {followers} followers
          </div>
        </div>

        {size === "xl" && (
          <div className="bg-green-100 text-black p-4 w-full rounded-lg mb-4 max-h-[100px] min-h-[100px]">
            Exploring new recipes is always an adventure, and I love both trying
            them out and sharing my own creations!
          </div>
        )}

        <div className="flex justify-end w-full mt-auto">
          <Button
            size={sizeClass.buttonSize}
            variant={isFollowing ? "green" : "default"} // Använder variant
            onClick={handleFollowClick}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  size: PropTypes.oneOf(["medium", "large", "xl"]),
};

export default ProfileCard;
