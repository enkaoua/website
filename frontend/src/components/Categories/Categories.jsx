import React, { useState, useEffect } from "react";
import "./Categories.css";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  // get categories
  const getCategories = async () => {
    const res = await fetch("http://localhost:3030/api/categories");
    const cats = await res.json();
    setCategories(cats);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log({ e });
    navigate({
      pathname: "/search",
      search: `?categoryNames=${e.target.innerText}`,
    });
  };

  const renderCategories = () => {
    return categories.map((category) => (
      <div className="category-item" key={category._id}>
        <p onClick={handleClick}>{category.name}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="categories-container">{renderCategories()}</div>
    </div>
  );
};

export default Categories;
