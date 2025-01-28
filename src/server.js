import express from "express";
import mongoose from "mongoose";
import bdmRoutes from "./routes/bdmRoutes.js";

const app = express();

// MongoDB connection setup
mongoose.connect("mongodb://localhost:27017/bdmDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Middleware
app.use(express.json());

// Mounting routes
app.use("/api/bdm", bdmRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
