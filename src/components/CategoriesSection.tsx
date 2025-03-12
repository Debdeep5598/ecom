"use client";

import CategoryCard from "./CategoryCard";

// Dummy Categories Data (Replace with API data later)
const categories = [
  { name: "Electronics", image: "/electronics.png" },
  { name: "Fashion", image: "/fashion.png" },
  { name: "Home & Kitchen", image: "/home.jpg" },
  { name: "Books", image: "/books.jpg" },
  { name: "Beauty & Health", image: "/beauty.jpg" },
  { name: "Sports", image: "/sports.webp" },
];

const CategoriesSection = () => {
  return (
    <section className="container mx-auto my-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">📢 Shop by Category</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
