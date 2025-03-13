"use client";
import { useState } from "react";
import Link from "next/link";

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  return (
    <section className="container mx-auto my-10 px-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">💳 Select Payment Method</h1>

      {/* Payment Methods */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="space-y-4">
          {/* Cash on Delivery */}
          <button 
            className={`w-full p-3 rounded-lg border ${selectedPayment === "cash" ? "bg-green-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedPayment("cash")}
          >
            💵 Cash on Delivery
          </button>

          {/* UPI Payment */}
          <button 
            className={`w-full p-3 rounded-lg border ${selectedPayment === "upi" ? "bg-blue-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedPayment("upi")}
          >
            📲 UPI (Google Pay, PhonePe, Paytm)
          </button>

          {/* Debit Card */}
          <button 
            className={`w-full p-3 rounded-lg border ${selectedPayment === "debit" ? "bg-yellow-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedPayment("debit")}
          >
            💳 Debit Card
          </button>

          {/* Credit Card */}
          <button 
            className={`w-full p-3 rounded-lg border ${selectedPayment === "credit" ? "bg-purple-500 text-white" : "bg-gray-100"}`}
            onClick={() => setSelectedPayment("credit")}
          >
            🏦 Credit Card
          </button>
        </div>

        {/* Proceed Button */}
        <div className="mt-6">
          {selectedPayment ? (
            <Link href="/confirmation">
              <button className="w-full bg-green-600 text-white p-3 rounded-lg">
                ✅ Proceed with {selectedPayment.toUpperCase()}
              </button>
            </Link>
          ) : (
            <p className="text-center text-red-500 mt-2">⚠️ Please select a payment method!</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentPage;
