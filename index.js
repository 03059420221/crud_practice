import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/user_routes.js";

const app=express();
app.use(bodyParser.json());
dotenv.config();

const PORT=process.env.PORT || 5000
const DATABASE= process.env.DATABASE

mongoose.connect(DATABASE).then(()=>{
 console.log("database is connected")
 app.listen(PORT,()=>{
    console.log(`server is running on port : ${PORT}`)
 })
}).catch(error=>{
console.log("error");
})

app.use("/api/user", route)