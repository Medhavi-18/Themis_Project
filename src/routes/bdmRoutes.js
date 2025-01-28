import express from "express";
import Bdm from "../models/Bdm.js";  // Make sure this path is correct

const router = express.Router();

// GET all BDMs
router.get("/list", async (req, res) => {
    console.log("GET /api/bdm/list route accessed"); 
  try {
    const bdms = await Bdm.find();
    res.status(200).json({ data: bdms });
  } catch (error) {
    res.status(500).json({ message: "Error fetching BDMs", error });
  }
});

export default router;

