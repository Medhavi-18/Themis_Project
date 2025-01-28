import React from "react";
import User from "./User"; // Import your components
import DoctorForm from "./DoctorForm";
import CompetitorData from "./CompetitorData";
import Feedback from "./feedback";
import Home from "./Home";

const FullForm = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg border border-gray-300">
      <form className="space-y-6"> {/* space-y-6 to give consistent vertical spacing */}
        {/* User Component */}
        <div>
          <Home/>
        </div>

        <div>
          <User />
        </div>

        {/* Doctor Form Component */}
        <div>
          <DoctorForm />
        </div>

        {/* Competitor Data Component */}
        <div>
          <CompetitorData />
        </div>

        {/* Feedback Component */}
        <div>
          <Feedback />
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-6">
        <button
            type="submit"
            className="bg-[#ef116a] text-white py-2 px-6 rounded-md hover:bg-[#d10e5d] focus:outline-none focus:ring-2 focus:ring-[#ef116a]">
            Submit
        </button>
        </div>


      </form>

        

    </div>

    
  );
};

export default FullForm;
