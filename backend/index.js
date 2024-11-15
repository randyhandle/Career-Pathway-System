import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js";
import homeRoutes from "./routes/homeRoutes.js"


const app = express();
app.use(express.json());
app.use(cors());

app.use("/",homeRoutes);

mongoose.connect(mongoDBURL).then(() => {
    console.log("Database is connected successfully");
    app.listen(PORT, () => {
        console.log(`App is listening to port : ${PORT}`);
    })
}).catch((error) => {
    console.log("Database is not connected");
    console.log(error);
})