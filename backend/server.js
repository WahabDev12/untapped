const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();

// Connect to Database
connectDB();

app.use(express.json({extended:false}));

app.get("/", (req,res)=>{
    return res.json({msg:"Hello World"})
});

//Defining Routes
app.use("/api/v1/signup",require("./routes/signup"));
app.use("/api/v1/login",require("./routes/login"));

const PORT = process.env.PORT || 5000


app.listen(PORT, () =>{
    console.log(`Server has started on port ${PORT}`)
})
