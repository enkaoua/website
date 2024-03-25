import React, { useEffect, useState } from "react";
import {
  useLocation,
  useParams,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import Products from "../components/ProductsCatalogue/Products";
import Search from "../components/Browsing/Search.jsx";
import BrowseFilter from "../components/Browsing/BrowseFilter";
import { products } from "../data.js";

const SearchResults = (props) => {
  // rename search to query_params (search key from navigate)
  const navigate = useNavigate();

  const { search: searchQuery } = useLocation();
  const [queryObject, setQueryObject] = useState(
    Object.fromEntries(new URLSearchParams(searchQuery))
  );

  const [backendProducts, setBackendProducts] = useState([]);

  // grab all data from backend that matches search that was inputted before coming to this page
  const getSetData = async () => {
    console.log(`http://localhost:3030/api/products${searchQuery}`);
    const res = await fetch(`http://localhost:3030/api/products${searchQuery}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setBackendProducts(data);
  };

  useEffect(() => {
    getSetData();
    //setBackendProducts(products);
  }, [searchQuery]);

  // add query upon change of filter
  const onBrowserChange = (filter) => {
    const searchParams = new URLSearchParams(filter);
    console.log(searchParams.toString());
    setQueryObject(filter);

    navigate({ pathname: "/search", search: `?${searchParams}` });
  };

  //onBrowserChange();
  return (
    <>
      <div>
        <BrowseFilter
          onFilterChange={onBrowserChange}
          filterObject={queryObject}
        />
      </div>
      <div>SearchResults </div>

      <Products products={backendProducts} />
    </>
  );
};

export default SearchResults;
