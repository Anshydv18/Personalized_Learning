import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
// import connectDB from "./config/db.js";
// import allRoutes from "./routes/index.js";
dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors("*"));
app.use(morgan("dev"));

// app.use(allRoutes);

app.listen(3000, () => {
  console.log(
    `Node Server Running in Port http://localhost:3000`
  );
});
