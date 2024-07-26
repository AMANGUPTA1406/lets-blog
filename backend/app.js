import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
//password : h3LOM6S9q0BfkwCs
mongoose.connect("mongodb+srv://AMAN1406:h3LOM6S9q0BfkwCs@cluster0.psys7hc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected to Database and Listening to Localhost 5000")
  )
  .catch((err) =>{
    console.log(err);
    console.log("Database connection error");
  });