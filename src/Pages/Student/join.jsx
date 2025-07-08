// JoinAsConsultantForm.jsx
import React, { useState } from "react";

const JoinAsConsultantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    university: "",
    offerLetter: null,
    experience: "",
    expertise: "",
    linkedIn: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "offerLetter") {
      setFormData({ ...formData, offerLetter: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // 🔐 You can POST this data to your backend
  };

  return (
    <div className="p-6 bg-white shadow rounded max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Apply as a Consultant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" type="text" required placeholder="Full Name" className="input input-bordered w-full" onChange={handleChange} />
          <input name="email" type="email" required placeholder="Email" className="input input-bordered w-full" onChange={handleChange} />
          <input name="phone" type="text" required placeholder="Phone" className="input input-bordered w-full" onChange={handleChange} />
          <input name="country" type="text" required placeholder="Country" className="input input-bordered w-full" onChange={handleChange} />
          <input name="university" type="text" required placeholder="University Name" className="input input-bordered w-full" onChange={handleChange} />
          <input name="experience" type="number" placeholder="Experience (Years)" className="input input-bordered w-full" onChange={handleChange} />
        </div>

        <div>
          <label className="block font-medium mb-1">University Offer Letter (PDF/Image)</label>
          <input type="file" name="offerLetter" accept="application/pdf,image/*" className="file-input file-input-bordered w-full" onChange={handleChange} />
        </div>

        <textarea name="expertise" rows="2" placeholder="Your expertise (e.g., USA admission, Visa help)" className="textarea textarea-bordered w-full" onChange={handleChange}></textarea>
        <input name="linkedIn" type="url" placeholder="LinkedIn Profile (Optional)" className="input input-bordered w-full" onChange={handleChange} />
        <textarea name="bio" rows="3" placeholder="Tell us about yourself..." className="textarea textarea-bordered w-full" onChange={handleChange}></textarea>

        <button type="submit" className="btn btn-primary w-full">Submit Application</button>
      </form>
    </div>
  );
};

export default JoinAsConsultantForm;
