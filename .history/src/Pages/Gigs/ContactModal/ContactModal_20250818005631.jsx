import React, { useState } from "react";

const ContactModal = ({ gig, setOpenModal }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Message sent to", gig.consultant.name, ":", message);
    alert("Message sent!");
    setOpenModal(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Contact {gig.consultant.name}</h2>
        <textarea
          className="w-full border rounded p-2 mb-4"
          rows={5}
          placeholder="Write your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            className="btn btn-outline btn-error"
            onClick={() => setOpenModal(false)}
          >
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
