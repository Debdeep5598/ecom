"use client";

import { useState } from "react";

const Filters = () => {
  const [price, setPrice] = useState(500);
  const brands = ["Nike", "Adidas", "Samsung", "Apple", "Sony"];

  return (
    <div className="bg-white p-4 shadow-md rounded-md w-80">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* ✅ Price Range */}
      <div className="mb-4">
        <label className="block font-medium">Price Range</label>
        <input
          type="range"
          min="0"
          max="1000"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full mt-1"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>₹0</span>
          <span>₹{price}</span>
          <span>₹1000</span>
        </div>
      </div>

      {/* ✅ Categories (Checkbox List) */}
      <div className="mb-4">
        <label className="block font-medium">Category</label>
        <div className="flex flex-col gap-2 mt-2">
          <label><input type="checkbox" /> Electronics</label>
          <label><input type="checkbox" /> Fashion</label>
          <label><input type="checkbox" /> Home & Kitchen</label>
          <label><input type="checkbox" /> Books</label>
          <label><input type="checkbox" /> Beauty & Health</label>
          <label><input type="checkbox" /> Sports</label>
        </div>
      </div>

      {/* ✅ Ratings */}
      <div className="mb-4">
        <label className="block font-medium">Ratings</label>
        <select className="w-full mt-1 p-2 border rounded">
          <option>4 ⭐ & above</option>
          <option>3 ⭐ & above</option>
          <option>2 ⭐ & above</option>
          <option>1 ⭐ & above</option>
        </select>
      </div>

      {/* ✅ Discount */}
      <div className="mb-4">
        <label className="block font-medium">Discount</label>
        <div className="flex flex-col gap-2 mt-2">
          <label><input type="checkbox" /> 10% Off or More</label>
          <label><input type="checkbox" /> 20% Off or More</label>
          <label><input type="checkbox" /> 30% Off or More</label>
          <label><input type="checkbox" /> 50% Off or More</label>
          <label><input type="checkbox" /> 70% Off or More</label>
        </div>
      </div>

      {/* ✅ Brand (Searchable List) */}
      <div className="mb-4">
        <label className="block font-medium">Brand</label>
        <input type="text" placeholder="Search brand..." className="w-full p-2 border rounded mb-2" />
        <div className="flex flex-col gap-2">
          {brands.map((brand) => (
            <label key={brand}>
              <input type="checkbox" /> {brand}
            </label>
          ))}
        </div>
      </div>

      {/* ✅ Availability */}
      <div className="mb-4">
        <label className="block font-medium">Availability</label>
        <div className="flex flex-col gap-2 mt-2">
          <label><input type="checkbox" /> In Stock</label>
          <label><input type="checkbox" /> Out of Stock</label>
        </div>
      </div>

      {/* ✅ Color (Swatches) */}
      <div className="mb-4">
        <label className="block font-medium">Color</label>
        <div className="flex gap-2 mt-2">
          <div className="w-6 h-6 rounded-full bg-black cursor-pointer border"></div>
          <div className="w-6 h-6 rounded-full bg-red-500 cursor-pointer border"></div>
          <div className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer border"></div>
          <div className="w-6 h-6 rounded-full bg-green-500 cursor-pointer border"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer border"></div>
        </div>
      </div>

      {/* ✅ Size (For Fashion Items) */}
      <div className="mb-4">
        <label className="block font-medium">Size</label>
        <div className="flex gap-2 mt-2">
          <button className="border px-4 py-1 rounded">S</button>
          <button className="border px-4 py-1 rounded">M</button>
          <button className="border px-4 py-1 rounded">L</button>
          <button className="border px-4 py-1 rounded">XL</button>
          <button className="border px-4 py-1 rounded">XXL</button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
