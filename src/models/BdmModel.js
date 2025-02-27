import mongoose from "mongoose";

const bdmSchema = new mongoose.Schema(
  {
    bdmName: { type: String, required: true },  
    mobNumber: { type: String, required: true }, 
    EmployeeNo: { type: String, required: true }, 

    crmDoctor: { type: Boolean, required: true }, // true = Yes, false = No
  
    doctorName: { type: String, required: true },

    specialties: {
      orthopedic: {
        selected: { type: Boolean, default: false },
        subspecialties: {
          generalOrthopedicPhysician: { type: Boolean, default: false },
          generalOrthopedicSurgeon: { type: Boolean, default: false },
          traumaOrthopedicSurgeon: { type: Boolean, default: false },
          jointReplacementSurgeon: { type: Boolean, default: false },
        },
      },
      gynecologist: {
        selected: { type: Boolean, default: false },
        subspecialties: {
          generalGynecologist: { type: Boolean, default: false },
          obstetricianGynecologist: { type: Boolean, default: false },
          ivfGynecologist: { type: Boolean, default: false },
          menopauseSpecialist: { type: Boolean, default: false },
        },
      },
      surgeon: {
        selected: { type: Boolean, default: false },
        subspecialties: {
          generalSurgeon: { type: Boolean, default: false },
        },
      },
      gp_mbbs: {
        selected: { type: Boolean, default: false },
        subspecialties: {
          ladyGP: { type: Boolean, default: false },
          maleGP: { type: Boolean, default: false },
        },
      },
      cp: {
        selected: { type: Boolean, default: false },
        subspecialties: {
          generalPhysician: { type: Boolean, default: false },
        },
      },
    },


    patientsPerDay: {
      type: String,
      enum: ["1-10", "11-25", "26-40", "41-60", ">61"],
      required: true,
    },

    avgValueOGCare: { type: Number, required: true },

    businessType: {
      type: String,
      enum: ["Rx business", "Booking", "Both"],
      required: true,
    },

    retailers: [{ name: { type: String } }],
    feedback: { type: String, maxlength: 500 },

    themisBrand: { type: String, required: true },
    prescribed: { type: Boolean, required: true },
    unitsPerMonth: { type: Number, required: true },

    competitorBrands: [
      {
        brand_name: { type: String, required: true },
        units_per_month: { type: Number, required: true },
      },
    ],
    
   
  },
  { timestamps: true }
);

export default mongoose.model("BdmData", bdmSchema);
