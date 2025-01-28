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
    <>
   <div className="flex flex-col items-start w-full">
  <label className="text-base font-medium text-gray-700 mb-1 self-start">
    Retailer Name:
  </label>
  <input
    type="text"
    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
    placeholder="Enter retailer name"
  />
</div>

  <br />


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

    </>
  );
};

export default Feedback;
