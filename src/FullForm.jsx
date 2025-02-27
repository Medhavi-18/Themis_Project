import React from "react";
import User from "./User"; // Import your components
import DoctorForm from "./DoctorForm";
import CompetitorData from "./CompetitorData";
import Feedback from "./Feedback";
import Home from "./Home";

const FullForm = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg border border-gray-300">
      <form className="space-y-6"> {/* space-y-6 to give consistent vertical spacing */}
        {/* User Component */}
        <div>
          <Home/>
        </div>

        {/* <div>
          <User />
        </div> */}

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

        <div>
        {/* Submit button */}
        <div className="flex justify-center mt-6 bg-purple">
        <button
          type="submit"
          className="bg-[#A54586] text-white py-2 px-6 rounded-md hover:bg-[#833f6d] focus:outline focus:ring-2 focus:ring-[#833f6d]"
        >
            Submit
        </button>

        </div>
          </div>

      </form>   

      


    </div>

    
  );
};

export default FullForm;