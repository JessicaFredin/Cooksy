import React from "react";
import HeadingWithLine from "../components/HeadingWithLine";
import SortMenu from "../components/SortMenu";
import ProfileCard from "../components/ProfileCard";
import { useData } from "../contexts/DataContext"; // Hämta data från kontexten

const FollowersPage = () => {
  const { data, loading, error } = useData(); // Använd kontext för att hämta data

  if (loading) {
    return <p>Loading followers...</p>;
  }

  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <div className="grid grid-cols-12 py-8">
      {/* Rubrik */}
      <div className="col-start-2 mb-4">
        <HeadingWithLine text="Followers" />
      </div>

      {/* Sorteringsmeny */}
      <div className="col-start-2 col-span-10 flex justify-end mb-6">
        <SortMenu />
      </div>

      {/* Renderar Profilkort */}
      <div className="col-start-2 col-span-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-4">
        {data.profiles.map((profile, index) => (
          <div key={index} className="flex justify-center">
            <ProfileCard
              img={profile.img}
              name={profile.name}
              recipes={profile.recipes}
              followers={profile.followers}
              following={profile.following}
              description={profile.description}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="col-start-2 col-span-10 flex justify-center mt-6">
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded">1</button>
          <button className="px-4 py-2 bg-white border rounded">2</button>
          <button className="px-4 py-2 bg-white border rounded">3</button>
          <span>...</span>
          <button className="px-4 py-2 bg-white border rounded">543</button>
        </div>
      </div>
    </div>
  );
};

export default FollowersPage;

