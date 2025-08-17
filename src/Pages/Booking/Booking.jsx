import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const { state } = useLocation();
  const gig = state?.gig;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    university: "",
    subject: "",
    extraNotes: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleProceed = () => {
    console.log("Booking info:", form);
    navigate("/payment", { state: { gig, form } });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Booking Consultation for {gig?.title}</h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="university"
          placeholder="University Name"
          className="input input-bordered w-full"
          value={form.university}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input input-bordered w-full"
          value={form.subject}
          onChange={handleChange}
        />
        <textarea
          name="extraNotes"
          placeholder="Extra Notes"
          className="textarea textarea-bordered w-full"
          value={form.extraNotes}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className="input input-bordered w-full"
          value={form.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="time"
          className="input input-bordered w-full"
          value={form.time}
          onChange={handleChange}
        />
        <button className="btn btn-primary w-full" onClick={handleProceed}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Booking;
