import { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    crmDoctor: null, // Yes or No
    doctorName: "",
    specialties: [],
    patientsPerDay: "",
    avgValueOGCare: "",
    avgValueType: [], // Rx business, Booking, Both
    retailerNames: ["", "", "", ""],
    feedback: "", // Added feedback field

    // New attributes for Competitor Data
    competitorData: Array(13).fill({
      themisBrand: "",
      prescribed: false,
      unitsPerMonth: 0,
      competitorBrands: [
        { brand_name: "", units_per_month: 0 },
        { brand_name: "", units_per_month: 0 },
      ],
    }),
  });

  const updateCRMDoctor = (value) => {
    setFormData((prev) => ({ ...prev, crmDoctor: value }));
  };

  const updateDoctorName = (name) => {
    setFormData((prev) => ({ ...prev, doctorName: name }));
  };

  const updateSpecialty = (specialty) => {
    setFormData((prev) => {
      const isSelected = prev.specialties.includes(specialty);
      return {
        ...prev,
        specialties: isSelected
          ? prev.specialties.filter((s) => s !== specialty)
          : [...prev.specialties, specialty],
      };
    });
  };

  const updatePatientsPerDay = (count) => {
    setFormData((prev) => ({ ...prev, patientsPerDay: count }));
  };

  const updateAvgValueOGCare = (value) => {
    setFormData((prev) => ({ ...prev, avgValueOGCare: value }));
  };

  const updateAvgValueType = (type) => {
    setFormData((prev) => {
      const isSelected = prev.avgValueType.includes(type);
      return {
        ...prev,
        avgValueType: isSelected
          ? prev.avgValueType.filter((t) => t !== type)
          : [...prev.avgValueType, type],
      };
    });
  };

  const updateRetailerName = (index, name) => {
    setFormData((prev) => {
      const updatedRetailers = [...prev.retailerNames];
      updatedRetailers[index] = name;
      return { ...prev, retailerNames: updatedRetailers };
    });
  };

  const updateCompetitorData = (index, key, value) => {
    setFormData((prev) => {
      const updatedCompetitorData = [...prev.competitorData];
      updatedCompetitorData[index] = {
        ...updatedCompetitorData[index],
        [key]: value,
      };
      return { ...prev, competitorData: updatedCompetitorData };
    });
  };

  const updateCompetitorBrand = (index, brandIndex, key, value) => {
    setFormData((prev) => {
      const updatedCompetitorData = [...prev.competitorData];
      updatedCompetitorData[index].competitorBrands[brandIndex] = {
        ...updatedCompetitorData[index].competitorBrands[brandIndex],
        [key]: value,
      };
      return { ...prev, competitorData: updatedCompetitorData };
    });
  };

  const updateFeedback = (text) => {
    if (text.length <= 500) {
      setFormData((prev) => ({ ...prev, feedback: text }));
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateCRMDoctor,
        updateDoctorName,
        updateSpecialty,
        updatePatientsPerDay,
        updateAvgValueOGCare,
        updateAvgValueType,
        updateRetailerName,
        updateCompetitorData,
        updateCompetitorBrand,
        updateFeedback,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
