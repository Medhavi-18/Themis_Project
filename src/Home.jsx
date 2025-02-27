import React, { useState } from "react";
import HomeImg from './assets/home_img.png';

const Home = () => {
  const [bdmName, setBdmName] = useState("");
  const [mobNumber, setMobNumber] = useState("");
  const [hq, setHq] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      bdmName,
      mobNumber,
      hq,
    };

    try {
      const response = await fetch("http://localhost:5000/api/bdms/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.status === 200) {
        alert(result.message); // Show success message
      } else {
        alert(result.error); // Show error message
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error while submitting data");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F3F4F6] p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
        <div className="flex justify-center">
          <img
            src={HomeImg}
            alt="Holding Hands"
            className="w-full object-cover rounded-lg"
          />
        </div>

        <div className="bg-[#A54586] text-white font-semibold py-2 px-4 rounded-md mt-4">
          RCPA - BIN CARD
        </div>

        <form onSubmit={handleSubmit} className="mt-4 text-left space-y-3">
          <label className="block text-gray-700 font-medium">BDM Name:</label>
          <input
            type="text"
            value={bdmName}
            onChange={(e) => setBdmName(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-gray-700 font-medium">Mob Number:</label>
          <input
            type="text"
            value={mobNumber}
            onChange={(e) => setMobNumber(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-gray-700 font-medium">Employee No:</label>
          <input
            type="text"
            value={hq}
            onChange={(e) => setHq(e.target.value)}
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mt-4"
          >
            Submit
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            THEMIS MEDICARE <br />
            11/12, Udyog Nagar, S.V. Road, Goregaon (West), Mumbai - 400 104
          </p>
          <p>Email: info@themis-medicare.com | Website: themismedicare.com</p>
          <p>Contact No.: +91 22 6760 7080</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
