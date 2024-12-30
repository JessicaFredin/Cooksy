// import React, { useState } from "react";
// /*import img from "../assets/images/peaches.jpg"*/
// import NewsletterCardImg from "../assets/images/NewsletterCardImg.png"
// import Button from "./Button";
// import { Link } from "react-router-dom";

// const Blogpost = ({ image, title, description }) => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <Link><div className="max-w-full bg-white rounded-lg shadow-md overflow-hidden md:flex ">
//     {/* Image Section */}
//     <img
//       className="w-full object-cover md:w-4/5 lg:w-3/5"
//       src={NewsletterCardImg} // Replace with actual image
//       alt="Peaches"
//     />

//     {/* Content Section */}
//     <div className="p-4 md:p-6 md:w-full flex flex-col justify-between">
//       <div className="lg:mr-24">
//         <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
//           Peaches: A Nutritional Powerhouse
//         </h2>
//         <p className="text-gray-600 text-sm md:text-xs lg:text-sm">
//           Peaches are low in calories and rich in vitamins A and C,
//           antioxidants, and fiber, making them beneficial for immune health
//           and digestion.
//         </p>
//       </div>

//       {/* Button */}
//       <Button size="medium"className="mt-10 bg-pink-200 w-20 rounded-full font-semibold hover:bg-gray-100 self-end">more</Button>
//     </div>
//   </div>
//   </Link>
//   );
// };

// export default Blogpost;

import React, { useState } from "react";
/*import img from "../assets/images/peaches.jpg"*/
import NewsletterCardImg from "../assets/images/CardImg.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Blogpost = ({ image, title, description }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Link to="/blog">
      <div className="max-w-full bg-white rounded-lg shadow-md overflow-hidden md:flex cursor-pointer">
        {/* Image Section */}
        <img
          className="w-full object-cover md:w-4/5 lg:w-3/5"
          src={NewsletterCardImg} // Replace with actual image
          alt="Peaches"
        />

        {/* Content Section */}
        <div className="p-4 md:p-6 md:w-full flex flex-col justify-between">
          <div className="lg:mr-24">
            <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
              Peaches: A Nutritional Powerhouse
            </h2>
            <p className="text-gray-600 text-sm md:text-xs lg:text-sm">
              Peaches are low in calories and rich in vitamins A and C,
              antioxidants, and fiber, making them beneficial for immune health
              and digestion.
            </p>
          </div>

          {/* Button */}
          <Button
            size="medium"
            className="mt-10 bg-pink-200 w-20 rounded-full font-semibold hover:bg-gray-100 self-end"
          >
            More
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default Blogpost;