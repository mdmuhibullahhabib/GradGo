import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const { state } = useLocation();
  const { gig, form } = state || {};

  const handlePayment = () => {
    console.log("Payment completed for", gig?.title, "with booking info:", form);
    alert("Payment successful! Booking confirmed.");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Payment for {gig?.title}</h2>

      <div className="bg-white p-6 rounded shadow-md flex flex-col gap-4">
        <p><strong>Consultant:</strong> {gig?.consultant.name}</p>
        <p><strong>University:</strong> {form.university}</p>
        <p><strong>Subject:</strong> {form.subject}</p>
        <p><strong>Date:</strong> {form.date}</p>
        <p><strong>Time:</strong> {form.time}</p>
        <p><strong>Price:</strong> ৳ {gig?.price}</p>

        <button className="btn btn-primary mt-4" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
