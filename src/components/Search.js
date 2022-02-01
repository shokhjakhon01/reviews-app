import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <div className="search">
      <SearchIcon className="search-icons" />
      <input type="text" placeholder="Search here..." />
    </div>
  );
}

export default Search;
