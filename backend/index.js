import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import { PORT, mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use('/books', booksRoute);

mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`Listening to PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
