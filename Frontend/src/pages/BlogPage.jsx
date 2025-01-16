import HeadingWithLine from "../components/HeadingWithLine";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";


const BlogPage = () => {
  const { data, loading, error } = useData();

  const { id } = useParams();
  
  const article = data.articles[parseInt(id)];

  if (!article) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="relative my-20 grid grid-cols-12 gap-6">
        {/* Heading Section */}
        <div className="mb-4 col-start-2 col-span-10">
          <HeadingWithLine text={article.title} />
        </div>
          {/* Text Column (first 6 columns) */}
          <div className="col-start-2 col-span-10 md:col-start-2 md:col-span-5">
            <p className="text-gray-700 leading-relaxed">{article.content}</p>
          </div>
          {/* Image Column (matches the height of the text) */}
          <div className="col-start-2 col-span-10 md:col-start-7 md:col-span-5">
            <img
              src={article.img}
              alt={article.titel}
              className="w-full h-auto mb-6"
            />
          </div>
    </div>
  );
};

export default BlogPage;