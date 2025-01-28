import React, { useState } from "react";

const CompetitorData = () => {
  const [prescribed, setPrescribed] = useState(Array(13).fill(null)); // Store state for 13 rows

  const handleChange = (index, value) => {
    const newPrescribed = [...prescribed];
    newPrescribed[index] = value; // Set the prescribed value for the row clicked
    setPrescribed(newPrescribed);
  };

  const rows = [
    "RCC ACTIVE",
    "THEMIBACT 250/500",
    "THEMIBACT CV 250/500",
    "ETOJET 120/90",
    "Etojet XP Gel",
    "Etojet-MR Tablets",
    "FEREDET XT",
    "GENPRO D",
    "GENPRO GEL",
    "GENPRO SR 200/300",
    "MENOGARD",
    "OSTEOWIN",
  ]; // Array of labels for the rows

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border text-left">Themis Brand</th>
              <th className="px-4 py-2 border text-left">Prescribed?</th>
              <th className="px-4 py-2 border text-left">If yes, Units/month</th>
              <th className="px-4 py-2 border text-left">Competitor brand 1 prescribed</th>
              <th className="px-4 py-2 border text-left">Units/month</th>
              <th className="px-4 py-2 border text-left">Competitor brand 2 prescribed</th>
              <th className="px-4 py-2 border text-left">Units/month</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((rowLabel, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{rowLabel}</td>
                <td className="border px-4 py-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={prescribed[index] === true}
                        onChange={() => handleChange(index, true)}
                        className="form-checkbox mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={prescribed[index] === false}
                        onChange={() => handleChange(index, false)}
                        className="form-checkbox mr-2"
                      />
                      No
                    </label>
                  </div>
                </td>
                {/* Show this column only if prescribed is true */}
                <td className="border px-4 py-2">
                  {prescribed[index] === true ? (
                    <input type="number" className="border p-1 w-full" />
                  ) : null}
                </td>
                <td className="border px-4 py-2">
                  {prescribed[index] === true ? (
                    <input type="text" className="border p-1 w-full" />
                  ) : null}
                </td>
                <td className="border px-4 py-2">
                  {prescribed[index] === true ? (
                    <input type="number" className="border p-1 w-full" />
                  ) : null}
                </td>
                <td className="border px-4 py-2">
                  {prescribed[index] === true ? (
                    <input type="text" className="border p-1 w-full" />
                  ) : null}
                </td>
                <td className="border px-4 py-2">
                  {prescribed[index] === true ? (
                    <input type="number" className="border p-1 w-full" />
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitorData;
