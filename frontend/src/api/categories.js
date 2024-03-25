const getCategories = async () => {
  const res = await fetch("http://localhost:3030/api/categories");
  const cats = await res.json();
  return cats;
};

export default getCategories;
