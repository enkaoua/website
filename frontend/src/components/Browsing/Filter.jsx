import React, { useState, useEffect } from "react";
import MinMaxSlider from "./MinMaxSlider";
import getCategories from "../../api/categories";

const Filter = (props) => {
  const { updateFilter, filter } = props;
  const [categories, setCategories] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFilter(name, value);
  };

  const listCategories = () => {
    return categories.map((category) => (
      <option key={category.name} value={category.name}>
        {category.name}
      </option>
    ));
  };

  useEffect(async () => {
    //getCategories();
    // get categories
    const cats = await getCategories();
    setCategories(cats);
    console.log({ cats });
  }, []);

  return (
    <div>
      <div>
        category:
        <select
          onChange={handleChange}
          name="categoryNames"
          defaultValue={filter.categoryNames}
        >
          <option value="all">all</option>
          {categories.length > 0 ? listCategories() : <p>loading</p>}
        </select>
      </div>

      <div>
        {/* <Slider></Slider> */}
        price:
        <p>{filter["price"]}</p>
        {/*       <input type="range" min="0" max="100" value="50" steps="1" /> */}
        <MinMaxSlider
          updateFilter={updateFilter}
          min={0}
          max={100}
          defaultMin={filter["minPrice"]}
          defaultMax={filter["maxPrice"]}
          name="price"
        />
      </div>
    </div>
  );
};

export default Filter;
