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
        <div className="col-start-2 col-span-3 mb-20">
          <HeadingWithLine text="Top contributors" />
        </div>
        
        <div className="col-start-2 col-span-10 mb-12">
        {/* Profile cards - justering av ordning */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-start lg:justify-center gap-8 ">
          {/* ProfileCard 2 först på desktop */}
          <div className="lg:order-1 order-2 mb-20 lg:mb-0">
            <ProfileCard
              profileImage={data.profiles[1].img}
              size = "large"
              name={data.profiles[1].name}
              recipes={data.profiles[1].recipes}
              followers={data.profiles[1].followers} 
            />
          </div>
          
          {/* ProfileCard 1 */}
          <div className="lg:order-2 order-1 mb-20 lg:mb-0">
          <ProfileCard
              profileImage={data.profiles[0].img}
              size = "xl"
              name={data.profiles[0].name}
              recipes={data.profiles[0].recipes}
              followers={data.profiles[0].followers} 
            />
          </div>
          
          {/* ProfileCard 3 */}
          <div className="order-3 mb-20 lg:mb-0">
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

