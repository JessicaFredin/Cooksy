import SearchField from "../components/SearchField";
import CooksyHatImage from "../assets/images/CooksyHat.png";

function HomePage() {
  return (
    <div>
      <div className="relative mt-12 grid grid-cols-12 gap-4">
        {/* Huvudrubrik */}
        <div className="col-start-3 col-span-5">
          <h1 className="font-pacifico text-6xl mb-12">
            Cook, share, and inspire with Cooksy
          </h1>
        </div>

        <div className="col-start-3 col-span-4">
          <SearchField></SearchField>
          <img src={CooksyHatImage} alt="Cooksy Hat" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
