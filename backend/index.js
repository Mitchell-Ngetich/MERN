import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import bookRoute from "./routes/bookRoute.js"
import cors from "cors"

const app = express();

// parsing the request body
app.use(express.json());

// Middleware for handling CORS policy(1st method)
// app.use(cors())
// Second method
app.use(cors({
    origin: "https://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}))



app.get("/", (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to MERN stack tutorial!");
});

app.use("/books", bookRoute);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
});

}).catch((error) => {
      console.log(error);
});