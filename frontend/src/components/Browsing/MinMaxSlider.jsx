import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";

const MinMaxSlider = (props) => {
  const { name, min, max, updateFilter, defaultMin, defaultMax } = props;
  const [minmaxValue, setminmaxValue] = useState([defaultMin, defaultMax]);
  /* 
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value, maxValue);
    if (name == `min${name}` && value > maxValue) {
      return;
    } else {
      onChange(name, value);
    }
  } */

  useEffect(() => {
    updateFilter("maxPrice", minmaxValue[1]);
    updateFilter("minPrice", minmaxValue[0]);
  }, [minmaxValue]);

  const handleChange = (event, newValue) => {
    setminmaxValue(newValue);
  };

  return (
    <div>
      {/*       <input
        name={`min${name}`}
        onChange={handleChange}
        type="range"
        min={min}
        max={max}
        defaultValue={minValue}
        value={minValue}
      ></input>

      <input
        name={`max${name}`}
        onChange={handleChange}
        type="range"
        min={min}
        max={max}
        defaultValue={maxValue}
        value={maxValue}
      ></input> */}
      {minmaxValue[0]}
      <Slider value={minmaxValue} min={0} max={100} onChange={handleChange} />
      {minmaxValue[1]}
    </div>
  );
};

export default MinMaxSlider;
