import NewsletterCardImg from "../../assets/images/NewsletterCardImg.png"
import HeartFavourites from "../HeartFavourites"
import ProfileImg from "../../assets/images/avatar.png"


function RecipeImage(){

    return(
        <div className="relative rounded-lg">
      {/* Huvudbilden */}
      <img src={NewsletterCardImg} alt="Meal" className="w-full h-auto rounded-lg" />

      {/* Hjärta i övre högra hörnet */}
      <div className="absolute top-4 right-4">
        <HeartFavourites />
      </div>

      {/* Plats för framtida komponent direkt under hjärtat */}
      <div className="absolute top-16 right-4">
        <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center shadow">
          {/* Lägg till komponenten här senare */}
        </div>
      </div>

      {/* Profilinformation */}
      <div className="absolute bottom-[-17px] right-4 flex items-center">
        {/* Profilnamn */}
        <div className="bg-green-200 py-1 px-10 rounded-tl-xl text-lg font-medium">
          <p>Lisa Karlsson</p>
        </div>

        {/* Profilbild */}
        <img
          src={ProfileImg}
          alt="Profile"
          className="w-20 h-18 rounded-xl"
        />
      </div>
    </div>

    );

}


export default RecipeImage