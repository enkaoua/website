import React, { useEffect, useState } from "react";
import Search from "../components/Browsing/Search";
import Categories from "../components/Categories/Categories";
import "./SearchResults.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");

  // onChange(name, value);
  function handleChange(name, value) {
    setSearchName(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate({ pathname: "/search", search: `?searchName=${searchName}` });
  }

  return (
    <div>
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <Search updateFilter={handleChange} searchName={searchName} />
        </form>
      </div>

      <Categories />
    </div>
  );
};

export default Home;
