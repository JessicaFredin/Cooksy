
import HeadingWithLine from "../components/HeadingWithLine";
import blogImage from "../assets/images/blog-image.jpg";

const blogData = {
  image: blogImage,
};

const BlogPage = () => {
  return (
    <div className="relative grid grid-cols-12 gap-6 px-4 py-8">
      {/* Main Content */}
      <div className="col-span-12 md:col-start-2 md:col-span-10">
        {/* Heading Section */}
        <div className="mb-8">
          <HeadingWithLine text="Peaches: A Nutritional Powerhouse" />
        </div>

        {/* Image and First Paragraph */}
        <div className="grid grid-cols-12 gap-6 items-start mb-8">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1">
            <p className="text-gray-700 mb-4">
              Peaches are a nutritious and delicious fruit that offer a wealth
              of health benefits, making them an excellent addition to a
              balanced diet. Low in calories yet rich in essential nutrients,
              peaches are especially noted for their high content of vitamins A
              and C, antioxidants, and dietary fiber. These nutrients together
              contribute to improved immune health, skin health, and digestive
              function. Additionally, the dietary fiber in peaches promotes
              satiety, aiding in weight management and maintaining stable blood
              sugar levels. Enjoyed fresh, dried, or in smoothies. Peaches are a nutritious and delicious fruit that offer a wealth
              of health benefits, making them an excellent addition to a
              balanced diet. Low in calories yet rich in essential nutrients,
              peaches are especially noted for their high content of vitamins A
              and C, antioxidants, and dietary fiber. These nutrients together
              contribute to improved immune health, skin health, and digestive
              function. Additionally, the dietary fiber in peaches promotes
              satiety, aiding in weight management and maintaining stable blood
              sugar levels. Enjoyed fresh, dried, or in smoothies.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <img
              src={blogData.image}
              alt="Peaches"
              className="rounded-lg object-cover w-full h-[200px] md:h-[250px] lg:h-[300px]"
            />
          </div>
        </div>

        {/* Additional Content */}
        <div className="col-span-12">
          <h2 className="text-2xl font-semibold mb-2">
            Immune Health and Skin Benefits
          </h2>
          <p className="text-gray-700 mb-4">
            Vitamin A in peaches is crucial for maintaining healthy skin and
            vision, as well as supporting immune health by helping cells
            function properly. Additionally, vitamin C in peaches plays a vital
            role in immunity by encouraging the production of white blood cells
            that defend the body against infections. It also acts as a powerful
            antioxidant, protecting cells from damage by free radicals. This
            vitamin is essential for collagen synthesis, which keeps the skin
            firm and resilient, promotes faster wound healing, and reduces signs
            of aging.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Antioxidant Powerhouse</h2>
          <p className="text-gray-700 mb-4">
            Peaches are rich in antioxidants, including polyphenols and
            carotenoids, which play a significant role in reducing oxidative
            stress in the body. Oxidative stress occurs when there’s an
            imbalance between free radicals and antioxidants, potentially
            leading to cellular damage and chronic diseases like heart disease
            and certain cancers. Antioxidants found in peaches neutralize these
            free radicals, reducing inflammation and helping prevent long-term
            health issues.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700">
            Peaches are a low-calorie, nutrient-dense fruit high in vitamins A
            and C, antioxidants, and fiber. Vitamin A supports skin, vision, and
            immune health, while vitamin C boosts immunity and promotes collagen
            production. Rich in antioxidants, peaches help reduce oxidative
            stress, inflammation, and protect against chronic diseases like
            heart disease and cancer. Overall, they support immune function,
            skin health, and reduce cellular damage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;