import React, { useEffect, useState } from "react";
import { fetchAmazonProductCategories } from "../../api/index";
import "../Category/Category.css";

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState("Categories");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchAmazonProductCategories();
        setCategories(data);
        console.log(data);
      } catch (error) {
        setError("Failed to fetch categories");
        console.log("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  if (loading) return <div className="loader"></div>;
  if (error) return <div className="text-[15px]">{error}</div>;

  return (
    <div className="w-[99%] overflow-hidden mx-auto py-2">
      <div
        className="flex overflow-x-auto space-x-1.5 pb-1.5 scrollbar"
        style={{ width: "100vw" }}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => handleSelect(category.name)}
            className={`group relative cursor-pointer px-3 py-2 font-semibold transition-all rounded ${
              selectedCategory === category.name
                ? "text-sky-400 border-b-2 border-sky-400"
                : "text-gray-500"
            }`}
          >
            <div className="flex items-center space-x-1">
              <span className="truncate max-w-[150px] text-[15px]">
                {category.name}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform group-hover:rotate-180"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06-.02L10 10.12l3.71-2.93a.75.75 0 111.06 1.06l-4 3.16a.75.75 0 01-1.06 0l-4-3.16a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
