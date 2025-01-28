import Bdm from "../models/Bdm.js";

// Add BDM
export const addBdm = async (req, res) => {
  try {
    const { bdmName, mobNumber, hq } = req.body;

    const newBdm = new Bdm({ bdmName, mobNumber, hq });
    await newBdm.save();

    res.status(201).json({ message: "BDM added successfully", data: newBdm });
  } catch (error) {
    res.status(500).json({ message: "Error adding BDM", error });
  }
};

// Get all BDMs
export const getBdms = async (req, res) => {
  try {
    const bdms = await Bdm.find();
    res.status(200).json({ data: bdms });
  } catch (error) {
    res.status(500).json({ message: "Error fetching BDMs", error });
  }
};
