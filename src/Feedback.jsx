import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setFeedback(input);
    setCharCount(input.length);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg border border-gray-300">
      <form>
        <div className="mb-4">
          <label className="font-semibold block">Your Feedback (Max 500 words):</label>
          <textarea
            value={feedback}
            onChange={handleInputChange}
            rows="6"
            className="w-full border border-gray-400 p-2 rounded-md mt-1"
            maxLength={500}
            placeholder="Enter your feedback here..."
          ></textarea>
          <div className="text-sm text-gray-600 mt-2">
            {charCount} / 500 characters
          </div>
        </div>

      </form>
    </div>
  );
};

export default Feedback;
