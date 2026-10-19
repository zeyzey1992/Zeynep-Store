import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";

dotenv.config();
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((error) => console.log("MongoDB connection error:", error));

const app=express();

app.use(express.json());
app.use(cors());

app.use("/api/products" , productRoutes);
app.use("/api/users", userRoutes);

const PORT= process.env.PORT || 3000;


app.listen(PORT, ()=>{
    console.log(`Server is running ${PORT}`);
})