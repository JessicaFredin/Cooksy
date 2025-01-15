import HeadingWithLine from "../components/HeadingWithLine";
import ProfileCard from "../components/ProfileCard";
import TopContributor from "../components/TopContributor";
import { useData } from '../contexts/DataContext';


function TopContributorsPage() {

  const { data, loading, error } = useData();

  return (
    <div>
      {/* "container" för själva innehållet med grid-layouten */}
      <div className="grid grid-cols-12 gap-x-4 pt-32">

        {/* Huvudrubrik placerad med grid*/}
        <div className="col-start-2 col-span-3">
          <HeadingWithLine text="Top contributors" />
        </div>
        
        <div className="col-start-2 col-span-12 mb-12">
        {/* Profile cards - justering av ordning */}
        <div className="col-span-12 sm:col-span-8 md:col-span-9 lg:col-span-10 xl:col-span-10 flex flex-col sm:flex-row sm:items-end justify-start sm:gap-8 mt-8 sm:mt-12 md:mt-16">
          {/* ProfileCard 2 först på desktop */}
          <div className="order-2 sm:order-1">
            <ProfileCard
              profileImage={data.profiles[1].img}
              size = "large"
              name={data.profiles[1].name}
              recipes={data.profiles[1].recipes}
              followers={data.profiles[1].followers} 
            />
          </div>
          
          {/* ProfileCard 1 */}
          <div className="order-1 sm:order-2">
          <ProfileCard
              profileImage={data.profiles[0].img}
              size = "xl"
              name={data.profiles[0].name}
              recipes={data.profiles[0].recipes}
              followers={data.profiles[0].followers} 
            />
          </div>
          
          {/* ProfileCard 3 */}
          <div className="order-3 sm:order-3">
          <ProfileCard
              profileImage={data.profiles[2].img}
              name={data.profiles[2].name}
              recipes={data.profiles[2].recipes}
              followers={data.profiles[2].followers} 
            />
          </div>
        </div>
      </div>
      </div>
      {data.profiles.slice(3, 10).map((profile, index) => (
                <TopContributor
                    key={profile.index} // Replace with unique key
                    img={profile.img}
                    name={profile.name}
                    recipes={profile.recipes}
                    followers={profile.followers}
                    index={index}
                />
            ))}
    </div>
  );
}

export default TopContributorsPage;
