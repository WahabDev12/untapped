const mongoose = require("mongoose");
const config = require("config");
const db = "mongodb+srv://jack:jack123@untapped.vmjfc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    try{
        await mongoose.connect(db,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("MongoDB connected...")
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;