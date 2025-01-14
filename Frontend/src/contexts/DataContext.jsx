import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context
export const DataContext = createContext();

// Custom hook to use the DataContext
export const useData = () => {
  return useContext(DataContext);
};

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);    // Holds the fetched data
  const [loading, setLoading] = useState(true);  // Loading state to handle data fetch status
  const [error, setError] = useState(null);    // Error state for any issues during fetch

  useEffect(() => {
    // Fetch data from data.json
    fetch('/data/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((json) => {
        setData(json);        // Store the fetched data
        setLoading(false);    // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError(err.message); // Store any error message
        setLoading(false);     // Set loading to false after error
      });
  }, []);

  // Return context with the data, loading state, and error
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};