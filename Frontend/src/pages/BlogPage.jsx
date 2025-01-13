import HeadingWithLine from "../components/HeadingWithLine";
import { useParams } from "react-router-dom";
import articels from "../components/Articels.jsx"


const BlogPage = () => {

  const { id } = useParams();
  const articel = articels[parseInt(id)];

  if (!articel) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="relative my-20 grid grid-cols-12 gap-6">
        {/* Heading Section */}
        <div className="mb-4 col-start-2 col-span-10">
          <HeadingWithLine text={articel.titel} />
        </div>
          {/* Image Column (matches the height of the text) */}
          
          {/* Text Column (first 6 columns) */}
          <div className="col-start-2 col-span-10 md:col-start-2 md:col-span-5">
            <p className="text-gray-700 leading-relaxed">{articel.content}</p>
          </div>
          <div className="col-start-2 col-span-10 md:col-start-7 md:col-span-5">
            <img
              src={articel.img}
              alt={articel.titel}
              className="w-full h-auto mb-6"
            />
          </div>
    </div>
  );
};

export default BlogPage;