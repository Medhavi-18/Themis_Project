
import express from 'express';
import { submitBdmData } from '../controllers/bdmController.js';  // Correctly import the function

//-------------------------------
//FOR BIG DATA
import {
    createBdmData,
    getAllBdmData,
    getBdmById,
    deleteBdmById,
  } from "../controllers/bdmController.js";


//-------------------------------
const router = express.Router();

// Define POST route for form submission
router.post('/save', submitBdmData);


//--------------------------------------------------------
//FOR BIG DATA
router.post("/", createBdmData);


router.get("/", getAllBdmData);
router.get("/:id", getBdmById);
router.delete("/:id", deleteBdmById);
//--------------------------------------------------------

//router.get();

export default router;  
