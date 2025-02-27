import Bdm from '../models/Bdm.js';  
import BdmData from "../models/BdmModel.js";

// POST REQUEST - Handle Form Submission
export const submitBdmData = async (req, res) => {
  const { bdmName, mobNumber, hq } = req.body;

  try {
    const newBdm = new Bdm({ bdmName, mobNumber, hq });
    await newBdm.save();
    res.status(200).json({ message: 'BDM data submitted successfully!' });
  } catch (error) {
    console.error('Error submitting BDM data:', error);
    res.status(500).json({ error: 'An error occurred while submitting data' });
  }
};

//------------------------------------------------------------------------------------------------
// BIG DATA FORM APIs

// 1️⃣ Create new BDM data
export const createBdmData = async (req, res) => {
  try {
    const newBdm = new BdmData(req.body);
    const savedBdm = await newBdm.save();
    res.status(201).json(savedBdm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// 2️⃣ Get all BDM data
export const getAllBdmData = async (req, res) => {
  try {
    const bdms = await BdmData.find();
    res.status(200).json(bdms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3️⃣ Get a single BDM data by ID
export const getBdmById = async (req, res) => {
  try {
    const bdm = await BdmData.findById(req.params.id);
    if (!bdm) return res.status(404).json({ message: "BDM not found" });
    res.status(200).json(bdm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 4️⃣ Delete BDM data by ID


export const deleteBdmById = async (req, res) => {
  try {
    const deletedBdm = await BdmData.findByIdAndDelete(req.params.id);
    
    if (!deletedBdm) {
      return res.status(404).json({ message: "BDM not found" });
    }

    res.status(200).json({ message: "BDM Data Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// ✅ Export all functions only once
export default{
  submitBdmData,
  createBdmData,
  getAllBdmData,
  getBdmById,
  deleteBdmById
};

