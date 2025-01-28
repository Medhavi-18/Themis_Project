import React from "react";
import logo from "../src/assets/logo.png";

const User = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen py-8">
      {/* Logo Section */}
      <div className="mb-6 w-full max-w-xl">
        <img src={logo} alt="Themis Medicare Logo" className="w-full h-auto object-contain" />
      </div>

      {/* BDM Section */}
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-md mb-6">
        <div className="mb-4 flex items-center">
          <label className="font-semibold w-40">BDM Name:</label>
          <input type="text" className="w-full max-w-2xl p-2 border rounded-md" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="font-semibold w-40">Mob Number:</label>
          <input type="text" className="w-full max-w-2xl p-2 border rounded-md" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="font-semibold w-40">HQ:</label>
          <input type="text" className="w-full max-w-2xl p-2 border rounded-md" />
        </div>
        <br />
        <div className="text-right mt-4 font-bold">
          <span className="inline-block w-40 border-b-2 border-gray-800"></span>
          <p>BDM Signature</p>
        </div>
      </div>

      {/* RBM Section */}
      <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-md">
        <div className="mb-4 flex items-center">
          <label className="font-semibold w-40">RBM Name:</label>
          <input type="text" className="w-full max-w-2xl p-2 border rounded-md" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="font-semibold w-40">Mob Number:</label>
          <input type="text" className="w-full max-w-2xl p-2 border rounded-md" />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          I assure that the data entered in this book has been thoroughly checked by me, and is true to the best of my knowledge.
        </p>
        <br />
        <div className="text-right mt-4 font-bold">
          <span className="inline-block w-40 border-b-2 border-gray-800"></span>
          <p>RBM Signature</p>
        </div>
      </div>
    </div>
  );
};

export default User;
