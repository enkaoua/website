import React, { useEffect, useState } from "react";
import "./BrowseFilter.css";
import { Slider } from "@mui/material";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Search from "./Search";
import Filter from "./Filter";

const BrowseFilter = (props) => {
  const { onFilterChange, filterObject } = props;
  // TODO get min and max price of products
  const [filter, setFilter] = useState(
    { ...filterObject, minPrice: 0, maxPrice: 100 } || {
      minPrice: 0,
      maxPrice: 100,
      categoryNames: "all",
    }
  );

  console.log({ filterObject });

  function handleSubmit(event) {
    event.preventDefault();
    onFilterChange(filter);
  }

  /* function handleChange(event) {
    const { name, value, type, checked } = event.currentTarget;
    setFilter(() => {
      return {
        ...filter,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  } */

  function updateFilter(name, value) {
    setFilter((filter) => ({ ...filter, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Search updateFilter={updateFilter} searchName={filter["searchName"]} />
      </div>
      <div className="browse-filter-container">
        <Filter updateFilter={updateFilter} filter={filter} />
        <div>
          <button onClick={handleSubmit}>filter</button>
        </div>
      </div>
    </form>
  );
};

export default BrowseFilter;
