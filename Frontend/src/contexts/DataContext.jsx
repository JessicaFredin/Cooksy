import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import axios from "axios";

// Create the context
export const DataContext = createContext();

// Custom hook to use the DataContext
export const useData = () => {
  return useContext(DataContext);
};

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null); // Holds the fetched data
  const [loading, setLoading] = useState(true); // Loading state to handle data fetch status
  const [error, setError] = useState(null); // Error state for any issues during fetch

  useEffect(() => {
    // Fetch data from data.json using Axios
    axios.get('/data/data.json')
      .then((response) => {
        setData(response.data); // Store the fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching data:", err); // Log the full error for debugging
        setError(err.message); // Store any error message
        setLoading(false); // Set loading to false after error
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  // Optionally log data changes (for debugging purposes)
  useEffect(() => {
    if (data) {
      console.log("Data has been updated:", data);
    }
  }, [data]);

  // Return context with the data, loading state, and error
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

// Validate the 'children' prop using PropTypes
DataProvider.propTypes = {
  children: PropTypes.node.isRequired, // children must be a valid React node
};
