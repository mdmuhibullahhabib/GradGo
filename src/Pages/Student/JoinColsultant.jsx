import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const JoinConsultant = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    field: "",
    experience: "",
    bio: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Consultant Info Submitted:", form);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 flex items-center justify-center gap-2">
        <FaUserPlus /> Join as a Consultant
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="label">Full Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            required
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div>
          <label className="label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="input input-bordered w-full"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        {/* University Name */}
        <div>
          <label className="label">Your University Name</label>
          <input
            type="text"
            name="university"
            className="input input-bordered w-full"
            placeholder="e.g., University of Dhaka"
            required
            value={form.university}
            onChange={handleChange}
          />
        </div>

        {/* Field of Expertise */}
        <div>
          <label className="label">Field of Expertise</label>
          <input
            type="text"
            name="field"
            className="input input-bordered w-full"
            placeholder="e.g., Australia, Canada, UK"
            required
            value={form.field}
            onChange={handleChange}
          />
        </div>

        {/* Experience */}
        <div>
          <label className="label">Years of Experience</label>
          <input
            type="number"
            name="experience"
            className="input input-bordered w-full"
            min={0}
            required
            value={form.experience}
            onChange={handleChange}
          />
        </div>

        {/* Bio */}
        <div>
          <label className="label">Short Bio</label>
          <textarea
            name="bio"
            rows="4"
            className="textarea textarea-bordered w-full"
            placeholder="Tell us a little about your background and goals..."
            required
            value={form.bio}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit */}
        <button type="submit" className="btn btn-primary w-full">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JoinConsultant;
