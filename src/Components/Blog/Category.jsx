import React from "react";

const Category = ({ onCategory, activeCategory }) => {
  const category = ["lover", "friends"];
  return (
    <div className="d-flex justify-content-center pt-5  gap-3 category-area">
      <button
        onClick={() => onCategory(null)}
        className={`categorybtn ${activeCategory ? "" : "active-button"}`}
      >
        All
      </button>
      {category.map((category) => (
        <button
          onClick={() => onCategory(category)}
          className={`categorybtn ${
            activeCategory === category ? "active-button" : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
