import React from "react";

const DoctorForm = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg border border-gray-300">
      {/* Doctor Name */}
      <div className="mb-4">
        <label className="font-semibold block text-left">Name of Doctor:</label>
        <input
          type="text"
          className="w-full border border-gray-400 p-2 rounded-md mt-1"
        />
      </div>

      <p className="text-left">(Tick as applicable below)</p>

      {/* Specialties Table */}
      <div className="border border-gray-400 overflow-x-auto mb-4">
        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-5 font-bold border-b border-gray-400">
            <div className="p-2 border-r">Main Specialty</div>
            <div className="p-2 border-r">Subspecialty 1</div>
            <div className="p-2 border-r">Subspecialty 2</div>
            <div className="p-2 border-r">Subspecialty 3</div>
            <div className="p-2">Subspecialty 4</div>
          </div>
          {[ 
            ["Orthopedic", "General Orthopedic Physician", "General Orthopedic Surgeon", "Trauma Orthopedic Surgeon", "Joint replacement Surgeon"],
            ["Gynecologist", "General Gynecologist’s", "Obstetrician-Gynecologist", "IVF-Gynecologist’s", "Menopause Specialists"],
            ["Surgeon", "General Surgeon", "", "", ""],
            ["GP (MBBS)", "Lady GP", "Male GPs", "", ""],
            ["CP", "General Physician", "", "", ""]
          ].map((row, idx) => (
            <div key={idx} className="grid grid-cols-5 border-b border-gray-400">
              {row.map((item, colIdx) => (
                <div key={colIdx} className={`p-2 border-r ${colIdx === 4 ? "border-r-0" : ""}`}>
                  {item && (
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      {item}
                    </label>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="sm:hidden">
          {[ 
            { main: "Orthopedic", subs: ["General Orthopedic Physician", "General Orthopedic Surgeon", "Trauma Orthopedic Surgeon", "Joint replacement Surgeon"] },
            { main: "Gynecologist", subs: ["General Gynecologist’s", "Obstetrician-Gynecologist", "IVF-Gynecologist’s", "Menopause Specialists"] },
            { main: "Surgeon", subs: ["General Surgeon"] },
            { main: "GP (MBBS)", subs: ["Lady GP", "Male GPs"] },
            { main: "CP", subs: ["General Physician"] }
          ].map((category, idx) => (
            <div key={idx} className="border-b border-gray-400 p-2 mb-2">
              <div className="font-bold bg-gray-200 p-2">{category.main}</div>
              {category.subs.map((sub, subIdx) => (
                <label key={subIdx} className="flex items-center p-2">
                  <input type="checkbox" className="mr-2" />
                  {sub}
                </label>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Patients Seen Per Day */}
      <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
        <div className="border border-gray-400 w-full md:w-1/2 p-3">
          <p className="font-semibold block text-left">Average patients seen per day (Tick one option):</p>
          <div className="flex flex-col gap-2">
            {["1-10", "11-25", "26-40", "41-60", ">61"].map((option, idx) => (
              <label key={idx} className="flex items-center">
                <input type="checkbox" className="mr-2" /> {option}
              </label>
            ))}
          </div>
        </div>

        {/* Approx Avg Value Given */}
        <div className="border border-gray-400 w-full md:w-1/2 p-3">
          <p className="font-semibold block text-left">Approx Avg value given to OG Care products in 1 month: Rs.</p>
          <input type="text" className="w-full border border-gray-400 p-2 rounded-md mt-1" />
          <div className="mt-2">
            {["Rx business", "Booking", "Both"].map((option, idx) => (
              <label key={idx} className="mr-4">
                <input type="checkbox" className="mr-2" /> {option}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Retailers Section */}
      <div className="border border-gray-400 mt-4 p-3">
        <p className="font-semibold block text-left">Retailer / Retailers name where major prescriptions are honored:</p>
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="mb-2 flex flex-col md:flex-row">
            {/* For mobile view, the label is aligned to the left and the input is beneath it */}
            <span className="font-semibold w-full md:w-1/4 text-left">{`Retailer ${num} Name:`}</span>
            <input
              type="text"
              className="w-full md:w-3/4 border border-gray-400 p-2 rounded-md mt-1 md:mt-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorForm;
