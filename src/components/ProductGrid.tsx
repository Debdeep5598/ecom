"use client";

import ProductCard from "./ProductCard";

// Dummy Product Data (Replace with API data later)
const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, image: "/headphone.webp" },
  { id: 2, name: "Smartphone", price: 699.99, image: "/smartphones.jpg" },
  { id: 3, name: "Gaming Laptop", price: 1299.99, image: "/laptops.jpg" },
  { id: 4, name: "Smart Watch", price: 199.99, image: "/watches.jpg" },
  { id: 5, name: "Bluetooth Speaker", price: 49.99, image: "/speakers.jpg" },
  { id: 6, name: "4K LED TV", price: 499.99, image: "/tvs.jpg" },
];

const ProductGrid = () => {
  return (
    <section className="container mx-auto my-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">🔥 Featured Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
