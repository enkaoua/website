import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const { updateFilter, searchName } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFilter(name, value);
  };

  return (
    <div>
      <div>What are you looking for today?</div>
      {/* <form onSubmit={handleSubmit}> */}
      <div className="navbar-search">
        <input
          name="searchName"
          onChange={handleChange}
          value={searchName}
        ></input>
        <SearchIcon />
      </div>

      <p>{searchName}</p>
    </div>
  );
};

export default Search;
