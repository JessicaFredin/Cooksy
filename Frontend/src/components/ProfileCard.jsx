import Button from "./Button";
import { HatIcon } from "../assets/icons/HatIcon";
import { PeopleIcon } from "../assets/icons/PeopleIcon";

function ProfileCard() {
  return (
    <div className="grid grid-cols-12 col-start-2">
      {/* Card Container */}
      <div className="bg-white rounded-lg flex flex-col items-center p-5 relative w-64 h-96 shadow-lg">

        {/* Profilbild - just nu cirkel som placeholder*/}
        <div className="w-52 h-52 rounded-full overflow-hidden mb-4 z-10">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center"></div>
        </div>

        {/* Namn-del */}
        <div className="bg-green-300 rounded-lg w-52 h-9 flex items-center justify-center absolute z-20 transform top-1/2">
          <p>First/last name</p>
        </div>

        {/* Recipes/followers */}
        <div className="space-y-2 mb-4 w-full px-4 mt-2">
          <div className="flex items-center gap-2">
            <HatIcon />
            ?? recipes
          </div>

          <div className="flex items-center gap-2">
            <PeopleIcon />
            ?? followers
          </div>
        </div>

        {/* Follow Button */}
        <Button size="small" className="bottom-4 absolute right-4">
          Follow
        </Button>
      </div>
    </div>
  );
}

export default ProfileCard;
