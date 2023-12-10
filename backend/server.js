import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";
const app = express();
const port = process.env.PORT || 5000;

connectDb(); // calling method to connect to mongodb database

app.get("/", (req,res) => {
    res.send("Backend Server Output");
})

app.get("/api/products", (req,res) => {
    res.json(products);
})


app.get("/api/products/:id", (req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})
app.listen(port, () => console.log(`Server is running on port ${port}`));