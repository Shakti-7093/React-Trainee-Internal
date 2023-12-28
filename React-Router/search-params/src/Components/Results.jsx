import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {/* Display search results here */}
    </div>
  );
};

export default Results;