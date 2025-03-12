"use client";

import DealCard from "./DealCard";

// Dummy Deals Data (Replace with API data later)
const deals = [
  { id: 1, name: "Noise Cancelling Headphones", originalPrice: 149.99, discountedPrice: 99.99, image: "/noisecan.jpg" },
  { id: 2, name: "Smartphone", originalPrice: 799.99, discountedPrice: 699.99, image: "/smartphone.jpg" },
  { id: 3, name: "Gaming Laptop", originalPrice: 1599.99, discountedPrice: 1299.99, image: "/gaminglaptop.jpg" },
  { id: 4, name: "Smart Watch", originalPrice: 299.99, discountedPrice: 199.99, image: "/watch.jpg" },
  { id: 5, name: "Bluetooth Speaker", originalPrice: 79.99, discountedPrice: 49.99, image: "/speaker.webp" },
  { id: 6, name: "4K LED TV", originalPrice: 599.99, discountedPrice: 499.99, image: "/tv.webp" },
];

const DealsSection = () => {
  return (
    <section className="container mx-auto my-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">🔥 Limited-Time Deals</h1>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto space-x-6 p-4 scrollbar-hide">
      {deals.map((deal) => (
          <div key={deal.id} className="min-w-[250px]">
            <DealCard {...deal} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DealsSection;
