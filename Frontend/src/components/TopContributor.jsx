import Button from "../components/Button";
import { HatIcon } from "../assets/icons/HatIcon";
import { PeopleIcon } from "../assets/icons/PeopleIcon";

function TopContributor() {
  return (
    <div>
      <div className="grid grid-cols-12 gap-x-4"> 
        <div className="col-start-2 col-end-12">
          <div className="border-2 border-green-300 rounded-xl p-2">
            
            {/* Flexbox för att placera cirkeln till vänster om texten */}
            <div className="flex items-center gap-4">
              {/* Cirkeln */}
              <div className="w-20 h-20 rounded-full">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center"></div>
              </div>

              {/* Textinnehåll */}
              <div className="flex-1">
                <p className="inline-block px-2 py-1 bg-green-300 rounded-md text-sm font-medium mb-2">
                  first/last name
                </p>
                
                <div className="flex gap-2 text-sm items-center">
                  <HatIcon />
                  ?? recipes
                  <PeopleIcon className="ml-5"/>
                  ?? followers
                </div>
              </div>

              {/* Follow button */}
              <div className="flex flex-col items-end">
                {/* Placera siffran ovanför knappen */}
                <div className="text-xl font-bold mb-1 mr-2">
                  ?
                </div>
                <Button size="medium">Follow</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopContributor;
