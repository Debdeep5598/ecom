"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";

const ShareButtons = () => {
  const [productUrl, setProductUrl] = useState("");

  useEffect(() => {
    // Set URL only on the client-side to avoid hydration mismatch
    setProductUrl(window.location.href);
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold">Share this product:</h2>
      <div className="flex gap-3 mt-2">
        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=Check this out: ${productUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600"
        >
          <FaWhatsapp />
          WhatsApp
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700"
        >
          <FaFacebook />
          Facebook
        </a>

        {/* X (Twitter) */}
        <a
          href={`https://twitter.com/intent/tweet?url=${productUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800"
        >
          <FaTwitter />
          X (Twitter)
        </a>
      </div>
    </div>
  );
};

export default ShareButtons;
