import { useState } from "react";
import CloseButton from "./CloseButton";
import Button from "./Button";


// Popup-komponent för att spara i mappar
const SaveInFolderPopup = ({ onClose }) => {
  // State för att hantera mappar, lägga till nya mappar och aktiv mapp
  const [folders, setFolders] = useState([
    { name: "All recipes", color: "#ffffff" },
    { name: "American recipes", color: "#506FEC" },
  ]);
  const [isAddingFolder, setIsAddingFolder] = useState(false); // Om användaren håller på att lägga till en ny mapp
  const [newFolderName, setNewFolderName] = useState("");  // Namn för ny mapp
  const [newFolderColor, setNewFolderColor] = useState("#F56868"); // Standardfärg för nya mappar
  const [activeFolder, setActiveFolder] = useState("All recipes"); // Aktiv mapp

    // Funktion för att lägga till en ny mapp
  const handleAddFolder = () => {
    if (newFolderName.trim() !== "") {
      // Kontrollera att namnet inte är tomt
      setFolders([...folders, { name: newFolderName, color: newFolderColor }]); // Lägg till mappen i listan
      setActiveFolder(newFolderName); // Ställ in den nya mappen som aktiv
      setIsAddingFolder(false); // Stäng formuläret för att lägga till mapp
      setNewFolderName(""); // Återställ namn-input
      setNewFolderColor("#FFBF00"); // Återställ färg-input
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 md:w-3/5 md:max-w-md w-full max-w-xs">
      {/* Rendera popup baserat på om en ny mapp läggs till */}
        {!isAddingFolder ? (
          <>
            {/* Popup for displaying folders */}
            <div className="flex justify-between">
              <h2 className="text-lg font-bold mb-4">Save in folder</h2>
              <CloseButton
                  onClick={onClose}
              />
            </div>
            <span className="block w-full h-1 bg-gray-100 shadow-3xl rounded"></span>
            <div className="flex justify-end mt-6">
              {/* Knapp för att öppna formulär för att lägga till mapp */}
              <button
                onClick={() => setIsAddingFolder(true)}
                className="bg-pink-400 text-white text-sm px-4 py-1 text-center rounded-full hover:bg-pink-600"
              >
                <span className="mr-1 text-lg">+</span> Add folder
              </button>
            </div>
            {/* Lista med mappar */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
              {folders.map((folder) => (
                <button
                  key={folder.name}
                  onClick={() => setActiveFolder(folder.name)}
                  style={{
                    backgroundColor: folder.color,
                  }}
                  className={`w-full text-left px-4 py-2 text-lg rounded-full transition font-pacifico shadow-lg ${
                    folder.name === activeFolder
                      ? "border-2 border-black"
                      : "border-2"
                  }`}
                >
                  {folder.name}
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <Button
                onClick={onClose} //spara och stäng knapp
              >
                Save
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Formulär för att lägga till en ny mapp */}
            <h2 className="text-lg font-bold mb-4">Add folder</h2>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Folder name</label>
              <input
                type="text"
                value={newFolderName}
                onChange={(e) => setNewFolderName(e.target.value)}
                placeholder="e.g. Christmas recipes"
                className="w-full border-2 border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Folder color</label>
              <input
                type="color"
                value={newFolderColor}
                onChange={(e) => setNewFolderColor(e.target.value)}
                className="w-16 h-10 p-1 border border-gray-300 rounded-md cursor-pointer"
              />
            </div>
            <div className="flex justify-end mt-4">
              <Button
                onClick={handleAddFolder}
              >
                Create
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SaveInFolderPopup;