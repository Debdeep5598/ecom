"use client";

import { useParams } from "next/navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useState } from "react";
import ShareButtons from "@/components/ShareButtons";
import QnASection from "@/components/QnASection";
import RecommendedProducts from "@/components/RecommendedProducts";
import RecentlyViewed from "@/components/RecentlyViewed";

// Dummy product data (Replace with API fetch later)
const dummyProducts = [
  {
    id: 1,
    name: "Smartphone",
    category: "electronics",
    price: 199,
    images: ["/electronics.png", "/electronics.jpg", "/iphone.jpg"],
    description: "A powerful smartphone with great battery life.",
    inStock: true,
    delivery: "🚚 Free Delivery by March 12",
    offers: [
      "💳 10% Instant Discount on XYZ Bank Cards",
      "🏦 EMI available: ₹500/month for 12 months",
      "🔄 Exchange Offer: Up to ₹5,000 off",
    ],
    specifications: {
      Processor: "Snapdragon 888",
      RAM: "8GB",
      Storage: "128GB",
      Warranty: "1 Year",
    },
    variants: { color: ["Red", "Blue", "Black"], storage: ["64GB", "128GB", "256GB"] },
    reviews: [
      { user: "Alice", rating: 5, comment: "Great phone!" },
      { user: "Bob", rating: 4, comment: "Good performance." },
    ],
    qna: [{ user: "John", question: "Does it support 5G?", answer: "Yes, it has 5G support." }],
    returnPolicy: "7-day return policy available.",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="text-center text-lg font-semibold mt-10">Product not found.</p>;
  }

  const [selectedColor, setSelectedColor] = useState(product.variants?.color?.[0] || "");
  const [selectedStorage, setSelectedStorage] = useState(product.variants?.storage?.[0] || "");

  return (
    <>
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Left: Image Carousel */}
        <div className="w-full md:w-1/2 bg-white shadow-md p-4 rounded">
          <Carousel showThumbs={true} infiniteLoop autoPlay>
            {product.images.map((img, index) => (
              <div key={index} className="p-4">
                <Image src={img} alt={product.name} width={350} height={350} className="mx-auto" />
              </div>
            ))}
          </Carousel>
          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            <button className="w-1/2 bg-orange-500 text-white py-3 font-semibold rounded hover:bg-orange-600">
              🛒 Add to Cart
            </button>
            <button className="w-1/2 bg-yellow-500 text-black py-3 font-semibold rounded hover:bg-yellow-600">
              ⚡ Buy Now
            </button>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-green-600 mt-2">₹{product.price}</p>

          {/* Offers */}
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h2 className="text-lg font-semibold">🔥 Offers</h2>
            <ul className="list-disc ml-5 text-gray-700">
              {product.offers.map((offer, index) => (
                <li key={index}>{offer}</li>
              ))}
            </ul>
          </div>

          {/* Stock Availability & Delivery */}
          <p className={`mt-2 font-semibold ${product.inStock ? "text-green-600" : "text-red-600"}`}>
            {product.inStock ? "✔ In Stock" : "❌ Out of Stock"}
          </p>
          <p className="text-gray-600">{product.delivery}</p>

          {/* Variants Selection */}
          <div className="mt-4">
            <h2 className="text-lg font-semibold">Select Variant:</h2>
            <div className="flex gap-2 mt-2">
              {product.variants?.color?.map((color, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded border ${selectedColor === color ? "border-blue-600 bg-blue-100" : "border-gray-300"}`}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
            <div className="flex gap-2 mt-2">
              {product.variants?.storage?.map((storage, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded border ${selectedStorage === storage ? "border-blue-600 bg-blue-100" : "border-gray-300"}`}
                  onClick={() => setSelectedStorage(storage)}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200">
            <h2 className="text-lg font-semibold">📌 Specifications</h2>
            <table className="w-full mt-2">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="px-4 py-2 font-semibold">{key}</td>
                    <td className="px-4 py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Share Buttons */}
          <ShareButtons />

          {/* Q&A Section */}
          <QnASection qna={product.qna} />

          {/* Return Policy */}
          <p className="mt-4 text-gray-600">{product.returnPolicy}</p>
        </div>
      </div>

      {/* Recently Viewed & Recommended Products */}
      <div className="mt-10">
        <RecentlyViewed />
        <RecommendedProducts />
      </div>
    </>
  );
};

export default ProductPage;
