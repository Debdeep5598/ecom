"use client";

import { useParams } from "next/navigation";
import Filters from "@/components/Filters";
import ProductCard from "@/components/ProductCard";

// Dummy Products (Will be replaced with API call)
const dummyProducts = [
  { id: 1, name: "Smartphone", category: "electronics", price: 199, image: "/electronics.png" },
  { id: 2, name: "Laptop", category: "electronics", price: 999, image: "/electronics.png" },
  { id: 3, name: "T-Shirt", category: "fashion", price: 29, image: "/fashion.png" },
  { id: 4, name: "Sneakers", category: "fashion", price: 79, image: "/fashion.png" },
  { id: 5, name: "Cookware Set", category: "home & kitchen", price: 59, image: "/home.jpg" },
  { id: 6, name: "Fiction Novel", category: "books", price: 19, image: "/books.jpg" },
  { id: 7, name: "Face Cream", category: "beauty & health", price: 25, image: "/beauty.jpg" },
  { id: 8, name: "Dumbbells", category: "sports", price: 49, image: "/sports.webp" },
];

const CategoryPage = () => {
  const { category } = useParams();
  const decodedCategory = category ? decodeURIComponent(category) : ""; // Ensure it's a string

  // Filter products based on category
  const filteredProducts = dummyProducts.filter(
    (product) => product.category.toLowerCase() === decodedCategory.toLowerCase()
  );

  return (
    <div className="container mx-auto px-4 my-10 flex gap-6">
      {/* Sidebar Filters */}
      <aside className="w-1/4 hidden md:block">
        <Filters />
      </aside>

      {/* Product Listing */}
      <section className="w-full md:w-3/4">
        <h1 className="text-3xl font-bold mb-6 capitalize">{decodedCategory} Products</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => <ProductCard key={product.id} {...product} />)
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found in this category.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
