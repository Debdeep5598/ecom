"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dummy Recommended Products (Replace with API)
const recommendedProducts = [
  { id: 1, name: "Noise Cancelling Earbuds", price: 79.99, image: "/smartphones.jpg" },
  { id: 2, name: "Gaming Keyboard", price: 49.99, image: "/smartphones.jpg" },
  { id: 3, name: "Wireless Mouse", price: 25.99, image: "/smartphones.jpg" },
  { id: 4, name: "Portable Power Bank", price: 39.99, image: "/smartphones.jpg" },
  { id: 5, name: "Mechanical Gaming Chair", price: 299.99, image: "/smartphones.jpg" },
  { id: 6, name: "HD Webcam", price: 89.99, image: "/smartphones.jpg" },
  { id: 7, name: "Ultrawide Monitor", price: 499.99, image: "/smartphones.jpg" },
  { id: 8, name: "Gaming Headset", price: 119.99, image: "/smartphones.jpg" },
  { id: 9, name: "Gaming Headset", price: 119.99, image: "/smartphones.jpg" }
];

// Ad Banner Images
const banners = ["/ad-banner.webp", "/ad-banner.webp", "/ad-banner.webp"];

const RecommendedProducts = () => {
  const [products, setProducts] = useState(recommendedProducts);

  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      setProducts([...recommendedProducts]);
    }, 500);
  }, []);

  return (
    <section className="container mx-auto my-10 px-4">
     
{/* 🔹 TOP BANNER (Fixed without affecting the image) */}
{/* <div className="w-full flex justify-center mb-6 max-h-[120px] overflow-hidden">
  <Image
    src="/top-banner.jpg" 
    alt="Top Banner"
    width={1024}
    height={200}
    className="rounded-lg shadow-lg w-full object-cover"
  />
</div> */}




      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">🎯 Recommended For You</h1>

      {/* ✅ Two-column Layout: Left (50%) - Right (50%) */}
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* 🔹 Left Side (50%) - Auto Sliding Ad Banner */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full h-[500] md:h-[1000px] flex rounded-lg shadow-lg overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }} // Auto-slide every 4 seconds
              navigation={{
                prevEl: ".prev-btn",
                nextEl: ".next-btn",
              }}
              pagination={{ clickable: true }}
              className="w-full h-full"
            >
              {banners.map((banner, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={banner}
                    alt={`Ad Banner ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Left Arrow */}
            <button className="prev-btn absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-900 transition">
              <ChevronLeft size={24} />
            </button>

            {/* Right Arrow */}
            <button className="next-btn absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-3 rounded-full hover:bg-gray-900 transition">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* 🔹 Right Side (50%) - Recommended Products Grid (Scrollable) */}
       {/* 🔹 Right Side (50%) - Recommended Products Grid (Scrollable) */}
<div className="w-full md:w-1/2 h-[800px] md:h-[1000px] overflow-y-auto scrollbar-hide">
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <Link key={product.id} href={`/product/${product.id}`} className="group">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all h-full flex flex-col">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-3 text-center flex-grow flex flex-col justify-between">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-green-600 font-bold">${product.price.toFixed(2)}</p>
            <button className="mt-2 w-full bg-cyan-400 text-black py-2 rounded-md font-bold hover:bg-cyan-500">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

      </div>
    </section>
  );
};

export default RecommendedProducts;
