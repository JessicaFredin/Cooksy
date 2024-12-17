import HeadingWithLine from "../components/HeadingWithLine";

function AboutCooksyPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* "Container" med grid-systemet */}
      <div className="relative z-10 mx-auto mt-12 grid grid-cols-12 gap-4">
        {/* Huvudrubrik */}
        <div className="col-start-2 col-span-3">
          <HeadingWithLine text="About Cooksy" />
        </div>

        {/* Sektion för huvudtext om Cooksy*/}
        <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 flex justify-center">
          <div className="bg-white rounded-3xl shadow-lg p-12 w-full">
            <div className="space-y-6 text-gray-600">
              <p>
                Welcome to Cooksy - your digital companion for cooking,
                inspiration and healthy choices! Our website is created for and
                by health-conscious people looking for reliable recipes,
                nutritional information and the ability to easily plan their
                meals.
              </p>

              <p>
                At Cooksy we believe in being inspiring, nutritious and easy to
                adapt to individual needs. Our goal is to offer a wide variety
                of recipes that are not only tasty but also provide you with
                valuable information about the nutritional content. Through our
                convenient filtering functions, you can easily find recipes that
                suit your specific dietary needs, such as gluten-free,
                lactose-free or low-calorie options.
              </p>
              
              <p>
                We want to create a community where users can share their own
                recipes and comment on others&apos;. On Cooksy, you can not only be
                inspired by others, but also contribute your own ideas and get
                feedback. When you upload a recipe, the nutritional content is
                automatically calculated, so you can easily see what you and
                others are getting. This makes it easier to make informed
                decisions that support a healthy lifestyle.
              </p>

              <p>
                Whether you&apos;re a passionate cook, a novice in the kitchen or
                simply someone who wants to make healthy choices without the
                hassle, Cooksy has something for you. We strive to be your first
                destination when you are looking for inspiration and knowledge
                about food and health. Together with our community, we want to
                make the path to healthy food choices easier, more fun and more
                inspiring!
              </p>
            </div>
          </div>
        </div>

        {/* Rubrik för tidslinjen */}
        <div className="col-start-2 col-span-4 mt-20">
          <HeadingWithLine text="Birth of Cooksy" />
        </div>

        {/* Objekt i tidslinjen */}
        <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-8 items-center">
          {/* Tidlinjen - linjen vertikalt */}
          <div className="absolute left-1/2 transform h-full w-1 bg-[#a8d400]"></div>

          {[
            {
              date: "June 2024",
              content:
                "During a weekend trip, four friends recognize the increasing need for digital solutions that simplify healthy eating choices and provide reliable nutritional information. They conceive the idea for Cooksy—a user-friendly platform combining inspiring recipes with clear nutritional information to promote a healthier lifestyle!",
              image: "/images/placeholder1.jpg",
            },
            {
              date: "July 2024",
              content:
                "Market Research: The team conducts market research to understand user needs and identify gaps in existing food and nutrition platforms.",
              image: "/images/placeholder2.jpg",
            },
            {
              date: "August 2024",
              content:
                "Project Planning: Establishment of an agile project plan with defined sprints, roles, and responsibilities. Creation of mood boards and initial design concepts to establish the visual identity of Cooksy. - Design Kickoff : Creation of mood boards and initial design concepts for Cooksy's visual identity.",
              image: "/images/placeholder3.jpg",
            },
            {
              date: "September 2024",
              content:
                "Prototype Development: Creation of low-fidelity prototypes using Figma to visualize the website's layout and user flow.",
              image: "/images/placeholder4.jpg",
            },
            {
              date: "October 2024",
              content:
                "High-Fidelity Prototypes: Development of detailed, interactive prototypes incorporating design elements like color schemes, typography, and imagery in Figma. User Testing with initial user testing with target audience members to gather feedback on usability and functionality.",
              image: "/images/placeholder5.jpg",
            },
            {
              date: "November 2024",
              content:
                "Website Development:  Building the Cooksy website using React and Tailwind CSS for the frontend. Launch Preparation: Uploading at least 20 recipes with detailed nutritional information and implementing features like recipe filtering and user-generated content.",
              image: "/images/placeholder6.jpg",
            },
            {
              date: "December 2024",
              content:
                "Official Launch:  Cooksy goes live, allowing users to explore recipes, upload their own, and automatically calculate nutritional values.",
              image: "/images/placeholder7.jpg",
            },
            {
              date: "Today 2025",
              content:
                "Future Planning: Outlining plans for upcoming features such as personalized meal planning, community forums, and mobile app development.",
              image: "/images/placeholder8.jpg",
            },
          ].map((item, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-16">
              {/*Innehåll för tidslinjen */}
              <div
                className={`border border-[#a8d400] p-4 ${
                  index % 2 === 0
                    ? "order-1 text-left rounded-s-lg -mr-3"
                    : "order-2 text-left rounded-e-lg -ml-1.5"
                }`}
              >
                <h3 className="font-bold mb-2">{item.date}</h3>
                <p className="text-sm text-gray-600">{item.content}</p>
              </div>

              {/* Platshållare för bilder */}
              <div
                className={`w-40 h-40 bg-gray-200 rounded-lg mx-auto ${
                  index % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <img
                  src={item.image}
                  alt={`Image for ${item.date}`}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutCooksyPage;
