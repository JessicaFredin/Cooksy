import HeadingWithLine from "../components/HeadingWithLine";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/DataContext";

const BlogPage = () => {
  const { data, loading, error } = useData();  // Hämtar data och laddningsstatus från DataContext
  const { id } = useParams(); // Hämtar artikel-ID från URL:en med hjälp av useParams

  const article = data.articles[parseInt(id)]; // Hämta artikeln baserat på ID


  if (!article) {
    return <div>Blog not found</div>; // Om artikeln inte hittas, visa ett meddelande
  }

  return (
    <div className="relative my-20 grid grid-cols-12 gap-6">
      {/* Rubriksektionen */}
      <div className="mb-4 col-start-2 col-span-10">
        <HeadingWithLine text={article.title} />
      </div>
      {/* Bildkolumn som anpassar sig till textens höjd */}
      <div className="col-start-2 col-span-10 flex flex-col lg:flex-row ">
        <div className="order-2">
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-auto mb-6"
          />
        </div>

         {/* Textinnehållskolumn */}
        <div className="">
          {article.content.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">{section.subheading}</h2>
              {/* Loopar igenom och renderar sektionens stycken */}
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-lg mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;