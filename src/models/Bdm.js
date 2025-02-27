
import mongoose from 'mongoose';

// Define the schema for BDM data
const bdmSchema = new mongoose.Schema({
  bdmName: { type: String, required: true },  
  mobNumber: { type: String, required: true }, 
  hq: { type: String, required: true }, 
});

// Create the model from the schema
const Bdm = mongoose.model('Bdm', bdmSchema);

export default Bdm;  
