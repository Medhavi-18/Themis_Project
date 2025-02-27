// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bdmRoutes from './routes/bdmRoutes.js';  
import cors from 'cors';

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());


app.use(cors({
  origin: "http://localhost:5173",  // Allows all origins (Change it to frontend URL for security)
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bdmDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
  //--------------------------------------------------------------------

// Use the BDM routes for API requests
app.use('/api/bdms', bdmRoutes);

//FOR BIG DATA---------------
app.use("/api/bdmdata", bdmRoutes);


//

//-----------------------------------------------------------------------

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
