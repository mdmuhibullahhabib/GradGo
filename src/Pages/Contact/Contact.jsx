import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message submitted:", form);
    alert("Thanks for your message!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We're here to support your study abroad journey. Reach out any time!
        </p>
      </div>

      {/* Info */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div>
          <FaMapMarkerAlt className="text-2xl text-primary mx-auto mb-2" />
          <p className="font-medium">Dhaka, Bangladesh</p>
        </div>
        <div>
          <FaPhoneAlt className="text-2xl text-primary mx-auto mb-2" />
          <p className="font-medium">+880 1234 567 890</p>
        </div>
        <div>
          <FaEnvelope className="text-2xl text-primary mx-auto mb-2" />
          <p className="font-medium">support@studylinkbd.com</p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 rounded grid gap-4 max-w-2xl mx-auto"
      >
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="text-center mt-10">
        <p className="font-semibold mb-2">Follow us on social media</p>
        <div className="flex justify-center space-x-4 text-xl text-primary">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
