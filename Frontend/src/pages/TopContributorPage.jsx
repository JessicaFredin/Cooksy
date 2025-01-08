import HeadingWithLine from "../components/HeadingWithLine";
import ProfileCard from "../components/ProfileCard";
import TopContributor from "../components/TopContributor";

function TopContributorsPage() {
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
            <ProfileCard size="large" />
          </div>
          
          {/* ProfileCard 1 */}
          <div className="order-1 sm:order-2">
            <ProfileCard size="xl" />
          </div>
          
          {/* ProfileCard 3 */}
          <div className="order-3 sm:order-3">
            <ProfileCard />
          </div>
        </div>
      </div>
      </div>

      <TopContributor /> 
    </div>
  );
}

export default TopContributorsPage;
