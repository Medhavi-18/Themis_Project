import React from "react";
// import HomeImg from '../../data_form/src/assets/home_img.png';
import HomeImg from './assets/home_img.png'

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F3F4F6] p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={HomeImg}// Replace with actual image URL
            alt="Holding Hands"
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* RCPA Bin Card Section */}
        <div className="bg-[#A54586] text-white font-semibold py-2 px-4 rounded-md mt-4">
          RCPA - BIN CARD
        </div>

        {/* Input Fields */}
        <div className="mt-4 text-left space-y-3">
          <label className="block text-gray-700 font-medium">BDM Name:</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-gray-700 font-medium">Mob Number:</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <label className="block text-gray-700 font-medium">HQ:</label>
          <input
            type="text"
            className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Footer */}
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
