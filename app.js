const express = require("express")
const mongoose =require("mongoose")
const data =require("./model")
const app = express()
app.use(express.json())
app.use("/",require("./routers/first"))
mongoose.connect("mongodb+srv://Anilkumar:6302711927@cluster0.f3wpeuj.mongodb.net/?retryWrites=true&w=majority")
app.listen(4000,()=> console.log("data base connected"))